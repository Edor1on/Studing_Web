let data = new Date();
// data.setHours(23); по замовчуваню встановлюємо значення години
console.log(data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds()); // покаже теперішню годину, якщо попередньо вона не встановлена // getfull year


setInterval(function(){
    let data = new Date();
    let time = (data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds())

    document.getElementById("time").innerText = time;
}, 1000);

let arr = [1, 5, 3, true, "grey"];
console.log(arr.sort().reverse()); //.length


let user = prompt("Enter films: ");
let films_split = user.split(",");
console.log(films_split);
let films_join = films_split.join("-");
console.log(films_join);    

