





// TEMA STRINGS --------------------------------------







//Ex1 : La ce index intalnim cuvantul 'trece', dar cuvantul 'javascript'? Scrieti si metodele folosite.
var str = "Daca te simti bine, nu te ingrijora, trece!";
//Raspuns: 
console.log(str.indexOf("trece")) // 37
console.log(str.indexOf("javascript")) // -1


// Ex2.0: Returnati stringul Kiwi folosind metoda slice() cu indexi pozitivi si apoi negativi.
// Ex 2.1: Returnati toate fructele incepand de la 'Lemon'.
  var fruits = "Apple, Lemon, Plum, Kiwi";
  console.log(fruits.slice(20)) // Kiwi
  console.log(fruits.slice(-4)) // Kiwi
// Ex 3: Returnati stringul 'Plum' folosind metoda substr()
   var moreFruits = "Apple, Lemon, Plum, Kiwi";
   console.log(moreFruits.substr(14, 4)) // Plum

// Ex 4: Inlocuiti 'Mia Kalifa' cu numele vostru folosind o metoda pe stringuri
// bonus: Inlocuiti "Sasha" cu numele vostru in tot stringul de mai jos.
   var replaceName = "Eu sunt Mia Kalifa, doctor docent in matematica";
   console.log(replaceName.replace("Mia Kalifa", "Silviu"))
   var bonusName = "Sasha este o persoana de nota 10, Sasha invata javascript(mai nou)"
   console.log(bonusName.replace(/Sasha/g, "Silviu"))
// Ex5: Vreau ca toate literele sa fie intai cu caractere mici si apoi cu caractere mari
   var text = "24 de orE intr-o zi, 24 de beRi intr-o lAda. Vreo coincidenta?"
   console.log(text.toLowerCase())
   console.log(text.toUpperCase())
   
// Ex6: Vreau sa am la final un singur string cu toate celalte stringuri (indentati calumea, cu spatii unde e nevoie)
   var text1 = "Când ai un";
   var text2 = "ciocan";
   var text3 = "in mana toate lucrurile ti se par";
   var text4 = "cuie";
   console.log(text1.concat(" ",text2, " ", text3, " ", text4))

// Ex7: Vreau sa stiu intai ce litera se afla pentru indexul 6, apoi ce unicode are aceasta litera, si apoi vreau sa o accesez cu 'property access'
  var word = "Mamaliga";
  console.log(word.charAt(6))
  console.log(word.charCodeAt(6))
  console.log(word[6])
 
// Ex8: Vreau sa am o noua variabla care sa cotina un array format din toate stringurile de mai jos care sunt despartite de '|'
  var cars = "Toyota|Mazda|Tesla|Hyundai|Dacia";
  var allCars = cars.split("|")
  console.log(allCars)
  
//Big BONUS 
// Se dau variabilele de mai jos, vreau sa ajung la rezultatul "NU EXISTA INTREBARI PROASTE" fara sa modific valorile celor 2 variabile;
  var firstWord = 'Nu exista';
  var secondWord = 'raspunsuri proaste';
  var secondWord2 = secondWord.replace("raspunsuri", "intrebari");
  var result = firstWord.concat(" ", secondWord2)
  console.log(result.toUpperCase())


  





//   =============TEMA FUNCTIONS ================================







function isString(word) {
   if(typeof word === "string") {
      return true;
   }
   else {
      return false;
   }
}

console.log(isString(1))

function isBlank(word) {
   var string = word;
   if(string === "") {
      return "This is empty"
   } else {
      return "There is a string"
   }
}
console.log(isBlank("abc"))

function stringToArray(word) {
   var string = word;
   if(typeof string === "string") {
      return string.split(", ")
   } else {
      return "This it's not a string!"
   }
}

console.log(stringToArray("Razvan, Petrescu"))

function abbrevName(name) {
   var abrev = name.split(" ");
   var decrease = abrev[1].slice(0, 1)
   var fullNameDecrease = abrev[0] + " " +  decrease.concat(".")
   return fullNameDecrease;
}

console.log(abbrevName("Robert Silviu"))

function capitalize(expression) {
   var capitalizeFirstLetter = expression.charAt(0);
   var resultFirstLetter = capitalizeFirstLetter.toUpperCase();
   var lengthOfExpression = expression.length;
   var concat = expression.slice(1, lengthOfExpression)
   var result = resultFirstLetter + concat;
   return result
}

console.log(capitalize("eu nu sunt ca ceilalti"))

function truncateString(expression, number) {
   result = expression.slice(0, number);
   return result;
}
console.log(truncateString("Robin Singh", 4))

function isUpperCaseAt(expression, number) {
   var character = expression.charAt(number);
   if(character === character.toUpperCase()) {
      return true;
   } else {
      return false
   }
}
console.log(isUpperCaseAt("Eu sunt andrei", 0))

function insert(expression, stringInsertion, pointOfInsertion) {
   var expressionDeclared = [expression.slice(0, pointOfInsertion), stringInsertion + " " , expression.slice(pointOfInsertion)].join("");
   return expressionDeclared;
}

console.log(insert("I am your king", "last", 10))

function removeFirstOccurrence(expression, wordRemove) {
   var sentenceOne = expression.replace(wordRemove, "");
   return sentenceOne;
}

console.log(removeFirstOccurrence("I am the best gamer", "the"))

function compareStrings(stringOne, stringTwo) {
   if(stringOne.toUpperCase() === stringTwo.toUpperCase()) {
      return true;
   } else {
      return false;
   }
}

console.log(compareStrings("abc", "aBc"))

function uncapitalize(expression) {
   var sentence = expression;
   var wordToLowerCase = sentence.slice(0, 1).toLowerCase()
   var result = wordToLowerCase + sentence.slice(1)
   return result;
}

console.log(uncapitalize("Js is awesome"))









// TEAMA ARRAYSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS











//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.
var createArray = ["Volvo", "Audi", "BMW", "Dodge", "SAAB"];
console.log(createArray.length)
//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur
var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];
var array3 = array1.concat(array2)
console.log(array3)

//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()
var isArray1 = ['One', "Two"];
var isArray2 = "One, Two";
console.log(Array.isArray(isArray1))
console.log(Array.isArray(isArray2))
//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala
var numbers = ['one', 'two', 'three', 'four', 'five'];
var numbersToStrings = numbers.join(" and ")
console.log(numbersToStrings)

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push("Volvo", "Audi")
console.log(cars)


//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.
cars.pop()
console.log(cars)
//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului
cars.unshift("Dodge")
console.log(cars)
//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array
cars.reverse()
console.log(cars)
//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();
cars.splice(3, 0, "BMW", "Renault")
console.log(cars)
//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20 ,30, 100];
arrayNumbers.sort(function(a, b) {
   return b - a; //ori a - b, dar ele sunt deja ordonate in array-ul principal...
})
console.log(arrayNumbers)
//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ["Apple", "Lemon", "Banana", "Orange", "Bere", "Mici"]



console.log(fruitsArray)



