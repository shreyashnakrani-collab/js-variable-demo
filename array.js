//Array -- hold multiple values at same time
//["product_name",50000,'20%]
//["a","b","c","d"]
//[1,2,3,4]
//create 
//define a variable =[multiple values]
let arr=[1,2,3,4,5]
//let  product_name =["25 ultra",15000]
//access
//position = [0 1 2 3]-----------------------> index 
//access
//array_name[position(index)]
arr[0];
//modify
//array name [position]=new values
arr[0]= 10;
// array method:(variable_name.name.method_name())
// push, pop , shift, unshift, splice,reverse,sort
//push---> enter new value into array --- place it into last 
arr.push(5);
//variable || function.method -----> koi variable ke function in
//pachhal DocumentTimeline(.)kari ne lakhoto method kevai
//push() – end me add
let a = [1,2,3];
a.push(4);
console.log(a);   // [1,2,3,4]

//2. pop() – end se remove
a.pop();
console.log(a);   // [1,2,3]

//3. unshift() – start me add
a.unshift(0);
console.log(a);   // [0,1,2,3]

//4. shift() – start se remove
a.shift();
console.log(a);   // [1,2,3]

//length
//6. map() – new array banata hai (Pure)
//7. filter() – condition true ho to