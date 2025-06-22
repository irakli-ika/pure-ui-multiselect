# Pure Kit Multiselect (Demo)

A clean, customizable multi-select dropdown component built with pure JavaScript and Tailwind CSS.

## Features

✅ Lightweight & fast
✅ No dependencies (except Tailwind CSS)
✅ Easy integration with any project
✅ Flexible option data
✅ Modern UI with Tailwind styling

## Requirements

- Tailwind CSS is required for styling.

## Installation

Include directly from CDN:

```html
<script src="https://unpkg.com/pure-kit-multiselect"></script>
```

Or install via NPM 

```bash
npm i pure-kit-multiselect
```

## Usage

1. Add a container element that will be passed to the MultiSelect instance:

    - You can use any DOM element as the container — identified by an ID, class, or data attribute:

    ```html
    <!-- By ID -->
    <div id="my-select"></div>

    <!-- By class -->
    <div class="multi-select-container"></div>

    <!-- By data attribute (optional) -->
    <div data-pui-ms></div>
    ```

2. Initialize the PureUiMultiselect
    - Option A: ESM
    
    ```js
        import PureUiMultiselect from 'pure-kit-multiselect';

        const options = [
            { id: 1, name: 'Option A' },
            { id: 2, name: 'Option B' },
            { id: 3, name: 'Option C' }
        ];

        new PureUiMultiselect(document.querySelector('[data-pui-ms]'), options);
    ```

    - Option B: Using CDN

    ```html
    <script src="https://unpkg.com/pure-kit-multiselect"></script>
    <script>
        const options = [
            { id: 1, name: 'Option A' },
            { id: 2, name: 'Option B' },
            { id: 3, name: 'Option C' }
        ];

        new MultiSelect(document.querySelector('[data-pui-ms]'), options);
    </script>
    ```

    - Option C: Using CommonJS
    
    ```js
    const MultiSelect = require('pure-kit-multiselect');
    
    const options = [
            { id: 1, name: 'Option A' },
            { id: 2, name: 'Option B' },
            { id: 3, name: 'Option C' }
        ];

    new MultiSelect(document.querySelector('[data-pui-ms]'), options);
    ```

## Example Options Format

The options must have `id` and `name`

for example:

```js
[
  { id: 1, name: 'JavaScript' },
  { id: 2, name: 'PHP' },
  { id: 3, name: 'Python' }
]
```