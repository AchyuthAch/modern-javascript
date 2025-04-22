// Let & Const are the variables used to store the data
//Let can be overidden and const cannot be overidden

// String Methods Examples

//Concatenation
let firstName = "Achyuth"
let secondName = "S"
let fullName = firstName + " " + secondName
console.log(fullName)
//Output would be Achyuth S

//To find the string length
let len = firstName.length
console.log(len)
//Outout would be 7

//Indexof Method
let email = "achyuth.333@gmail.com"
let check = email.indexOf("@")
console.log(check)
//Output would be 11

// Upper & Lower case methods

let upper = firstName.toUpperCase()
let lower = secondName.toLowerCase()
console.log(upper, lower)
//Output would be ACHYUTH s

            // 0123456789
let myemail = "achyuth.333@gmail.com.in";
let result = myemail.lastIndexOf("@")
console.log(result)
// Output would be 11

let sliceexample = myemail.slice(2,5)
console.log("sliceexample", sliceexample)
//output would be hyu

let substrng = myemail.substring(2,5)
console.log("substrng", substrng)
//output would be hyu

let replacesample = myemail.replace("a", "r")
console.log("replacesample", replacesample)

////////////////////////Numbers////////////////////////////////

let likes = 10

//Order of calculations done at JS would be B I D M A S
// likes++
// console.log("likes", likes)
// //Output would be 11

likes += 10
console.log("finallikes", likes)
//Output would be 20

likes -= 10
likes /= 2
///////////////Nan(Not a number)////////////////
console.log(5 / "hello")


///////////////Template String////////////
let count_likes = 10
const author = "Achyuth"
const title = "Na Istam"

let finalJudgement = `Hello guys I'm ${author} and with name of the book as ${title} with ${count_likes}`
console.log("finalJudgement", finalJudgement)

