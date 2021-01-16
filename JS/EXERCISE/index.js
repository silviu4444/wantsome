const arrayOne = ["john", "JACOB", "jinGleHeimer", "schmidt"];

function capitalizeNames(arr){
    arr.filter( (el) => {
        console.log(el[0].toUpperCase() + el.toLowerCase().slice(1));
    })
   }
//    console.log(capitalizeNames(arrayOne));
   

const number = [2, '5', 100, '100', 'blalblala'];
const checkNumber = (number) => {
    if(typeof number === 'number') {
        return number * 2;
    }
}
function doubleEachNumber(arr){
    const result =  arr.map( el => {
        if(typeof el === 'number') {
            return el * 2;
        }

        return el;
    })

    return result;
}
console.log(doubleEachNumber(number)); // [4, “5”, 200, “100”, “blalblala”]
const arr = [
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
function getPersonsNames(names){
    const result = names.map( el => {
        return `${el.name} ${el.surname}`;
    })
    
    return result;
   }
   console.log(getPersonsNames(arr));
   