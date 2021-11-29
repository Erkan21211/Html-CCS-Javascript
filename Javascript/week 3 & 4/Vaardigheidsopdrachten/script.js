"use strict";

// OPDRACHT 1
// function mijn_eerst_funtie() {
//   return 2021 - 2001;
// }
// console.log(mijn_eerst_funtie);

// OPDRACHT 2
// function mijn_eerst_funtie(numberOne, numberTwo) {
//   const result = numberOne - numberTwo;
//   return result;
// }
// console.log(mijn_eerst_funtie(5, 6));

// OPDRACHT 3
// function mijn_eerst_funtie(numberOne, numberTwo) {
//   const result = numberOne + numberTwo;
//   return result;
// }
// console.log(mijn_eerst_funtie(5, 6));

// OPDRACHT 4
// function mijn_eerst_funtie(numberOne, numberTwo) {
//   const result = numberOne - numberTwo;
//   return result;
// }
// console.log(mijn_eerst_funtie(5, 6));

// OPDRACHT 5
// function mijn_eerst_funtie(numberOne, numberTwo, numberDrie, numberFour) {
//   const result = numberOne * numberTwo * numberDrie * numberFour;
//   return result;
// }
// const result1 = mijn_eerst_funtie(4, 5, 6, 7);
// const result2 = mijn_eerst_funtie(2, 3, 4, 5);
// console.log(result1 + result2);

// OPDRACHT 6
// function mijn_eerst_funtie(numberOne, numberTwo) {
//   const result = numberOne > numberTwo;
//   return result;
// }
// const result = mijn_eerst_funtie(4, 5);
// console.log(result);

// OPDRACHT 7
// function mijn_eerst_funtie(name) {
//   if (name === "Herder") {
//     console.log("Dit is Herder");
//   } else {
//     console.log("wrong person");
//   }
// }
// console.log(mijn_eerst_funtie("Herder"));

// OPDRACHT 8
// function mijn_eerst_funtie(getal1, duizend) {
//   const result = getal1 > duizend;
//   return result;
// }

// const result = mijn_eerst_funtie(1100, 1000);
// console.log(result);

// OPDRACHT 9
// const sentence = (dier) => {
//   const sentence = `ik ben een ${dier}`;
//   console.log(sentence);
// };
// sentence("Koe");

// //OPDRACHT 10
// const nameCheck = (name) => {
//   switch (name) {
//     case "Jorn":
//       return "great";
//     default:
//       return "okish";
//   }
// };

// const money = (money) => money * 2;

// const sentence = (name, salary) => {
//   const wordOne = nameCheck(name);
//   const wordTwo = money(salary);
//   console.log(
//     `the name is ${name} and I 'am ${wordOne} and my salary is ${wordTwo} and it just got doubled`
//   );
// };
// sentence("Frits", 3000);

// OPDRACHT 10 & 11 zijn niet goed

// OPDRACHT 12
// const schoolCheck = (school) => {
//   switch (school) {
//     case "vwo":
//       return "ik mag studeren (vwo)";
//     case "havo":
//       return "ik mag studeren (havo)";
//     case "vmbo":
//       return "ik mag studeren (vmbo)";
//     default:
//       return "geen school gedaan. Ik mag niet studeren";
//   }
// };

// const sentence = (leeftijd, vooropleiding) => {
//   const agecalc = leeftijd > 10;
//   const scol = schoolCheck(vooropleiding);
//   console.log(`mijn leeftijd is ${agecalc}, ${scol}`);
// };
// sentence(20, "havo");

// OPDRACHT 13

// const arrayOne = ["Konijn", "Koe", "Vos", "Das", "Beer"];
// console.log(arrayOne[1]);

// OPDRACHT 14
// const arrayOne = ["Konijn", "Koe", "Vos", "Das", "Beer"];
// console.log(arrayOne[4]);

// OPDRACHT 15
// const arrayOne = ["Konijn", "Koe", "Vos", "Das", ""];
// console.log("Dier 1:" + arrayOne[1] + " " + "Dier: 2" + arrayOne[2]);

//OPDRACHT 16
// const arrayOne = ["Konijn", "Koe", "Vos", "Das", "Beer"];
// console.log("Dier 1: " + arrayOne[1]);
// console.log("Dier 2: " + arrayOne[2]);
// console.log("Lengte array: " + arrayOne.length);

// OPDRACHT 17
// const arrayOne = ["one", "two", "third", "four"];
// arrayOne.push("toevoegen");
// arrayOne[1] = "Herder";

// console.log(arrayOne);

// OPDRACHT 17
// const objectOne = {
//   firstName: "Henk",
//   lastName: "de vries",
//   age: 2021 - 1988,
//   job: "teacher",
//   friends: ["Koe", "Vos"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(`my is being a ` + objectOne.job);

// OPDRACHT 18
// const objectOne = {
//   firstName: "Henk",
//   lastName: "de vries",
//   age: 2021 - 1988,
//   job: "teacher",
//   friends: ["Koe", "Vos"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(
//   `my is being a ` +
//     `${objectOne.job}` +
//     ` and I am ` +
//     `${objectOne.age}` +
//     ` years old`
// );

