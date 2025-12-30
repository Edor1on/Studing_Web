let int = setInterval(my_func, 1000)

let counter = 0;
function my_func(){
    document.getElementById("timer").innerHTML = "Counter: " + counter;
    counter++;

    // console.log("Enter: " + timer);
    // timer++;
}

function stopInterval(){
    clearInterval(int);
}

setInterval(function(){
    console.log("2_sec...")
}, 2000)

let timer = setTimeout(function(){
    alert("Message");
}, 5000)

function stopTimer(){
    clearTimeout(timer);
}