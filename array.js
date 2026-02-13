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
//5. splice(position,index)-------------------remove index
//splice-remove value--- specific position and specific number of values
//into ()-first index(position),how many value you want to remove 
let e=[50,20,30,10,40];
//e.splice(3,2)
//e.splice(3,0,50,100)

//6.slice -- copy values from array 
///start index -----------------includ end index not include
//ex======= let i=[1,2,3,4,5];
//i.slice(0,3)====answer is 1,2 end 3 is not include.

let f=[100,50,25,0];

//7. reverse --- reverce the values of array
let g =[25,26,60,40,30,90];
//g.reverce();

//sort --- set into accending order
let h =[50,2,30,40,82];
//h.sort();
//let h=[11,20,3,01,50];
//let sr=h.sort(function(a,b){
// return a-b; /// accending order 
//})
let arr1 = [10,20,50,33];
let arr2 =["b","v","k","o"];
let arr3 =['hello','Aggrer', 'right', 'array'];
//length
//6. map() – new array banata hai (Pure)
//7. filter() – condition true ho to
// // example 1:
 let tasks = ['Wake up', 'Brush teeth'];
 tasks.push("but Milk")

// // example 2:
 let notifications = ['Email', 'Message', 'Reminder'];
 notifications.pop()

// //example 3 :
 let customers = ['Customer1', 'Customer2', 'Customer3'];
 customers.shift()

// // ex 4:
 let playlist = ['Song B', 'Song C'];
 playlist.unshift("Song A")

// // ex 5: 
 let students = ['Mike', 'Alex', 'Emma', 'Sophia'];
 students.splice(1,1, "Jhon", "Sara")
 console.log(students)

// // ex 6
 let menu = ['Burger', 'Pizza', 'Pasta', 'Salad'];
  
// // ex 7
 let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
 weekendDays = days.slice(5,)

// // ex 8
 let levels = ['Easy', 'Medium', 'Hard'];
 levels.sort().reverse()

// //ex 9
 let scores = [45, 12, 78, 34, 89];
 scores.sort((a, b) => a - b)

// //ex 10
let prices = [199, 49, 999, 299, 149];
 prices.sort((a, b) => a - b)

// // ex 11
let products = ['Laptop', 'Phone', 'Tablet', 'Monitor', 'Keyboard'];
 let newProducts = products.slice(0,3)

// //ex 12
 let colors = ['Red', 'Green', 'Blue', 'Yellow'];
 colors.splice(3,1,"Purple", "orange")

// // ex 13
 let steps = ['Step 1', 'Step 2', 'Step 3'];
 steps.sort().reverse().push("Final Step")
  console.log(steps)

// // ex 14
 let names = ['alice', 'Bob', 'charlie', 'David', "Asda"];
  names.sort((a,b)=>{
      return a.toLowerCase().localeCompare(b.toLowerCase())
 })
  console.log(names)

 let arr0 = ['10', '2', '5', '30', '20']; // sort() cant sort numberically
 arr0.sort((a, b) => a - b)
 console.log(arr0)

  let arr5 = ['b', 'f', 'a', 'r', 'w', 'c', 'h', 'i']
 arr5.sort()
 console.log(arr5)

let i = [10, 54, 2, 5, 45, 23, 345, 23];

let newI = []
 i.forEach(e => {
     newI.push(e + 10);
 })
 console.log(newI)

 i.map(e => {
     newI.push(e+10)
 })
  console.log(newI)

 let pistols = (e => {
     if(["Classic", "Ghost", "Shorty", "Bandit", "Frenzy", "Sherrif"].includes(e)){
         return e
     }
 })
 console.log(pistols)

 // Q15. Combination Question
// You are managing a movie watchlist:
// 1. Add 'Inception'
// 2. Remove the first movie
// 3. Sort the list alphabetically
let movies = ['Avatar', 'Titanic', 'Gladiator'];

// Q16. splice() return value
// What does the splice method return in this case?
let nums1 = [1, 2, 3, 4];
nums1.splice(1, 2);




// Q17. slice() immutability check
// After executing slice, does the original array change?
let nums2 = [10, 20, 30, 40];
let result = nums2.slice(1, 3);


// Q19. reverse() mutation
// After reversing, what happens to the original array reference?
let letters = ['a', 'b', 'c'];
let reversedLetters = letters.reverse();


// Q21. splice() edge case
// What happens if deleteCount is 0?
let arr4 = ['x', 'y', 'z'];
arr4.splice(1, 0, 'new');



