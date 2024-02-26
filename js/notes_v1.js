const input = document.getElementById("todo__entry__input");
const btn = document.getElementById("todo__entry__button");
const todoList = document.getElementsByClassName("todo__list");

//add items to the list

function addItem() {
  item = {
    id: localStorage.length + 1,
    name: input.value,
    state: false,
  };
  localStorage.setItem(localStorage.length + 1, JSON.stringify(item));
  renderItem(item);
}

function renderItem(itemID) {
  const item = document.createElement("li");
  const itemName = document.createElement("p");
  const itemDelete = document.createElement("i");

  item.className = "todo__list__item";
  item.id = `${itemID.id}-item`;
  itemDelete.className = "fa-solid fa-trash-can";
  itemDelete.id = itemID.id;

  itemDelete.onclick = deleteItem;
  itemName.innerHTML = itemID.name;

  item.appendChild(itemName);
  item.appendChild(itemDelete);
  todoList[0].appendChild(item);
}

function showTodo() {
  for (i = 0; localStorage.length >= i; i++) {
    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
    renderItem(item);
    console.log(localStorage.length);
  }
}
function deleteItem() {
  itemID = this.id;
  todoList[0].removeChild(document.getElementById(`${itemID}-item`));
  localStorage.removeItem(itemID);
}

showTodo();
