"use strict";

let arry = [];
let i = 0;
let newValue;
setTimeout(addToArray, 200);

//adds random numeber
function addDiv() {
  if (i < 20) {
    addToArray();
  }
  //remove from first add from last
  else {
    addToArray();

    /*     newValue = Math.round(Math.random() * 32);
     */ arry.shift(newValue);
  }
}

function addToArray() {
  newValue = Math.round(Math.random() * 32);
  arry.push(newValue);
  i++;
  setTimeout(addDiv, 200);
  setHeight();
}

function setHeight() {
  //find height and set it to the height from array

  for (let j = 0; j < 20; j++) {
    let bar;
    bar = document.querySelector(`#container>div:nth-child(${j + 1}`);
    bar.style.setProperty("--height", arry[j]);
    console.log(j);
  }
}
