export default function template() {
    return `
            <div class="w-1/3 ml-8 h-screen flex items-center justify-center">
                <!-- Select Block -->
                <select name="selectItems[]" id="select" multiple
                    class="w-full h-10 px-3 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500 hidden">
                    <!-- Options Here -->
                </select>
                <!-- End Select Block -->
                <!-- Main Block -->
                <div class="relative w-full border border-gray-300 rounded-sm shadow-sm">
                    <!-- Placeholder && Arrow -->
                    <div class="cursor-pointer py-2 px-3" data-pui-ms-trigger>
                        <span class="text-gray-500" data-placeholder>Select Categories</span>
                        <div data-selected-tags class="flex flex-wrap gap-1 mr-5 max-h-20 overflow-y-auto hidden">
                            <span class="bg-gray-200 text-xs px-2 py-1 rounded-sm">Category 1 Category 1</span>
                            <span class="bg-gray-200 text-xs px-2 py-1 rounded-sm">Category 1 </span>
                            <span class="bg-gray-200 text-xs px-2 py-1 rounded-sm">Category 1</span>
                        </div>
                        <div class="absolute top-1/2 -translate-y-1/2 right-2 flex items-center justify-center w-6 h-6">
                            <svg fill="#a1a1a1" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink"
                                class="w-[15px] h-[15px] duration-300 transition-transform" viewBox="0 0 30.727 30.727"
                                xml:space="preserve">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M29.994,10.183L15.363,24.812L0.733,10.184c-0.977-0.978-0.977-2.561,0-3.536c0.977-0.977,2.559-0.976,3.536,0 l11.095,11.093L26.461,6.647c0.977-0.976,2.559-0.976,3.535,0C30.971,7.624,30.971,9.206,29.994,10.183z">
                                        </path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                    <!--End Placeholder && Arrow -->
                    <!-- Dropdown -->
                    <div class="absolute top-full left-0 py-3 px-1 mt-2 w-full bg-white rounded-sm shadow-[0_0_10px_1px_#0000001a] hidden"
                        data-pui-ms-dropdown>
                        <!-- Search Input -->
                        <div class="w-full px-4">
                            <input type="text" name="search" id="search" placeholder="Search categories" data-pui-ms-search
                                class="w-full h-10 px-3 border border-gray-300 rounded-sm focus:outline-none focus:border-green-500">
                        </div>
                        <!-- End Search Input -->
                        <!-- Select All Option -->
                        <div class="border-b border-gray-200 mt-1" data-option="selectAll">
                            <div class="py-3 px-4 hover:bg-gray-100">
                                <div class="flex items-center gap-3 cursor-pointer">
                                    <!-- Custom Checkbox -->
                                    <div
                                        class="flex items-center justify-center w-4 h-4 border-gray-400 rounded-sm border">
                                        <!-- Checkmark Icon -->
                                        <div class="bg-green-500 w-full h-full flex items-center justify-center hidden"
                                            data-checkmark-all>
                                            <svg width="12px" height="12px" viewBox="0 -4 24 24"
                                                id="meteor-icon-kit__solid-checkmark" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M3.06066 6.4393C2.47487 5.85355 1.52513 5.85355 0.93934 6.4393C0.353553 7.0251 0.353553 7.9749 0.93934 8.5607L7.93934 15.5607C8.52513 16.1464 9.47487 16.1464 10.0607 15.5607L23.0607 2.56066C23.6464 1.97487 23.6464 1.02513 23.0607 0.43934C22.4749 -0.14645 21.5251 -0.14645 20.9393 0.43934L9 12.3787L3.06066 6.4393z"
                                                    fill="white" />
                                            </svg>
                                        </div>
                                        <!-- End Checkmark Icon -->
                                    </div>
                                    <!-- End Custom Checkbox -->
                                    <!-- Placeholder -->
                                    <span>Select All</span>
                                    <!-- End Placeholder -->
                                </div>
                            </div>
                        </div>
                        <!-- End Select All Checkbox -->
                        <!-- Items Block -->
                        <div>
                            <!-- Items Container -->
                            <ul class="mt-2 w-full h-[250px] overflow-y-auto" data-pui-ms-options-container>
                                <!-- Custom Options Here -->
                            </ul>
                            <!-- End Items Container -->
                        </div>
                        <!-- End Items Block -->
                    </div>
                    <!-- End Dropdown -->
                </div>
                <!-- End Main Block -->
            </div>
`
}