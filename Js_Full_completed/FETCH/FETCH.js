console.log(1);
console.log(2);


// fetch("https://jsonplaceholder.typicode.com/todos/1")
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error("Error fetching data:", error));


// fetch - це вбудований у браузер API для здійснення HTTP-запитів.
// Він повертає проміс, який вирішується об'єктом Response, що представляє відповідь на запит.
// Ми можемо використовувати методи цього об'єкта для отримання даних у потрібному форматі (наприклад, JSON).
// Fetch також підтримує обробку помилок через catch, що дозволяє нам ефективно керувати асинхронними операціями та обробляти можливі проблеми з мережею або сервером.

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
        const list = document.querySelector(".posts-list");
        
        json.forEach((item, index) => {

            // 1. Creating elements (Створюємо теги)
            const post = document.createElement("li");
            const postIndex = document.createElement("span");
            const postTitle = document.createElement("h4");
            const postText = document.createElement("p");
            const postReadMoreLink = document.createElement("a");

            // 2. Adding classes (Додаємо класи для стилів)
            post.classList.add('posts-list-item');
            postIndex.classList.add('post-index');
            postTitle.classList.add('post-title');
            postText.classList.add('post-text');
            postReadMoreLink.classList.add('post-link');

            // 3. Updating content (Заповнюємо даними з сервера)
            postIndex.innerHTML = index + 1;
            postTitle.innerHTML = item.title;
            postText.innerHTML = item.body;
            postReadMoreLink.innerHTML = 'Read more';

            // 4. Inserting item into the list (Збираємо все до купи)
            post.append(postIndex, postTitle, postText, postReadMoreLink);
            list.appendChild(post);
        });
    });


console.log(3);
console.log(4);