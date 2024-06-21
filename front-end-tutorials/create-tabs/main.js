let tabs = document.querySelectorAll(".tabs li");
let tabContent = document.querySelectorAll(".content div");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.classList.remove("active"));
    tab.classList.add("active");

    let tabId = tab.getAttribute("data-cont");
    tabContent.forEach((tab) => {
      if (tab.classList.contains(tabId)) {
        tab.style.display = "block";
      } else tab.style.display = "none";
    });
  });
});
