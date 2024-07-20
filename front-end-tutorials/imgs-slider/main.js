let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img")
);
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumberElement = document.getElementById("slide-number");
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");

nextBtn.onclick = nextSlide;
prevBtn.onclick = prevSlide;

let paginationElement = document.createElement("ul");
paginationElement.setAttribute("id", "pagination-ul");

for (let i = 1; i <= slidesCount; i++) {
  let paginationItem = document.createElement("li");
  paginationItem.setAttribute("data-index", i);
  paginationItem.appendChild(document.createTextNode(i));
  paginationElement.appendChild(paginationItem);
}

document.getElementById("indicators").appendChild(paginationElement);

let paginationCreatedUl = document.getElementById("pagination-ul");
let paginationBullets = Array.from(
  document.querySelectorAll("#pagination-ul li")
);

for (let i = 0; i < paginationBullets.length; i++) {
  paginationBullets[i].onclick = function () {
    currentSlide = parseInt(this.getAttribute("data-index"));
    theChecker();
  };
}

theChecker();

function nextSlide() {
  if (currentSlide < slidesCount) {
    currentSlide++;
    theChecker();
  }
}

function prevSlide() {
  if (currentSlide > 1) {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumberElement.textContent =
    "Slide #" + currentSlide + " of " + slidesCount;
  removeActive();
  sliderImages[currentSlide - 1].classList.add("active");
  paginationCreatedUl.children[currentSlide - 1].classList.add("active");
  if (currentSlide == 1) {
    prevBtn.classList.add("disabled");
    nextBtn.classList.remove("disabled");
  } else if (currentSlide == slidesCount) {
    nextBtn.classList.add("disabled");
    prevBtn.classList.remove("disabled");
  } else {
    nextBtn.classList.remove("disabled");
    prevBtn.classList.remove("disabled");
  }
}

function removeActive() {
  sliderImages.forEach(function (img) {
    img.classList.remove("active");
  });

  paginationBullets.forEach(function (bullet) {
    bullet.classList.remove("active");
  });
  paginationCreatedUl.children[currentSlide - 1].classList.remove("active");
}
