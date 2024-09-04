# LeetCode Interview Solutions

This project contains solutions to LeetCode interview questions, implemented in JavaScript.

## Project Setup

This project uses Node.js. Make sure you have Node.js installed on your system.

### Installation

To install the project dependencies, run the following command in the project root:

```
npm install
```

## Development

This project uses the following development tools:

-  **ESLint**: For linting JavaScript code.
-  **Prettier**: For code formatting.
-  **Vitest**: For running tests.

## Scripts

-  `npm test`: Runs the test suite using Vitest.
-  To run the specific test, edit the script in `package.json` as below:

   ```JSON
     "scripts": {
      "test": "vitest",
      "launch": "vitest <your_test_fileName>"
   },
   ```

   for Example:

   ```JSON
     "scripts": {
      "test": "vitest",
      "launch": "vitest 80.test.js"
   },
   ```

   After this, run the command in the terminal as follow:

   ```js
   npm run launch
   ```

## Debugger

To use debugger and check the working of the code,

-  Open `JavaScript Debug Terminal`,
-  Set the breakpoint in the code,
-  run the script `npm run launch` or `npm test`.
