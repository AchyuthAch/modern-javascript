//Object Literals

let userObject = {
    //different properties of an object
    //key:value
    name: "Achyuth",
    age: 30,
    favGame: "mario",
    blogs : [{
        title: "Na book na istam",
        author: "Achyuth"
    },
    {
        title: "Na sav nenu sasta nekenduku",
        author: "Achuu"
    }],
    detailsArray:['Hello 123', "hello 321"],
    //Adding a logic method to existing Object
    login(){
        console.log("User has logged in")
    },
    logBlogs(){
        this.blogs.forEach(blog=>{
            console.log(blog.title , blog.author)
        })
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


//Build an array with different objects placed in it

const new_blogs = [{
        title: "Na book na istam",
        author: "Achyuth"
    },
    {
        title: "Na sav nenu sasta nekenduku",
        author: "Achuu"
    }
]

console.log(new_blogs)


//Different objects used in JS

//Math object
console.log(Math.PI)
let area = 7.777

//Methods of Math object
console.log(Math.round(area))
console.log(Math.floor(area))
console.log(Math.ceil(area))
console.log(Math.trunc(area))

//Usage of Math object to get random numbers

const random = Math.random();

console.log(random)
console.log(Math.round(random * 100))


//Example use cases of primitive data types vs reference data types

//Primitive data types

let scoreOne = 50;
let scoreTwo = 100;

console.log(`Here are your scores for scoreone: ${scoreOne} & scoretwo: ${scoreTwo}`)
//Lets change the value of scoreOne here
scoreOne = 150;
console.log(`Here are your scores for scoreone: ${scoreOne} & scoretwo: ${scoreTwo}`)

//Reference data types

let scoreData1 = {achu: "10", rank: "1"}
let scoreData2 = scoreData1

console.log(scoreData1 , scoreData1)
//Lets change the value of scoreData1 here
scoreData1.rank = "3"
console.log(scoreData1 , scoreData1)
