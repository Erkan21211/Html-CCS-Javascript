document.addEventListener("click", function () {
  console.log("add");
  var element = document.querySelector(".container");
  var cont = document.getElementById("container");
  element.classList.add(".container__item");
});
