/* // ass - 1
let dateNow = new Date();
let birthDay = new Date("Apr 26, 2003");
let dateDiff = dateNow - birthDay;

console.log(`${parseInt(dateDiff / 1000)} Seconds`);
console.log(`${parseInt(dateDiff / 1000 / 60)} Minutes`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60)} Hours`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24)} Days`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 30)} Months`);
console.log(`${parseInt(dateDiff / 1000 / 60 / 60 / 24 / 30 / 12)} Years`);
 */

/* // ass - 2
let year = new Date("1980-01-01T00:00:01");

console.log(year);
 */

/* // ass - 3
let dateNow = new Date();
dateNow.setMonth(6);
dateNow.setDate(0);

console.log(dateNow);
console.log(`Previous Month Is June And Last Day Is ${dateNow.getDate()}`);
 */

/* // ass - 4
console.log(new Date(1040, 0, 1));
console.log(new Date("jan 1 1040"));
console.log(new Date("1040-01-01T00:00:00"));
 */

/* // ass - 5
const t0 = performance.now();
for (let i = 1; i <= 99999; i++) {
  console.log(i);
}
const t1 = performance.now();
console.log(`Loop Took ${parseInt(t1 - t0)} Milliseconds.`);
 */

/* // ass - 6
function* gen() {
  let pattern = 140;
  let num = 14;

  yield num;

  while (true) {
    yield (num += pattern);
    pattern += 200;
  }
}

let generator = gen();

console.log(generator.next()); // {value: 14, done: false}
console.log(generator.next()); // {value: 154, done: false}
console.log(generator.next()); // {value: 494, done: false}
console.log(generator.next()); // {value: 1034, done: false}
console.log(generator.next()); // {value: 1774, done: false}
console.log(generator.next()); // {value: 2714, done: false}
console.log(generator.next()); // {value: 3854, done: false}
console.log(generator.next()); // {value: 5194, done: false}
console.log(generator.next()); // {value: 6734, done: false}
 */

/* // ass - 7
function* genNumbers() {
  yield* [1, 2, 2, 2, 3, 4, 5];
}
function* genLetters() {
  yield* ["A", "B", "B", "B", "C", "D"];
}

function* genAll() {
  yield* new Set(genNumbers());
  yield* new Set(genLetters());
}

let generator = genAll();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: "A", done: false}
console.log(generator.next()); // {value: "B", done: false}
console.log(generator.next()); // {value: "C", done: false}
console.log(generator.next()); // {value: "D", done: false}
 */

/* // ass - 8
// main.js File
import * as modZero from "./mod-one.js";
import * as modOne from "./mod-two.js";

let calc = modZero.default;
console.log(calc(modOne.numOne, modOne.numTwo, modOne.numThree)); // 60

// mod-one.js File
export default function (numOne, numTwo, numThree) {
  return numOne + numTwo + numThree;
}

// mod-two.js File
let a = 10; // Do Not Edit Names
let b = 20; // Do Not Edit Names
let c = 30; // Do Not Edit Names

export { a as numOne, b as numTwo, c as numThree };
 */
