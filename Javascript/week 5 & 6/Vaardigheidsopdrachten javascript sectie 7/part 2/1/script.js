"use strict";

// console.log(document.querySelector(".grid-container__item-1").textContent);


const kleur = 'pink';


document.querySelector('.grid-container__item-1').addEventListener('click', function() {
  document.querySelector('.grid-container__item-1').style.width = kleur;
  console.log("works");
});