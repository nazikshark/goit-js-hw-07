# GoIT JavaScript Homework #07 — DOM and Events

This repository contains the seventh homework assignment of the JavaScript course. This module marks the transition from pure logic to browser interaction using the Document Object Model (DOM) and event handling.

## 📋 Project Overview
The assignment includes five tasks focused on:
- Navigating the DOM tree and accessing elements.
- Dynamically creating and inserting HTML elements.
- Handling user input and form submissions.
- Manipulating CSS styles via JavaScript.
- Event listening and delegation.

## 🚀 Tasks Description:

### Task 1: Category Inspector
A script that analyzes the `ul#categories` list. It counts the total number of categories and, for each category, displays its title (from `<h2>`) and the number of nested `<li>` elements in the console.

### Task 2: Image Gallery
Creation of a responsive image gallery from a data array. 
- **Efficiency**: All gallery items are inserted into the DOM in a single operation using `insertAdjacentHTML` or a DocumentFragment.
- **Styling**: Basic layout implemented with CSS Flexbox.

### Task 3: Dynamic Greeting
An interactive input handler that listens to the `input` event. It updates a greeting message in real-time, trimming whitespace and defaulting to "Anonymous" if the input is empty or contains only spaces.

### Task 4: Login Form Management
A form submission handler that:
- Prevents page reload on submit.
- Validates that all fields are filled using JavaScript (without the `required` attribute).
- Collects and trims form data into a single object for console output.
- Resets the form after successful submission.

### Task 5: Random Background Color
A script that changes the background color of the `<body>` to a random hex color upon clicking a button. The current color code is also displayed as text inside a dedicated `<span>`.

## 🛠 Technologies & Concepts Used:
- **DOM Selection**: `querySelector`, `querySelectorAll`, `children`, `firstElementChild`.
- **DOM Manipulation**: `insertAdjacentHTML`, `createElement`, `style`.
- **Event Listeners**: `addEventListener`, `submit`, `input`, `click`.
- **Form Handling**: `event.preventDefault()`, `form.elements`, `form.reset()`.
- **Clean Code**: Prettier formatting and semantic HTML.

## 🔗 Live Page:
[Link to your GitHub Pages here]
