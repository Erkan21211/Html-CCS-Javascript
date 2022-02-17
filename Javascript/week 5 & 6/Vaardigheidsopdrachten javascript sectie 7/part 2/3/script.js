"use strict";

// console.log(document.querySelector(".grid-container__item-1").textContent);


const text = 'Geklikt';


document.querySelector('.grid-container__item-1').addEventListener('click', function() {
  console.log(document.querySelector(".grid-container__item-1").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-2").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-3").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-4").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-5").textContent = "Geklikt");
});

document.querySelector('.grid-container__item-2').addEventListener('click', function() {
  console.log(document.querySelector(".grid-container__item-1").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-2").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-3").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-4").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-5").textContent = "Geklikt");
});

document.querySelector('.grid-container__item-3').addEventListener('click', function() {
  console.log(document.querySelector(".grid-container__item-1").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-2").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-3").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-4").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-5").textContent = "Geklikt");
});

document.querySelector('.grid-container__item-4').addEventListener('click', function() {
  console.log(document.querySelector(".grid-container__item-1").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-2").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-3").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-4").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-5").textContent = "Geklikt");
});

document.querySelector('.grid-container__item-5').addEventListener('click', function() {
  console.log(document.querySelector(".grid-container__item-1").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-2").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-3").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-4").textContent = "Geklikt");
  console.log(document.querySelector(".grid-container__item-5").textContent = "Geklikt");
});