/* // BOM Challenge - it needs to be refactored
let inTxt = document.querySelector(".input");
let inBtn = document.querySelector(".add");
let addDiv = document.querySelector(".tasks");
let childDiv;

let localTask = [];
let arrayOfTasks = [];

function addDelEls() {
  if (inTxt.value !== "") {
    localTask = [];

    let addTxt = document.createTextNode(inTxt.value);
    let childDiv = document.createElement("div");
    let delBtn = document.createElement("input");

    delBtn.setAttribute("value", "Delete");
    delBtn.setAttribute("type", "button");
    childDiv.append(addTxt, delBtn);
    childDiv.id = Date.now();
    childDiv.title = addTxt.textContent;
    addDiv.append(childDiv);
    inTxt.value = "";

    arrayOfTasks.push(childDiv);

    function createLocalObjects(arrayOfTasks) {
      for (let i = 0; i < arrayOfTasks.length; i++) {
        let obj = {};
        obj.id = arrayOfTasks[i].id;
        obj.title = arrayOfTasks[i].title;
        localTask.push(obj);
      }
    }
    createLocalObjects(arrayOfTasks);

    function setInLocal(localTask) {
      window.localStorage.tasks = JSON.stringify(localTask);
    }
    setInLocal(localTask);

    delBtn.addEventListener("click", (e) => {
      let elId = delBtn.parentElement.id;
      delBtn.parentElement.remove();
      delFromLocal(elId);
      if (addDiv.innerHTML === "") {
        localTask = [];
        arrayOfTasks = [];
        window.localStorage.clear();
        console.log(localTask);
      }
    });

    function delFromLocal(elId) {
      localTask = localTask.filter((ele) => ele.id !== elId);
      setInLocal(localTask);
    }
  }
}

function createFromLocal() {
  if (window.localStorage.tasks) {
    localTask = [];

    let returnObjs = JSON.parse(window.localStorage.tasks);
    // console.log(returnObjs[0].id);
    let delBtn = document.createElement("input");

    returnObjs.forEach((e) => {
      let addTxt = document.createTextNode(e.title);
      let childDiv = document.createElement("div");

      delBtn.setAttribute("value", "Delete");
      delBtn.setAttribute("type", "button");
      childDiv.append(addTxt, delBtn);
      childDiv.id = e.id;
      childDiv.title = addTxt.textContent;
      addDiv.append(childDiv);
      inTxt.value = "";

      arrayOfTasks.push(childDiv);
    });

    function createLocalObjects(arrayOfTasks) {
      for (let i = 0; i < arrayOfTasks.length; i++) {
        let obj = {};
        obj.id = arrayOfTasks[i].id;
        obj.title = arrayOfTasks[i].title;
        localTask.push(obj);
      }
    }
    createLocalObjects(arrayOfTasks);

    function setInLocal(localTask) {
      window.localStorage.tasks = JSON.stringify(localTask);
    }
    setInLocal(localTask);

    delBtn.addEventListener("click", (e) => {
      let elId = delBtn.parentElement.id;
      delBtn.parentElement.remove();
      delFromLocal(elId);
      if (addDiv.innerHTML === "") {
        localTask = [];
        arrayOfTasks = [];
        window.localStorage.clear();
        console.log(localTask);
      }
    });

    function delFromLocal(elId) {
      localTask = localTask.filter((ele) => ele.id !== elId);
      setInLocal(localTask);
    }
  }
}

inBtn.onclick = addDelEls;
window.onload = createFromLocal;
 */

