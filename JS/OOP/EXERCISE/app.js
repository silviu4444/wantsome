// function Vehicle(manufacturer, numberOfWheels, driverLicenseType, color, hp) {
//     this.manufacturer = manufacturer;
//     this.numberOfWheels = numberOfWheels;
//     this.driverLicenseType = driverLicenseType;
//     this.color = color;
//     this.hp = hp;

//     // setters
//     this.setManufacturer = function (manufacturer) {
//       this.manufacturer = manufacturer;
//     };

//     this.setNumberOfWheels = function (numberOfWheels) {
//       this.numberOfWheels = numberOfWheels;
//     };

//     this.setColor = function (color) {
//       this.color = color;
//     };

//     this.setDriverLicenseType = function (driverLicenseType) {
//       this.driverLicenseType = driverLicenseType;
//     };

//     this.setHp = function (hp) {
//       this.hp = hp;
//     };

//     this.printDetails = function () {
//     //   console.log("THIS IS A PRINT METHOD FOR SMTH:" + this.manufacturer);
//     };
//   }

//   function Car(numberOfDoors, engineType, carType) {
//     this.numberOfDoors = numberOfDoors;
//     this.engineType = engineType;
//     this.carType = carType;
//   }

//   Car.prototype = new Vehicle();

//   const mazda = new Car(4, "diesel", "sedan");
//   mazda.setManufacturer("Mazda");
//   mazda.setHp("115");
//   mazda.setColor("red");
//   mazda.setDriverLicenseType("B");
//   mazda.setNumberOfWheels(4);

//   mazda.printDetails();
// //   console.log(mazda)

//   function Moto(motoType) {
//     this.motoType = motoType;
//     // mosteneste vehicle

//     this.oneWheel = function () {
//       // do smth...
//     };
//   }

//   Moto.prototype = new Vehicle();

//   const yamaha = new Moto("sport");
//   yamaha.setManufacturer("YMH");
//   yamaha.setHp("230");
//   yamaha.setColor("black");
//   yamaha.setDriverLicenseType("A");
//   yamaha.setNumberOfWheels(2);

//   console.log(yamaha);















var Person = function () { };

Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

const Trainer = function () {
  this.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
  }
}

Trainer.prototype = new Person();

const aTrainer = new Trainer();
aTrainer.initialize("Alex", 20);
// aTrainer.teach("Razvan");
// console.log(aTrainer);






















// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function (driver) {
  this.driver = driver;
  this.setSpeed = function (speed) {
    this.speed = speed;
  }
  this.drive = function (mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
};

var Car = function (driver) {
  this.driver = driver;
};

var Truck = function (driver) {
  this.driver = driver;
  this.cargo = [];
  this.loadCargo = function (cargo) {
    this.cargo.push(cargo);
    return this;
  };

  this.unloadCargo = function () {
    return this.cargo.pop();
  };
};

Car.prototype = new Vehicle();
Truck.prototype = new Vehicle();

const lexus = new Car('James');
//   console.log(lexus.drive("200"))
//   console.log(lexus)

const man = new Truck('Luke');
//   console.log(man.drive("90"))
//   console.log(man.loadCargo("beer"))
//   console.log(man.unloadCargo())
















// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)
function Forma(type) {
  this.type = type;
  this.getType = function () {
    return this.type;
  }
}

function Triangle(a, b, c) {
  this.a = a;
  this.b = b;
  this.c = c;

  this.getPerimeter = function () {
    return this.a + this.b + this.c;
  }
}



Triangle.prototype = new Forma("triunghi");

// const triunghi = new Triangle(6, 6, 10);
// console.log(triunghi.constructor)
// console.log(triunghi.getPerimeter())
// console.log(triunghi.getType())
// console.log(Forma.prototype.isPrototypeOf(triunghi))















//1. Creati o clasa Person care sa aiba firstName si lastName in constructor
//2.aduagati o metoda displayPersonName care sa returneze numele complet
//3. creati o persoana cu noua clasa unde dati un nume si-un prenume si apelati metoda respectiva





class PersonOne {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  displayPersonName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const newPerson = new PersonOne("Gradinariu", "Iasmina");
// console.log(newPerson.displayPersonName())





//1. Creati o clasa Animal care sa aiba in constructor name si weight
//2. Creati urmatoarele metode: eatFood, sleep, wakingUp - fiecare metoda o sa returneze un string '$name is eating' '$name is sleeping' '$name is weaking up'
//3. Creati o clasa noua care sa faca extend la clasa Animal si sa ia numele si weight-ul de la el(tip: super) - ex: class Elephant, class Lion etc
//4. Adaugati 4 metode noi:
//   walking - $name is walking
//   rage - $name is rageing 
//   showBehaviour - returnati metodele eatFood si rage
//   dailyRoutine - returnati metodele wakingUp, rage, eatFood si sleep

//5. Creati o constanta noua din clasa cu numele de animal pe care ati scris-o mai sus( NU DIN clasa Animal ci din clasa Elephant, Monkey, Lion etc etc);
//6. Accesati toate cele 4 metode de pe noul animal. 

class Animal {
  static #private = 0;
  name = "Name";
  weight;

  constructor(name, weight) {
    this.name = name;
    this.weight = weight;
  }

  eatFood() {
    return `${this.name} is eating`;
  }

  sleep() {
    return `${this.name} is sleeping`;
  }

  wakingUp() {
    return `${this.name} is waking up`;
  }
};

class Lion extends Animal {
  constructor(name, weight) {
    super(name, weight);
  }

  walking() {
    return `${this.name} is walking`;
  }

  rage() {
    return `${this.name} is rageing`;
  }

  get getBehaviour() {
    const eatFoodResult = super.eatFood();
    const rageResult = this.rage();
    return `${eatFoodResult} ${rageResult}`;
  }

  dailyRoutine() {
    super.wakingUp();
    this.rage();
    super.eatFood();
    super.sleep();
  }
};

const aLion = new Lion('King');
const anAnimal = new Animal("Dog", 10);











//1. creati o clasa Account care sa aiba location si name la constructor
//2. creati o clasa Transaction care sa iba sender, bank, amount si reference la constructor
//2.1 - clasa Transaction sa aiba un getter finalSum() care sa scada din amount 10;
//3. creati o clasa Table care sa aiba in cunstructor un array gol transactions
//3.1 Clasa Table sa aiba o metoda addTransaction unde sa putem adauga tranzactiile pe care o sa le creem mai tarziu



// const bankAccount = ...;
// const transaction1 = ...;
// const transaction2 = ...;
// const table = ...;
// table.addTransaction(...) 
// console.log(table)



class Account {
  location;
  name;

  constructor(location, name) {
    this.location = location;
    this.name = name;
  }
}

class Transaction {
  sender;
  bank;
  amount;
  reference;

  constructor(sender, bank, amount, reference) {
    this.sender = sender;
    this.bank = bank;
    this.amount = amount;
    this.reference = reference;
  }

  get finalSum() {
    return this.amount -= 10;
  }

  get accountName() {
    return 
  }
}

class Table {
  constructor() {
    this.array = [];
  }

  addTransaction(transaction) {
    this.array.push(transaction);
  }
}

const bankAccount = new Account("Iasi", "Ionut");
const transaction1 = new Transaction(bankAccount, "BT", 250, "Trimis de la Ionut pentru Razvan.");
const transaction2 = new Transaction(bankAccount, "CEC", 1000, "Trimis de la Ionut pentru Andreea.");
const table = new Table();
table.addTransaction(transaction1);
table.addTransaction(transaction2);
console.log(table);