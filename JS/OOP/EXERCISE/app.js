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
  














var Person = function() {};

Person.prototype.initialize = function(name, age)
{
    this.name = name;
    this.age = age;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

const Trainer = function() {
    this.teach = function(subject) {
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

  var Vehicle = function(driver) {
    this.driver = driver;
    this.setSpeed = function(speed) {
        this.speed = speed;
    }
    this.drive = function(mph) {
      this.speed = mph;
      return this.driver + ' driving at ' + mph + ' miles per hour';
    };
  };

  var Car = function(driver) {
    this.driver = driver;
  };

  var Truck = function(driver) {
    this.driver = driver;
    this.cargo = [];
    this.loadCargo = function(cargo) {
      this.cargo.push(cargo);
      return this;
    };

    this.unloadCargo = function() {
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
function Triangle(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    this.getPerimeter = function() {
        return this.a + this.b + this.c;
    }
    this.getType = function() {
        return this.type;
    }
}

function Forma(forma) {
    this.type = forma;
    this.setType = function(forma) {
        this.type = forma;
    }
}


Forma.prototype = new Triangle();

const triunghi = new Triangle(6, 6, 10);
console.log(triunghi.constructor)
// console.log(triunghi.getPerimeter())
console.log(triunghi.getType("dreptunghic"))