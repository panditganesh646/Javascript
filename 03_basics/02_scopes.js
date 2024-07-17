

//Bydefault variable in js is var(Gloabal scope)
let a = 300;
if(true){
    let a = 10;
    const b = 20;
    // console.log("INNER:",a);
       
}
// console.log(a);
// console.log(b);
// console.log(c);

function one(){
     const username = "Ganesh"
     function two(){
        const website = "youtube"
        console.log(username);
        
     }
    //  console.log(website);
     two()
}
// one();


if(true){
    const username = "Ganesh";
    if(username==="Ganesh"){
         const website = "youtube"
        //  console.log(username+website);     
    }
    // console.log(website); //1 Error
}
// console.log(username); //2 Error

//++++++++++++++++++++ interesting ++++++++++++++++++++++++
//Hoisting
console.log(addone(5));

function addone(num){
      return num+1
}



addTwo(5);
const addTwo = function(num){ //it is also called a expression
     return num+2;
}



