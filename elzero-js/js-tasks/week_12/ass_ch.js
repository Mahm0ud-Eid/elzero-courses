// Ass 1
/* let div1 = document.getElementById("elzero");
let div2 = document.getElementsByClassName("element");
let div3 = document.getElementsByName("js");
let div4 = document.getElementsByTagName("div");
let div5 = document.querySelector(".element");
let div6 = document.querySelector("#elzero");
let div7 = document.querySelector("div");
let div8 = document.querySelector("[name=js]");
let div9 = document.querySelectorAll(".element");
let div10 = document.querySelectorAll("#elzero");
let div11 = document.querySelectorAll("div");
let div12 = document.body.children[0];
let div13 = document.body.children;
let div14 = document.body.firstElementChild;
let div15 = document.body.childNodes[1];

console.log(div1);
console.log(div2);
console.log(div3);
console.log(div4);
console.log(div5);
console.log(div6);
console.log(div7);
console.log(div8);
console.log(div9);
console.log(div10);
console.log(div11);
console.log(div12);
console.log(div13);
console.log(div14);
console.log(div15);
 */

// Ass 2
/* let imagesList = document.getElementsByTagName("img");

for (let i = 0; i < imagesList.length; i++) {
  imagesList[i].setAttribute(
    "src",
    "https://elzero.org/wp-content/themes/elzero/imgs/logo.png"
  );
  imagesList[i].setAttribute("alt", "Elzero Logo");
}
 */

// Ass 3
/* let myIn = document.querySelector('[name="dollar"]');
let result = document.querySelector(".result");
myIn.oninput = function () {
  if (+myIn.value > 0) {
    result.innerHTML = `{${myIn.value}} USD Dollar = ${
      myIn.value * (15.6).toFixed(2)
    } Egyptian Pound`;
  }
};
 */

// Ass 4
/* let divOne = document.getElementsByTagName("div")[0];
let divTwo = document.getElementsByTagName("div")[1];
let textOne = divOne.innerText;
let textTwo = divTwo.innerText;
let attNameOne = divOne.getAttributeNames()[1];
let attOne = divTwo.getAttributeNode(attNameOne).value;
let attTwo = divOne.getAttributeNode(attNameOne).value;

divOne.innerText = textTwo;
divTwo.innerText = `${textOne} 2`;
divOne.setAttribute(attNameOne, attOne);
divTwo.setAttribute(attNameOne, attTwo);
console.log(divOne);
 */

// Ass 5
/* let imagesList = document.getElementsByTagName("img");

for (let i = 0; i < imagesList.length; i++) {
  if (imagesList[i].hasAttribute("alt")) {
    imagesList[i].setAttribute("alt", "Old");
  } else {
    imagesList[i].setAttribute("alt", "Elzero New");
  }
}
 */

// Ass 6
/* let create = document.querySelector('[name="create"]');
let result = document.querySelector(".result");

let elNum;
let elText;
let elType;
let results = document.querySelector(".results");
create.onclick = function (e) {
  e.preventDefault();
  elNum = document.querySelector('[name="elements"]').value;
  elText = document.querySelector('[name="texts"]').value;
  elType = document.querySelector('[name="type"]').value;
  results.innerHTML = "";

  for (let i = 0; i < elNum; i++) {
    let myMainElement = document.createElement(`${elType.toLowerCase()}`);
    myMainElement.setAttribute("class", "box");
    myMainElement.setAttribute("title", "Element");
    myMainElement.setAttribute("id", `id-${i + 1}`);
    myMainElement.innerText = elText;
    results.appendChild(myMainElement);
  }
};
console.log(elNum, elText, elType);
 */