// Q23. slice() negative index
// What elements are returned?
let values = [100, 200, 300, 400, 500];
let sliced = values.slice(-3, -1);




// Q24. splice() vs slice() decision
// Which method would you use if you want to:
// a) Update the original array
// b) Keep the original array unchanged




// Q25. Chained methods (brain teaser)
// What is the final value of arr?
let arr7 = [1, 2, 3];
arr7.push(arr7.shift());

//for Each loop
// for Each ----- Array ni darek value mate looop chalse
let l =[10,20,30,40,50];
l.forEach((val)=>{
    let new_var= val + 10;
    console.log(new_var);
});
// .map() method:-
// map tyare j use karvu ke jare ek new array create karvo che
// first map create a black array -- only for understanding
let data = [10,20,30,40,50];
//same like a for each loop but map return a new array
let temp_data = data.map((val)=>{
    if(val>15){
        return val;
    }
});

//usecase----- data ma thi specific data new array ma store karvo hoy 
// 1. Double daily steps count

// Real life: Fitness app doubling step goal

// const steps = [1000, 2000, 3000];

// function doubleSteps(step) {
//   return step * 2;
// }

// const newSteps = steps.map(doubleSteps);



// 2. Convert minutes to seconds

// Real life: Video duration calculation

// const minutes = [1, 5, 10];

// const seconds = minutes.map(function(min) {
//   return min * 60;
// });



// 3. Add ₹50 delivery charge to prices

// Real life: Food delivery app

// const prices = [200, 350, 500];

// const finalPrices = prices.map(price => price + 50);



// 4. Convert exam marks to grades

// Real life: Result system

// const marks = [35, 72, 88, 40];

// function getGrade(mark) {
//   return mark >= 40 ? 'Pass' : 'Fail';
// }

// const grades = marks.map(getGrade);



// 5. Capitalize names

// Real life: Display usernames properly

// const names = ['rahul', 'neha', 'amit'];

// const formattedNames = names.map(name =>
//   name[0].toUpperCase() + name.slice(1)
// );



// 6. Apply 10% discount

// Real life: Shopping sale

// const prices = [500, 1000, 1500];

// function applyDiscount(price) {
//   return price - price * 0.10;
// }

// const discounted = prices.map(applyDiscount);



// 7. Add bonus points to scores based on condition

// Real life: Game scoring system

// const scores = [45, 60, 85];

// const finalScores = scores.map(score => {
//   if (score >= 80) return score + 20;
//   if (score >= 50) return score + 10;
//   return score;
// });



// 8. Convert temperatures with formula

// Real life: Weather app

// const celsius = [0, 20, 30];

// function toFahrenheit(temp) {
//   return (temp * 9/5) + 32;
// }

// const fahrenheit = celsius.map(toFahrenheit);



// 9. Generate table of numbers

// Real life: Math learning app

// const numbers = [1, 2, 3, 4];

// const tableOfTwo = numbers.map(num => num * 2);



// 10. Combine map with string formatting

// Real life: SMS notification system

// const balances = [500, 1200, 300];

// const messages = balances.map(balance =>
//   `Your balance is ₹${balance}`
// );


///filter 
//filter tyare use karvu ke jyare ek new array create karvo chhe
//with condition
// in return true/false
//if true ---> add into new array
// if else(false)----> not add into new array
let laptop_price=[15000,20000,30000,40000,45000];
let expensive_laptop=laptop_price.filter((price)=>{
    if (price > 30000) return true;

});
//je value 30000 thi vadhare chhhe te new add thase and biji value ne array ma add nahi kare 
 // use case -- DATA ma this specific data new array ma store karvo hoy based on condition
 let product_type = ["mobile","tablet","laptop","mouse"];

 let filter_product_type = product_type.filter((type)=>{
    if(type==="tablet"|| type === "mobile") return true;
 });
 //reduce 
 //reduce  tyare j use karvu ke jare ek single value calculate karvi hoy from array
 let totla_price = [10,20,52,60,40];
 let final_price=totla_price.reduce((accumulator,val)=>{
    return accumulator+val;
 },0);
 // initial value of accumulator 
 // 0+10=>10
 //10+60=>70
 console.log("final price:",final_price);
 //accumulator -----> je value function ma return thase te accumulatorma store thase 
 //----> accumulator name change kari sako cho
 // val------> array ni darek valu


 //find():- method
 //find tyare j use karvu ke jare array mathi ek value find karvi hoy based on condition
  let product=["laptop","mobile"];
  let find_product=product.find((item)=>{
    if(item==="laptop"){
        return true;
    }else if (item==="mobile"){
        return true;

    }else{
        console.log("Aplog fail hogaye majak se hatke.........");
}
    });

