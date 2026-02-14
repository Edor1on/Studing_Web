const firstName = "Adrian";

function sayHello(){
    const LastName = "Zakharko";

    return function () {
        console.log(`Hello, ${firstName} ${LastName}`);
    }
}

sayHello()(); // Виклик функції, яка повертає іншу функцію, і одразу викликаємо її.

const test = sayHello(); // Виклик функції, яка повертає іншу функцію, і зберігаємо її в змінну.
test(); // Виклик функції, яка повертає іншу функцію, і зберігаємо її в змінну, а потім викликаємо її.