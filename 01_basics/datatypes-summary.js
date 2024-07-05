// Primitive

// 7 types: String , NUmber, Boolean, null, undefined, Symbol, BigInt 
const score = 100
const scoreValue = 100.3
const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id==anotherId);

const bigNumber = 328475920482749583n
console.log(typeof bigNumber);




// Reference (Non primitive)

//Array, Objects , Function

const heros = ["shaktiman","nagraj","doga"];
let myObj = {
        name:"Ganesh",
        age:22,
}

const myFunction = function(){
        console.log("Hello world");
}

console.log(typeof myFunction);

console.log(typeof heros);
console.log(typeof myObj);