/* // ass - 2 & 3 & 4
let myRequest = new XMLHttpRequest();
myRequest.open("GET", "articles.json");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // JSON Object Content Here
    console.log(this.responseText);

    this.onloadend = function () {
      // Data Loaded
      console.log("Data Loaded");
    };

    let jsData = JSON.parse(this.responseText);

    let mainData = [];
    let container = document.createElement("div");
    container.setAttribute("id", "data");

    for (let i = 0; i < jsData.length; i++) {
      jsData[i].Dep = "All";
      mainData[i] = jsData[i];

      let div = document.createElement("div");
      let content = `<h2>Title ${mainData[i].id}</h2>
      <p>Article Number ${mainData[i].id} Body</p>
      <p>Author: ${mainData[i].name}</p>
      <p>Category: ${mainData[i].Dep}</p>
      `;
      div.innerHTML = content;
      container.appendChild(div);
    }
    document.body.appendChild(container);
  }
  // mainData Variable Content
  console.log(mainData);
  let updatedData = JSON.stringify(jsData);
  // UpdatedData Variable Content
  console.log(updatedData);
};
 */
