function sayhello(){
    console.log("Hello");
}
sayhello();

const sayhelloArrow = () => {
    console.log("Hello");
}
sayhelloArrow();

function SomeName (name) {
    console.log(name);
}
SomeName("Edorion")

const SomeNameAroow = (name) => {
    console.log(name);
}

SomeNameAroow("Adrian");

function summ (a, b) {
    console.log(a + b);
}

summ(2, 2);

const summ2 = (a, b) => {
    console.log(a + b);
}

summ2(1, 2);



user = [1,2,3,4,5]


const userfilter = user.filter((item) => {
    return item > 3;
})