/* // Ass1
let fonts = [`Open Sans`, `Cairo`, `Roboto`];
let colorsVals = ["red", "green", "yellow", "blue", "orange", "pink"];
let fontSizes = [];
for (let i = 16; i < 31; i++) {
  fontSizes.push(i);
}

let sel1 = document.createElement("select");
let sel2 = document.createElement("select");
let sel3 = document.createElement("select");

let selects = document.createElement("div");

function addOps(sel, opvals) {
  let opList = [];
  for (let i = 0; i < opvals.length; i++) {
    opList[i] = document.createElement("option");
    opList[i].setAttribute("class", `op${i + 1}`);
    opList[i].setAttribute("value", opvals[i]);
    if (i == 0) {
      opList[i].setAttribute("selected", "selected");
    }
    opList[i].innerText = opvals[i];
    sel.append(opList[i]);
  }
}

sel1.setAttribute("id", `sel1`);
sel2.setAttribute("id", `sel2`);
sel3.setAttribute("id", `sel3`);

addOps(sel1, fonts);
addOps(sel2, colorsVals);
addOps(sel3, fontSizes);

let sel1Ops = [];
let sel2Ops = [];
let sel3Ops = [];

function setOpsArr(sel, arrOfOps) {
  for (let i = 0; i < sel.childNodes.length; i++) {
    arrOfOps.push(sel.childNodes[i]);
  }
}

setOpsArr(sel1, sel1Ops);
setOpsArr(sel2, sel2Ops);
setOpsArr(sel3, sel3Ops);

// a function that changes the selected option and actualy make it appear
function changeSelected(sel) {
  for (let i = 0; i < sel.childNodes.length; i++) {
    if (sel.childNodes[i].hasAttribute("selected")) {
      sel.childNodes[i].removeAttribute("selected");
    }
    sel.selectedOptions[0].setAttribute("selected", "selected");
    if (sel.childNodes[i].hasAttribute("selected")) {
      console.log(sel.childNodes[i].textContent);
    }
  }
}

if (window.localStorage.getItem("fontFamily")) {
  for (let i = 0; i < sel1.childNodes.length; i++) {
    if (sel1.childNodes[i].hasAttribute("selected")) {
      sel1.childNodes[i].removeAttribute("selected");
    }

    // loop through options and set 'selected' to the option that matches value in localhost.
    if (
      sel1.childNodes[i].textContent ==
      window.localStorage.getItem("fontFamily")
    ) {
      sel1.childNodes[i].setAttribute("selected", "selected");
      console.log(sel1.childNodes[i].textContent);
    }
  }
  document.body.style.fontFamily = sel1.selectedOptions[0].value;
}

if (window.localStorage.getItem("color")) {
  for (let i = 0; i < sel2.childNodes.length; i++) {
    if (sel2.childNodes[i].hasAttribute("selected")) {
      sel2.childNodes[i].removeAttribute("selected");
    }

    // loop through options and set 'selected' to the option that matches value in localhost.
    if (
      sel2.childNodes[i].textContent == window.localStorage.getItem("color")
    ) {
      sel2.childNodes[i].setAttribute("selected", "selected");
      console.log(sel2.childNodes[i].textContent);
    }
  }
  document.body.style.backgroundColor = sel2.selectedOptions[0].value;
}

if (window.localStorage.getItem("fontSize")) {
  for (let i = 0; i < sel3.childNodes.length; i++) {
    if (sel3.childNodes[i].hasAttribute("selected")) {
      sel3.childNodes[i].removeAttribute("selected");
    }

    // loop through options and set 'selected' to the option that matches value in localhost.
    if (
      `${sel3.childNodes[i].textContent}px` ==
      window.localStorage.getItem("fontSize")
    ) {
      sel3.childNodes[i].setAttribute("selected", "selected");
      console.log(sel3.childNodes[i].textContent);
    }
  }
  document.body.style.fontSize = window.localStorage.getItem("fontSize");
}

sel1.addEventListener("change", function (e) {
  changeSelected(e.target);
  document.body.style.fontFamily = sel1.selectedOptions[0].value;
  //Add fontfamily to localstorage
  window.localStorage.setItem("fontFamily", sel1.selectedOptions[0].value);
});
sel2.addEventListener("change", function (e) {
  changeSelected(e.target);
  document.body.style.backgroundColor = sel2.selectedOptions[0].value;
  //Add color to localstorage
  window.localStorage.setItem("color", sel2.selectedOptions[0].value);
});
sel3.addEventListener("change", function (e) {
  changeSelected(e.target);
  document.body.style.fontSize = `${sel3.selectedOptions[0].value}px`;
  //Add fontsize to localstorage
  window.localStorage.setItem("fontSize", `${sel3.selectedOptions[0].value}px`);
});

selects.append(sel1, sel2, sel3);
document.body.append(selects);

// first, I will set the 'selected' options by default to the body styling.
// then I will let the user select from the option. And, when they choose the prefered choice,
// I will set them to the body. (this can be done using 'select' attribute.
// and looping through options). last and not the least,
// I will save these changes in localStorage
// and when reloading these options setted in localStorage will be setted automatic to the page
// (This can be done using localStorage.getItem)
if (sel1.firstChild.hasAttribute("selected")) {
  document.body.style.fontFamily = sel1.firstChild.value;
}
if (sel2.firstChild.hasAttribute("selected")) {
  document.body.style.backgroundColor = sel2.firstChild.value;
}
if (sel3.firstChild.hasAttribute("selected")) {
  document.body.style.fontSize = sel3.firstChild.value + "px";
}
 */
// Ass 2
let sel = document.getElementById("select");
let sel1 = [];
for (let i = 0; i < sel.children.length; i++) {
  sel1.push(sel.children[i]);
}

let form = document.querySelectorAll("input");

window.onload = form.forEach((e) => {
  if (window.sessionStorage.getItem(e.className)) {
    e.value = window.sessionStorage.getItem(e.className);
  }
});

window.onload = function () {
  if (window.sessionStorage.getItem("option"))
    for (let i = 0; i < sel1.length; i++) {
      if (sel1[i].hasAttribute("selected")) {
        sel1[i].removeAttribute("selected");
      }

      if (sel1[i].textContent == window.sessionStorage.getItem("option")) {
        sel1[i].setAttribute("selected", "selected");
      }
    }
};

form.forEach(
  (e) =>
    (e.oninput = function () {
      window.sessionStorage.setItem(e.className, e.value);
    })
);

// a function that changes the selected option and actualy make it appear
function changeSelected(sel1) {
  for (let i = 0; i < sel1.length; i++) {
    if (sel1[i].hasAttribute("selected")) {
      sel1[i].removeAttribute("selected");
    }
    sel.selectedOptions[0].setAttribute("selected", "selected");
    if (sel1[i].hasAttribute("selected")) {
    }
  }
}

sel.addEventListener("change", function (e) {
  changeSelected(sel1);

  window.sessionStorage.setItem("option", sel.selectedOptions[0].textContent);
});
