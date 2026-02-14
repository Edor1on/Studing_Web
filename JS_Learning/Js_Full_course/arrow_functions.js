function sayHello () {
    console.log("Hello");
}

const sayHello2 = () => {
    console.log("Hello 2");
}


//


function sayHelloToPearson(name){
    console.log("Hello" + name)
}

const sayHelloToPearson2 = (name) => {
    console.log("Hello 2 " + name);
}

//

function summ (a, b){
    console.log(a + b);
}

const summ = (a, b) => {
    //console.log(a + b);
    return a + b;
}

// const summ2 = (a, b) => a + b;

console.log(summ(2, 3));




// ==== ====

const users = [
  {
    name: "Vitaly",
    age: 26,
    sex: "male",
  },
  {
    name: "Jessica",
    age: 17,
    sex: "female",
  },
  {
    name: "Robert",
    age: 16,
    sex: "male",
  },
  {
    name: "Sarah",
    age: 20,
    sex: "female",
  },
  {
    name: "Rob",
    age: 34,
    sex: "male",
  },
];

// const filteredArr = users.filter(function(item){
//     return item.age > 17;
// });

const filteredArr = users.filter((item)  =>  {
    return item.age > 17;
});

console.log(filteredArr);