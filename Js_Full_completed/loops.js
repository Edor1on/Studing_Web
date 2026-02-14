const Subscribers = [
    {name: "Olena", age: 40, isCloseFriends: true},
    {name: "Adrian", age: 19, isCloseFriends: true},
    {name: "Anna", age: 17, isCloseFriends: true},
    {name: "Lida", age: 17, isCloseFriends: true},
    {name: "Nastya", age: 16, isCloseFriends: true},
    {name: "Karina", age: 22, isCloseFriends: true}
];

for (let i = 0; i < Subscribers.length; i++) {
    console.log(Subscribers[i]);
}

for (const item of Subscribers) {  // for of - для перебору масивів
    console.log(item);
}

const obj = {
    name: "Vitaly",
    age: 18,
    isCloseFriends: true,
    profesion: "programmer"
}

for (const key in obj){
    console.log(key, obj[key]); // key - це коюч та виведе name, age, isCloseFriends, profesion, // а obj[key] - це значення по ключу, тобто Vitaly, 18, programmer, programmer
}

let i = 0;
while (i < Subscribers.length) {
    console.log(Subscribers[i]);
    i++;
}


do{
    console.log(Subscribers[i]);
    i++;
} while(i < Subscribers.legth);


//
function squareArr(number){
    for (let i = 0; i < number.length; i++) {
        number[i] = number[i] ** 2;
    }
    return number;
}

const arr = [1, 2, 3, 4, 5];

console.log(squareArr(arr));




const arr2 = [
    {
    name: "Adrian",
    sex: "Male"
    },
    {
    name: "Anna",
    sex: "Female"
    },
    {
    name: "Karina",
    sex: "Female"
    },
    {
    name: "Olya",
    sex: "Female"
    },
    {
    name: "Lileya",
    sex: "Female"
    }
]


function ChooseHowIsBeautifull(item) {
    for (let i = 0; i < item.length; i++){
        if (item[i].sex === "Male"){
            item[i].name += " is the best";
            console.log(`${item[i].name} is the handsome man in the world))`);
        }
        else {
            item[i].name += " is the best";
            console.log(`${item[i].name} is the most beautiful woman in the world))`);
        }
    }
}

ChooseHowIsBeautifull(arr2);



for (const item of arr2) {
    if (item.sex === "Male"){
        console.log(`${item.name} is the handsome man in the world))`);
    }
    else {
        console.log(`${item.name} is the most beautiful woman in the world))`);
    }
}
