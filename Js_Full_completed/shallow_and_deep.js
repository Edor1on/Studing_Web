const obj1 = {
  name: "Vitaly",
  age: 27,
  favouriteFood: {
    sweet: "chocolate",
    salty: "pizza",
  },
  sayHello: function() {
    console.log("Hello");
  }
};

// const obj2 = { ...obj1 };
// const obj2 = Object.assign({}, obj1);
const obj2 = JSON.parse(JSON.stringify(obj1)); // Найглибше копіювання, але не працює з функціями та символами.
// lodash - бібліотека для глибокого копіювання.
const obj3 = _.cloneDeep(obj1); // Отак виглядає Lodash // Використання бібліотеки lodash для глибокого копіювання об'єктів. 
// Вона забезпечує правильне копіювання навіть складних структур даних, включаючи функції та символи.


obj2.name = "John";
obj2.favouriteFood.sweet = "ice cream";
obj3.favouriteFood.sweet += ' and cake';

console.log(obj1);
console.log(obj2);
console.log(obj3);
