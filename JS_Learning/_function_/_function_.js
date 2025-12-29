// function

function print(Someword){
    console.log(Someword + "!");
}

print("Adriano chelentano");

let Somenew = "New text";
print(Somenew);

function add(x, y){
    if (x != null && y != null){
        let result = Number(x) + Number(y);
        print("Result: " + result)
    }
}

add(4, 5);

let user1 = prompt("Enter First element: ");
let user2 = prompt("Enter Second element: ");

add(user1, user2);

// function fo summing arrays
function arrSum(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

let arr1 = [1, 5, 7, 3];
let resArr1 = arrSum(arr1);

let arr2 = [5, 3, 8, 9, 2];
let resArr2 = arrSum(arr2);

if (resArr1 > resArr2){
    console.log(resArr1);
}
else console.log(resArr2);

// alert return = empty; confirm and prompt виводять