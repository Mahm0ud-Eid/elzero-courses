// #094 – Event Simulation – Click, Focus, Blur
/* // You don't do it by yourself. you do some action and then it will cause an event so it's like as it's (Simulation)
let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");

window.onload = function () {
  one.focus();
};

// one.onblur = function () {
//   document.links[0].click();
// };

one.oninput = function () {
  if (one.value.length === 2) {
    two.focus();
  }
};

two.oninput = function () {
  if (two.value.length === 2) {
    three.focus();
  }
};

three.oninput = function () {
  if (three.value.length === 2) {
    four.focus();
  }
};

four.oninput = function () {
  if (four.value.length === 2) {
    five.focus();
  }
};
 */

// #095 – ClassList Object And Methods
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

/* let element = document.getElementById("my-div");

console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("osama"));
console.log(element.classList.contains("show"));
console.log(element.classList.item("3"));

element.onclick = function () {
  //   element.classList.toggle("show");
  this.classList.add("add-one", "add-two");
  this.classList.remove("one", "two");
  this.classList.toggle("osama"); // if the class is existing, it will delete it, if no, will add it
};
 */

// #096 – CSS Styling And Stylesheet
/* let element = document.getElementById("my-div");

element.style.color = "red";
element.style.fontWeight = "bold"; // if the property consists of two word, use camelCase typing

element.style.cssText = "font-weight: bold; color: green";

// setting and removing property in inline css
element.style.removeProperty("color");
element.style.setProperty("font-size", "40px", "important");

// setting and removing property in external css
document.styleSheets[0].rules[0].style.removeProperty("line-height");
document.styleSheets[0].rules[0].style.setProperty("background-color", "red");
 */

// #097 – Before, After, Prepend, Append, Remove
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

/* let element = document.getElementById("my-div");
let createdP = document.createElement("p");

element.before("Hello From JS");
element.after(createdP);

element.append("- Hello From JS");
element.prepend(createdP);

// element.remove(); // removes the element from the whole DOM, this different from (CSS 'display: none') which just making the element disappear
 */

// #098 – DOM Traversing
/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

/* let span = document.querySelector(".two");

span.nextSibling; // just the next node
span.nextElementSibling; // just the next element, it will ignore 'for example' comments
span.previousSibling;
span.previousElementSibling; // same but the previous
console.log(span.parentElement); // this will show the 'div' element. (because it's the parent here:))

span.onclick = function () {
  span.parentElement.style.opacity = "0"; // or just use '.remove()'
};
 */

// #099 – DOM Cloning
/* let myP = document.querySelector("p").cloneNode(true); // if you didn't specify 'deep' it will be setted 'false' by default. and this will clone the element with it's attributes but not containing it's content. But, with true, it will clone all of the element just like 'copy & paste'. but cloning also clones the 'id' of the element, so you have to work with this manually
let myDiv = document.querySelector("div");

myP.id = `${myP.id}-clone`; // thanks to '.cloneNode()', Now I'm dealing with the cloned version
myDiv.appendChild(myP);
 */

// #100 – AddEventListener
/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

/* // You can add more than one event on the element, but the normal way can't do that, always the last event will overwrite the previous.
// the old way
let myP = document.querySelector("p");

// myP.onclick = one; // onclick differs from the 'click' which we used in simulating events, that when something happens (onload, onblur, onfocus, .etc) we will create/do an event 'simulating'
// myP.onclick = two; // this will overwrite the above one

function one() {
  console.log("Message From OnClick 1");
}
function two() {
  console.log("Message From OnClick 2");
}

// window.onload = "osama"; // this will not produce an error. actually, it will not produce anything :). but with 'addEventListenere' this can behave differently

myP.addEventListener("click", function () {
  console.log("Message From addEventListener");
}); // I can use anonymous function with it.

myP.addEventListener("click", one); // same thing with normal functions
myP.addEventListener("click", two); // here we can use more than one event and functions and they will not overwrite eachone. they just execute respectivelly
// myP.addEventListener("click", "two"); // here this produces an error!

let newP;
myP.onclick = function () {
  newP = myP.cloneNode(true);
  newP.className = "cloned";
  document.body.appendChild(newP);
};

let cloned = document.querySelector(".cloned");

// cloned.onclick = function () {
//   // this will produce an error. because, the element doesn't exist yet! And this is one of the big use cases and powerfull features of 'addEventListener'
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "cloned") {
    // if the element that I made the 'event' on (clicked it) it's class = 'cloned' it will execute the following line
    console.log("I am cloned");
  }
}); // Here we made it!
 */

// #101 – DOM Challenge
