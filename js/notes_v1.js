const input = document.getElementById("todo__entry__input");
const btn = document.getElementById("todo__entry__button");
const todoList = document.getElementsByClassName("todo__list");

// btn.onclick(addItem());

function renderItem(item) {
  let itemContainer = document.createElement("li");
  //   itemContainer.className = "todo__list__item";
  itemContainer.className = `todo__list__item ${
    item.state ? "todo__list__item--done" : "todo__list__item"
  }`;
  itemContainer.textContent = item.name;
  let itemDelete = document.createElement("i");
  itemDelete.className = "fa-solid fa-trash-can";
  itemContainer.appendChild(itemDelete);
  todoList[0].appendChild(itemContainer);
}

// function storeItem(item) {

//   localStorage.setItem(localStorage.length, JSON.stringify(item));
//   let itemContainer = document.createElement("li");
//   itemContainer.className = "todo__list__item";
//   itemContainer.textContent = item.name;
//   let itemDelete = document.createElement("i");
//   itemDelete.className = "fa-solid fa-trash-can";
//   itemContainer.appendChild(itemDelete);
//   todoList[0].appendChild(itemContainer);
// }

function addItem() {
  const items = localStorage.getItem("items");
  console.log(items);
  //   let item = {
  //     name: input.value,
  //     state: false,
  //     id: items.length + 1,
  //   };
  items.push(JSON.stringify(item));
  localStorage.setItem("items", items);
  renderItem(item);
}

function showList(items) {
  for (let i = 0; items?.length > i; i++) {
    let item = JSON.parse(localStorage.getItem(i));
    renderItem(item);
  }
}

function deleteItem(itemID) {
  const items = localStorage.getItem("items");
  const filterItems = items.filter((i) => i.id !== itemID);
  localStorage.setItem("items", filterItems);
  showList(items);
}

const items = localStorage;
showList(localStorage.getItem("items"));
deleteItem();
