let greetingsForUsers = "Hello my users";

greetingsForUsers = "Hello my dear users";

alert(greetingsForUsers);

//

/*
aaaaaaaa
*/

// ---Data Types---

// (primitives) - це типи даних, які зберігають прості значення. Вони включають в себе:

// String
const greetings = "Hello World";
console.log(greetings);

// Number
const num = 1234;
console.log(num);

//Boolaen
const BooleanTrue = true;
console.log(BooleanTrue);
const BooleanFalse = false;
console.log(BooleanFalse);

let isUserLoggedIn = false;
let hasUserPaid = true;

// Null

const sameNullValue = null;
console.log(sameNullValue);

    // якщо користувач створив профль то в нього не буде фото, 
    // але якщо він його додасть то буде посилання на фото, тому спочатку ми ставимо null, а потім присвоюємо посилання на фото

let userfoto = null;
userfoto = "https://example.com/userfoto.jpg";

// Undefined

// undefined - це коли змінна була оголошена, але їй не було присвоєно жодного значення. Вона автоматично отримує значення undefined.
let sameundefinedValey; // indefinded
console.log(sameundefinedValey);

// ()

// objects - це типи даних, які можуть зберігати складні структури даних. Вони включають в себе:

let obj1 = {};
const obj2 = new Object();
console.log(typeof obj1);
console.log(typeof obj2);

const obj = {
    name: "Adrian",
    age: 19,
    isStudent: true,
    hobby: "voleyball",
    gender: "male"
}

obj.height = 178;
console.log(obj);

//BigInt
const bigIntValue = 1234567890123456789012345678901234567890n;
console.log(typeof bigIntValue);
console.log("Max number is JS: ", Number.MAX_SAFE_INTEGER);
console.log("BigInt value: ", bigIntValue);

// syblol

const user = {
    name: "Judas",
    age: 30,
    isAdmin: false
}

let symbol = Symbol("Sone New Symbol");
user.id = 500;
console.log(typeof user);
console.log(user);