//find vs filter 
let people=["john","sara","mike","anna","david"];
let all=people.filter((name)=> name==="sara");
console.log("filter",all);
//example2
let ma=[10,20,30,45];
let any=ma.some((val)=>{
    if(val>84) return 12;
});
console.log(any)

//every
//check kare chhe ke array ma badhha j items condition satisfy kare chhe ke nathi
let def=[20,30,2,50];
let num=def.every(function(val){
    return val<40;

})
// some(),find(),filter(),every()
// let products=["tablet","mobile","laptop","mobile"];
//method ---->condition -----> output
// .some()---> item==="mobile"---> true
// .find()---> item==="mobile"---> true
// .filter()---> item==="mobile"---> ["mobile","mobile"]
// .every()---> item==="mobile"---> false

let arr45=[1,2,3,4,5]
//let j=arr4[0];---->1
//let k=arr4[1];---->3
// spread operator — copy value from main array

let arr8 = [1, 2, 3, 4, 5, 6, 7];

// let arr4 = arr3  // just gives reference, not copy value
// if you change arr4 then arr3 will also change

let arr9 = [...arr8];

// ... --> rest --> into function
// ... --> spread --> into Array and Object (copy)

// Example:
let temp_arr = [1, 2, 3];
let temp_arr2 = [4, 5, 6];

let mix_arr = [...temp_arr, ...temp_arr2];

console.log(arr8);
console.log(arr9);
console.log(mix_arr);

/************************************************
MAP + FILTER + REDUCE PRACTICE (Q1–Q20)
************************************************/

/* =========================
Q1. Grocery Store – Total Cost
========================= */
const prices10 = [50, 120, 300, 80, 200];

const totalCost = prices1
  .filter(price => price > 100)
  .map(price => price * 1.05)
  .reduce((sum, price) => sum + price, 0);

console.log(totalCost);
// Answer: 651
// Why: Items >100 taxed 5% then summed


/* =========================
Q2. Fitness App – Weekly Calories
========================= */
const minutes1 = [10, 25, 40, 15, 60];

const totalCalories11 = minutes1
  .filter(min => min >= 20)
  .map(min => min * 4)
  .reduce((sum, cal) => sum + cal, 0);

console.log(totalCalories);
// Answer: 500
// Why: Valid workout days converted to calories


/* =========================
Q3. Exam Results – Total Passed Marks
========================= */
const marks10 = [35, 55, 80, 20, 45];

const totalPassedMarks = marks1
  .filter(mark => mark >= 40)
  .reduce((sum, mark) => sum + mark, 0);

console.log(totalPassedMarks);
// Answer: 180
// Why: Only passing marks added


/* =========================
Q4. Bank App – Total Credits
========================= */
const transactions10 = [500, -200, 1000, -300, 700];

const totalCredits = transactions1
  .filter(amount => amount > 0)
  .reduce((sum, amount) => sum + amount, 0);

console.log(totalCredits);
// Answer: 2200
// Why: Only positive transactions counted


/* =========================
Q5. Online Sale – Discounted Bill
========================= */
const prices20 = [800, 1500, 3000, 600, 1200];

const discountedBill = prices2
  .filter(price => price > 1000)
  .map(price => price * 0.85)
  .reduce((sum, price) => sum + price, 0);

console.log(discountedBill);
// Answer: 4845
// Why: Items above 1000 discounted 15%


/* =========================
Q6. Attendance – Reward Points
========================= */
const hours1 = [5, 7, 8, 6, 9];

const rewardPoints = hours1
  .filter(hour => hour >= 7)
  .map(hour => hour * 10)
  .reduce((sum, point) => sum + point, 0);

console.log(rewardPoints);
// Answer: 240
// Why: Only valid hours earn points


/* =========================
Q7. Delivery App – Total Distance
========================= */
const distances = [3, 6, 10, 4, 8];

const totalDistance = distances
  .filter(d => d > 5)
  .map(d => d + 1)
  .reduce((sum, d) => sum + d, 0);

console.log(totalDistance);
// Answer: 27
// Why: Long trips get 1km bonus


/* =========================
Q8. Salary System – Final Salary
========================= */
const salaries = [18000, 25000, 30000, 15000];

const totalSalary = salaries
  .filter(sal => sal > 20000)
  .map(sal => sal + 2000)
  .reduce((sum, sal) => sum + sal, 0);

