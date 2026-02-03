  console.log("===== Example 1: Numbers 1 to 10 (for loop) =====");
        for(let i = 1; i <= 10; i++){
            console.log(i);
        }

        console.log("===== Example 2: Numbers 10 to 1 (while loop) =====");
        let i2 = 10;
        while(i2 >= 1){
            console.log(i2);
            i2--;
        }

        console.log("===== Example 3: Even numbers 1 to 20 =====");
        for(let i = 1; i <= 20; i++){
            if(i % 2 === 0) console.log(i);
        }

        console.log("===== Example 4: Odd numbers 1 to 15 =====");
        let i4 = 1;
        while(i4 <= 15){
            if(i4 % 2 !== 0) console.log(i4);
            i4++;
        }

        console.log("===== Example 5: Multiplication table of 5 =====");
        for(let i = 1; i <= 10; i++){
            console.log(`5 x ${i} = ${5*i}`);
        }

        console.log("===== Example 6: Sum of numbers 1 to 100 =====");
        let sum = 0;
        for(let i = 1; i <= 100; i++){
            sum += i;
        }
        console.log("Sum =", sum);

        console.log("===== Example 7: Numbers 1-50 divisible by 3 =====");
        for(let i = 1; i <= 50; i++){
            if(i % 3 === 0) console.log(i);
        }

        console.log("===== Example 8: Even/Odd up to user number =====");
        let num = prompt("Enter a number for Example 8");
        for(let i = 1; i <= num; i++){
            if(i % 2 === 0) console.log(i + " is even");
            else console.log(i + " is odd");
        }

        console.log("===== Example 9: Numbers divisible by 3 or 5 (1-100) =====");
        for(let i = 1; i <= 100; i++){
            if(i % 3 === 0 || i % 5 === 0){
                console.log(i);
            }
        }

        console.log("===== Example 10: Stop at first multiple of 7 =====");
        for(let i = 1; i <= 100; i++){
            console.log(i);
            if(i % 7 === 0) break;
        }

        console.log("===== Example 11: Skip multiples of 3 (1-20) =====");
        for(let i = 1; i <= 20; i++){
            if(i % 3 === 0) continue;
            console.log(i);
        }

        console.log("===== Example 12: First 5 odd numbers =====");
        let count = 0;
        for(let i = 1; i <= 100; i++){
            if(i % 2 === 1){
                console.log(i);
                count++;
            }
            if(count === 5) break;
        }
        //function
        //type of functions:-
        //function name(parameters){}----> function declaration
        function abc(){}
        //let fnc = function(){}-----> function expression
        let fnc=function(){};
        //let fnc = ()=>{}---> arrow function ----- fat arrow
        let fnc1=()=> {};
        //default,rest parameters in fuction
        //default
        function def(v1,v2){
            console.log(v1,v2);
        }
        def();
      function buyNow(product = "product Name", price = "product_price") {
  console.log(product, price);
}

buyNow("Mobile");


// rest --> Jayre function ma multiple arguments pass karva to vadhare params
// banava pade chhe mate te na karvu pade te mate rest parameter use kariye chhiye
// (rest ---> ...)

function abcd(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10) {
  console.log(v1, v2, v3, v4, v5, v6, v7, v8, v9, v10);
}

abcd(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(v1, v2, v3, ...numbers) {
  // ...numbers -- rest
  console.log("reset", v1, v2, v3, numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

function abcd1(...numbers) {
  // ...numbers -- rest
  console.log("reset", numbers);
}

abcd1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);


// return or early return
function temp_fnc() {
  if (10 > 9) return "true";
}

temp_fnc();

// first Class Function:
// function can be treated as variables

// let fnc1 = function (){}  -> function expression
// let fnc2 = () => {}       -> arrow function

const cart5 = function (product, price) {
  console.log(`Adding ${product} at ${price}`);
};
cart5("function expression-s25 ultra",60000);
//convert into arrow function
const cart6=(product,price)=>{
    console.log(`additing ${product} at ${price}`);

};
cart6("function expresssion - s25 ultra",60000);
//function can be passed as arguments to other function
function temp(params){
params()//call parameter 
}
temp(()=>{
    console.log("Sencond argument run")
});// function arg----> function
//function can be returned from other dunctions 


// ---------------------------------------------------------------------------------//

// Higher Order Function
function abcd(val) {
val();   // calling passed function
}

// passing function as argument
abcd(function () {
    console.log("Hello");
});
// Higher Order Function
function abcd() {
    return function () {
        console.log("Hello from returned function");
    };
}

// calling returned function
abcd()();


// impure function --> je function
// same input par different output aape
// athva bahar na state ne modify kare

let temp_a = 10;   // external (global) state

function temp_change1() {
    temp_a++;      // bahar na variable ne change kare chhe
} // --> impure function

temp_change1();
console.log("value of temp_a after change:", temp_a);

temp_change1();
console.log("value of temp_a after change:", temp_a);

temp_change1();
console.log("value of temp_a after change:", temp_a);

//closure function

// function je potana parent function na variables ne access kari shke (return thava valo function use karshe parent funcrion na koi variable )(function withi function)
function outer() {
    let value = 50; // parent variable

    function increment() {
        value++;
        console.log("Increment:", value);
    }

    function decrement() {
        value--;
        console.log("Decrement:", value);
    }

    return {
        increment,
        decrement
    };
}

const counter = outer();

counter.increment(); // +1
counter.decrement(); // -1

//lexical scope ---> nested function can access variables declared in their outer scope
function outer1(){
    let temp_inner ="outer function variable";
    function inner1(){
        let temp_inner ="inner function variables";
        console.log(temp_outer);
        function most_inner(){
            console.log("most_inner function output",temp_outer);
            console.log("most_inner function output",temp_inner);
        function inner2(){
              let temp_inner2 ="inner function variables";
        console.log(temp_inner2);
        }
        inner2();
        }
        most_inner();
 }
    inner1();
    outer();
}


//IIFE - tmmediately invoked function expression
(function temp_IIFE(){
    console.log("IIFE function")
})();
//hoisting in function
temp_abc();
function temp_abc(){
    console.log("Hoisting function");
}
//aero function
const tempp=()=>{
    console.log("aero function used in this function");
}
tempp()

//1
// Function Declaration (Hoisted)
sayHello();
function sayHello(){
    console.log("Hello");
}

// Function Expression (Not Hoisted)
//sayHi(); // Error
const sayHi = function(){
    console.log("Hi");
};

greet();
function greet(){
    console.log("Hello! Welcome user");
}
//2
// Normal
function add(a, b){
    return a + b;
}

// Arrow
const addArrow = (a, b) => a + b;

// Function call
console.log(add(5, 3));        // 8
console.log(addArrow(53, 3));   // 8


//4
function welcome(name){   // parameter
    console.log("Welcome " + name);
}

welcome("user");          // argument

//5

function temp(a, b, c){
    console.log(a, b, c);
}

temp(1, 2); // 1 2 undefined
//6
function temp_user(name = "Guest"){
    console.log("Hello " + name);
}

temp_user();
//7
function number(...numbers){
    console.log(numbers);
}

number(1, 2, 3, 4, 5);
//8
function calculateTotal(...scores){
    let total = 0;
    scores.forEach(val => {
        total += val;
    });
    return total;
}
//9
let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);

function checkAge(age){
    if(age < 18){
        return "Too Young";
    }
    return "Access Granted";
}

console.log(checkAge(16));
console.log(checkAge(21));

//10
function f(){
    return;
}

console.log(f()); // undefined


    





    
