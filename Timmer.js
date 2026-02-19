let card1 = document.querySelector(".card1");
let button = document.querySelector("button");

let bar = document.querySelector(".bar");
let percent = document.querySelector(".percent");

// card1 5 sec baad show
setTimeout(()=>{
    card1.style.display="block";
});

// button click hide → 5 sec baad show
button.addEventListener("click",()=>{
    card1.style.display="none";

    setTimeout(()=>{
        card1.style.display="block";
    },5000);
});

// download bar card2 (alag)
let count = 0;
let download = setInterval(()=>{
    count++;
    bar.style.width = count + "%";
    percent.innerHTML = count + "%";

    if(count>=100){
        clearInterval(download);
        percent.innerHTML="YOUR CODE IS SUCCESS FULL!____!";
    }
},30);
