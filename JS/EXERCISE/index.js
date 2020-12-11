//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/
const sum = (num = 1) => {
  let result = 0
  for(let i = 1; i <= num; i++) {
    result += i;
  };
  return result;
};

// console.log(sum(10))

/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/



const longest = stringWithWords => {
  if(typeof stringWithWords !== "string") {
    return "Error: you provided the wrong argument!";
  }

  let words = stringWithWords.split(" ");
  let longestWord = "";

  for(let i = 0; i < words.length; i++) {
     const currentWord = words[i];
     if(currentWord.length > longestWord.length) {
       longestWord = currentWord;
     }
  }

  return longestWord;
}

// console.log(longest("i i i i a b c"));
/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/
const reverseString = stringWithWords => {
  if(typeof stringWithWords !== "string") {
    return "Error, you provided the wrong argument!"
  }

  const result= stringWithWords.split("").reverse().join("");
  return result;
}

// console.log(reverseString("i am a string"))
/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/
const replaceWords = string => {
  if(typeof string !== "string") {
    return "Error, you provided the wrong argument!";
  }

  let result = [];
  for(let i = 0; i < string.length; i++) {

    if(string[i].charCodeAt() === 32) {
      result.push(32);
      continue;
    }

    if(string[i].charCodeAt() === 90) {
      result.push(65);
      continue;
    }

    if(string[i].charCodeAt() === 122) {
      result.push(97);
      continue;
    }

    result.push(string[i].charCodeAt() + 1);
  }

  return String.fromCharCode(...result);
}
// console.log(replaceWords("i am a string Zz"))
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/
const convertToTime = minutes => {
  if (typeof minutes !== "number") {
    return "Error, you provided the wrong argument!"
  }

  const hours = (minutes - (minutes % 60)) / 60;
  const rest = minutes % 60;
  if(rest > 0) {
    return minutes + " min = " + hours +  "h" + ":" + rest + "min";
  }

  if(rest === 0) {
    return minutes + " min = " + hours +  "h";
  }
}

// console.log(convertToTime(250))
/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

const alphabeticOrder = string => {
  if(typeof string !== "string") {
    return "Error, you provided a wrong argument!";
  }

  let result = [];
  for(let i = 0; i < string.length; i++) {

    if(string[i].charCodeAt() === 32) {
      result.push(32);
      continue;
    }

    if(string[i].charCodeAt() === 90) {
      result.push(65);
      continue;
    }

    if(string[i].charCodeAt() === 122) {
      result.push(97);
      continue;
    }

    result.push(string[i].charCodeAt());
  }

  let finalString = result.sort(function(a,b) {
    return a - b;
  })
  return String.fromCharCode(...finalString)
}
// console.log(alphabeticOrder("wolfs"))
/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/

const containsPlusSign = string => {
  if(typeof string !== "string") {
    return "Error, you provided a wrong argument!";
  }

  for(let i = 0; i < string.length; i ++) {
    console.log(string[i])
  }
}

console.log(containsPlusSign("+s+t+r+i+n+g+"))