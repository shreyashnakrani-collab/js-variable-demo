// Dark mode
function darkMode() {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
}

// Light mode
function lightMode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

// Div single click → red
function singleClick1() {
    document.getElementById("box").style.backgroundColor = "red";
}

// Div double click → olive
function doubleClick2() {
    document.getElementById("box").style.backgroundColor = "olive";
}

// Button single click
function h() {
    document.getElementById("btn").innerHTML = "Single Click";
}

// Button double click
function j() {
    document.getElementById("btn").innerHTML = "Double Click";
}

// Dropdown device show
function showDevice(){
    let device = document.querySelector(".sel").value;
    document.getElementById("result").innerHTML = "Selected Device: " + device;
}

// background color input
function changeBg(){
    let color = document.getElementById("bgcolor").value;
    document.getElementById("newbox").style.backgroundColor = color;
}

// border color input
function changeBorder(){
    let bcolor = document.getElementById("bordercolor").value;
    document.getElementById("newbox").style.borderColor = bcolor;
}

// submit form (prevent refresh)
let form = document.querySelector("form");
form.addEventListener("submit",(dets)=>{
    dets.preventDefault();   // form refresh stop
    document.body.style.backgroundColor ="red";
});

// mousemove and mouseout
let box2 = document.querySelector(".box2");

box2.addEventListener("mousemove",()=>{
    box2.style.width ="500px";
    box2.style.height ="100px";
    box2.style.border ="2px solid black";
});

box2.addEventListener("mouseout",()=>{
    box2.style.width ="100px";
});

// Event Bubbling and Capturing
// Event Bubbling --> jena par event aave tena par listener na hoy
// to aapdu event tena parent par listener gotase ane aavu karta
// karta upar taraf move karshe

let outer = document.querySelector(".outer");
let inner = document.querySelector(".inner");
let most_inner = document.querySelector(".most_inner");

outer.addEventListener("click", () => {
    console.log("Outer Div Clicked:Skyblue");
    document.body.style.backgroundColor = "blue";
},true);

inner.addEventListener("click", (e) => {
    console.log("Inner Div Clicked");
   document.body.style.backgroundColor = "green";
});

most_inner.addEventListener("click", (e) => {
    console.log("Most Inner Div Clicked");
    document.body.style.backgroundColor ="red";
       
        
        
    e.stopPropagation();   // bubbling stop
});

// To-do list strike using bubbling
let ul = document.querySelector("ul");

ul.addEventListener("click", (dets) => {

    // only LI par click ho tab
    if(dets.target.tagName === "LI"){

        let liStyle = dets.target.style.textDecoration;

        if (liStyle === "line-through") {
            dets.target.style.textDecoration = "none";
        } 
        else {
            dets.target.style.textDecoration = "line-through";
        }
    }
});
// phase 2 : child --> parent (most inner-inner-outer)
// true -- outer : phase 1 (true vali event run) : Parent -->
// child (outer(done)) Phase 2 (true vagar ni event run thai): child
// --> Parent (Most_inner --> inner)

// true -- outer, inner : phase 1 (true vali event run) parent
// --> Child (outer(done)--> inner (done)) Phase 2 (true vagar ni
// event run thai): Child --> Parent (Most_inner)


// use case :
// 1. security layer
// 2. check when event  bubbling is fail

// event and event lisnner and lisnner
// capture vs bubbling

// live character conter

let counter=document.querySelector("#counter");
let count=document.querySelector(".count");

counter.addEventListener("input",(dets)=>{
    console.log(dets.target.value.lenght);
    console.log(dets.value.lenght);

    let limit=10 - counter.value.lenght;
    if (limit<0){
        alert("limit Reached");
        counter.disabled=true;

    }else{
        count.textContent=limit;
    }

})