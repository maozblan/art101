/**
 * .
 *
 * @link   https://maozblan.github.io/art101/lab7/index.html
 * @file   This file asks for your name and then sorts it.
 * @author Lyssa.
 * @since  03.11.2023
 */

function isOdd(x) {
    return (x % 2 == 1);
}

console.log(`Is 7 odd? ${isOdd(7)}`);
console.log(`Is 8 odd? ${isOdd(8)}`);

let arr = [1, 42, 74, 23, 1048, 2481];
console.log(`sample array: ${arr}`);
console.log(`testing oddness on sample array: ${arr.map(isOdd)}`);
console.log(`squared sample array: ${arr.map(function(x) {return x**2})}`);
