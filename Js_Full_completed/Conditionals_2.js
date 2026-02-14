const isUserLoggedIn = true;
const age = 18;
let name = "Vitaly";

if (age === 18 && name === "Vitaly" && isUserLoggedIn) {
  alert("Congrats!");
}

name += " is the best";

const life = {
  name: "Vitaly",
  age: 18,
  sex: "male",
};

delete life.age;

console.log(life);

console.log('sex' in life);

// console.log(num1 + num2);
// console.log(num1 - num2);
// console.log(num1 * num2);
// console.log(num1 / num2);
// console.log(num1 % num2);


/*
==================== JS OPERATORS CHEAT SHEET ====================

ARITHMETIC:
+   addition
-   subtraction
*   multiplication
/   division
%   remainder
**  power

ASSIGNMENT:
=   
+=  
-=  
*=  
/=  
%=  

COMPARISON:
==   equal (type conversion)
===  strict equal
!=   
!==  
>    
<    
>=   
<=   

LOGICAL:
&&   AND
||   OR
!    NOT

STRING:
+   
+=  

INCREMENT / DECREMENT:
++
--

TERNARY:
condition ? value1 : value2

TYPE:
typeof value

===============================================================
*/
