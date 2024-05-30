/* let myIn = document.querySelector('[name="dollar"]');
let result = document.querySelector(".result");
// myIn.oninput = function () {
//   if (+myIn.value > 0) {
//     result.innerHTML = `{${myIn.value}} USD Dollar = ${
//       myIn.value * (15.6).toFixed(2)
//     } Egyptian Pound`;
//   }
// };

let addClass = document.querySelector("[class='classes-to-add']");
let current = document.querySelector("[title='Current']");
let res = document.querySelector(".classes-list").lastElementChild;

addClass.onblur = function () {
  let cl = addClass.value.split(" ");

  let clList = [];
  for (let i = 0; i < cl.length; i++) {
    let smallCl = cl[i].toLowerCase();
    clList[i] = smallCl;
    current.classList.add(`${smallCl}`);
  }
  let lList = current.classList.value.split(" ");

  console.log(lList);
  addClass.value = "";

  let addedCl;
  let addedSpan;
  lList.sort();

  lList.forEach((e) => {
    lList.sort();

    addedCl = document.createTextNode(e);
    if (addedCl !== lList[e]) {
      lList.sort();
      addedSpan = document.createElement("span");
      addedSpan.appendChild(addedCl);
      //   console.log(addedSpan);
    }
    lList.sort();
    // console.log(res.children[e]);

    // for (let i = 0; i < lList.length; i++) {
    //   if (addedSpan.textContent > current.className.split(" ")[i]) {
    //     current.className.split(" ")[i].before(addedSpan);
    //   } else {
    //     current.className.split(" ")[i].after(addedSpan);
    //   }
    // }
    // if (addedSpan.textContent > current.className[0])
    res.appendChild(addedSpan);

    lList.sort();
  });
  current.removeAttribute("class");
  //   console.log(res.children.textContent);
  //   console.log(current.className.split(" "));
  //   console.log(Object.values(res.children).textContent);
  //   function here() {
  //     let i;
  //     for (i = 0; i < lList.length; i++) {}
  //     // console.log(addedSpan);
  //     span -> div -> .classes-list
  //   }
  //   here();
};
 */
