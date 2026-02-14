// Type coercion

const age = 0;
const isUserLoggedIn = false;

if (undefined) {
  console.log("true");
}

// 0
// -0
// NaN
// undefined
// null
// ""
// false

let num = 10;
let str = "hello";

console.log(num + str);

console.log(str.toUpperCase());