function fetchUser (){
    return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((user) => user.json())
    .then((user) => user)
}

function sayHello() {
    fetchUser()
        .then(data => {
            // Тут ми отримуємо дані у змінну 'data'
            alert(`Hello ${data.name}`); // ⚠️ УВАГА: Тут в коді помилка!
        });
}

async function getUserName(){
    try {
        const user = await fetchUser();
        console.log(`User name is ${user.name}`);
        alert(`${user.name} is the name of the user`);
    } catch (error) {
        console.error('Error fetching user:', error.message);
    }
}

sayHello();
getUserName();