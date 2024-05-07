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

/* //Lesson 2: Number Methods
console.log((100).toString()); // converts the number to string]
console.log((100).toString()); // same here
console.log((100.1).toString()); // same same here :)
console.log((100.555).toFixed(2)); // the number with two digits after the 'dot'
console.log(parseInt("100")); // the opposite of all the above. It converts the string to integer
console.log(+"100 osama"); // NaN
console.log(Number("100 osama")); // NaN
console.log(parseInt("100 osama")); // 100 as number
console.log(parseInt("osama 100 ")); // 100 as number
console.log(parseFloat(" 100.98 ")); // same as 'parseInt' but returns float
console.log(Number.isInteger("100")); // false
console.log(Number.isInteger(100.55)); // false
console.log(Number.isInteger(100)); // true

console.log(Number.isNaN("osama")); // false: it deals with NaN as value that has specific condition to be true. yes "osama" is not a number but it's not NaN. it's actually a string
console.log(Number.isNaN("osama" / 20)); // true: Now this is NaN!. It's not string (not after dividing it by 20) it's like a number datatype but it's not a number. so, NaN! :)
 */

/* //Lesson 3: Math Object
console.log(Math.round(99.2)); //99
console.log(Math.round(99.5)); //100
console.log(Math.ceil(99.2)); //100
console.log(Math.floor(99.8)); //99

console.log(Math.min(10, 20, 100, -100, 90)); //-100
console.log(Math.max(10, 20, 100, -100, 90)); //100

console.log(Math.pow(2, 4)); //16

console.log(Math.random()); //random numbers after '.'

console.log(Math.trunc(99.99)); // returns only the integer value (the numbers before '.')
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

/* // Lesson 4: String Methods
let theName = " Ahmed ";
let theList = [1, 2, 3, 4, 5];

console.log(theName);
console.log(theName.charAt(5)); // if the number is outside the string's indexes, then it will not out anything
console.log(theName[5]); // if the number is outside the string's indexes, then it will out 'undefined'
console.log(theName.length);
console.log(theName.trim()); // removes white spaces from the beginning and the end.
console.log(theName.trim().charAt(2).toUpperCase()); // retrieving the letter 'M' in uppercase
 */

/* // lesson 5: String Methods II
let a = "Elzero Web School";

console.log(a.indexOf("Web")); // the index of the first accurance of the value specified
console.log(a.lastIndexOf("o")); //15 --> the last accurance of the value
console.log(a.slice(0, 6));
console.log(a.slice(-6)); // will start counting from the end till it approaches the index, then slice to the end (in this case)
console.log(a.repeat(2)); // repeat the logging 'a' 2 times
console.log(a.split()); // split it to an array, if the separator is defined it will separate every part of it based on the separator. (when specifing the separator, every accurance of the separator will cut the content before)
console.log(a.split(" ")); // split it to an array, if the separator is defined it will separate every part of it based on the separato. (when specifing the separator, every accurance of the separator will cut the content before)
console.log(a.split(" ", 2)); // limits the number of cutting 'spliting' to just 2 times, and everycontent after it will be ignored (dividing the string into an array with 2 elements)
 */

/* // lesson 6: String Methods III
let a = "Elzero Web School";

console.log(a.length);
console.log(a.substring(2, 6)); // the start index is must
console.log(a.substring(6, 2)); // if the start index is higher than the end index, it'll swap them. in this case: same output.
console.log(a.substring(-10, 6)); // if the start was negative, it will force it to start from 0.
console.log(a.substring(a.length - 1)); // just output the last index
console.log(a.substring(a.length - 5, a.length - 3)); // doing the same as 'slice'
console.log(a.substr(0, 2)); // the start is must, and then counting (NOT specifing the end) the indexes to stop
console.log(a.substr(18, 2)); // if the start was a higher value than the length, it will out an empty string
console.log(a.includes("Web")); // checks ..., then true or false, the second parameter is optional, which is the position I start search from
console.log(a.startsWith("zero", 2)); // if the second parameter specified, it will check if your string 'at that position' starts with the value specified or not, it can be an string 'not just a character'
console.log(a.endsWith("ro", 6)); // the same but the second parameter is length not a position (start counting from the start till reaches the number specified, at this point, it ends with the value specified or not?)
console.log(a.endsWith("k")); // if the second parameter is not specified, it will check if the whole string ends with the value specified or not.
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
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True
 */

/* //part 2 Assignment 2
let userName = "Elzero";
console.log(userName.substring(0, 1).toLowerCase());
console.log(userName.substr(0, 1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0, 1).toLowerCase()); // e
console.log(userName.trim().charAt(0).toLowerCase().repeat(3)); // eee
 */
