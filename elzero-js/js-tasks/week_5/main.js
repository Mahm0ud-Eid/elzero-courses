/* let a = 10;

a < 10 ? 
    console.log(10) 
: a >= 10 && a <= 40 ? 
    console.log("10 to 40") 
: a > 40 ? 
    console.log("> 40") 
: console.log("Unknown") challenge 1 */

/* let st = "Elzero Web School";

if ((st.length*2).toString() === "34") {
    console.log("Good")
}

if ((st.charAt(st.indexOf("W"))).toLowerCase() || (st.charAt(st.indexOf("W"))) === "W") {
    console.log("Good")
}
//
if (st !== "string") {
    console.log("Good")
}

if ((typeof((!((typeof st)).toString())+1)).toString() === "number") {
    console.log("Good")
}

if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
    console.log("Good")
} challenge 2 */

/* let job = "jdk";
let salary = 0;

switch (job) {
    case "Manager":
        salary = 8000;
        console.log(salary); break;
    case "IT":
    case "Support":
        salary = 6000;
        console.log(salary); break;
    case "Developer":
    case "Designer":
        salary = 7000;
        console.log(salary); break;
    default:
        salary = 6000;
        console.log(salary); break;

}

 challenge 3 */

/* let holidays = 0;
let money = 0;

if (holidays === 0) {
    money = 5000;
    console.log(`My Money is ${money}`);
} 
else if (holidays === 1 || holidays === 2) {
    money = 3000;
    console.log(`My Money is ${money}`);
} 
else if (holidays === 3) {
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 4) {
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if (holidays === 5) {
    money = 0;
    console.log(`My Money is ${money}`);
}
else {
    money = 0;
    console.log(`My Money is ${money}`);
}  challenge 4 */

/* ------------------------------------------------------------------------- */
/* // Challenge 1
  // - 1
  let a = 10;
  a < 10
    ? console.log(10)
    : a >= 10 && a <= 40 
    ? console.log("10 To 40")
    : a > 40
    ? console.log("> 40")
    : console.log("Unknown");

    
let st = "Elzero Web School";
// - 2
// 1
if (st.charAt(st.indexOf('W')).toLowerCase() === "w") {
  console.log("Good");
}

// 2
if (typeof(st.length) !== "string") {
  console.log("Good");
}

//3
if (typeof(st.length) === "number") {
  console.log("Good");
}

// 4
if (st.slice(0, 6).repeat(2)=== "ElzeroElzero") {
  console.log("Good");
} 
*/

/* ------------------------------------------------------------------------- */
// Switch Statement Challenge
// 1st

/* let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

switch (job) {
  case "Manager": salary = 8000; 
    console.log(`salary is ${salary}`); break;
  case "IT":
  case "Support": salary = 6000; 
    console.log(`salary is ${salary}`); break;
  case "Developer":
  case "Designer": salary = 7000; 
      console.log(`salary is ${salary}`); break;
  default: salary = 4000;
    console.log(`salary is ${salary}`); break;
}
 */

// 2nd
/*     let holidays = 4;
    let money = 0;
    
    switch (holidays) {
      case 0: money = 5000; console.log(`My Money is ${money}`); break;
      case 1:
      case 2: money = 3000; console.log(`My Money is ${money}`); break;
      case 3: money = 2000; console.log(`My Money is ${money}`); break;
      case 4: money = 1000; console.log(`My Money is ${money}`); break;
      case 5: money = 0; console.log(`My Money is ${money}`); break;
      default: money = 0; console.log(`My Money is ${money}`);
    }

    if (holidays === 0) {
      money = 5000;
      console.log(`My Money is ${money}`);
    }
    else if (holidays === 1 || holidays === 2) {
      money = 3000;
      console.log(`My Money is ${money}`);
    }
    else if (holidays === 3) {
      money = 2000;
      console.log(`My Money is ${money}`);
    }
    else if (holidays === 4) {
      money = 1000;
      console.log(`My Money is ${money}`);
    }
    else if (holidays === 5) {
      money = 0;
      console.log(`My Money is ${money}`);
    }
    else {
      money = 0;
      console.log(`My Money is ${money}`);
    }
 */

/* // Assignment 1-1
console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(+-50 < -+"-40"); // true
console.log(-10 !== -"-40"); // true
console.log(+"10" === 10); // true
console.log(-20 < false); // true
 */

/* // Assignment 1-2
let num1 = 10;
let num2 = 20;

console.log(num2 > num1); // true
console.log(num2 != num1); // true
console.log(num2 >= num1); // true
console.log(num1 < num2); // true
console.log(num1 <= num2); // true
console.log(num1 != num2); // true
 */

/* // Assignment 1-3
let a = 20;
let b = 30;
let c = 10;

console.log((a < b && a > c) || a == b); // true
console.log(a < b > a < c); // true
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c)); // true
 */

/* // Assignment 2-1
// Test Case 1
var num = 9; // "009"
if (num < 10) {
  console.log("00" + num);
}
// Test Case 2
var num = 20; // "020"
if (num > 10 && num < 100) {
  console.log("0" + num);
}
// Test Case 3
var num = 110; // "110"
if (num >= 100) {
  console.log(num);
}
 */

/* // Assignment 2-2
let num1 = 9;
let str = "9";
let str2 = "20";

if (num1 == str) {
  console.log("{num1} Is The Same Value As {str}");
}
if (num1 == str && num1 !== str) {
  console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
if (num1 !== str2 && num1 !== str2) {
  console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
if (str !== str2 && typeof str == typeof str2) {
  console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}
 */

/* // Assignment 2-3
let num1 = 10;
let num2 = 30;
let num3 = "30";

if (num3 > num1 && typeof num3 != typeof num2) {
  console.log(
    "30 Is Larger Than 10 And Type string Not The Same Type As number"
  );

  if (num3 == num2) {
    console.log(
      "30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number"
    );
    if (typeof num3 != typeof num1) {
      console.log(
        "{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}"
      );
    }
  }
}
 */

/* // Assignment 2-4
let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}
// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
 */

/* // Assignment 3-1
let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday
day = day.trim().charAt(0).toUpperCase() + day.substring(4).trim();

switch (day) {
  case "Friday":
  case "Saturday":
  case "Sunday":
    console.log("No Appointments Available");
    break;
  case "Monday":
  case "Thursday":
    console.log("From 10:00 AM To 5:00 PM");
    break;
  case "Tuesday":
    console.log("From 10:00 AM To 6:00 PM");
    break;
  case "Wednesday":
    console.log("From 10:00 AM To 7:00 PM");
    break;
  default:
    console.log("It's Not A Valid Day");
    break;
}
 */
