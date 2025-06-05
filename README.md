# modern-javascript

**Document Object Model(DOM)**<br>
DOM stands for Document Object Model. It is a programming interface for web documents.<br>
When a web page is loaded, the browser creates a DOM of the page, which is a tree-like structure representing the HTML elements.<br>

**DOM Structure:**<br>
<img width="322" alt="image" src="https://github.com/user-attachments/assets/2d53bd40-8ba2-4ab7-b6ae-71402f131a89" />

>It's an object-oriented representation of an HTML document.<br>
>It allows JavaScript to access and manipulate HTML and CSS.<br>
>Every element, attribute, and piece of text in the HTML becomes a node in the DOM tree.<br>

Example of DOM Structure example:<br>

**Accessing Elements**<br>
document.getElementById("heading");       // Get element by ID<br>
document.getElementsByClassName("para");  // Get elements by class<br>
document.getElementsByTagName("p");       // Get elements by tag<br>
document.querySelector("p");              // First match using CSS selector<br>
document.querySelectorAll(".para");       // All matches<br>