console.log(totalSalary);
// Answer: 59000
// Why: Eligible salaries get bonus


/* =========================
Q9. Study App – Total Study Time
========================= */
const hours2 = [0.5, 1.5, 2, 0.75, 3];

const totalStudyMinutes = hours2
  .filter(hour => hour > 1)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(totalStudyMinutes);
// Answer: 390
// Why: Sessions >1hr converted to minutes


/* =========================
Q10. Electricity Usage – Monthly Bill
========================= */
const units = [80, 120, 200, 90, 150];

const electricityBill = units
  .filter(unit => unit > 100)
  .map(unit => unit * 6)
  .reduce((sum, cost) => sum + cost, 0);

console.log(electricityBill);
// Answer: 2820
// Why: Usage >100 charged per unit


/* =========================
Q11. Game Scores – Final Power Score
========================= */
const scores11 = [30, 50, 90, 20, 70];

const powerScore = scores1
  .filter(score => score > 40)
  .map(score => score * 2)
  .reduce((sum, score) => sum + score, 0);

console.log(powerScore);
// Answer: 420
// Why: Qualified scores doubled


/* =========================
Q12. Travel App – Total Fare
========================= */
const rides = [5, 12, 20, 8, 15];

const totalFare = rides
  .filter(km => km > 10)
  .map(km => km + 50)
  .reduce((sum, fare) => sum + fare, 0);

console.log(totalFare);
// Answer: 147
// Why: Long rides get service fee


/* =========================
Q13. Office Work – Productive Hours
========================= */
const hours3 = [4, 6, 8, 5, 9];

const productiveMinutes = hours3
  .filter(hour => hour >= 6)
  .map(hour => hour * 60)
  .reduce((sum, min) => sum + min, 0);

console.log(productiveMinutes);
// Answer: 1380
// Why: Productive hours converted to minutes


/* =========================
Q14. Shopping Cart – Reward Coins
========================= */
const purchases = [300, 800, 1200, 400];

const rewardCoins = purchases
  .filter(amount => amount > 500)
  .map(() => 10)
  .reduce((sum, coin) => sum + coin, 0);

console.log(rewardCoins);
// Answer: 20
// Why: Each qualifying purchase gives 10 coins


/* =========================
Q15. Fuel App – Total Fuel Cost
========================= */
const liters = [3, 6, 10, 4, 8];

const fuelCost = liters
  .filter(l => l > 5)
  .map(l => l * 105)
  .reduce((sum, cost) => sum + cost, 0);

console.log(fuelCost);
// Answer: 2520
// Why: Fuel above 5L charged per liter


/* =========================
Q16. Interview Classic – Sum of Cubes
========================= */
const numbers10 = [1, 2, 3, 4, 5];

const sumOfCubes = numbers1
  .filter(num => num % 2 !== 0)
  .map(num => num ** 3)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfCubes);
// Answer: 153
// Why: Odd numbers cubed and added


/* =========================
Q17. Performance Tracking – Bonus Points
========================= */
const scores20 = [10, 20, 30, 40, 50];
const avg = scores2.reduce((a, b) => a + b, 0) / scores2.length;

const bonusScore = scores2
  .filter(score => score > avg)
  .map(score => score + 5)
  .reduce((sum, score) => sum + score, 0);

console.log(bonusScore);
// Answer: 100
// Why: Above-average scores get bonus


/* =========================
Q18. Subscription App – Final Bill
========================= */
const plans = [199, 399, 599, 299];

const finalBill = plans
  .filter(plan => plan > 300)
  .map(plan => plan * 1.18)
  .reduce((sum, plan) => sum + plan, 0);

console.log(finalBill);
// Answer: 1177.82
// Why: Premium plans taxed 18%


/* =========================
Q19. Learning App – Achievement Score
========================= */
const scores3 = [45, 60, 70, 30, 80];

const achievementScore = scores3
  .filter(score => score >= 60)
  .map(score => score * score)
  .reduce((sum, score) => sum + score, 0);

console.log(achievementScore);
// Answer: 14900
// Why: Qualified scores squared and summed


/* =========================
Q20. Interview Finisher – Final Sum
========================= */
const numbers2 = [3, 6, 9, 10, 12];

const finalSum = numbers2
  .filter(num => num % 3 === 0)
  .map(num => num * 10)
  .reduce((sum, num) => sum + num, 0);

console.log(finalSum);
// Answer: 300
// Why: Numbers divisible by 3 multiplied and added

