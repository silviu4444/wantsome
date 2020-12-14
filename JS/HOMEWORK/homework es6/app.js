function masina() {
    let km = 0;
  
    function parcurge(kmd) {
      km = km + kmd;
    };
  
    function afiseaza() {
      console.log(km);
    };
  
    function reseteaza() {
      km = 0;
    };
    return {
      parcurge,
      afiseaza,
      reseteaza
    }
  }
  
  

  
  // bmw.parcurge(100)
  // bmw.afiseaza()
  // bmw.reseteaza()
  // bmw.afiseaza()
  // const check = checkString();
  
  // const check = checkString()
  // check.parent(100)
  // check.child()
  
  
  
  
  //Ex1
  //Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
  //ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100
  
  function summarize(num1, num2) {
      if(num1 !== num2) {
        return num1 + num2;
      }
      
      return (num1 + num2) * 5;
    }
  
    
    
    //Ex2
    //Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
    //ex testFunction(30, 30) - true 
    //testFunction(15,15) - true
    //testFunction(10, 15) - false
    
    function checkIfIts30(num1, num2) {
        if(typeof num1 !== "number" || typeof num2 !== "number") {
            return "Error, your keywords aren't numbers!";
        }

        if(num1 === 30 && num2 === 30) {
          return true;
        }
  
        if(num1 + num2 === 30) {
          return true;
        }
        return false;
    }
    // console.log(checkIfIts30(30, 30)) 
    
    
    //Ex3
    //Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
    //checkString('JSisAwsome') - JSisAwsome
    //checkString('isEasy') - JSisEasy
    //checkString(null) - JS

    const addJsWord = string => {
      if(typeof string !== "string") {
        return "Error, you provided the wrong argument!"
      }

      if(string === "") {
        return "JS";
      }

      if(string.indexOf("JS") === 0) {
        return string;
      }
      
      if(string.indexOf("JS") === -1) {
        return "JS" + string;
      }
    }

    // console.log(addJsWord("isAwesome"))
  
  
  
    //Ex4
    //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
    //removeDuplicates('aabcdeef') - 'abcdef'
    //removeDuplicates(122334) - 1234
    
    const removeDuplicates = string => {
      let seen = {};
      let out = [];
      var j = 0;
      for(let i = 0; i < string.length; i++) {
        let item  = string[i];
        if(seen[item] !== 1) {
          seen[item] = 1;
          out[j++] = item;
        }
      }
      return out;
    }

    // console.log(removeDuplicates("aabcdeeeeeeef"))

    //Ex5
    // Gasiti cel mai lung string intr-o fraza
    //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
    
    const longestString = string => {
      if(typeof string !== "string") {
        return "Error, you provided the wrong argument!";
      }

      let result = "";
      const arrayOfString = string.split(" ");
      for(let i = 0; i < arrayOfString.length; i++) {
        const currentWord = arrayOfString[i];
        if(currentWord.length > result.length) {
          result = currentWord;
        }
      }
      return result;
    }
    // console.log(longestString("Wantsome is Awesomeeee today"))

    //Ex6
    //Scrieti o functie care sa aiba output-ul asta
    // *  
    // * *  
    // * * *  
    // * * * *  
    // * * * * * 
    
    const star = () => {
      let result = "";
      for(let i = 0; i < 10; i++) {
        result = result.concat("*" + " ");
        console.log(result);
      }

      return result + "*";
    }
    // console.log(star())
    
    //ex7
      const negativeNumbers = [];
    
      function extractNegativeNumbers(numbers) {
          for(let i = 0; i < numbers.length; i++) {
            if(numbers[i] < 0) {
              negativeNumbers.push(numbers[i]);
            }
          }
          return negativeNumbers;
      }

      // console.log(extractNegativeNumbers([1,2,-5,4,-6]))
    
    //ex8
    //Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
    //ex calculate(2, 5, "add") => 7
    //calculate(10, 8, "substract") => 2
    
      const calculate = (numb1, numb2, operation) => {
        if(operation === "multiply") {
          return numb1 * numb2;
        }

        if(operation === "divide") {
          return numb1 / numb2;
        }

        if(operation === "add") {
          return numb1 + numb2;
        }

        if(operation === "decrease") {
          return numb1 - numb2;
        }

        if(operation === "substract") {
          return numb1 % numb2;
        }
      }

      // console.log(calculate(10, 8, "multiply"))

    //Ex9
    // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
    // isDiv(15) => "BOTH"
    // isDiv(9)=> "THREE"
    // isDiv(7)=> 7

    const isDivisible = number => {
      if((number % 3) === 0 && (number % 5) === 0) {
        return "BOTH";
      }

      if((number % 3) === 0) {
        return "THREE";
      }

      if((number % 5) === 0) {
        return "FIVE";
      }

      if((number % 3) !== 0 || (number % 5 !== 0)) {
        return number;
      }
    }
    
    // console.log(isDivisible(15))
    
    //Master exercises
    //Ex9 
    // Vreau sa pot afisa data si ziua sub urmatorul format:
    // Azi este : Luni. 
    // Ora este : 20 PM : 30 : 38
  
    const getDateAndTime = () => {
      let day = new Date()
      console.log(day.toDateString())
    }
    // getDateAndTime()


    //ex10
    // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
    // validPin("1234") => true
    // validPin("12345") => false
    // validPin("z23f") => false

    const validPin = pin => {
      if((pin.length > 6) || (pin.length < 4)) {
        return "Error! Your pin should be at least 4 characters and max. 6 characters.";
      }

      let checkObject = {};
      for(let i = 0; i < pin.length; i++) {
        checkObject[pin[i]] = parseInt(pin[i]);
      }

      for(let j = 0; j <= pin.length; j++) {
        if(typeof checkObject[pin[j]] === NaN) {
          return false;
        }
      }

      return true;
    }
    console.log(validPin("a1237"))
    
    //ex11 
    //Folosind regex vreau sa scot toate vocalele dintr-un string
    // removeVowels("Hey I am developer") => "Hy m dvlpr"
    
    //ex12
    //Vreau sa am o functie care sa verifice daca un numar este patrat
    // isSquareNumber(-1) => false
    // isSquareNumber(25) => true
    // isSquareNumber(3) => false
    
    
    //ex13
    // Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
    // isAnagram("School master", "The class room") => true
    // isAnagram("silent", "listen") => true