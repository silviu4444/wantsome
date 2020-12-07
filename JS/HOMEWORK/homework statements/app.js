// PRACTICE ONE----------------------------------
// Folosind for scrieti un program care logheaza la consola toate numerele de la 1 la 100.
// Modificati-l astfel incat sa logheze doar numerele pare.
// Creati algoritmul in pseudocod si apoi implementati-l in JS.


for(let i = 0; i <= 100; i = i + 3) {
    // console.log('Numere impare', i)
}


// PRACTICE TWO------------------------------
var j = 0;
while(j < 100) {
    // console.log('Numere impare', j)
    j = j + 3;
}

// PRACTICE THREE-----------------------------
var k = 1;
do {
    if(k % 2 === 0) {
        // console.log('Numar par  ', k)
    } else {
        // console.log('Numar impar', k)
    }
    k++;    
} while (k <= 100)

// PRACTICE FOUR--------------------

// calculati media aritmetica a unui array de numere
// avand un array cu numere, valori boolene, obiejcte si stringuri calculati suma tuturor
// numerelor. Ignorati toate valorile care nu sunt de tip numar.
// creati un program care afiseaza primele 20 numere din sirul lui Fibonacci

var arrayOne = [10, 3, 5, 7, 5];
function mediaAritmetica(array) {
    var sum = 0;
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}


// console.log(mediaAritmetica(arrayOne))

var arrayTwo = [10, true, {key: 10}, "I am a string", 5];


function enumeratie(arr) {
    var sum = 0;
    for(var i =0; i < arr.length; i++) {
        if(typeof(arr[i]) === "number") {
            sum += arr[i];
        }
    }
    return sum;
}
// console.log(enumeratie(arrayTwo))

function fibonacci(numb) {
        var a = 1;
        var b = 0;
        var rem;
    for(var i = 0; i < numb; i++) {
        rem = a;
        a = a + b;
        b = rem;
        console.log(b)
    }
    return "Al 20-lea numar din sirul lui Fibonacci este:" + b;
}

// console.log(fibonacci(20))


// FUNCTION BOOKS

var arrayBooks = [
    { // 0
        title: "Invatare", // 0
        author: "Tara Westover", // 1
        isRead: true // 2
    },
    { // 1
        title: "Cazul Magheru", // 0
        author: "Mihael Drumes", // 1
        isRead: true // 2
    },
    { // 2
        title: "27 de pasi", // 0
        author: "Tibi Useriu", // 1
        isRead: false // 2
    }
]

function books(arr) {
    for(var i = 0; i < arr.length; i++) {
        if(arr[i].isRead === true) {
            console.log(arr[i]["title"] + " by " + arr[i]["author"] + " it was read")
        } else {
            console.log(arr[i]["title"] + " by " + arr[i]["author"] + " it wasn't read")
        }
    }
}
// console.log(books(arrayBooks))


// PART 2------------------------------------------------------------------------

//Ex1
//Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"
function protectEmail(email) {
    var mail = email;
    var firstPart = email.slice(0, email.indexOf("@"));
    var lastPart = email.slice(email.indexOf("@") + 1);
    var result = firstPart.slice(0, firstPart.length / 2) + "...@" + lastPart;
    return result;
}
// console.log(protectEmail("george.simionescu223@yahoo.com"))

  
  //Ex2
  //Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
  // de ex: myFunction("i am superman") sa printeze "I Am Superman"
function uppercaseString(string) {
    var str = string;
    var array = string.split(" ");
    var result = "";
    for(var i = 0; i < array.length; i++) {
        result += array[i].toString().charAt(0).toUpperCase() + array[i].toString().slice(1) + " ";
    }
    console.log(result)
}
// uppercaseString("i am superman")
  



  //Ex3
  // Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
  // ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"
function letterChange(string) {
    var str = string;
    var array = str.split("");
    var result = "";
    for(var i = 0; i < array.length; i++) {
        if(array[i] === array[i].toUpperCase()) {
            result += array[i].toLowerCase();
        } else {
            result += array[i].toUpperCase();
        }
    }
    console.log(result)
}
// letterChange("xxxYyYzZZ")
  



  //Ex4
  // Scrieti o functie care sa concateneze un string de cate ori ii zicem
  // de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"
  
function concat(string, times) {
    var str = string;
    var result = "";
    for(var i = 0; i < times; i++) {
        result += "".concat(str)
    }
    console.log(result)
}

