// document.getElementById("count-el"); What's inside the parentheses is an argument. As in a function.

let countEl = document.getElementById("count-el") //the getElementById(), as you can see it's written the same way a function is.

//console.log(countEl)same happens with log(), they're functions hooked to the system. Also called: METHODS
// console object, document object model...
let saveEl = document.getElementById("save-el");
let count = 0;


function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let savedCount = " " + count + " - ";

    saveEl.textContent += savedCount;
    countEl.innerText = 0;
    count = 0;
}








