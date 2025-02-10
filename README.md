<div align="center">

# 🚀 LeetCode Interview Solutions

[![License](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](LICENSE)

### _A collection of JavaScript solutions to LeetCode interview questions._

[This repository contains JavaScript solutions to various LeetCode interview problems, aimed at helping developers prepare for technical interviews.]

</div>

---

## 📋 Table of Contents

-  [📖 Overview](#-overview)
-  [✨ Key Features](#-key-features)
-  [💻 System Requirements](#-system-requirements)
-  [🚀 Getting Started](#-getting-started)
-  [🐞 Debugger](#-debugger)
-  [🤝 Contributing](#-contributing)
-  [📄 License](#-license)

## 📖 Overview

This project provides a set of JavaScript solutions for LeetCode interview questions. It is designed to be a resource for developers who are preparing for technical interviews and want to improve their problem-solving skills in JavaScript.

### Why LeetCode Interview Solutions?

-  🎯 **Targeted Practice**: Focuses specifically on LeetCode problems commonly asked in technical interviews.
-  ⚡ **JavaScript Implementation**: Provides clear and concise JavaScript code for each solution.
-  🧪 **Test-Driven**: Includes a comprehensive test suite to ensure the correctness of the solutions.

## ✨ Key Features

-  **Solutions**:

   -  Includes solutions to a variety of LeetCode problems.
   -  Each solution is implemented in JavaScript.

-  **Testing**:

   -  Uses Vitest for running tests.
   -  Includes test cases for each solution to ensure correctness.

-  **Linting and Formatting**:
   -  Uses ESLint for linting JavaScript code.
   -  Uses Prettier for code formatting to maintain a consistent style.

## 💻 System Requirements

-  **Operating System**: Any OS that supports Node.js (Windows, macOS, Linux)
-  **Runtime Environment**: Node.js (version specified in `.nvmrc` or latest LTS)
-  **Package Manager**: npm (comes with Node.js)

## 🚀 Getting Started

### Installation

To get started with the project, follow these steps:

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

## 🐞 Debugger

To use the debugger and check the working of the code:

1. Open `JavaScript Debug Terminal`.
2. Set the breakpoint in the code.
3. Run the script using `npm run launch` or `npm test`.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Implement your changes and add appropriate tests.
4. Ensure all tests pass by running `npm test`.
5. Submit a pull request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

LeetCode Solutions is maintained by Sanjib.
If you find it useful, please consider giving it a ⭐️!

</div>
