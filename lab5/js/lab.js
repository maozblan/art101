/**
 * a couple of variables to print.
 *
 * @link   https://maozblan.github.io/art101/lab5/index.html
 * @file   This file has a bit of variables that print things.
 * @author Lyssa.
 * @since  27.10.2023
 */


// Constants
const make = ['acura', 'ford', 'toyota', 'bmw', 'tesla'];
const ran = ['wizards', 'unicorns', 'dragons'];
const color = ['graphite', 'moonlight', 'sundew', 'mist'];
const year = [2019, 2021, 1982, 1543, 2026, 1996];
const ownIt = [true, false];

// Functions
// random number calcuation from chatGPT: Math.floor(Math.random() * (max - min + 1)) + min;
let num = Math.floor(Math.random() * (1000 + 1));
let age = 2023 - year[num % year.length];

document.writeln("Hypothetically there is a car from " + make[num % make.length] + " made by " + ran[num % ran.length] + ".<br>");
document.writeln("The car has the paint color of " + color[num % color.length] + " and is " + age + " years old.<br>");

// update color of car
console.log(document.getElementById("car_bot"));
document.getElementById("car_bot").className = color[num % color.length]; 

if (ownIt[num % ownIt.length]) {
  document.writeln("You hypothetically own this car. Isn't that cool?<br>");
} else {
  document.writeln("Sadly, you don't own this car. Maybe next time...<br>");
}
document.writeln("Reload this page to get a new car!<br>");
