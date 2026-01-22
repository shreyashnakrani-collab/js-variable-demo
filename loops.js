let t = 1;
while (t <= 10) {
    console.log(3 * t);
    t++;
}

//Loop 1: print k from 20 to 50
let k = 20;
while (k <= 50) {
    console.log(k);
    k++;
}

//Loop 2: print a from 60 upwards (for example up to 70)
let a = 60;
while (a <= 70) {
    console.log(a);
    a++;
}

// Loop 3: print c from 30 down to 20
let c = 30;
while (c > 20) {
    console.log(c);
    c--;
}

let d = "Hello";
while (d >= 20) {
    console.log(d);
    d++;
}
let f = 50;
while (f <= 60) {
    console.log(f);
    f++; // you need to increment f, otherwise it will be an infinite loop
}

let q = 50; // you missed the "=" sign
while (q <= 60) {
    console.log(q);
    q++; // increment q as well
}



let g = 10;

do {
 console.log("do while : ", g);
  g++;
} while (g <= 20);

let h = 10;

do {
 console.log("do while : ", h);
  h--;
} while (h >= 1);

for(let i=1;i<=10;i++){
  console.log(i);
}
for(let j=10;j>=1;j--){
  console.log(j);
}
for(let jk=1;jk<=20;jk++){
  console.log("Hello World"+jk);
}