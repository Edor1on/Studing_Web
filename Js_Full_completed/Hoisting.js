// === ПРАВИЛО 1: ФУНКЦІЇ ===
// ✅ Можна викликати ДО оголошення
sayHello(); 

function sayHello() {
    console.log("Привіт!");
}

// ❌ АЛЕ! Якщо це стрілкова функція або через const - буде помилка
// sayBye(); // 🛑 Error: Cannot access 'sayBye' before initialization

const sayBye = () => {
    console.log("Папа!");
};


// === ПРАВИЛО 2: VAR (Старе) ===
console.log(oldVar); // ⚠️ Виведе: undefined (не помилку, але й не значення)
var oldVar = 10;


// === ПРАВИЛО 3: LET / CONST (Нове) ===
// console.log(newVar); // 🛑 Error: Cannot access 'newVar' before initialization
let newVar = 20;





const NumbArr = [1, 2, 3, 4, 5, 7 ,1, 3, 5, 6, 2, 8, 9, 0];
function getRepetiotionsOfNumbers(NumbersArr, number) {
    let counter = 0;
    for (const item of NumbersArr){
        if (item === number){
            counter++;
        }
        // else {
        //     console.log(`До данної цифри ${item} немає подібних`);

        // }
    }
    return counter > 0 ? counter : "Данного числа немає";
}


console.log(getRepetiotionsOfNumbers(NumbArr, 1));