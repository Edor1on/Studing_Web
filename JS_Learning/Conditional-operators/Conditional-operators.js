// --- ВЕРСІЯ ДЛЯ САЙТУ (DOM) ---

let followers = 1000;
let isFollowing = false;

// 1. Знаходимо елементи (тепер вони є в HTML, помилки не буде)
const btn = document.querySelector('.btn-follow');
const counter = document.querySelector('.counter');

// Перевірка, чи знайшли ми кнопку, щоб код не ламався
if (btn) {
    btn.addEventListener('click', function() {
        
        if (isFollowing === false) {
            // Підписуємось
            btn.innerText = "Following";      
            btn.style.backgroundColor = "gray"; 
            followers++;                      
            isFollowing = true;               
        } else {
            // Відписуємось
            btn.innerText = "Follow";
            btn.style.backgroundColor = "red";
            followers--;
            isFollowing = false;
        }

        // Оновлюємо лічильник
        counter.innerText = followers; 
    });
} else {
    console.error("Елемент .btn-follow не знайдено в HTML!");
}


// --- УМОВНІ КОНСТРУКЦІЇ ---

let ppp = 15;
let isHaspenis = true; // Булеві змінні прийнято називати з is... (hasPenis краще просто has...)

if (ppp == 15) {        
    console.log("True: ppp is 15");
    if (isHaspenis == true) {
        console.log("This is a boy");
    }
}
else if (ppp > 15) {
    console.log("is > 15");
    if (!isHaspenis) {
        console.log("This is a girl");
    }
}
// ВИПРАВЛЕНО: ishaspenis -> isHaspenis
else if (ppp < 15 && isHaspenis) { 
    console.log("Yurs"); // Якщо це ім'я, то Yuras?
}
else {
    console.log("isn't 10 and other cases");      
    ppp += 5;
}


let string = "word";
if (string != "some") {
    console.log("String check: True");
}


// --- SWITCH ---

// ВИПРАВЛЕНО: qweqrty -> qwerty
let qwerty = "cam"; 

switch (qwerty){
    case "Yura":
        console.log("not cam, but switch");
        break;
    case "cam":
        console.log("Switch logic: cam");
        break;
    case "gg wp":
        console.log("not cam, but gg wp");
        break;
    default:
        console.log("loh");
}