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
const longestString = string => {
  const str = string.split(" ");
  let lengths = [];
  let finalResult = [];
  
  for(let i = 0; i < str.length; i++) {
    lengths.push(str[i].length);
  };

  const result = lengths.sort(function(a,b) {
    return b - a;
  });

  for(let j = 0; j < lengths.length; j++) {
    if(result[0] === str[j].length) {
      finalResult.push(str[j]);
    }
  }

  return finalResult.join("")
}

longestString("i am a stringggggg")


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
    return "Error, you provided the wrong argument!"
  }
  const word = string.split(" ");
  let result = [];
  for(let i = 0; i < word.length; i++) {
    result.push(word[i].charCodeAt(i) + 1)
  }

}

replaceWords("i am a string")
/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/

/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/

/*
7. Implementati o functie care accepta ca parametru un string si verifica daca inainte si dupa fiecare litera din cadrul sau se afla caracterul '+'
Exemplu: input: "+a+b+c+"   ->   output: true
Exemply: input: "+ab+c+d+"  ->   output: false
*/