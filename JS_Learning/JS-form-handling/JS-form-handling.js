// Робота з HTML та обробка форм за допомогою JS

let block = document.getElementById("some-block");
// Залиш тільки один варіант. innerHTML дозволяє теги.
block.innerHTML = "Hello <b>World</b>!!!"; 

block.style.color = "red";
block.style.backgroundColor = "black";
block.style.fontSize = "30px";
block.className = "block";

console.log(block.style.color);

// --- ВИПРАВЛЕННЯ ТУТ ---
// Додали 's' (getElements) і індекс [0]
let paras = document.getElementsByClassName("para");
if (paras.length > 0) {
    paras[0].innerHTML = "New Text";
}

// let spans = document.getElementsByTagName("span");
let spans = document.getElementsByClassName("el_span");

// Цей цикл не працював, бо скрипт падав вище. Тепер запрацює.
for (let i = 0; i < spans.length; i++) {
    spans[i].style.fontSize = "95px";
    spans[i].title = spans[i].innerText + "!";
}


// --- ФОРМА ---
// Тепер скрипт дійде сюди, і слухач повіситься коректно

let form = document.getElementById("myform");

form.addEventListener("submit", function(e) {
    // 1. Зупиняємо стандартну поведінку (перезавантаження)
    e.preventDefault();
    console.log("Submit button clicked!"); // Перевірка в консолі

    let username = form.username.value;
    let email = form.email.value;
    let pass = form.password.value;
    let gender = form.gender.value;

    let error = '';

    if (username.length < 2) {
        error = 'Ім\'я занадто мале';
    } else if (email.length < 2 || !email.includes("@")) {
        error = 'Некоректний email';
    } else if (pass.length < 8) {
        error = 'Пароль має бути від 8 символів';
    } else if (gender == "") {
        error = "Виберіть стать";
    }

    if (error != '') {
        document.getElementById('error').innerText = error;
        return; 
    }

    document.getElementById('error').innerText = '';
    alert("Дані відправлено! Переходимо на сайт Політеху...");
    window.location = 'https://lpnu.ua';
});