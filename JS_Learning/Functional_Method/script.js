console.log("--- 1. ЗАВДАННЯ: forEach (Просто дія) ---");

let names = ["Adrian", "Artur", "Yura"]; 

names.forEach((element) => {
    console.log(element.toUpperCase());
});


console.log("\n--- 2. ЗАВДАННЯ: map (Трансформація даних) ---");
let numbers = [2, 4, 6];

let squaredNumbers = numbers.map((num) => {
    return num * num;
});

console.log("Було:", numbers);
console.log("Стало (квадрати):", squaredNumbers);


console.log("\n--- 3. ЗАВДАННЯ: filter (Фейс-контроль) ---");

let grades = [60, 35, 90, 45, 100];

let badGrades = grades.filter((grade) => {
    return grade < 50;
});

console.log("Всі оцінки:", grades);
console.log("На перездачу:", badGrades);