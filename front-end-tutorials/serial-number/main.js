let genButton = document.querySelector(".generate");
let serialDiv = document.querySelector(".serial");

genButton.onclick = function () {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charCount = 10;
  let serial = "";

  for (let i = 0; i < charCount; i++) {
    serial += chars[Math.trunc(Math.random() * chars.length)];
  }
  serialDiv.innerHTML = serial;
};
