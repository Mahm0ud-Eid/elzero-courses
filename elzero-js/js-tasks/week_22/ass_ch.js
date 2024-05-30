/* // ass - 1
const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      // condition for results
      if (this.readyState === 4 && this.status === 200) {
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No data found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("content.json")
  .then((result) => addElementsToPage(result));

 */

/* // ass - 2
async function fetchData() {
  let myData = await fetch("content.json");
  myData = await myData.json();
  addElementsToPage(myData);
}

fetchData();

function addElementsToPage(values) {
  values.length = 5;
  for (let i = 0; i < values.length; i++) {
    let div = document.createElement("div");
    let heading = document.createElement("h3");
    let paragraph = document.createElement("p");
    div.append(...[heading, paragraph]);
    heading.append(values[i]["title"]);
    paragraph.append(values[i]["description"]);
    document.body.appendChild(div);
  }
}
 */
