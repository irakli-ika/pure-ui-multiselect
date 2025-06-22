# Pure UI Multiselect

A clean, customizable multi-select dropdown component built with pure JavaScript and Tailwind CSS.

## Features

- ✅ Lightweight & fast
- ✅ No dependencies (except Tailwind CSS)
- ✅ Easy integration with any project
- ✅ Flexible option data
- ✅ Modern UI with Tailwind styling

## Requirements

- Tailwind CSS is required for styling.

---

## Installation

Install via npm:

```bash
npm install pure-ui-multiselect
```
Or include directly from CDN:

```html
<script src="https://unpkg.com/pure-ui-multiselect"></script>
```

## Usage

1. Add a container element with a data attribute:

```html
<div data-pui-ms></div>
```

2. Initialize the multiselect
    - Option A: Using module (recommended)
    
    ```html
    <script type="module">
    import MultiSelect from 'pure-ui-multiselect';

    const options = [
        { id: 1, name: 'Option A' },
        { id: 2, name: 'Option B' },
        { id: 3, name: 'Option C' }
    ];

    new MultiSelect(document.querySelector('[data-pui-ms]'), options);
    </script>
    ```

    - Option B: Using CDN / Global script

    ```html
    <script src="https://unpkg.com/pure-ui-multiselect"></script>
    <script>
    const options = [
        { id: 1, name: 'Option A' },
        { id: 2, name: 'Option B' },
        { id: 3, name: 'Option C' }
    ];

    new MultiSelect(document.querySelector('[data-pui-ms]'), options);
    </script>
    ```