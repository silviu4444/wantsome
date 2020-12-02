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
var arrayOne = [10, 3, 5, 7, 5];
function mediaAritmetica(array) {
    for(var i = 0; i < array.length; i++) {
        function sum(a, b) {
            return a + b;
        }
     var addition = array.reduce(sum)
     console.log(addition / array.length)
    }
}
mediaAritmetica(arrayOne)


