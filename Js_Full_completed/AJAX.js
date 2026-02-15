console.log(1);
console.log(2);
console.log(3);
console.log(4);

setTimeout(() => {
    console.log("Hello from setTimeout");
}, 5000);

console.log(5);
console.log(6);
console.log(7);
console.log(8);
console.log(9);
console.log(10);

function fetchData() {
    console.log("Fetching data...");
    setTimeout(() => {
        console.log("Data fetched!");
    }, 3000);
}

fetchData();

console.log("Start");