// // OPDRACHT 19
// const objectOne = {
//   firstName: "Henk",
//   lastName: "de vries",
//   age: 2021 - 1988,
//   job: "teacher",
//   friends: ["Koe", "Vos"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// console.log(
//   `My friends are ${objectOne.friends[0]} and ${objectOne.friends[1]}`
// );

// OPDRACHT 20
// const objectOne = {
//   firstName: "Henk",
//   lastName: "de vries",
//   age: 2021 - 1988,
//   job: "teacher",
//   friends: ["Koe", "Vos"],
//   getFullName: function () {
//     return `${this.firstName} ${this.lastName}`;
//   },
// };
// for (var i in objectOne) {
//   console.log(objectOne[i].length);
// }

// OPDRACHT 21
// const objectOne = {
//   firstName: "Piet",
//   lastName: "Janssens",
//   job: "Fighter",
//   getJobAndName: function (name, job) {
//     return `My name is ${name} and I am a ${job}`;
//   },
// };
// console.log(objectOne.firstName + " " + objectOne.job);

// OPDRACHT 22
// const objectOne = {
//   firstName: "Piet",
//   lastName: "Janssens",
//   job: "Fighter",
//   allInfo: function () {
//     const info = `${this.firstName}, ${this.lastName}, ${this.job}`;
//     return info;
//   },
// };
// console.log(
//   objectOne.firstName + " " + objectOne.lastName + " " + objectOne.job
// );
// const info = `${objectOne.firstName}, ${objectOne.lastName}, ${objectOne.job}`;
// console.log(info);
// objectOne.newitem = "Product";
// console.log(objectOne);

// OPDRACHT 23
// De functie heeft de parameters (name, job). die worden niet gebruikt.

// OPDRACHT 24 (SNAP DEZE NOG NIET ECHT GOED!)
// const objectOne = {
//   name: "Erkan",
//   age: 20,
//   bornyear: 2001,
//   job: "software developer",
//   woon: "Almere",
// };

// const objectTwo = {
//   name2: "Jorn",
//   age2: 30,
//   bornyear2: 1991,
//   job2: "teacher",
//   woon2: "Amsterdam",
// };

// function calc() {
//   return `${objectOne.woon}``${objectTwo.woon2}`;
// }

// const calc = console.log(calc);

// OPDRACHT 25
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }
// let j = 1;
// while (j <= 10) {
//   console.log(`${j}`);
//   j++;
// }

// // OPDRACHT 26
// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }
// let j = 1;
// while (j <= 10) {
//   console.log(`${j}`);
//   j++;
// }

// OPDRACHT 27
// for (let i = 100; i <= 1000; i++) {
//   console.log(i);
// }
// let j = 100;
// while (j <= 100) {
//   console.log(`${j}`);
//   j++;
// }

// OPDRACHT 28
// for (let i = 100; i >= 0; i--) {
//   console.log(i);
// }
// let j = 100;
// while (j >= 0) {
//   console.log(`${j}`);
//   j--;
// }

// OPDRACHT 29
// for (let i = 0; i < 1000; i += 10) {
//   console.log(i);
// }
// let j = 0;
// while (j < 1000) {
//   console.log(`${j}`);
//   j += 10;
// }

// OPDRACHT 30
// for (let i = 0; i <= 10000; i += 100) {
//   console.log(i);
// }
// let j = 0;
// while (j <= 10000) {
//   console.log(`${j}`);
//   j += 100;
// }

// OPDRACHT 31
// de nummer staat op 0. dus er komt geen output.

// OPDRACHT 32
// i is groter dan 10.

// OPDRACHT 33
// hij moet naar de 10 loop'en, maar er wordt 0 erbij gedaan elke keer dus wordt het infinite loop

// OPDRACHT 34
// Er wordt niks geconsole logged.

// OPDRACHT 35
// const arrayOne = ["Koe", "Herder"];
// console.log(arrayOne[0], arrayOne[1]);

// OPDRACHT 36
// const arrayOne = ["Koe", "Herder"];
// arrayOne.push("Vos");
// arrayOne.unshift("Das");
// console.log(arrayOne);

// OPDRACHT 37
// const arrayOne = ["Horderd-elementen"];
// console.log(arrayOne);

// OPDRACHT 38
// const arrayOne = [1, 2, 3, 4, 5];
// console.log(arrayOne);
// const result =
//   arrayOne[0] + arrayOne[1] + arrayOne[2] + arrayOne[3] + arrayOne[4];
// console.log(
//   arrayOne[0] + arrayOne[1] + arrayOne[2] + arrayOne[3] + arrayOne[4]
// );
// if (arrayOne > 100) {
//   console.log("nope");
// } else {
//   console.log(result * 2);
// }

// OPDRACHT 39
// const arrayOne = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// console.log(arrayOne);

// OPDRACHT 40
const arrayOne = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (let i = 0; i >= arrayOne.length; i += 10) {
  console.log(i);
}

// OPDRACHT 41

// OPDRACHT 42

// OPDRACHT 43

// OPDRACHT 44

// OPDRACHT 45

// OPDRACHT 46
