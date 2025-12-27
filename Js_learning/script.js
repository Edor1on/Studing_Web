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



// умовні конструкції

let ppp = 15;
let isHaspenis = true;

if (ppp == 15) {        // >= <= = != ===
    console.log("True");
    if (isHaspenis == true) {
        console.log("This is a boy")
    }
}
else if (ppp > 15) {
    console.log("is 15");
        if (!isHaspenis) {
        console.log("This is a girl")
    }
}
else if (ppp < 15 && ishaspenis) { // || - хочаб одна з двох коректна
    console.log("Yurs");
}
else {
    console.log(" isn't 10");       // круглих дужок не потрбує, бо це для решти
    ppp += 5;
}



let string = "word";

if (string != "some") {
    console.log("True");
}



// switch
let qweqrty = "cam";

switch (qwerty){
    case "Yura":
        console.log("not cam, but switch");
        break;
    case "cam":
        console.log("cam");
        break;
    case "gg wp":
        console.log("not cam, but gg wp");
        break;
    default:
        console.log("loh");
}


// масиви

let data_old = new Array [8, 9, 7]; //стара версія

// нова версія
let data = [1, 2, 4, 5.45, "qwer4", true, [54, "nweArray"]];

console.log("deta"); // вивід масиву
data[0] = "присвоєння нового елементу";
console.log(data[2] ) //вивід 3-го елемента, бо поч з 0
console.log(data.length);

let Matrix = [
    [5, 6],
    ["word", true],
    [false, 4.823, 0]
];

Matrix[0][0] = 60; //надаємо знайчення першому елементу першого масиву
console.log(Matrix[2][1]) //вивід 2-го елементу третього масиву
console.log(Matrix.length) // виведе 3, оскільки є 3 масиви.
console.log(Matrix[1].length) //довжина 2-го рядка


// цикли

for (let i = 0; i < 10; i++) {
    console.log(i);
    for (let j = 1000; j > 10; j /= 2) {
        console.log(j);
    }
}

let y = 0;
while (y < 15) {
    console.log(y);
    y += 2;
}

let u = 100;
do{
    console.log(u);
    u /= 2;
} while (u > 10);


for (p = 0; p <= 10; p++) {
    if (p==8) break; // зупиняємо цикл
    console.log(p);

    if (p % 2 == 0) continue; //виведе тільки непарні, бо парні буде скіпати
}

let nums = [5, 23, 451, 54, 65, 33];

for (j = 0; j < nums.length; j++){
    nums[j] *= 2;  // виведуться значення в 2 раза більші
    console.log("Elements is: " + nums[j]);
}


// Функціональні вікна (alert, prompt, confirm)

alert("Буде спливаюче вікно де не має толкової взаємодії з користувачем");
let massage = confirm("Чи все вам подобається?"); // те саме вікно й що алерт, але там буде "ок" або "скасувати" і якщо користувач вибере ок = true скасувати = false
console.log(massage);


let ms = confirm("Чи все вам подобається?"); // те саме вікно й що алерт, але там буде "ок" або "скасувати" і якщо користувач вибере ок = true скасувати = false
if (ms) {
    alert("користувач вибрав true");
}
else {
    console.log("користувач вибрав false")
}

let userInfoprompt = prompt("How are you?", "Okay") // можна буде ввести текст, якщо скасувати видасть null а при вводі збереже текст.
// Okey - буде як значання по замовчуваню, типу як placeholder, але його можна буде змінити і взаєможіяти з ним
if (userInfoprompt == null){
    alert("ви нічого не ввели!");
}
else {
    console.log(userInfoprompt);
}


// function

function print(Someword){
    console.log(Someword + "!");
}

print("Adriano chelentano");

let Somenew = "New text";
print(Somenew);

function add(x, y){
    if (x != null && y != null){
        let result = Number(x) + Number(y);
        print("Result: " + result)
    }
}

add(4, 5);

let user1 = prompt("Enter First element: ");
let user2 = prompt("Enter Second element: ");

add(user1, user2);

// function fo summing arrays
function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr1 = [1, 5, 7, 3];
let resArr1 = arrSum(arr1);

let arr2 = [5, 3, 8, 9, 2];
let resArr2 = arrSum(arr2);

if (resArr1 > resArr2){
    console.log(resArr1);
}
else console.log(resArr2);

// alert return = empty; confirm and prompt виводять


// Події та обробник подій у JavaScript

let counter_1 = 0;
function Btnclick(el) {
    counter_1++;
    el.innerHTML = "Count: " + counter_1;

    // alert("Message");
    // el.name = "We can change the name also in HTML";
    // console.log(el.name);
}

function BtnDblclick(){
    console.log("Дебил");
}

function inputButton(el) {
    if (el.value = "font"){
        el.style.fontSize = "20px";
    }
    else if (el.value = "color"){
        el.style.color = "red";
    }
    else if (el.value = "bg"){
        el.style.backgroundColor = "black";
    }
}