//make submit and create a list

const listCheckArray = [];

const submitTodo = function () {
  const text = document.querySelector(".input-text").value;
  const list = document.querySelector(".list");
  const listChild = document.querySelector(".list-child");
  const newList = document.createElement("div");
  newList.classList.add("list-child");
  newList.innerHTML = `
  <div class=list-text>${text}</div>
  <img class="list-check-icon" src="./img/check.svg" />
    <img class="list-delete-icon" src="img/xMark.svg" />
  `;

  list.appendChild(newList);
};

const submitText = document.querySelector(".input-submit");
submitText.addEventListener("click", function (e) {
  e.preventDefault();
});
submitText.addEventListener("click", submitTodo);

//when click check-list

const list = document.querySelector(".list");

const checkTheList = function (e) {
  const item = e.target;

  if (item.classList[0] === "list-check-icon") {
    const parentNode = item.parentNode;
    parentNode.classList.toggle("checked-list");
  }
};

list.addEventListener("click", checkTheList);

//click delete btn and make list vanish

const deleteTheList = function (e) {
  const item = e.target;

  if (item.classList[0] === "list-delete-icon") {
    const parentNode = item.parentNode;
    parentNode.remove();
  }
};

list.addEventListener("click", deleteTheList);

//select value : completed -> todolist have '.checked-list'? -> no : '.hidden' added
//select value : uncompleted -> todolist have '.checked-list'? -> yes : 'hidden' added

//as category change, the right lists will only show

//if select changes, the hidden contents have to be shown as default

const listChild = document.getElementsByClassName("list-child");
const select = document.querySelector(".select");

const completion = function () {
  for (var i = 0; i < listChild.length; i++) {
    if (select.value === "Completed") {
      listChild[i].classList[1] === "checked-list"
        ? listChild[i].classList.remove("hidden")
        : listChild[i].classList.add("hidden");
    } else if (select.value === "Uncompleted") {
      listChild[i].classList[1] === "checked-list"
        ? listChild[i].classList.add("hidden")
        : listChild[i].classList.remove("hidden");
    } else if (select.value === "All") {
      listChild[i].classList.remove("hidden");
    }
  }
};

select.addEventListener("change", completion);

//practicing commit, push
