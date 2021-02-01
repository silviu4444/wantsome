// import makeRequest, {sum, postRequest} from "./app2.js";


// // PRE: create separate module to import fetch function(request) in index.js
// //1. fetch some horror books
// //2. save the ones that have more than 230 pages
// //3. display the ones that have more than one author
// // url = 'https://www.googleapis.com/books/v1/volumes?q=horror';

// makeRequest('https://www.googleapis.com/books/v1/volumes?q=horror')
// .then(response => {
//     const books = response.items;
//     const filteredBooks = books.filter(element => {
//         return element.volumeInfo.pageCount > 230
//     })

//     // console.log(filteredBooks)
// })


// //EX1
// // PRE: vom implementa metoda separat si apoi o importam in index.js
// // folosind fetch() vom face un post catre url-ul de mai jos
// // trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.
// const url = 'https://jsonplaceholder.typicode.com/posts';
// const myPost = {
//   title: 'Javascript Post is awesome',
//   body: 'lorem ipsum etc',
//   userId: 1
// }

// const options = {
//   method: 'POST',
//   body: myPost ,
//   headers: {
//       'Content-Type': 'application/json'
//   }
// };

// postRequest(url, options).then(response => {
//     if(response.status === 500) {
//         throw new Error('Server Error!')
//     }
// }).catch(response => {
//     console.log(response)
// })
// //EX2
// //***bonus***//
// //Folosind url-ul gresit tratati cazul in care vom avea eroare
// // trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()






import { makeRequest, postRequest } from "./app2.js"
// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
const url = "https://jsonplaceholder.typicode.com/users"

makeRequest(url)
    .then(response => {
        const filteredElements = response.filter(element => {
            return element.id > 5;
        })
        return filteredElements;
    })
    .then(response => {
        const mappedResponse = response.map(element => {
            const { username, name, address: { city } } = element;
            return {
                username,
                name,
                city
            }
        })
        // console.log(mappedResponse)
    })


// PRE: create separate module to import fetch function(request) in index.js
//1. fetch some horror books
//2. save the ones that have more than 230 pages
//3. display the ones that have more than one author


makeRequest('https://www.googleapis.com/books/v1/volumes?q=horror')
.then(response => {
    const books = response.items;
    const filteredBooks = books.filter(element => {
        return element.volumeInfo.pageCount < 230
    })
    return filteredBooks;
})



//EX1
// PRE: vom implementa metoda separat si apoi o importam in index.js
// folosind fetch() vom face un post catre url-ul de mai jos
// trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.
const url2 = 'https://jsnplaceholder.typicode.com/posts';
const myPost = {
  title: 'Javascript Post is awesome',
  body: 'lorem ipsum etc',
  userId: 1
}

const options = {
  method: 'POST',
  body: myPost ,
  headers: {
    'Content-Type' : 'application/json'
  }
};


postRequest(url2, options).then(response => {
    if(response.status === 500) {
        throw new Error('Server error')
    }
}).catch(response => {
    console.log(response)
})

//EX2
//***bonus***//
//Folosind url-ul gresit tratati cazul in care vom avea eroare
// trebuie verificat daca raspunsul e corect iar daca nu folosim "throw new Error" - cautati ce face, apoi il prindem in .catch()
