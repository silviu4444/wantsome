//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var cars = ["Mazda", "Subaru", "Volvo", "Audi", "Dodge"]
// console.log(cars.length)
//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var newArray = array1.concat(array2)
// console.log(newArray)

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var isArray1 = "I am a string";
var isArray2 = ["I", "an", "array"]
console.log(Array.isArray(isArray1))
console.log(Array.isArray(isArray2))
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var numberToString = numbers.join(" and ")

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push("Renault", "Subaru")
console.log(cars)

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.


//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]





// PART 2 -----------------------------------------------------------------





// Ex1
// Creati un obiect "car"

var objectOne = {

}
// Adaugati proprietatea name si valoarea Tesla
objectOne.name = "Tesla";
console.log(objectOne)
// Adaugat proprietatea wheels si valoarea 4
objectOne.wheels = 4;
console.log(objectOne)
// Schimbati valoarea name sa fie Mercedes
objectOne["name"] = "Mercedes";
// Stergeti proprietatea name
console.log(objectOne)


//Ex2
// Creati un obiect cu 4 proprietati
var objectTwo = {
    firstName: "Andrei",
    lastName: "Filip",
    age: 20,
    hobby: "movie"
}
// Stocati "key"-urile intr-o variabila noua
var newVar = Object.keys(objectTwo);
console.log(newVar)
// intr-o alta variabila vreau sa am toate key-urile cu litere mari

// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = { 
    rooms: 3,
    zone: "Bucium",
    animals: 1
  }
  
  // Ex5 
  // Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
  // Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
  // transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"
  
  
  //Ex6
  // Avem obiectul : 
  myObject = {
  name: "John",
  surname: "Applegate",
  }
  //Adaugati o metoda care sa sorteze cele 2 valori ale numelui.
  
  
  //Ex7 
  //Faceti o functie constructor
  // Cu functia constructor creati 3 obiecte cu valori diferite
  // Pentru toate valorile din acele obiecte transformatile in litere mari.