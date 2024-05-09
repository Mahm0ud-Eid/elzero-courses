/* //Challenge 2
let a = "Elzero Web School";
console.log(a.charAt(2)+a.slice(3,6));
console.log(a.charAt(a.length-4).repeat(8));
console.log(a.slice(0,6).split());
console.log(`${a.slice(0,6)} ${a.substr(10)} `);
console.log(a.charAt(0).toLowerCase() + a.slice(1, a.length-1).toUpperCase() + a.charAt(a.length-1).toLowerCase() );
 */

/* let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName.includes('z')); // e
console.log(); // e
console.log(); // eee
 */

/*  Lesson 1: Number
console.log(1000000) 
console.log(1_000_000); // the same output "syntactic suger"
console.log(1e6); // the same output
console.log(10**6); // the same output
console.log(Number.MAX_SAFE_INTEGER); // here you're interaction with values are stable. becareful when exceeding it
console.log(Number.MAX_VALUE); // Maximum number value in JS that you cannot access beyond
*/

/* //Challenge 1
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d))); // 2
// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.round(d))); // 10000
// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(Math.floor(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(parseInt(d)); // 2
// Use Variables b + d To Get This Valus
console.log((parseInt(b) / Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.round(parseInt(b) / Math.ceil(d))); // 67 => Number
 */

/* // Challenge 2:
let a = "Elzero Web School";
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6)); //sol. 1
console.log(a.charAt(13).toUpperCase().repeat(8)); //sol. 2
console.log(a.split(" ", 1)); //sol. 3
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`); //sol. 4
console.log(a.charAt(0).toLowerCase() +
    a.slice(1, a.length - 1).toUpperCase() +
    a.charAt(a.length - 1).toLowerCase()
); //sol. 5 
*/

/* // Assignment 1
// Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000); // 100000
console.log(100_000); // 100000
console.log(1e5); // 100000
console.log(1000*100); // 100000
console.log(10 ** 5); // 100000
console.log(Math.pow(10, 5)); // 100000
console.log(parseInt("100000")); // 100000
console.log(Number("100000")); // 100000
console.log(+("100000")); // 100000
console.log(Math.trunc(100000.23)); // 100000
console.log(Math.round(99999.5)) //100
console.log(Math.ceil(99999.2)) //100
 */

/* //Assignment 2
console.log(-(Number.MIN_SAFE_INTEGER));
 */

/* //Assignment 3
console.log(Number.MAX_SAFE_INTEGER.toString().length);
 */

/* //Assignment 4
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(+(parseFloat(myVar).toFixed(2))); // 100.57
 */

/* //Assignment 5
let num = 10;

console.log(Number.isInteger(num) + true); // 2
 */

/* //Assignment 6
let flt = 10.4;

console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(parseInt(flt)); // 10
console.log(+(flt.toFixed(0))); // 10
 */

/* //Assignment 7
console.log(Math.round((Math.random()*4)));
 */

/* //part 2 Assignment 1
let userName = "Elzero";
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.trim().charAt(0).toLowerCase().repeat(3)); // eee
 */

/* //part 2 Assignment 2
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
 */
