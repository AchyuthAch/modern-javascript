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


/////////////////Arrays///////////////////

let people = ["Achyuth", "Achu", "Achuuu"]
console.log("people", people)
console.log("get1", people[1]);
people[1] = "Mario"
console.log("againpeople", people)
//Length property of array
console.log(people.length)

//Array Methods////
//Join method
let join_all = people.join(",")
console.log(join_all)
//Indexof method at array
let find_index = people.indexOf("Achuuu")
console.log("find_index", find_index)
//concat method at arrays
let concat_two = people.concat(['ninja', 'cool'])
console.log("after concat", concat_two)
//push & pop methods at arrays
let push_one = people.push("push1")
console.log("push_one", push_one)
console.log("people_pushed", people)
let pop_one = people.pop("push1")
console.log("pop_people", people)

/////////NULL & UNDEFINED////////////
let age = null;

console.log(age, age + 3, `this is my ${age}`)

////////////////Booleans//////////////////
let names = ['Achyuth', "Mario", "ninja"]

let check1 = names.includes("Achyuth")
console.log(check1)

let age1 = 25;
console.log(age1 == 25)
console.log(age1 != 22)

let checkk111 = "sachyuth"
console.log(checkk111 != "achyuth")

/// Capital letter would be higer than lower letter
console.log(checkk111 > "achyuth")

//Here s would be first and c would be second, So it would throw true
console.log(checkk111 > "cachyuth")

///Loose operators///////
let op1 = 25
console.log(op1 == 25)
console.log(op1 == '25')
//Output would be true here as JS things both are same types(Number & Strings)
console.log(op1 != 25)
console.log(op1 != '25')
//Output would be false here as JS things both are same types(Number & Strings)

////Strict Operators/////////
let strict11 = 255
console.log(strict11 === 255) //true
console.log(strict11 === '255') //false due to different types

//Type Conversion//
let score = 100;
finalScore = Number(score)
console.log(finalScore+1)
console.log(typeof score)

//Boolean conversions///
let bool = 12
console.log(bool, Boolean(''))
