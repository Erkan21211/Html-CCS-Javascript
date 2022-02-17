"use strict";

// console.log(document.querySelector(".grid-container__item-1").textContent);

// console.log(document.querySelector(".grid-container__item-1").textContent = "konijntje 0");
// console.log(document.querySelector(".grid-container__item-2").textContent = "konijntje 1");
// console.log(document.querySelector(".grid-container__item-3").textContent = "konijntje 4");
// console.log(document.querySelector(".grid-container__item-4").textContent = "konijntje 9");
// console.log(document.querySelector(".grid-container__item-5").textContent = "konijntje 16");
// console.log(document.querySelector(".grid-container__item-6").textContent = "konijntje 25");
// console.log(document.querySelector(".grid-container__item-7").textContent = "konijntje 36");

let colors = ['pink'];
let size = ['500', '600'];

document.querySelector('.grid-container__item-1').addEventListener('click', function() {
  
  var color = colors[Math.floor(Math.random() * colors.length)];
  var size1 = size[Math.floor(Math.random() * size.length)];

  let container = document.querySelector('.grid-container__item-1');

  container.style.background = color;
  container.style.font-size == size1;
  
})