// concat("Wantsome", 3)



  //Ex5
  // A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word 'level'.
  // Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante
  function isPalindrome(string) {
      var str = string;
      var reverseArr = string.split("").reverse().join("")
      var result = "";
      if(str === reverseArr) {
          result += "Yes, " + str + " it's a palindrome."
      } else {
        result += "No, " + str + " isn't a palindrome."
      }
      return result;
  }

//   console.log(isPalindrome("level"))




  //Ex6
  // Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si returneaza un array care 
  //contine ca si elemente cele mai mari numere din fiecare array
  var multipleArray = [
      [10, 5, 3],[20, 2, 23],[100, 2, 3, 100],[0, 5]
  ];
  function array(array) {
      var result = [];
      for(var i = 0; i < array.length; i++) {
        var sort = array[i].sort(function(a, b) {
            return a - b;
        })
        result += sort[sort.length - 1] + " ";
      }
      var finalResult = result.trim().split(" ")
      console.log(finalResult)
  }
// array(multipleArray)


  //Ex7
  // Implementati o functie care face reverse la un string
  
function reverseString(str) {
    var string = str;
    var result = string.split("").reverse().join("");
    return result;
}
// console.log(reverseString("i am a string"))

  //Ex8 
  // Implementati o functie care calculeaza factorialul unui numar
  function factorial(number) {
      if(number === 0) {
          return 1
      } else if(number < 0 ) {
          return -1
      } else {
        return (number * factorial(number - 1))
      }
  }
// console.log(factorial(5))


  //Ex9
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
  
function strings(string1, string2) {
    var arrayOne = string1.split(" ")
    var arrayTwo = string2.split(" ")
    if(arrayOne[arrayOne.length -1] == arrayTwo) {
        return "Yes, it's true. The last word of the first string it ends with the second string."
    }
    else {
        return "Nope, it's false. The last word of the first string it doesn't ends with the second string."
    }
}
// console.log(strings("i am a string", "string"))


  //Ex10
  // Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul element din array care 
  //trece testul specificat
  var arrayThree = ["Suzie", true, false, 10, 20, 30]
  function isNumber(arr) {
    var container = [];
    for(var i = 0; i < arr.length; i++) {
        if(typeof(arr[i]) === "number") {
            container += arr[i]+ " "
        }
    }
    var result = container.toString().trim().split(" ")
    return result[0];
  }


  function isItANumber(arr, func) {
      var checkFunc = func(arr)
      if(checkFunc) {
          console.log(checkFunc + " este primul numar din Array-ul inserat.")
      } else {
          console.log("Array-ul inserat nu contine un numar!")
      }
  }
// isItANumber(arrayThree, isNumber)



  //Ex11
  // Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele celui de-al doilea 
  //string

function checkLetters(str1, str2) {
    var result;
    var string1Add = [];
    for(var i = 0; i < str1.length; i++) {
        string1Add += str1[i]
    }
    var result1 = string1Add.trim().replaceAll(" ","").split("");
    var string2Add = [];
    for(var j = 0; j < str2.length; j++) {
        string2Add += str2[j]
    }
    var result2 = string2Add.trim().replaceAll(" ","").split("");
    for(var k = 0; k < result2.length; k++) {
            if(result1.includes(result2[k])) {
                result = true;
            } else {
                result = false;
            }
        }
        console.log(result)
};
// checkLetters("i am c s w", "am i")

  // Ex 12
  // Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare element al array-ului pana 
  //cand intalneste elementul cu valoarea specificata
  function countUntilAt(arr, numb) {
      var br = arr.indexOf(numb);
      console.log(br)
      for(var i = 0; i < br; i++) {
          console.log(arr[i])
      }
  }
//   countUntilAt([10,20,30,40,50,60,70,80], 70)




  // Ex 13
  // Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
  function deleteFalseExpression(arr) {
      var result = [];
      for(var i = 0; i < arr.length; i++) {
          if(arr[i] !== false) {
              result += arr[i] + " "
          }
      }
      
      console.log(result.trim().split(" "));
  }

//   deleteFalseExpression([false, true, null,false, undefined, 0, 10, 5])



  // Ex 14
  // Scrieti o functie care repeta un string de n ori specificate
  
  function repeatString(string, times) {
      for(var i = 1; i <= times; i++) {
          console.log(string, i)
      }
  }

//   repeatString("i am a string", 10)


