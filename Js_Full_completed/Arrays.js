const Subscribers = [
    {name: "Olena", age: 40, proffesion: "programmer"},
    {name: "Adrian", age: 19, proffesion: "programmer"},
    {name: "Anna", age: 17, proffesion: "teacher"}
];

const HaveYouGotSubscribers = true;

if(HaveYouGotSubscribers) {
    Subscribers.unshift({name: "Lileya", age: 17, proffesion: "designer"});
    Subscribers.push({name: "Nastya", age: 16, proffesion: "teacher"});  // push - додавання елемента в кінець масиву
    Subscribers.unshift({name: "Lida", age: 17, proffesion: "designer"}); // unshift - додавання елемента в початок масиву
    Subscribers.pop(); // pop - видалення останнього елемента масиву
    Subscribers.shift(); // shift - видалення першого елемента масиву
}

console.log(Subscribers);

if (HaveYouGotSubscribers) {
    Subscribers.splice(1, 1, {name: "Karina", age: 22, proffesion: "programmer"}); // splice - видалення елемента за індексом (1 - індекс, 1 - кількість елементів для видалення, {name: "Karina", age: 22, proffesion: "programmer"} - елемент для додавання)
}

console.log(Subscribers.length);


function calculateUsers(subscribers) {
    if (subscribers.length > 100) {
        alert("You have a lot of subscribers than 100!");
    }
    else {
        alert("You have less subscribers than 100! LOH!!!!!!");
    }
}

calculateUsers(Subscribers);