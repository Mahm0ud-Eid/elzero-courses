/* let a = 21;
let b = 20;
let c = b + "" + a + "_";

console.log(`_${a}_${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
 */

/*   //lesson 1: Data types
    // Types of data
    console.log(typeof "Osama Mohamed"); //1- string 
    
    console.log(typeof 2000); //2- number
    console.log(typeof 2000.99); //2- number
    console.log(typeof [10, 15, 17]); //3- Array - object
    console.log(typeof ["Os", "Ah", "Sa"]); //3- Array - object
    console.log(typeof {name: 'Osama', age: 17, country: "Eg"}); //4- Object
    console.log(typeof true, typeof false); //5- Boolean
    console.log(typeof undefined); //6- Undefined
    console.log(typeof null); //7- object
 */ // bigInt, symbol, etc...

// lesson: 2
// elzero.innerHTML = "Hello";

/*  lesson 3: var,let, and const Comparison
    - Var can redclare the variable, but let, const can't
    - Var can access the variable before declaring it, but the value will be (undefined), let and const will produce an error, you must initialize it first
    - Var provide the variable in window object scoped variable, which can produce variable scope drama in bigger projects
*/
/*
  Var
  - Redeclare (Yes)
  - Access Before Declare (Undefined)
  - Variable Scope Drama [Added To Window] ()
  - Block Or Scope Function

  Let
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function

  Const
  - Redeclare (No => Error)
  - Access Before Declare (Error)
  - Variable Scope Drama ()
  - Block Or Scope Function
*/

/*  lesson 4: String and character escape sequence
    \ : escape the following character. At the end of each line wil make you print mulitple line output as single line 
        Ex:-
        console.log("Elzer\
        web\
        school")
    \n : does the opposite :) 
*/

/*  lesson 5: concatentation
    let a = "we love";
    let b = "JS";

    document.write(a+" "+b);
*/

/*  lesson 6: template literals
    to concate variable, calculation, condition, etc : use ${}
        Ex:-
        let a = "we love";
        let b = "JS";

        console.log(`${a} ""
        ${b}`);

        Ex2:-
        let title = "Elzero";
        let desc = "Elzero Web School";

        let markUp = `
            <div class="card">
                <div class="child">
                    <h2>${title}</h2> 
                    <p>${desc}</p> 
                </div>
            </div>
        `;

        document.write(markUp);

*/

/* // Assignment 1
let numberOne = 10,
  numberTwo = 20;
console.log(numberOne + "" + numberTwo);
console.log(typeof (numberOne + "" + numberTwo));
console.log(`${numberOne}${numberTwo}`);
console.log(typeof `${numberOne}${numberTwo}`);
console.log(numberTwo + "\n" + numberOne);
console.log(`${numberTwo}
${numberOne}`);
 */

/* // Assignment 2
console.log(elzero.innerHTML); // object
console.log(typeof elzero); // object */

/* // Assignment 3
console.log(
  '`I\'m In\
\n\\\\\
\nLove \\\\ """ \'\'\'\
\n++ With ++ \
\n\\"""\\"""\
\n""JavaScript""``'
);
 */

/* // Assignemnt 4
let a = 21;
let b = 20;
let c = b + "" + a + "_";

console.log(`_${a}_${c.repeat(3)}_${b}_`); // _21_2021_2021_2021_20_
 */

/* // Ch
let theTitle = "Elzero",
  theDesc = "Elzero Web School",
  theDate = "25 / 10",
  markUp = `
<div class="card">
    <div class="child">
        <h3>Hello ${theTitle}</h3> 
        <p>${theDesc}</p> 
        <span>${theDate}</span>
    </div>
</div>
`;

document.write(markUp.repeat(4));
console.log(markUp.repeat(0));
 */
