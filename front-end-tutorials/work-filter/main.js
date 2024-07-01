let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.images);

switcherLis.forEach((li) => {
  li.addEventListener("click", () => {
    // Remove Active Class From All Lis And Add To Current
    switcherLis.forEach((l) => {
      l.classList.remove("active");
      li.classList.add("active");
    });

    // Manage Imgs
    imgs.forEach((img) => {
      img.classList.contains(li.dataset.cat)
        ? (img.style.display = "block")
        : (img.style.display = "none");
    });
  });
});
