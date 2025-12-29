// --- МАСИВИ ---

// Стара версія (конструктор потребує круглих дужок)
let data_old = new Array(8, 9, 7); 

// Нова версія (літерал масиву - рекомендовано)
let data = [1, 2, 4, 5.45, "qwer4", true, [54, "nweArray"]];

// Виправлено: прибрали лапки, щоб вивести саму змінну
console.log(data); 

data[0] = "New Value"; // Присвоєння нового значення
console.log(data[0]);

console.log(data[2]); // Вивід 3-го елемента (індекс 2)
console.log("Довжина масиву: " + data.length);


// --- МАТРИЦІ (Двовимірні масиви) ---

let Matrix = [
    [5, 6],             // індекс 0
    ["word", true],     // індекс 1
    [false, 4.823, 0]   // індекс 2
];

// Все вірно!
Matrix[0][0] = 60; 

console.log(Matrix[2][1]); // Виведе 4.823
console.log(Matrix.length); // Виведе 3 (кількість рядків)
console.log(Matrix[1].length); // Виведе 2 (довжина рядка ["word", true])