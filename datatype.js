// Primitive (value copy)
let a = 10;
let b = a;
b = 20;
console.log(a); // 10
console.log(b); // 20

// Non-Primitive (reference copy)
let arr1 = [1,2,3];
let arr2 = arr1;
arr2.push(4);
console.log(arr1); // [1,2,3,4]
console.log(arr2); // [1,2,3,4]

// Symbol
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false

// Undefined & Null
let x;
let y = null;
console.log(x); // undefined
console.log(y); // null

// BigInt
let n1 = 100n;
let n2 = n1 + 10n;
console.log(n2); // 110n

//<------non-primitive data types------>
//tpes: array, object, function
let temp_arr = [10, 20, 30];
let temp_obj = {name: "Alice", age: 25, phone_num: 1234567890};
let profile =[{name: "Bob", age: 30, phone_num: 9876543210},
     {name: "Charlie", age: 35, phone_num: 1234567890},
     {name: "David", age: 40, phone_num: 9876543210}
    ];
    function name(param){}
    // dynamic typing
   let u_name = "John";
   u_name = 100;
   u_name=[];
   //typeof quirks
   //typeof 12
   // check type of variable use ---> ex. typeof nan, typeof null,1 + "1",1=="1",1 ==="1"
   //why typof Nan---> number
   //NaN is a failed number opration that why its type is number
   //ex. "hello"- 5 --> NaN
   //why typeof null ---> object
   //bug in js but we cant change it because of backward compatibility
   //1 + "1" --> "11" (string concatenation)
   //1 == "1" --> true (loose equality, type coercion)
   //1 === "1" --> false (strict equality, no type coercion)
   //truthy and falsy values
   //0, false, "", null, undefined, NaN --> falsy
   //ex. !!0 -- check value is truthy or falsy
   //ex. if(null){} --> false
   //everything else is truthy
   //ex. !!"hello" --> true
   //ex. if("world"){} --> true
   