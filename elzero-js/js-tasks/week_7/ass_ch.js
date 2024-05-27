//Ass 1
/* let start = 10;
let end = 100;
let exclude = 40;

for (let i = start; i <= end; i += start) {
  if (i === exclude) continue;
  console.log(i);
}
 */

//Ass 2
/* let start = 10;
let end = 0;
let stop = 3;

for (let i = start; i >= end; i--) {
  if (i < start) {
    console.log(`${end}${i}`);
  } else {
    console.log(i);
  }
  if (i === stop) {
    break;
  }
}
 */

//Ass 3
/* let start = 1;
let end = 6;
let breaker = 2;

for (let i = start; i <= end; i++) {
  console.log(i);
  for (let j = start; j < breaker; j++) {
    console.log(`-- ${breaker}`);
    console.log(`-- ${breaker + breaker}`);
  }
}
 */

//Ass 4
/* let index = 10;
let jump = 2;
let end = 0;

for (;;) {
  console.log(index);
  if (index == jump * jump) break;
  index -= jump;
}
 */

//Ass5
/* let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";

let j = letter.length;
for (let i = --letter.length; i < friends.length; i++) {
  if (friends[i][--letter.length] === letter.toUpperCase()) continue;
  console.log(`${j} => ${friends[i]}`);
  j++;
}
 */

//Ass6
/* let start = 0;
let swappedName = "elZerO";

let arr = [];
for (; start < swappedName.length; start++) {
  if (swappedName[start] === swappedName[start].toLowerCase()) {
    arr[start] = swappedName[start].toUpperCase();
  } else {
    arr[start] = swappedName[start].toLowerCase();
  }
}

console.log(arr.join(""));
 */

//Ass 7
/* let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for (++start; start < mix.length; start++) {
  if (typeof mix[start] === "string") continue;
  console.log(mix[start]);
}
 */

// That was part one. let's move to the 2nd part

//Ass 8
/* let index = 0;
let counter = 0;
let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];

while (index < friends.length) {
  if (
    !(
      friends[index][friends.length - friends.length] == "A" ||
      typeof friends[index] === "number"
    )
  )
    console.log(`${++counter} => ${friends[index]}`);
  index++;
}
 */

//Ch 1
let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
];
let counter = 0;
for (; counter < myAdmins.length; counter++) {
  if (myAdmins[counter] === "Stop") break;
}
document.write(`<div>We Have ${counter} Admins</div>`);
myAdmins.length = counter;

for (let i = 0; i < myAdmins.length; i++) {
  document.write(`<hr>`);
  document.write(`<div>The Admin For Team ${i + 1} Is ${myAdmins[i]} </br>
  <h3>Team Members: </h3>`);
  let count = 0;
  let ctr = 0;

  for (let j = 0; j < myEmployees.length; j++) {
    if (myEmployees[j][count] === myAdmins[i][count]) {
      document.write(`- ${++ctr} ${myEmployees[j]} </br>
      `);
    }
  }
  document.write(`</div>`);
}
