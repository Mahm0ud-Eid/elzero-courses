// Ass -2
let add = document.querySelector(".classes-to-add");
let del = document.querySelector(".classes-to-remove");
let curr = document.querySelector("[title='Current']");
let show = document.querySelector("h5").nextElementSibling;

let classes = [];

function addRemove() {
  if (add.value !== "" || del.value !== "") {
    classes = [];
    show.innerHTML = "";

    if (add.value !== "") {
      curr.classList.add(...add.value.toLowerCase().trim().split(" "));
      classes.push(...curr.classList);
      classes.sort();
    }

    if (del.value !== "") {
      curr.classList.remove(...del.value.toLowerCase().trim().split(" "));
      classes.push(...curr.classList);
      classes.sort();
    }

    if (curr.classList.length == 0) {
      show.innerHTML = "No Classes To Show";
    }
// Ass -2 .cont
    classes.forEach((e) => {
      let span = document.createElement("span");
      span.append(e);
      show.append(span);
    });

    add.value = "";
    del.value = "";
  }
}

add.onblur = addRemove;
del.onblur = addRemove;

/* =========================== reference code solution ================================== */

/* const inputAddClass = document.querySelector(".classes-to-add");
const inputRemoveClass = document.querySelector(".classes-to-remove");
const currentElement = document.querySelector('[title="Current"]');
const divToAdd = document.querySelector(".classes-list").lastElementChild;

let arrayOfClases = [];
function addRemoveClass() {
  if (inputAddClass.value != "" || inputRemoveClass.value != "") {
    arrayOfClases = [];
    divToAdd.innerHTML = "";
    if (inputAddClass.value != "") {
      currentElement.classList.add(
        ...inputAddClass.value.toLowerCase().split(" ")
      );
      arrayOfClases.push(...currentElement.classList);
      arrayOfClases.sort();
    }
    if (inputRemoveClass.value != "") {
      currentElement.classList.remove(
        ...inputRemoveClass.value.toLowerCase().split(" ")
      );
      arrayOfClases.push(...currentElement.classList);
      arrayOfClases.sort();
    }
    if (currentElement.classList.length == 0) {
      divToAdd.innerHTML = "No Classes To Show";
    }
    // if (inputRemoveClass.value || inputAddClass.value)
    arrayOfClases.forEach((e) => {
      let span = document.createElement("span");
      span.append(e);
      divToAdd.append(span);
    });
    inputAddClass.value = "";
    inputRemoveClass.value = "";
  }
}

inputAddClass.onblur = addRemoveClass;
inputRemoveClass.onblur = addRemoveClass;
 */

// arrayOfClases.push(...currentElement.classList);
// arrayOfClases.forEach((e) => {
//   let span = document.createElement("span");
//   span.append(e);
//   divToAdd.append(span);
// });

/* +++++++++++++++++===== my failed solution ++++++++++++++== */

/* add.addEventListener("blur", function () {
  let inList = [];
  if (add.value !== "") {
    inList = add.value.toLowerCase().trim().split(" ");
    if (
      !classes.includes(
        curr.className.split(" ")[0] || curr.className.split(" ")[1]
      )
    ) {
      classes = classes.concat(inList, curr.className.split(" "));
    }
    classes = classes.concat(inList);
    classes.sort();

    let addedCl;
    let addedSpan;

    console.log(show.childNodes.length);
    // let i = 0;
    // do {
    //   if (show.childNodes.length !== 0) {
    //     if (classes[i] !== show.childNodes[i].textContent) {
    //       addedCl = document.createTextNode(classes[i]);
    //       addedSpan = document.createElement("span");
    //       addedSpan.appendChild(addedCl);
    //       show.appendChild(addedSpan);
    //     }
    //   }
    // } while (i < classes.length);
    if (show.childNodes.length === 0) {
      for (let i = 0; i < classes.length; i++) {
        addedCl = document.createTextNode(classes[i]);
        addedSpan = document.createElement("span");
        addedSpan.appendChild(addedCl);
        show.appendChild(addedSpan);
      }
    } else {
      for (let i = 0; i < classes.length; i++) {
        if (!classes.includes(i)) {
          if (classes[i] !== show.childNodes[i].innerHTML) {
            addedCl = document.createTextNode(classes[i]);
            addedSpan = document.createElement("span");
            addedSpan.appendChild(addedCl);
            show.appendChild(addedSpan);
          }
        }
      }
    }

    console.log(show.childNodes.item(0).innerHTML);
    for (let i = 0; i < show.childNodes.length; i++) {
      console.log(show.childNodes.item(i).innerHTML);
    }

    add.value = "";
  }
  console.log(classes);
});

if (curr.className === "") {
  show.textContent = "No Classes To Show";
}

// console.log(classes);
 */
