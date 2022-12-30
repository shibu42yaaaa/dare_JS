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
    todoText = todo.text;
  }
  
  if (todoText) {
    const li = document.createElement("li");

    li.innerText = todoText;
    li.classList.add("list-group-item")

    if (todo && todo.completed) {
      li.classList.add("text-decoration-line-through");
    }

    // 右クリックした時に削除する
    li.addEventListener("contextmenu", function(event){
        //処理内容
          // デフォルトの右クリアクションを禁止する
        event.preventDefault();
        li.remove();
        saveData();
    });

    // 左クリックで取り消し線をつける
    li.addEventListener("click", function () {
        li.classList.toggle("text-decoration-line-through");
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
    const todos = [];

    lists.forEach((li) => {
        // 完了状態も合わせてもつ
      todos.push({
        text: li.innerText,
        completed: li.classList.contains("text-decoration-line-through"),
      });
    });
    //ローカルストレージへ保存
    localStorage.setItem("todos", JSON.stringify(todos));
}
