// Vreau la final sa am o lista de video ids

const movieLists = [ // array 
    { // object
        name: "New Releases",
        videos: [ // array 1
            {  //object 1
                "id": 70111470,
                "title": "Die Hard",
                "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {  // object 2
                "id": 654356453,
                "title": "Bad Boys",
                "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ] //  /array 1
    },
    { // object
        name: "Dramas",
        videos: [ //array 2
            { //object 1
                "id": 65432445,
                "title": "The Chamber",
                "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            { // object2
                "id": 675465,
                "title": "Fracture",
                "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
                "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ] // /array 2
    }
];
const ids = () => {
    const ids = movieLists.map(element => element.videos)
        .flat().map(element => element.id);
    return ids;
}

// console.log(ids())








//Returnati id, title, si 150x200 box art url pentru fiecare video
//hint aveti de folosit map,filter

let movieLists2 = [
    {
        name: "Instant Queue",
        videos: [
            {
                "id": 70111470,
                "title": "Die Hard",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 654356453,
                "title": "Bad Boys",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    },
    {
        name: "New Releases",
        videos: [
            {
                "id": 65432445,
                "title": "The Chamber",
                "boxarts": [
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 4.0,
                "bookmark": []
            },
            {
                "id": 675465,
                "title": "Fracture",
                "boxarts": [
                    { width: 200, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
                    { width: 150, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
                    { width: 300, height: 200, url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
                ],
                "url": "http://api.netflix.com/catalog/titles/movies/70111470",
                "rating": 5.0,
                "bookmark": [{ id: 432534, time: 65876586 }]
            }
        ]
    }
];

const ids2 = () => {
    let result = [];
    const id = movieLists2.map(element => element.videos)
        .flat().map(element => element.id);
    const title = movieLists2.map(element => element.videos)
        .flat().map(element => element.title);
    const boxarts = movieLists2
        .map(element => element.videos)
        .flat()
        .map(element => element.boxarts)
        .flat()
        .filter(element => element.width === 150 ? element.width : '');
    for (let i = 0; i < id.length; i++) {
        result.push({
            id: id[i],
            title: title[i],
            boxarts: boxarts[i]
        })
    }

    return result;
}

// console.log(ids2())


//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()

const moveLetters = (str) => {
    const string = str.split('');
    const characters = string.map(element => {
        let result = [];
        // console.log(element.charCodeAt())
        if (element.charCodeAt() === 32) {
            result.push(element.charCodeAt = 32)
        } else if (element.charCodeAt() === 90) {
            result.push(element.charCodeAt = 65);
        } else if (element.charCodeAt() === 122) {
            result.push(element.charCodeAt = 97);
        } else {
            result.push(element.charCodeAt() + 1)
        }

        return result;
    })

    return String.fromCharCode(...characters);
}
// console.log(moveLetters('ALfaBet'))

// ex2
// Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
// changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"
let changeWordCase = function (string) {
    const str = string.split(" ");
    let result = [...str];
    const uppercasedWords = str.map((element, i) => {
        if (i % 2 !== 1) {
            result[i] = element.toUpperCase();
        }
    })
    return result;
}

// console.log(changeWordCase('hey ppl, lets learn javascript together SOMETIME'));


// ex3
// Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele
const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter(element => {
    if (element.species === 'cat') {
        return element;
    }
})

// console.log(allCats)

let allHumans = arr.filter(element => {
    if (element.species === "human") {
        return element;
    }
})

//   console.log(allHumans)

let allFemales = arr.filter(element => {
    if (element.sex === "f") {
        return element;
    }
})

// console.log(allFemales)

let totalOfAllAges = arr.map(element => {
    return element.age;
}).reduce((acc, cv) => {
    return acc + cv;
}, 0)

// console.log(totalOfAllAges)

let averageAgeOfCats = () => {
    const totalAge =
    arr.filter(element => {
        if (element.species === 'cat') {
            return element;
        }
    }).map(element => {
        return element.age;
    }).reduce((accumulator, currentValue) => {
        return (accumulator + currentValue)
    }, 0);

    const ageLength =
    arr.filter(element => {
        if (element.species === 'cat') {
            return element;
        }
    }).map(element => {
        return element.age;
    }).length;

    return totalAge / ageLength;
}

// console.log(averageAgeOfCats())


let averageAgeOfHumans = () => {
    const totalAge = 
    arr.filter(element => {
        if (element.species === 'human') {
            return element;
        }
    }).map(element => {
        return element.age;
    }).reduce((accumulator, currentValue) => {
        return (accumulator + currentValue)
    }, 0);
    const ageLength = 
    arr.filter(element => {
        if (element.species === 'human') {
            return element;
        }
    }).map(element => {
        return element.age;
    }).length;

    return totalAge / ageLength;
}

// console.log(averageAgeOfHumans())

let avgLengthOfNames = () => {
    const totalLength =
    arr.map(element => {
        return element.name;
    }).join("").length;
    const length =
        arr.map(element => {
            return element.name;
        }).length;

    return totalLength / length;    
}

// console.log(avgLengthOfNames())

//ex 1.
// Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
//ex composedValue(square, double, 5);  // 100
// functia square returneaza patratul numarului iar double - dublul numarului
const square = (number) => {
    return number * number;
}
const double = (number) => {
    return number + number;
}

const composedValue = (f1, f2, number) => {
    return f1(f2(number));
}

// console.log(composedValue(square, double, 5));

//ex.2
//faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
//exemplu const myFunction = compose(square, double) 
// myFunction(5)  --> 100
// myFunction(10) --> 400  ...etc

const compose = (number) => {
    return square(double(number));
}

// console.log(compose(10))

//ex.3
//faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// find([1,2,3,4,5], isOdd); returneaza 1 3 5

const isOdd = (array) => {
    const result = array.filter(element => {
        if (element % 2 !== 0) {
            return element;
        }
    })

    return result;
}

const find = (array, func) => {
    return func(array);
}

// console.log(find([1,2,3,4,5], isOdd))