//Type of Variable Var,let and const

//var variable
var A="hello";
var _abc="hello Tommy";
var $ab="hello Tommy";

//let variable
let ATempt="hey Welcome to my video";
let emp="hey Welcome";

//const variable
let shrey="hey";
let parth="Welcome !!";

//Declaration and initialition
var d;//declare
var d=10; //declare and initialition in firsrt tiem
//var add value into window
//var can be redeclared and reassigned

var name="username"
let name1="username"
//scope (global,black,functional)
var e=23;//global scope
console.log("Global scope "+ e);
{
  var e=25;//block scope
console.log("block scope "+ e);  
}
function abc(){
     var e=25;//Functional scope
console.log("Functional scope "+ e);  
}
abc();
console.log(e);
//let through
//scope (global,black,functional)
let  ef=23;//global scope
console.log("Global scope "+ ef);
{
  let ef=25;//block scope
console.log("block scope "+ ef);  
}
function abcd(){
    let ef=25;//Functional scope
console.log("Functional scope "+ ef);  
}
abcd();
console.log(ef);
//temporal dead zone(tdz)
//tdz not working on var
console.log(temp_b);
var temp_b =23;//on var there is no tdz
//console log
console.log(j)
let j=12;