"use strict";

// console.log(document.querySelector(".grid-container__item-1").textContent);


const breedte = '120%';


document.querySelector('.grid-container__item-1').addEventListener('click', function() {
  document.querySelector('.grid-container__item-1').style.width = breedte;
  console.log("works");
});