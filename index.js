// フォームの情報を取ってくる
const form = document.getElementById("form");
const input = document.getElementById("input")

form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(input.value);
})

