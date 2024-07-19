let button = document.querySelector(".btn");
let input = document.querySelector(".name");
let reposDiv = document.querySelector(".repos-table");

button.addEventListener("click", function () {
  if (input.value === "") {
    input.placeholder = "Please enter a valid username";
  } else {
    fetch(`https://api.github.com/users/${input.value}/repos`)
      .then((response) => {
        if (!response.ok) {
          input.placeholder = "User not found";
          throw new Error(`HTTP error! status: ${response.status}`);
        } else {
          return response.json();
        }
      })
      .then((data) => {
        data.forEach((repo) => {
          let repoRow = document.createElement("li");
          repoRow.classList.add("table-row");
          repoRow.innerHTML = `
            <div class="col col-1" >${repo.id}</div>
            <div class="col col-2">${repo.name}</div>
            <div class="col col-3"><i class="fa-solid fa-star"></i> ${repo.stargazers_count}</div>
            <a class="col col-4" href="${repo.html_url}" ><i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            `;
          reposDiv.appendChild(repoRow);
        });
      });
    input.value = "";
  }
});
