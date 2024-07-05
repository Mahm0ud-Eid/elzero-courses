let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxLength = input.getAttribute("maxlength");

count.innerHTML = maxLength;

input.addEventListener("input", () => {
  count.innerHTML = maxLength - input.value.length;
  count.innerHTML == 0
    ? count.classList.add("zero")
    : count.classList.remove("zero");
  progress.style.width = `${(input.value.length / maxLength) * 100}%`;
});
