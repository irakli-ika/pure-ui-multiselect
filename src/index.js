import template from "./template.js";

class PureKitMultiSelect {
  constructor(container, optionItems = []) {
    this.container = container;
    this.optionItems = optionItems;
    this.selectedOptions = [];

    this.render();
    this.cacheElements();
    this.setOptions(this.optionItems);
    this.attachEvents();
  }

  render() {
    if (!this.container) {
      throw new Error("Container element is required");
    }

    this.container.innerHTML = template();
  }

  cacheElements() {
    this.multipleSelectTrigger =
      this.container.querySelector("[data-pui-ms-trigger]");
    this.multipleSelectDropdown =
      this.container.querySelector("[data-pui-ms-dropdown]");
    this.optionsContainer = this.container.querySelector(
      "[data-pui-ms-options-container]"
    );
    this.tagsContainer = this.container.querySelector("[data-selected-tags]");
    this.placeholder = this.container.querySelector("[data-placeholder]");
    this.selectElement = this.container.querySelector("select");
    this.checkmarkAll = this.container.querySelector("[data-checkmark-all]");
    this.searchInput = this.container.querySelector("[data-pui-ms-search]");
  }

  createOptionElement(item) {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    return option;
  }

  createCustomOptionElement(item) {
    return `
		<li class="hover:bg-gray-100" data-option="${item.id}">
			<div class="flex items-center gap-3 py-2 px-4 cursor-pointer">
                <div class="flex items-center justify-center w-4 h-4 rounded-sm border border-gray-400 overflow-hidden">
                    <div class="bg-green-500 w-full h-full flex items-center justify-center hidden" data-checkmark>
                    <svg width="12px" height="12px" viewBox="0 -4 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.06066 6.4393C2.47487 5.85355 1.52513 5.85355 0.93934 6.4393C0.353553 7.0251 0.353553 7.9749 0.93934 8.5607L7.93934 15.5607C8.52513 16.1464 9.47487 16.1464 10.0607 15.5607L23.0607 2.56066C23.6464 1.97487 23.6464 1.02513 23.0607 0.43934C22.4749 -0.14645 21.5251 -0.14645 20.9393 0.43934L9 12.3787L3.06066 6.4393z" fill="white"/>
                    </svg>
                    </div>
                </div>
			    <span>${item.name}</span>
			</div>
		</li>`;
  }

  setOptions(items) {
    if (!items || items.length === 0) {
      this.optionsContainer.insertAdjacentHTML(
        "beforeend",
        `<p class="text-gray-500 text-center">No options available</p>`
      );
      return;
    }
    items.forEach((item) => {
      this.selectElement.appendChild(this.createOptionElement(item));
      this.optionsContainer.insertAdjacentHTML(
        "beforeend",
        this.createCustomOptionElement(item)
      );
    });

    // Attach click listeners to each option
    this.container.querySelectorAll("[data-option]").forEach((element) => {
      element.addEventListener("click", (e) => {
        this.toggleOption(e.currentTarget);
      });
    });
  }

  toggleOption(target) {
    const value = target.getAttribute("data-option");

    const setOptionSelected = (val, isSelected) => {
      const option = this.selectElement.querySelector(`option[value="${val}"]`);
      if (option) option.selected = isSelected;
    };

    if (value !== "selectAll") {
      const index = this.selectedOptions.indexOf(value);

      if (index !== -1) {
        this.selectedOptions.splice(index, 1);
        setOptionSelected(value, false);
      } else {
        this.selectedOptions.push(value);
        setOptionSelected(value, true);
      }

      this.toggleCheckmark(target);
    } else {
      const notSelected = this.optionsContainer.querySelectorAll(
        "li[data-option]:not([data-selected])"
      );
      const selected =
        this.optionsContainer.querySelectorAll("li[data-option][data-selected]");
        
      if (notSelected.length > 0) {
        notSelected.forEach((item) => {
          const val = item.getAttribute("data-option");
          this.selectedOptions.push(val);
          this.toggleCheckmark(item);
          setOptionSelected(val, true);
        });
      } else {
        this.selectedOptions.length = 0;
        selected.forEach((item) => {
          const val = item.getAttribute("data-option");
          this.toggleCheckmark(item);
          setOptionSelected(val, false);
        });
      }
    }

    this.toggleTag();
  }

  toggleCheckmark(option) {
    const checkmark = option.querySelector("[data-checkmark]");
    checkmark.classList.toggle("hidden");

    if (option.hasAttribute("data-selected")) {
      option.removeAttribute("data-selected");
    } else {
      option.setAttribute("data-selected", "");
    }

    const optionsQty =
      this.optionsContainer.querySelectorAll("[data-option]").length;
    if (optionsQty === this.selectedOptions.length) {
      this.checkmarkAll.classList.remove("hidden");
    } else {
      this.checkmarkAll.classList.add("hidden");
    }
  }

  toggleTag() {
    this.tagsContainer.innerHTML = "";

    if (this.selectedOptions.length > 0) {
      this.placeholder.classList.add("hidden");
      this.tagsContainer.classList.remove("hidden");

      this.selectedOptions.forEach((id) => {
        const item = this.optionItems.find((item) => item.id == id);
        if (item) {
          const tag = document.createElement("span");
          tag.className = "bg-gray-200 text-xs px-2 py-1 rounded-sm";
          tag.textContent = item.name;
          this.tagsContainer.appendChild(tag);
        }
      });
    } else {
      this.placeholder.classList.remove("hidden");
      this.tagsContainer.classList.add("hidden");
    }
  }

  searchOptions() {
    const searchValue = this.searchInput.value.toLowerCase();
    const options = this.optionsContainer.querySelectorAll("[data-option]");

    let hasVisible = false;

    options.forEach((option) => {
      const optionText = option.textContent.toLowerCase();
      const isMatch = optionText.includes(searchValue);

      option.classList.toggle("hidden", !isMatch);
      if (isMatch) hasVisible = true;
    });

    // Remove existing "No results" message if present
    let emptyMessage = this.optionsContainer.querySelector("[data-empty]");
    if (emptyMessage) emptyMessage.remove();

    // Show message only if no results
    if (!hasVisible) {
      this.optionsContainer.insertAdjacentHTML(
        "beforeend",
        `<li data-empty class="text-gray-500 text-center py-2">No options found</li>`
      );
    }
  }

  attachEvents() {
    this.multipleSelectTrigger.addEventListener("click", (e) => {
      e.stopPropagation();

      this.multipleSelectDropdown.classList.toggle("hidden");
      this.multipleSelectTrigger.classList.toggle("open");
      this.multipleSelectTrigger
        .querySelector("svg")
        .classList.toggle("rotate-180");
    });

    document.addEventListener("click", (e) => {
      if (
        this.multipleSelectTrigger.classList.contains("open") &&
        !this.multipleSelectTrigger.contains(e.target) &&
        !this.multipleSelectDropdown.contains(e.target)
      ) {
        this.multipleSelectDropdown.classList.add("hidden");
        this.multipleSelectTrigger.classList.remove("open");
      }
    });

    this.searchInput.addEventListener("input", () => this.searchOptions());
  }
}

if (typeof window !== 'undefined') {
  window.PureKitMultiSelect = PureKitMultiSelect;
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = PureKitMultiSelect;
}

export default PureKitMultiSelect;