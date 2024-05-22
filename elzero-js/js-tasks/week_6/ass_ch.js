//Ass 1
/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop();
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.slice(0, 4);
console.log(myFriends); // ["Ahmed", "Elham", "Osama"]; */

//Ass 2
/* let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

friends.shift();
friends.pop();

console.log(friends); // ["Eman", "Osama"]
 */

//Ass 3
/* let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

finalArr = arrOne.concat(arrTwo).sort().reverse();

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"] 
 */

//Ass 4
/* let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];
let learn = words.sort().shift().shift();

console.log(learn.slice(website.length).toUpperCase()); // ZERO
 */

//Ass 5
/* let needle = "JS";
let haystack = ["PHP", "JS", "Python"];
// Write 3 Solutions
// 1st
let bool = haystack.includes(needle);
if (bool == true) {
  console.log("Found");
}
// 2nd
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
// 3rd
if (haystack.indexOf("JS") === haystack.indexOf(needle)) {
  console.log("Found");
}
 */

//Ass 6
/* let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

allArrs = arr1
  .concat(arr2)
  .sort()
  .reverse()
  .splice(allArrs.length, arr1.length)
  .reverse()
  .join("")
  .toLowerCase();

console.log(allArrs); // fxy
 */

//Ch 1
/* let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

my = my.reverse().slice(my.length / counter);

console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(my.length / counter, -(my.length / counter))); // ["Elham", "Mazero"]

console.log(
  my[my.length - counter].slice(
    zero,
    my.length - counter + my.length - counter
  ) +
    my[my.length - counter + my.length - counter].slice(
      my.length - counter + my.length - counter
    )
); // "Elzero"

console.log(
  my[my.length - counter + my.length - counter].slice(
    -(my.length - counter + my.length - counter),
    -(my.length - counter)
  ) +
    my[my.length - counter + my.length - counter]
      .slice(-(my.length - counter))
      .toUpperCase()
); // "rO"

console.log(my.length - counter);
 */
