// вивід
document.write("Hello World"); // застаріле
document.write("!!!");

console.log("Hello Java script (print)");
console.error("error");
console.warn("warn");
console.info("info"); //info=log


//змінні

var var_num; // var = old

let numik = 5;

console.log(var_num);

let let_num = 10;
console.log(let_num); // переприсвоєння
let_num = 3;
console.log(let_num);

console("Result: " + let_num + "!");

const number = 10;

console.log(number);

let ff = 0.032; // фактично любі значення приймає не так як у c++
let fff = "Adrian";

let IsHisCar = true; // булеани

// Math operation

let num1 = 14;
let num2 = 7;

// first method
let res = num1 + num2;
console.log("Result: " + res);

// second method
console.log("Result" + (num1 + num2));
console.log("Result" + (num1 - num2));
console.log("Result" + (num1 * num2));
console.log("Result" + (num1 / num2));
console.log("Result" + (num1 % num2)); // залишок від ділення

let num3 = 5; //переведеться у текст, бо друга змінна яка була придодавані текст
let num4 = "10";

let qqq = Number("12"); // переведе у число
console.log(num3 + Number(qqq)); // тут також можна

console.log(num3 + num4);

num5 += +5; // + - * /
numm++; //++ --

let pi = Math.PI;

console.log(Math.pi); //Math.sin Math.cos Math.abs Math.min Math.max
console.log(Math.max(-1, 2, 10, 5));



let followers1 = 1000;
let isFollowing1 = false;

function FollowersButton(){
    if (isFollowing1 === false){
        console.log("Підписатись");

        followers1++;
        isFollowing1 = true;
    }
    else {
        console.log("відписатись");

        followers1--;
        isFollowing1 = false;
    }
}
console.log("Підписники: " + followers1);


// версія для сайту (імба + нга замітку)

let followers = 1000;
let isFollowing = false;

// Знаходимо елементи на сторінці
const btn = document.querySelector('.btn-follow');
const counter = document.querySelector('.counter');

// Вішаємо клік на кнопку (замість виклику функції вручну)
btn.addEventListener('click', function() {
    
    if (isFollowing === false) {
        // Логіка (Змінюємо вигляд сайту)
        btn.innerText = "Following";      // Змінюємо текст кнопки
        btn.style.backgroundColor = "gray"; // Змінюємо колір
        followers++;                      // Математика
        isFollowing = true;               // Змінюємо статус

    } else {
        // Логіка (Повертаємо назад)
        btn.innerText = "Follow";
        btn.style.backgroundColor = "red";
        followers--;
        isFollowing = false;
    }

    // Оновлюємо лічильник на екрані
    counter.innerText = followers + "k"; 
});