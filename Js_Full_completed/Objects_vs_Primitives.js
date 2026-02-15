// number
// string
// boolean
// null
// undefinded
// object
// Bigint
// symbol

let a = 10;
let b = a; // b створює собі КОПІЮ значення 10

a = 50; 
console.log(b); // b залишилось 10. Вони незалежні.



const user1 = { name: "Adrian" };
const user2 = user1; // ⚠️ УВАГА! Ми скопіювали АДРЕСУ, а не об'єкт.

user2.name = "Ivan"; // Змінюємо через user2...

console.log(user1.name); // 😱 Виведе "Ivan"!



const original = [1, 2, 3];

// Створюємо НОВИЙ масив і "висипаємо" туди старі дані
const copy = [...original]; 

copy.push(4); 

console.log(original); // [1, 2, 3] - Фух, оригінал цілий!
console.log(copy);     // [1, 2, 3, 4] - А це вже новий масив з доданим елементом.


const Arr1 = [
    "Fc Real Madrid",
    "Fc Bayern Munich",
    "Fc Barcelona",
    "Fc Liverpool",
    "Fc Manchester United"
];

function createTeamsForCalendar(teams){
    return teams.map((item, index) => item = item.split(" ")[1]);
}


// function createTeamsForCalendar(teams){
//     teams.forEach((item, index) => {
//         const OnlyCLubName = item.split(" ")[1];
//         teams[index] = OnlyCLubName;
//         // console.log(OnlyCLubName);
//     })
// }

createTeamsForCalendar(Arr1);
console.log(Arr1);