/* Assignment - 5 */
let types = Object.values(document.body.children);

for (let i = 0; i < types.length; i++) {
  document.body.children[i].onclick = function () {
    console.log(`This is ${types[i].tagName}`);
  };
}
