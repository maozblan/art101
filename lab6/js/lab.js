/**
 * a couple of variables to print.
 *
 * @link   https://maozblan.github.io/art101/lab6/index.html
 * @file   This file has a bit of variables that print things.
 * @author Lyssa.
 * @since  30.10.2023
 */


// Constants
const transportation = ['car', 'bike', 'legs'];
const make = ['acura', 'ford', 'toyota', 'bmw', 'tesla'];
const ran = ['wizards', 'unicorns', 'dragons'];
const color = ['graphite', 'moonlight', 'sundew', 'mist'];
const year = [2019, 2021, 1982, 1543, 2026, 1996];

// Other Variables
// random number calcuation from chatGPT: Math.floor(Math.random() * (max - min + 1)) + min;
let num = Math.floor(Math.random() * (1000 + 1));
let yourMainRide = {
  make : make[num % make.length],
  by : ran[num % ran.length],
  color : color[num % color.length],
  year : year[num % year.length],
  age : function() {
    return 2023 - this.year;
  }
}

// Output
document.writeln("Modes of transportation: " + transportation + "<br>");
document.writeln("Your Hypothetical Ride: <pre>", JSON.stringify(yourMainRide, null, '\t'), "</pre>");

// update color of car
document.getElementById("car_bot").className = yourMainRide.color; 

document.writeln("Reload this page to get a new car!<br>");
