// Ass - 1
/* let promptMsg = prompt("Print Number From - To", "Example: 5: 20");
let numbers = promptMsg.trim().split("-");
num1 = parseInt(numbers[0]);
num2 = parseInt(numbers[1]);

if (num1 > num2) {
  for (let i = num2; i <= num1; i++) {
    console.log(i);
  }
} else if (num1 < num2) {
  for (let i = num1; i <= num2; i++) {
    console.log(i);
  }
} else {
  console.log("Two Numbers Are Equal");
}
 */

// Ass - 2
/* function popUp() {
  let popDiv = document.createElement("div");
  let popHead = document.createElement("h1");
  let popP = document.createElement("p");
  let popX = document.createElement("button");
  let text = document.createTextNode("Welcome");
  let text2 = document.createTextNode("Welcome To Elzero Web School");

  popX.append("X");
  popP.append(text2);
  popHead.appendChild(text);
  popDiv.append(popHead, popP, popX);
  document.body.prepend(popDiv);

  popX.onclick = function () {
    popDiv.remove();
  };
}

setTimeout(popUp, 2000);
 */

// Ass - 3
/* let div = document.createElement("div");
div.innerHTML = 10;
document.body.prepend(div);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);
 */

// Ass - 4
/* let div = document.createElement("div");
div.innerHTML = 10;
document.body.prepend(div);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    location.replace("https://elzero.org");
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);
 */

// Ass - 5
/* let div = document.createElement("div");
div.innerHTML = 10;
document.body.prepend(div);

function countDown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "5") {
    window.open(
      "https://elzero.org",
      "_blank",
      "width=400,height=400,left=200,top=100",
      ""
    );
  }

  if (div.innerHTML === "0") {
    clearInterval(counter);
  }
}

let counter = setInterval(countDown, 1000);
 */
