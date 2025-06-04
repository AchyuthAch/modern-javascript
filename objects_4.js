//Object Literals

let userObject = {
    //different properties of an object
    //key:value
    name: "Achyuth",
    age: 30,
    favGame: "mario",
    blogs : ["This is Achyuth blog", "This is for learning JS from scratch"],
    detailsArray:['Hello 123', "hello 321"],
    //Adding a logic method to existing Object
    login(){
        console.log("User has logged in")
    },
    logBlogs(){
        console.log(this.blogs)
    }
}

console.log(userObject)
//To see the particular value of any key
console.log(userObject.name) //.notation
//or//
console.log(userObject['favGame'])//square box notation
//To change any value for any key
userObject.age = 32;
console.log(userObject.age)
//or//
userObject['detailsArray'][0] = ["Hello 1231111"]
console.log(userObject['detailsArray'])
//To see what type of operator
console.log(typeof(userObject))
//Method calling at Javascript Objects
userObject.login()
//Method calling by using this
userObject.logBlogs()
