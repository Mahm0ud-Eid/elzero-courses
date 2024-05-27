// Ass 1
/* function sayHello(theName, theGender) {
  let message = `Hello`;
  if (theGender === "Male") {
    message = `Hello Mr ${theName}`;
  } else if (theGender === "Female") {
    message = `Hello Miss ${theName}`;
  } else if (theGender === undefined) {
    message = `Hello ${theName}`;
  }
  console.log(message);
  return message;
}

// Needed Output
sayHello("Osama", "Male"); // "Hello Mr Osama"
sayHello("Eman", "Female"); // "Hello Miss Eman"
sayHello("Sameh"); // "Hello Sameh"
 */

// Ass2
/* function calculate(firstNum, secondNum, operation) {
  if (secondNum === undefined) {
    console.log("Second Number Not Found");
  } else if (operation === undefined) {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "add") {
    console.log(`${firstNum + secondNum}`);
  } else if (operation === "subtract") {
    console.log(`${firstNum - secondNum}`);
  } else if (operation === "multiply") {
    console.log(`${firstNum * secondNum}`);
  }
}

// Needed Output
calculate(20); // Second Number Not Found
calculate(20, 30); // 50
calculate(20, 30, "add"); // 50
calculate(20, 30, "subtract"); // -10
calculate(20, 30, "multiply"); // 600
 */

// Ass 3
/* function ageInTime(theAge) {
  if (theAge >= 110 || theAge <= 10) {
    console.log("Age Out Of Range");
  } else {
    console.log(`Months Example => ${theAge * 12}`);
    console.log(`Weeks Example => ${theAge * 52}`);
    console.log(`Days Example => ${theAge * 360}`);
    console.log(`Hours Example => ${theAge * 360 * 24}`);
    console.log(`Minutes Example => ${theAge * 360 * 24 * 60}`);
    console.log(`Seconds Example => ${theAge * 360 * 24 * 60 * 60}`);
  }
}

// Needed Output
ageInTime(110); // Age Out Of Range
ageInTime(38); // Months Example => 456 Months
 */

// Ass 4
/* function checkStatus(a, b, c) {
  let check = [a, b, c];
  let name, state, age;
  for (let i = 0; i < check.length; i++) {
    if (typeof check[i] === "string") {
      name = check[i];
    } else if (typeof check[i] === "number") {
      age = check[i];
    } else if (typeof check[i] === "boolean") {
      state = check[i];
    }
  }

  if (state) {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Available For Hire`
    );
  } else {
    console.log(
      `Hello ${name}, Your Age Is ${age}, You Are Not Available For Hire`
    );
  }
}
// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
 */

// Ass 5
/* function createSelectBox(startYear, endYear) {
  document.write(`<select>`);
  for (; startYear <= endYear; startYear++) {
    document.write(`<option value="${startYear}">${startYear}</option>`);
  }
  document.write(`</select>`);
}
createSelectBox(2000, 2021);
 */

// Ass 6
/* function multiply(...args) {
  let m = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") continue;
    args[i] = parseInt(args[i]);
    m *= args[i];
  }
  console.log(m);
}
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000
 */
