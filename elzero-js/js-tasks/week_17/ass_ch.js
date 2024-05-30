// Ass-1
/* let setOfNumbers = new Set([10]);
setOfNumbers.add(20).add(setOfNumbers.size);
console.log(setOfNumbers);
console.log([...setOfNumbers.keys()][setOfNumbers.size - 1]);
 */

// Ass-2
/* let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];
console.log([...new Set(myFriends)].sort());
// Needed Output
//(4)[("Ahmed", "Mahmoud", "Osama", "Sayed")];
 */

// Ass-3
/* 
let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

let map = new Map(Object.entries(myInfo));

console.log(map);
console.log(map.size);
console.log(map.has("role"));
// Needed Output
//   Map(3) {'username' => 'Osama', 'role' => 'Admin', 'country' => 'Egypt'}
//   3
//   true
 */

// Ass-4 // need more study
/* const theNumber = 100020003000;
console.log(+[...new Set(theNumber.toString())].sort().join(""));
// Needed Output: 123
 */
/* // topics covered:
  -- toString()
  -- new Set()
  -- spread operator (...)
  -- [].sort()
  -- [].join("")
  -- unary operator (+)
   */

// Ass-5
/* let theName = "Elzero";
console.log([...theName]);
console.log([].concat(...theName));
console.log(theName.split(""));
console.log(Array.from(theName));
console.log(Object.assign([], theName));
 */
// Needed Output: ['E', 'l', 'z', 'e', 'r', 'o']
/* // topics need to learn about:
  -- STRING.split("");
  -- Array.from(STRING);
  -- Object.assign([], STRING);
*/

/* // Ass-6 - ch
let chars = ["A", "B", "C", 20, "D", "E", 10, 15, 6];
let ctr = 0;
chars.forEach(function (item, i) {
  if (typeof item == "number") {
    chars.splice(i, 1);
    chars.unshift(item);
    ctr++;
  }
});

chars.copyWithin(0, ctr, ctr + ctr);
console.log(chars);

// topics need to revision:- ([].splice() - [].unshift() - [].sort())
*/

/* // ass - 7
let numsOne = [1, 2, 3];
let numsTwo = [4, 5, 6];

// 1st
console.log(numsOne.concat(numsTwo));
// 2nd
console.log([...numsOne, ...numsTwo]);
// 3rd
numsOne.push.apply(numsOne, numsTwo);
console.log(numsOne);
// Needed Output [1, 2, 3, 4, 5, 6]
// topics need rev -> [].push() - .apply()
 */

// ass - 8
let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log(Number(Math.max(...n1)) * [...n1, ...n2].length);
// Output: 210
