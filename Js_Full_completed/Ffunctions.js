const Name = "Edorion";
const age = 19;
const Gender = "male";

function sayHello(name, age, gender) { // Назви аргументів зазвичай з маленької (camelCase)
    if (age < 18) {
        console.log(`${name} is a minor`); // Backticks!
    }
    if (gender === "male") {
        console.log(`${name} you are not a girl`); // Backticks! 
    }

    console.log(`${name} is ${age} years old and is a ${gender}`);
}

sayHello(Name, age, Gender);

// ---

const userName = "Edorion"; // camelCase - стандарт JS

function createUserName(name) {
    return name.toUpperCase(); // Без зайвих присвоєнь
}

console.log(createUserName(userName));

// ---

function returnAnything() {
    console.log("Hello");
    return "Dzenkuje";
    // Все, що нижче - не спрацює
}

const qwert = returnAnything();
console.log(qwert);

// ---

const car = {
    name: "Toyota",
    speed: 200,
    // Сучасний синтаксис методів (ES6), як у класах C#:
    drive() {
        console.log("Vroom vroom");
    }
};

car.drive();
car.speed = 250;
console.log(car);