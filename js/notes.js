function showTodo() {
  for (i = 0; localStorage.length > i; i++) {
    const item = JSON.parse(localStorage[i]);
    const listTest = document.getElementsByClassName("todo__list")[0];
    const listItem = document.createElement("li");
    const listItemDelete = document.createElement("i");
    const listItemName = document.createElement("p");

    listItemName.className = "todo__list__item__name";
    listItemName.innerText = item.name;
    listItemDelete.className = "fa-solid fa-trash-can";
    listItemDelete.id = i;
    listItemDelete.onclick = deleteTodo;
    listItem.className = `todo__list__item`;
    listItem.id = i;

    if (item.finished == true) {
      listItem.className = "todo__list__item--done";
    }

    // listItem.textContent =
    listItem.appendChild(listItemName);
    listItem.appendChild(listItemDelete);
    listTest.appendChild(listItem);
  }
}

function addTodo() {
  const todoInput = document.getElementById("todo__entry__input");
  localStorage.setItem(
    localStorage.length,
    JSON.stringify({
      name: todoInput.value,
      id: localStorage.length + 1,
      finished: false,
    })
  );
}

document.addEventListener("click", (e) => {
  //finish task
  const itemId = document.getElementById(e.target.id);
  const item = JSON.parse(localStorage.getItem(itemId.id));
  if (item.finished == true) {
    localStorage.setItem(
      e.target.id,
      JSON.stringify({
        name: item.name,
        id: e.target.id + 1,
        finished: false,
      })
    );
    if (item.finished == true) {
      listItem = document.getElementById(e.target.id);
      listItem.className = "todo__list__item--done";
    }
  } else {
    localStorage.setItem(
      e.target.id,
      JSON.stringify({
        name: item.name,
        id: e.target.id + 1,
        finished: true,
      })
    );
    if (item.finished == false) {
      listItem = document.getElementById(e.target.id);
      listItem.className = "todo__list__item";
    }
  }
  //delete Task
});

function deleteTodo() {
  console.log(this.id);
  // localStorage.removeItem(this.id);
  window.localStorage.removeItem(this.id + 1);
}

showTodo();
