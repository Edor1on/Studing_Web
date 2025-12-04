// const spermatozoids = [1, 2, 3, 4];

// function cum(times) {
//    let total = 0;

//  for(let penis=0; penis < times.length; penis++) {
//  total += times[penis];
// }

// return total;
// }
// console.log(cum(spermatozoids));

const numbers = [1, 2, 3, 4];

function countSum(arr) { // arr — це скорочення від array (масив)
    let sum = 0; // Змінна для накопичення результату

    // Класичний цикл
    // 1. let i = 0  -> Починаємо з індексу 0 (перший елемент)
    // 2. i < arr.length -> Працюємо, поки i менше за довжину масиву
    // 3. i++ -> Після кожного кола збільшуємо i на 1
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i]; // Додаємо до суми число під номером i
        // Це те саме, що: sum = sum + arr[i];
    }

    return sum;
}

console.log(countSum(numbers));