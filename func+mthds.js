//Functions

//////////////function declaration////////////////////
function greet(username){
    console.log(`Hello I'm ${username}` )
}

//function calls
greet("Achyuth")
greet("Achyuth")
greet("Achyuth")

///////////////function expression///////////////////////
const speak = function(){
    console.log("Hello from expression function")
};

//function calls
speak();

////////////////////Java script hoeisting///////////////////
//Def: Even though the function call is called before like below it works at declaration but
//function expression will get failed here if we call it before
//Example1:
host1(); 

function host1(){
    console.log("example of hoeisting")
}

//This function expression gets failed as host2 is called before the initialization

// host2();

// const host2 = function(){
//     console.log("Failed case in hoeisting")
// };

/////////////////////////////////Arguments & parameters////////////////////////
//parameters are S Achyuth & Afternoon
const name = function(newName = "S Achyuth", time = "Afternoon"){
    console.log(`My name is ${newName} & time is ${time}`)
}
//arguments are Achyuth & morning!
name("Achyuth", "morning!")

//Note::::If we declare the arguments while calling default parameters will get overridden

////////////////////Returning values/////////////////////////////
//Example:1
//Regular Function
const calArea = function(radius){
    return 3.14*radius**2
}

let area = calArea(5)
console.log("area coming from regular function", area)

//Arrow Function
const calAreaArrow = (radius) =>{
    return 3.14*radius**2
}
//Above function can also be written as below if only one parameter is passed
const calAreaArrowShort = radius => 3.14*radius**2

let areaArrow = calAreaArrow(5)
console.log("area coming from arrow function", areaArrow)

//Exercise
const greetings = () => `Hello again!!!!`;
let checkTime = greetings()
console.log(checkTime)

//callbacks & foreach
//forEach iterates each elements at a below array
let people = ["Achyuth", "Mario", "Ninja", "Achuu"]

const useThis = (person, index) =>{
    console.log(`${person} is at ${index}th place`)
}
//calling a function using method called .forEach(callback function)
people.forEach(useThis)
