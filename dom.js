// Example of use cases for accessing single element using DOM
const para = document.querySelector("body > h1")
console.log(para)

// Example of use cases for accessing multiple element using DOM
const paras = document.querySelectorAll("p")
console.log(paras)

// Examples of use cases to get element by ID using DOM
const title = document.getElementById("page-title")
console.log(title)

//get elements by their class name
const getClass = document.getElementsByClassName("error")
console.log(getClass)

//.innerText replaces the specific content of selected p tag
const paraaa = document.querySelector("p")
paraaa.innerText += " Hello Achyuth from over"

//Replace all contents using queryselectorall
const allChanges = document.querySelectorAll("p");
console.log(allChanges)
allChanges.forEach(allchange=>{
    allchange.innerText += " Hii appended from allchanege"
})

//Replace HTML contents like below
const content = document.querySelector(".content")
console.log(content.innerHTML)
content.innerHTML += "<h2>This is the new H2 tag<h2/>"

const peoples = ["Achyuth", "Mario", "PK"]

peoples.forEach(people=>{
    content.innerHTML += `<p>${people}<p/>`
})


//Get & Set Attributes from HTML

const get_attr = document.querySelector("a")
console.log(get_attr.getAttribute("href"))
get_attr.setAttribute("href", "http://achyuth.com")
get_attr.innerText = "Achyuth's website"
