// Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const numberGraterThenTen = number => {
    const promiseToReturn = new Promise((resolve, reject) => {
        if(number > 10) {
            reject('Your number is smaller than ten.')
        } else {
            resolve('Your number is greater than 10')
        }
    })

    return promiseToReturn;
}

// const check1 = numberGraterThenTen(5);
// const check2 = numberGraterThenTen(15);

// check1.then(result => {console.log(result)})
// check2.catch(result => {console.log(result)})


// Creati o functie care primeste un string ca si argument si returneaza
//  un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de 
// valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata 
// ambele cazuri

const stringCheck = string => {
    const promiseToReturn = new Promise((resolve, reject) => {
        if(string.includes('string') === true) {
            resolve('Your string includes the string word')
        }
        reject("Your string doesn't includes the string word")
    })

    return promiseToReturn;
}

// const check3 = stringCheck('i am a string');
// const check4 = stringCheck('i am a beautiful horse');

// check3.then(response => {
//     console.log(response);
// })
// check4.catch(response => {
//     console.log(response);
// })



// Creati o functie care primeste un singur parametru si returneaza un Promise.
//  Folosind setTimeout, dupa 500ms,
// acest Promise fie va face resolve, fie va face reject, in functie de urmatoarele cazuri:
//  daca input-ul este un string,
// Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; daca input-ul nu este
//  un string,
// Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.


const inputTypeCheck = input => {
    const promiseToReturn = new Promise((resolve, reject) => {
        setTimeout(() => {
            if(typeof input === "string") {
                resolve(input.toUpperCase());
            } else {
                reject(input);
            }
        }, 500)
    })

    return promiseToReturn;
}

// const check5 = inputTypeCheck('i am a string');
// const check6 = inputTypeCheck(10);

// check5.then(response => {
//     console.log(response);
// })
// check6.catch(response => {
//     console.log(response)
// })


// Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). 
// Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize
//  pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele
//  in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string,
// se va face reject.


const capitalizeWords = (words) => {
    const capitalizedPromise = new Promise((resolve, reject) => {
        const capitalizedWords = words.map(word => {
            if(typeof word !== "string") {
                reject('Words array not consistent!')
            }
            return `${word[0].toUpperCase()}${word.slice(1)}`
        })

        resolve(capitalizedWords);
    })

    return capitalizedPromise;
}

const sortWords = words => {
    const capitalizeWord = capitalizeWords(words);

    const sortedPromise = new Promise((resolve, reject) => {
        capitalizeWord.then(capitalizeWords => {
            const sortedWords = capitalizeWords.sort();

            resolve(sortedWords);
        });

        capitalizeWord.catch(response => reject(response));
    });

    return sortedPromise;
}

// const sortedTest = sortWords(['jungle', 'book', 'car'])

// sortedTest.then(response => {
//     console.log(response)
// })
// sortedTest.catch(response => {
//     console.log(response)
// })

const colors = "https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json";
const randomQuote = "https://ron-swanson-quotes.herokuapp.com/v2/quotes";

function get(url) {
    // Return a new promise.
    return new Promise(function(resolve, reject) {
      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);
  
      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        }
        else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };
  
      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };
  
      // Make the request
      req.send();
    });
  }

  get(randomQuote).then(response => {
    return JSON.parse(response);
}).then(response => {
    const body = document.querySelector('body');
    const div = document.createElement('div');
    div.innerHTML = response.join("");
    body.appendChild(div);
})

get(colors).then(response => {
    return JSON.parse(response)
}).then(response => {
    const body = document.getElementsByTagName('body')[0];
    for(const property in response) {
        const div = document.createElement('div');
        div.style.width = '200px';
        div.style.height = '100px';
        div.style.backgroundColor = response[property];
        div.style.textAlign = 'center';
        div.innerHTML = property;
        body.appendChild(div);
    }
})
