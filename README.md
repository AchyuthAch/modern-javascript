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

**Replacement of texts & HTMLS using DOM**<br>
Using .innerText & .innerHTML methods we can replace/append the data inside the html pages<br>
Below line of code is the example use case: https://github.com/AchyuthAch/modern-javascript/blob/5778374e86335497c1c73467e4ef4b39b50731ef/dom.js#L21<br>

>Get & Set HTML attributes from HTML<br>
https://github.com/AchyuthAch/modern-javascript/blob/d0f05d98b59eebbd728005387da512f084a7c79f/dom.js#L40

