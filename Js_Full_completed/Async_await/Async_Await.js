// function fetchUser (){
//     return fetch('https://jsonplaceholder.typicode.com/users/1')
//     .then((user) => user.json())
//     .then((user) => user)
// }

// function sayHello() { // устарівший синтаксис для асинхронного коду, який використовує колбеки або проміси
//     fetchUser()
//         .then(data => {
//             // Тут ми отримуємо дані у змінну 'data'
//             alert(`Hello ${data.name}`); // ⚠️ УВАГА: Тут в коді помилка!
//         });
// }


// async function sayHello23() { 
//     return "Hello world!" // Ця функція повертає рядок, а не проміс, тому вона не є асинхронною
// }

// async function getUserName(){
//     try {
//         const user = await fetchUser();
//         console.log(`User name is ${user.name}`);
//         alert(`${user.name} is the name of the user`);
//     } catch (error) {
//         console.error('Error fetching user:', error.message);
//     }
// }
 
// sayHello();
// console.log(sayHello23());
// getUserName();


async function fetchUser(){
    // return fetch('https://jsonplaceholder.typicode.com/users')
    // .then((user) => user.json())
    // .then((user) => user)
    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    return result.json();
}


async function renderList(){
    const users = await fetchUser();
    const ul = document.querySelector(".users-list");
    
    for (const user of users){
        const li = document.createElement("li");
        // Фікс: зробив назву класу чіткою
        li.classList.add("user-list-item"); 
        li.innerHTML = user.name;
        ul.appendChild(li);
    }
}

function filterUsers(event) {
    // Фікс: шукаємо правильний клас (без зайвої 's' у слові user)
    const usersListItems = document.getElementsByClassName("user-list-item");
    const searchText = event.target.value.toLowerCase(); // Робимо пошук нечутливим до регістру

    // До речі, перший if (element.target.value.length === 0) можна взагалі видалити, 
    // бо цикл нижче сам чудово справляється з порожнім рядком!

    // Фікс: додав const перед змінною
    for (const user of usersListItems) {
        // Перевіряємо, чи є введений текст в імені юзера (теж приводимо до нижнього регістру)
        if (!user.innerHTML.toLowerCase().startsWith(searchText)) {
            user.classList.add("hiden");
        } else {
            user.classList.remove("hiden");
        }
    }
}

renderList();

// Фікс: виправив опечатку в addEventListener і додав крапку для класу інпуту
document.querySelector(".input").addEventListener("keyup", filterUsers);