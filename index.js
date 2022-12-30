// フォームの情報を取ってくる
const form = document.getElementById("form");
const input = document.getElementById("input")
const ul = document.getElementById("ul");

//ローカルストレージからデータを取得する
const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach(todo => {
    add(todo);
  })
}


form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
  add();
})

function add(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo;
  }
  
  if (todoText) {
    const li = document.createElement("li");
    li.innerText = todoText;
    li.classList.add("list-group-item");
    // 右クリックした時に削除する
    li.addEventListener("contextmenu", function(event){
        //処理内容
          // デフォルトの右クリアクションを禁止する
        event.preventDefault();
        li.remove();
        saveData();
    });

    ul.appendChild(li);
    input.value = ("");
    saveData();
  } 
}

function saveData() {
    //todoのデータを取得
    const lists = document.querySelectorAll("li");
    //配列の定義
    let todos = [];
    lists.forEach(list => {
        todos.push(list.innerText);
    });
    //ローカルストレージへ保存
    localStorage.setItem("todos", JSON.stringify(todos));
}
