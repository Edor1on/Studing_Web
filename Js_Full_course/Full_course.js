console.group("Група логів");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.groupEnd();

console.error("Error");
console.warn("warning");

console.table({name: "Adrian", age: 19});

const styles = "background-color: green; color: black padding: 20px;";
console.log("%cStart codding, now!", styles);


// змінна - це коробочка з даними 

// декларація let x;
// let x = 15;
// присвоєння x = 15

var var_num; // var = old

let numik = 5;

console.log(var_num);

let let_num = 10;
console.log(let_num); // переприсвоєння
let_num = 3;
console.log(let_num);

console.log("Result: " + let_num + "!");

const number_ = 10;

console.log(number_);

let ff = 0.032; // фактично любі значення приймає не так як у c++
let FirstName_ = "Adrian";

let IsHasCar_ = true; // булеани

console.log(typeof FirstName_);
console.log(typeof numik);
console.log(typeof number_); // boolean
console.log(typeof IsHasCar_);

// --- data types ---
// 8 types of data
// number, bigInt, string, undefinded, boolean, null, object symbol

// number
const number = 10;
console.log(typeof number);

// string
let string = "qwerty";
console.log(typeof string);

// bigInt
let bigInt = 129568712567819817456711725819253157861238056215n;
console.log(typeof bigInt);

// boolean
let IsActive = true;
let IsConfirmed = false;
console.log(typeof IsActive);

// null
const city = null;
console.log(typeof city);

// undefinded
let IsLoading;
console.log(IsLoading);
console.log(typeof IsLoading);

IsLoading = false;
console.log(typeof IsLoading);

// symbol
const id = Symbol("123");
console.log(typeof id);

// посилаючі типи
// object
const person = {
    name: "Adrian",
    age: 19,
    id: id,
    IsActive: IsActive
}
console.log(typeof person);
console.log(person);

// array
const numArr = [1, 2, 3, 4, 5];
console.log(typeof numArr);
console.log(numArr);

// function
function info (){
    return "Hello World";
}

// ---operators---
let lessons = 10;
lessons = 10 + 10;
lessons = 10 - 10;
lessons = 10 * 10;
lessons = 10 / 10;
lessons = 11 % 2;

console.log(lessons);


let x;

x = 2 ** 3; // в степінь множимо, 3 - степінь
console.log(x);

x = 1
x = x + 1; // x++ x--
console.log(x);


let a = 10;
let b = a++; // a = 11 b = 10
// let b = ++a; // a = 11 b = 11 присвоює а 11 і зразу b 11 пердає
// let b = a--;
// let b = --a;

console.log(a);
console.log(b);

let d = 10;
d += 5;
d -= 5;
d *= 5;
d /= 5;
d %= 5;
d **= 5;

// оператори порівняння

console.log(1 == 1); //  не строге виведе true
console.log(1 === 1); // строге виведе true

console.log(1 == "1"); // виведе true бо не строге
console.log(1 === "1"); // виведе false бо строге

console.log(1 != "1"); // виведе true бо не строге
console.log(1 !== "1"); // виведе false бо строге


const greeting = "Hello " + "world";
console.log(greeting);
console.log(1 + "1"); // мєм


let value = 10;

// число в строку
value = value + "";
value = `${value}`;
value = value.toString();
value = String(value);

// строку в число
value = Number(value);
value = +value;
value = "10a";
value = parseInt(value);

value = "10.333";
value = parseFloat(value);

value = 10.12345;
value = 10.12345.toFixed(3);

console.log(value);

//Casting
value = 10 + '10';
value = 10 - '10';
value = 10 * '10';
value = 10 / '10';
value = 10 % '10';


value = 10 + true; // 11
value = 10 + false; // 10
value = 10 + null; // 10
value = 10 + undefined; // NaN
value = 10 + NaN; // NaN

value = 10 + []; // 10
value = 10 + {}; // 10[object Object]

value = true + true; // 2
value = true + false; // 1
value = false + false; // 0

console.log(value);


let res1;
res1 = true == true;
res1 = true === true;
res1 = true == 1;
res1 = true === 1;

