const array = [
    {
        name: "Angelina",
        surname: 'Jolie',
        grade: 7
    },
    {
        name: "Eric",
        surname: 'Jones',
        grade: 3
    },
]
const computeExamPass = (arr) => {
    arr.map((el) => {
        el.grade > 5 ? console.log(`${el.name} ${el.surname} has passed the exam`) :
            console.log(`${el.name} ${el.surname} has not passed the exam`);
    })
}

// computeExamPass(array)

const arrayTwo = [
    {
        name: "Angelina",
        surname: 'Jolie',
        age: 80
    },
    {
        name: "Eric",
        surname: 'Jones',
        age: 27
    },
]
const getPersonsDomElements = (arr) => {
    arr.map((el) => {
        const body = document.getElementsByTagName('body')[0];
        const h1 = document.createElement('h1');
        const h2 = document.createElement('h2');
        h1.innerHTML = `${el.name} ${el.surname}`;
        h2.innerHTML = `${el.age}`;
        body.appendChild(h1);
        body.appendChild(h2);

    })

}
// getPersonsDomElements(arrayTwo)



/* Ex.1
Loop through the Array and remove all non-active users from the initial Array */

const myData = [{
    name: 'Iggy Turskis',
    active: false
}, {
    name: 'Geoff Newell',
    active: true
}, {
    name: 'Peter Newnham',
    active: true
}, {
    name: 'James Walker',
    active: false
}];

const removeNonActiveUsers = (arr) => {
    let users = [];
    arr.filter((el) => {
        if (el.active) {
            users.push(el);
        }
    })
    return users;
}

// console.log(removeNonActiveUsers(myData));

/*Ex 2
Convertiti toate distantele in mile - 0.621371 * distance - folosind map
Returnati toate itemele cu distanta mai mica de 10000  - folosind filter
Returnati distanta totala - folosind reduce
*/

const distances = [
    { from: 'New York', to: 'Dhaka', distance: 12654 },
    { from: 'Sydney', to: 'chittagong', distance: 8858 },
    { from: 'Kolkata', to: 'Sylhet', distance: 670 }
]

const covertToMiles = (arr) => {
    const result = arr.map((el) => {
        return {
            from: el.from,
            to: el.to,
            distance: 0.621371 * el.distance
        }
    });
    console.log(result);
    const resultTwo = result.filter(el => el.distance < 7000);
    const finalResult = resultTwo.reduce((acc, currVal) => {
        return acc + currVal.distance;
    }, 0)

    return finalResult;
}

console.log(covertToMiles(distances))

	
// Returnati un array de obiecte care sa contina doar id si titlul fiecarui item de mai jos 
const releases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [4.0],
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": [5.0],
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const result = releases.map(el => {
    return {
        id: el['id'],
        title: el['title']
    }
})
console.log(result)



// Returnati id-urile videourilor care au rating 5.0
const newReleases = [
    {
        "id": 70111470,
        "title": "Die Hard",
        "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 654356453,
        "title": "Bad Boys",
        "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    },
    {
        "id": 65432445,
        "title": "The Chamber",
        "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 4.0,
        "bookmark": []
    },
    {
        "id": 675465,
        "title": "Fracture",
        "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
        "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
        "rating": 5.0,
        "bookmark": [{ id: 432534, time: 65876586 }]
    }
];

const resultTwo = newReleases.map(el => {
    if(el['rating'] === 5) {
        return el['id'];
    }
})
console.log(resultTwo)

