// Події та обробник подій у JavaScript

let counter_1 = 0;
function Btnclick(el) {
    counter_1++;
    el.innerHTML = "Count: " + counter_1;

    // alert("Message");
    // el.name = "We can change the name also in HTML";
    // console.log(el.name);
}

function BtnDblclick(){
    console.log("Дебил");
}

function inputButton(el) {
    if (el.value == "font"){
        el.style.fontSize = "20px";
    }
    else if (el.value == "color"){
        el.style.color = "red";
    }
    else if (el.value == "bg"){
        el.style.backgroundColor = "black";
    }
}