res1 = false == 0;
res1 = false === 0;

res1 = "" == [];
// res = "" === []; // помилка

console.log(res1);


// --- if else ---
const age = 18;
if (age >= 18) {
    console.log("Підходить");
}
else {
    console.log("не того віку");
}

if (0) {} // false
if (1) {} // true
if ("0") {} // true
if ("") {} // false
if (" ") {
  console.log('check')
} // true

const res = prompt("Как ваши дела?", "хорошо");

if (res === "хорошо") {
  alert("Вы красавчик!");
} else if (res === "норм") {
  alert("Стремитесь чтобы было хорошо!");
} else if (res === "плохо") {
  alert("Погуляйте на природе!");
} else {
  alert("Не знаю что вам сказать!");
}

const MyAge = 19;
MyAge >= 18 ? console.log("Можна") : console.log("Ще рано");



// --- Логічні оператори в js ---

// ||

let q;

q = 1 || 2; // 1
q = 0 || 2; // 2

q = true || false;
q = false || true;
q = false || false;

q = false || false || true;
// a = null || undefined || 1;

console.log(a);


const age1 = 25;
if (age1 < 20 || age1 >= 25)
    console.log("ви прийняті");


let w;


// &&

if (0 && 5) {
  // if (false)
  console.log("это сообщение никто не увидит")
}

w = 0 && 5; // 0
w = true && "100%";

// {isLoading && <div></div>}

if (true && "100%") {
  // if (true)
  console.log("это сообщение увидит весь мир")
}

console.log(w);



const check = 10 && 1 && 20 && "Hello";

console.log(check);

const hour = 10;
const minutes = 35;

if (hour >= 10 && minutes >= 30) {
  console.log("Заходьте");
}


// !! - для перетворення в булеан

let e;

e = !true;    // false
e = !false;   // true
e = !0;       // true (оскільки 0 це falsy, заперечення робить його true)
e = "Hello";  // "Hello"
e = !"Hello"; // false (рядок з текстом це truthy, заперечення робить його false)

// !! - для преобразования значений к логическому (boolean типу)

e = !!"Hello"; // true
e = !!"";
e = !!0;
e = !!1;
e = !!null;
console.log(e);

e = Boolean(1);
e = Boolean(0);


// ?? - завжди перший, головне щоб перший не був null фбо undefinded, бо тоді 2-ий

let r;
r = 1 ?? 2;          // 1
r = null ?? 2;       // 2
r = undefined ?? 2;  // 2
r = false ?? 2;      // false (бо це не null/undefined)
r = 0 ?? 10;         // 0 (нуль залишається)
r = true ?? 2;       // true
r = '' ?? 10;        // '' (порожній рядок залишається)
r = null ?? false;   // false
console.log(d);



// Logical assignment - логическое присваивание

// ||= присваивает значение в правой части, если значение слева false иначе 
// значение из левой части

let t = null;

// a = a || 20;
t ||= 20;

console.log(t); // 20

// &&= присваивает значение из правой части если левое значение trutht

let y = 0;

//y = y && 20;
y &&= 20; // якщо ліве неправильне, кидає його 

console.log(y);


// ??

// ??= присваивает правое значение если слева null или undefined.

let u = undefined;

// c = c ?? 10;
// c ??= 10;

u = false;
u ??= 10;

console.log(u); // false



// ---

let o = 10;
o = Number(100);
o = new Number(1000);
o = o.valueOf();

console.log(o);

let num = 20.33333;

// num = num.toFixed(2); Округлює число до n знаків після коми та перетворює його на рядок. Якщо дужки порожні, округлює до цілого.
// num = num.toFixed(3);
// num = num.toFixed();
``
// num = num.toPrecision(3); Метод toPrecision(n): Округляє число до вказаної загальної кількості значущих цифр.

num = num.toString().length;

console.log(num);




//
num = new Number(0); // object

if (num) {
  console.log("check", num)
}

console.log(typeof 0)
console.log(typeof num)

// ----------------------------------------

const maxNumber = Number.MAX_VALUE;
const minNumber = Number.MIN_VALUE;

console.log(minNumber)