/* Assignment - 3 */
let p = document.querySelector("p");
let div = document.querySelector("div");
// 1
p.remove();
// 2
let sText = document.createTextNode("Start");
let eText = document.createTextNode("End");
let sDiv = document.createElement("div");
let eDiv = document.createElement("div");

sDiv.setAttribute("class", "start");
eDiv.setAttribute("class", "end");
sDiv.setAttribute("title", "start Element");
eDiv.setAttribute("title", "end Element");
sDiv.setAttribute("data-value", "Start");
eDiv.setAttribute("data-value", "End");

sDiv.appendChild(sText);
eDiv.appendChild(eText);

div.before(sDiv);
div.after(eDiv);
