//import { apiKey } from "./util.js";

//import apiKey from "./util.js";
//import { apiKey, abc as content } from "./util.js";
//import * as util from "./util.js";

//console.log(util.apiKey);
//console.log(content);

//const userMessage = "Hello, User!";

//console.log(userMessage);
//console.log(userMessage);



/*function createGreeting(userName, message = "hello!") {
    //console.log(userName);
    //console.log(message);
    return "Hi, I am " + userName + ". " + message;
}

const greeting1 = createGreeting("Max");
console.log(greeting1); 

const greeting2 = createGreeting("Manuel", "Hello, what´s up?");
console.log(greeting2);*/

/*export default (userName, message) => {
    console.log("Hello, World!");
    return userName + message
}*/

//-----------------------------------------------------------
//Objects

//const userName = "Max";
//const userAge = 34;

/*const user = {
    name: "Max",
    age: 34,
    greet() {
        console.log("hello");
        console.log(this.age);
    }
}
console.log(user.name);
user.greet();

class User {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        console.log("Hello, World!");
    }
}

const user1 = new User("manuel", 30);
console.log(user1);
user1.greet();*/

//-----------------------------------------------------------
//Arrays

/*const hobbies = ["sports","cooking","reading"];
console.log(hobbies[1]);

hobbies.push("coding");
console.log(hobbies);

const index = hobbies.findIndex((item) => item === "sports");
console.log(index);

//it is use to transform any item to any other kind of item
//map doesnt change the main array, just create a new one with the changes
const editedHobbies= hobbies.map((item) => ({text: item}));
console.log(editedHobbies)*/

//-----------------------------------------------------------
//Destructuring

//const [firstName, lastName] = ["Max", "Schruller"];

//const firstName = userNameData[0];
//const lastName = userNameData[1];

//console.log(firstName);
//console.log(lastName);

//in the case of the objets, u need to use the same name as the key in the object
//and you can asign a alias to the variable if you want with :
/*const {name: userName, age} = {
    name: "Max",
    age: 34
};

console.log(userName);
console.log(age);*/
//const name = user.name;
//const age = user.age;

//-----------------------------------------------------------
//Spread operator
/*const hobbies = ["sports", "cooking"];
const user = {
    name: "Max",
    age: 34
};

const newhobbies = ["reading"];

//with ... we pull out the values of the array and put them in a new array
const mergeHobbies =[...hobbies, ...newhobbies];
console.log(mergeHobbies);

//with ... we pull out the key-value pairs of the object and put them in a new object
const extendedUser = {
    isAdmin: true,
    ...user
}
console.log(extendedUser)*/

//-----------------------------------------------------------
//Revisiting control structure

/*const password = prompt("Enter your password:");

if (password === "Hello"){
    console.log("Hello works");
} else if (password === "hello"){
    console.log("hello works");
} else {
    console.log("password is not valid");
}

const hobbies = ["sports", "cooking", "reading"];

for (const hobby of hobbies){
    console.log(hobby);
}*/

//-----------------------------------------------------------
//Managing the DOM
/*
const list = documento.querySelector("ul");
list.remove();*/

//------------------------------------------------------------
//Using Funcions as Values
/*function handleTimeout() {
    console.log("timed out");
}
const handleTimeout2 = () => {console.log("timed out 2")};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
    console.log("timed out 3");
}, 4000);

function greeter(greetFn){
    greetFn();
}

greeter(() => console.log("HI!"));*/

//------------------------------------------------------------
//Define functions inside other functions

/*function init(){
    function greet(){
        console.log("Hello, World!");
    }

    greet();
}
init();*/

//------------------------------------------------------------
//Reference vs primitive values

/*let userMessage = "Hello, User!";
userMessage = userMessage.concat(" How are you?");

//const message= "hello";

const hobbies = ["sports", "cooking"];
//hobbies = [];
hobbies.push("reading");
console.log(hobbies);*/

 
