const input = document.getElementById("myInput");
const itemList = document.getElementById("myItems");

function newElement() {
  const inputValue = input.value;
  if (inputValue === "") {
    return;
  }

  const listItem = document.createElement("li");
  listItem.innerText = inputValue;

  const closeButton = document.createElement("span");
  closeButton.className = "close";
  closeButton.innerHTML = "\u00D7";
  closeButton.onclick = function() {
    listItem.remove();
  };
  listItem.appendChild(closeButton);

  itemList.appendChild(listItem);

  input.value = "";
}

function sortList() {
  const items = Array.from(itemList.getElementsByTagName("li"));
  items.sort((a, b) => a.innerText.localeCompare(b.innerText));

  for (let i = 0; i < items.length; i++) {
    itemList.appendChild(items[i]);
  }
}

function sortTodo(){
    let listItem = this.parentNode;
    todolist.removeChild(listItem)
}
