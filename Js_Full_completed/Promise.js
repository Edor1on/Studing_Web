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