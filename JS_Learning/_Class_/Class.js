class Person {
    name = ""
    age = 0
    bio = ""

    constructor (name, age, bio){
        this.name = name
        this.age = age
        this.bio = bio
    }

    Info(){
        console.log("Name: " + this.name + ", Age: " + this.age + ", Bio: " + this.bio);
    }
}

let Adrian = new Person();
Adrian.name = "Adrian";
Adrian.age = 19;
Adrian.bio = "King of the king";

let Artur = new Person();
Artur.name = "Artur";
Artur.age = 19;
Artur.bio = "some_bio";

let Alex = new Person();
Alex.name = "Alex";
Alex.age = 17;
Alex.bio = "Makedonskiy";

let Vova = new Person();
Vova.name = "Vova";
Vova.age = 19;
Vova.bio = "Vovaso";

let Yura = new Person();
Yura.name = "Yura";
Yura.age = 18;
Yura.bio = "BANZAI";

let Vjacheslav = new Person();
Vjacheslav.name = "Vjacheslav";
Vjacheslav.age = 19;
Vjacheslav.bio = "подружка ковбоя";

let Demian = new Person();
Demian.name = "Demian";
Demian.age = 21;
Demian.bio = "Makedonskiy";

let Tima = new Person();
Tima.name = "Tima";
Tima.age = 18;
Tima.bio = "water";

let Rostik = new Person();
Rostik.name = "Rostik";
Rostik.age = 22;
Rostik.bio = "Regent";

let Romko = new Person("Romko", 22,"Python"); // за допомогою конструктора

Adrian.Info();
Artur.Info();
Alex.Info();
Vova.Info();
Yura.Info();
Vjacheslav.Info();
Demian.Info();
Tima.Info();
Rostik.Info();