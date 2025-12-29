// --- Вкладжені цикли ---
console.log("--- Nested Loop ---");
for (let i = 0; i < 3; i++) { // Зменшив до 3, щоб не заспамити консоль
    console.log("Outer loop: " + i);
    for (let j = 1000; j > 10; j /= 2) {
        console.log(" Inner: " + j);
    }
}

// --- WHILE ---
console.log("--- While ---");
let y = 0;
while (y < 15) {
    console.log(y);
    y += 2;
}

// --- DO WHILE ---
console.log("--- Do While ---");
let u = 100;
do {
    console.log(u);
    u /= 2;
} while (u > 10);


// --- BREAK / CONTINUE ---
console.log("--- Break & Continue ---");

for (let p = 0; p <= 10; p++) {
    
    if (p == 8) break; // Якщо 8 - повна зупинка циклу

    // Логіка: якщо парне (0, 2, 4...) - йдемо на наступну ітерацію, 
    // пропускаючи код знизу (console.log не спрацює)
    if (p % 2 == 0) continue; 

    console.log(p); // Виведе: 1, 3, 5, 7
}


// --- МАСИВИ ТА ЦИКЛИ ---
console.log("--- Arrays ---");

let nums = [5, 23, 451, 54, 65, 33];

// Додано let для j
for (let j = 0; j < nums.length; j++) {
    nums[j] *= 2;  // Множимо поточний елемент на 2
    console.log("Element " + j + " is: " + nums[j]);
}