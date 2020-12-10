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
  
  
  const bmw = masina();
  bmw.parcurge(100)
  bmw.afiseaza()
  
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
    
  
  
  
    //Ex4
    //Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
    //removeDuplicates('aabcdeef') - 'abcdef'
    //removeDuplicates(122334) - 1234
    
    //Ex5
    // Gasiti cel mai lung string intr-o fraza
    //findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'
    
    //Ex6
    //Scrieti o functie care sa aiba output-ul asta
    // *  
    // * *  
    // * * *  
    // * * * *  
    // * * * * *  
    
    //ex7
      const negativeNumbers = [];
    
      function extractNegativeNumbers(numbers) {
          // append any negative numbers found in the numbers array 
          // into the negativeNumbers array constant variable above
       
      }
      extractNegativeNumbers([1,2,-5,4,-6])
    
    //ex8
    //Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
    //ex calculate(2, 5, "add") => 7
    //calculate(10, 8, "substract") => 2
    
    //Ex9
    // Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
    // isDiv(15) => "BOTH"
    // isDiv(9)=> "THREE"
    // isDiv(7)=> 7
    
    
    //Master exercises
    //Ex9 
    // Vreau sa pot afisa data si ziua sub urmatorul format:
    // Azi este : Luni. 
    // Ora este : 20 PM : 30 : 38
    
    //ex10
    // ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
    // validPin("1234") => true
    // validPin("12345") => false
    // validPin("z23f") => false
    
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