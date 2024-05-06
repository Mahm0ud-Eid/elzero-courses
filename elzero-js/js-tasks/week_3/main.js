// Assingment 1
/* // Replace ? With Arithmetic Operators
console.log((((((10 + 20) % 15) % 3) % 190) * 10) / 400); // 0
 */

/* // Assignment 2
let num = 3;

// Solution One
  console.log(num*(true+true)); // 6

// Solution Two
  console.log(num*num-num); // 6

// Soultion Three
  console.log(++num+true+true); // 6

// Soultion Four
  console.log(--num+true+true+true); // 6

// Solution Five
  console.log(num+true+true+true); // 6

// Solution Six
  console.log(num+num); // 6
 */

/* // Assignment 3
let num = "10";

// Solution One
console.log(+num * (true + true)); // 20
// Solution Two
console.log(Number(num * (true + true))); // 20
// Solution Three
console.log(+num + +num); // 20
// Solution Four
console.log(++num + --num - true); // 20
 */

/* // Assignment 4
let points = 10;

points++;
points++;
points++;
console.log(points); // 13

points -= true + true + true + true + true;
console.log(points); // 8;
 */

// Challenge 1
// let a = 10;
// let b = "20";
// let c = 80;

// console.log(++a + +b++ + +c++ - +a++);
/*
  [++a] [+]
  [++a]
  - Value: 11
  - Explain: preincreament
  [+]
  - Explain: add operator

  [+b++] [+]
  [+b++]
  - Value: 20
  - Explain: type coersion and postincreament
  [+]
  - Explain: add operator

  [+c++] [-]
  [++a]
  - Value: 80
  - Explain: type coersion and postincreament
  [+]
  - Explain: add operator
  [+a++]
  - Value: 11
  - Explain:  postincreament

*/
// console.log(++a + -b + +c++ - -a++ + +a);
// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

//  Challenge 2
/* let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d-- * e); // 2000
console.log(-d * ++g - --f); // 2000
*/
