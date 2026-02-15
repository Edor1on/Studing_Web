// Pending (В очікуванні) — запит пішов, чекаємо на результат
// Fulfilled / Resolved (Успіх) - запит виконано успішно, отримали результат   
// Rejected (Відхилено) — запит виконано з помилкою, отримали причину відхилення
// Promises - ES6

const promise = new Promise((resolve, reject) => {
    const isUserLoggedIn = true;
    if (isUserLoggedIn) {
        setTimeout(() => resolve('You are logged in'), 2000);
    } else {
        setTimeout(() => reject('Sorry, you are not logged in!'), 2000);
    }
});

promise
    .then(data => {
        return new Promise((resolve, reject) => {
            if (5 < 10) {
                console.log(data);
                resolve(`${data} in promise 2`);
            } else {
                reject('error in nested Promise');
            }
        });
    })
    .then(data2 => data2)
    .then(data => {
        return new Promise((resolve, reject) => {
            if (5 > 10) {
                console.log(data);
                resolve(`${data} in promise 3`);
            } else {
                reject('the last error');
            }
        });
    })
    .catch(error => console.log(error))
    .finally(() => alert('The job is done!'));








function getPostsById(id) {
    const endpoint = 'https://jsonplaceholder.typicode.com';
    const result = {
        id,
        name: '',
        posts: []
    }

    return new Promise((resolve, reject) => {
        // 1. Запит за юзерами
        fetch(`${endpoint}/users`)
            .then(data => data.json())
            .then(users => {
                // 2. Знайшли юзера
                const foundUser = users.find(user => user.id === id);
                result.name = foundUser.name;

                // 3. Запит за постами (Всередині першого!)
                fetch(`${endpoint}/posts`)
                    .then(data => data.json())
                    .then(posts => {
                        // 4. Відфільтрували пости цього юзера
                        result.posts = posts.filter(post => post.userId === id);
                        
                        // 5. Повернули готовий об'єкт
                        resolve(result);
                    });
            });
    });
}

getPostsById(1).then(data => console.log(data));
console.log(11111);
