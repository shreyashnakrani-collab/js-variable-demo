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
