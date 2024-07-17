
function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("N");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName();

// function addTwoNumbers(number1,number2){
//         console.log( number1+number2);
        
// }

function addTwoNumbers(number1,number2){
    // let result = number1+number2;
    // return result;
    return number1+number2;
}
const result = addTwoNumbers(3,5)
// console.log("Result: ",result);

function loginUserMessage(username="sam"){
    if(!username){
           console.log("Please enter user name..!");
           return;
    }
     return `${username} just logged in`;
}

// console.log(loginUserMessage("Ganesh"));
// console.log(loginUserMessage("Ganesh"));//undefined just logged in

function calculateCartPrice(val1,val2,...num1){ //... Rest operator name for this three dots
      return num1;
}
// console.log(calculateCartPrice(200,400,500,2000));

const user  = {
     username:"Ganesh",
     price:199
}

function handleObject(anyobject){
     console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
     
}

// handleObject(user);
handleObject({
    username:"Sam",
    price:399
});


const myNewArray =[200,400,100,600]
function returnSecondValue(getArray){
      return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,400,100,600]));

