//For Loops examples
//Example 1:
for(i = 0; i<5 ; i++){
    console.log("Inside Loop", i)
}
console.log("loop finished")

//Example 2:
const names = ["Achyuth", "Mario", "Ninja"];
for(i = 0; i<names.length; i++){
    console.log(names[i])
}


//While Loop examples
//Example1:
let a = 0;
while(a<5){
    console.log("Inside while loop", a);
    a++;
}

//Example2:
b = 0;
const whileNames = ["Achyuth", "Mario", "Ninja"]
while(b < whileNames.length){
    console.log(whileNames[b])
    b++;
}

//Do While Loops
//Example 1:
const doWhileNames = ["Dowhile", "Mario", "Ninja", "Achyuth", "Achu", "DODO"]
console.log("len", doWhileNames.length)
c = 5;
do{
    console.log(doWhileNames[c])
    c++;
    }
while(c < doWhileNames.length)

//Example 2:
let d = 4;

do{
    console.log("Inside of dowhile ", d)
    d++
}while (d<3);

//If Statements
//Example 1:
const forAge = 23;
if(forAge>30) {
    console.log("Your are uncle")
}else
console.log("You are still not uncle.. Enjoyyy")

//Example 2:
const password = "Hah114"

if (password.length>= 12){
    console.log("You have entered strong password")
}
else if(password.length>5){
    console.log("You have entered valid password")
}else{
    console.log("Your password must be atleast 5 chars")
}

//Logical Operators || and &&

//Example 1:
const pswd = "Pass@qqi1243"
if(pswd.length>10 && pswd.includes('@')){
    console.log("STRONG")
}else if(pswd.length>5 || pswd.includes("@")){
    console.log("MEDIUM")
}else{
    console.log("POOR & Type again for STRONG & MEDIUM")
}

//Logical NOT (!)
//Example 1:

console.log(!true)
console.log(!false)

let user = false;
//Until true if block will never executes
if(!user){
    console.log("Logged in")
}

