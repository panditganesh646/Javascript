const name = "Ganesh"
const repoCount = 50

// console.log(name+repoCount+" Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//==>stringInterpolation

const gameName  = new String("Ganesh-pandit")

// console.log(gameName[0]);
// console.log(gameName.__proto__);//for see the object

console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.toLowerCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('n'));

// console.log(gameName.substring(0,2));
// console.log(gameName.slice());

const newString= gameName.substring(0,4);//-->negative values we cannot use in substring
// console.log(newString);


const anotherstring = gameName.slice(-8,4)//--> if we give a negative value in slice then slice of string is from the backward
// console.log(anotherstring);

const newStringOne = "  Ganesh  ";
// console.log(newStringOne);
// console.log(newStringOne.trim());

const url  = "https://ganesh.com%20pandit"
console.log(url.replace('%20','-'))

console.log(url.includes('ganesh'));
console.log(url.includes('sunder'));
console.log(gameName.split('-'));