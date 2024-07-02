let input = document.querySelector(".input");
let submit = document.querySelector(".add");
let tasksDiv = document.querySelector(".tasks");
let tasksArr = [];

if (localStorage.getItem("tasks"))
  tasksArr = JSON.parse(localStorage.getItem("tasks"));

getFromLS();

submit.addEventListener("click", function () {
  if (input.value !== "") {
    addTaskToArr(input.value);
  }
  input.value = "";
});

tasksDiv.addEventListener("click", function (e) {
  if (e.target.classList.contains("del")) {
    removeFromLS(e.target.parentElement.getAttribute("data-id"));
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains("task")) {
    e.target.classList.toggle("done");

    tasksArr.forEach((task) => {
      if (task.id === parseInt(e.target.getAttribute("data-id"))) {
        task.completed = !task.completed;
      }
      addToLS(tasksArr);
    });
  }
});

function addTaskToArr(input) {
  const task = {
    id: Date.now(),
    title: input,
    completed: false,
  };

  tasksArr.push(task);

  addEls(tasksArr);
  addToLS(tasksArr);
}

function addEls(arr) {
  tasksDiv.innerHTML = "";
  arr.forEach((task) => {
    let taskdiv = document.createElement("div");
    taskdiv.className = "task";
    if (task.completed) {
      taskdiv.className = "task done";
    }
    taskdiv.setAttribute("data-id", task.id);
    taskdiv.innerHTML = task.title;
    let del = document.createElement("span");
    del.className = "del";
    del.innerHTML = "X";
    taskdiv.appendChild(del);
    tasksDiv.appendChild(taskdiv);
  });
}

function addToLS(arr) {
  window.localStorage.setItem("tasks", JSON.stringify(arr));
}

function removeFromLS(id) {
  tasksArr = tasksArr.filter((task) => task.id !== parseInt(id));
  addToLS(tasksArr);
}

function getFromLS() {
  let data = window.localStorage.getItem("tasks");
  if (data) {
    let tasks = JSON.parse(data);
    addEls(tasks);
  }
}
