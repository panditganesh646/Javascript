// singleton

// object literals
// Object.create  //---->constructor method through

const mySym = Symbol("key1")
const JsUser  = {
    name:"Ganesh",
    "full name":"Ganesh Pandit",
    [mySym]:"mykey1",
    age:18,
    location:"Hyderabad",
    email:"ganesh@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email="ganesh@chatgpt.com";
// Object.freeze(JsUser)
JsUser.email = "ganesh@microsoft.com";
// console.log(JsUser);

JsUser.greeting = function(){
     console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`1Hello JS user,${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());