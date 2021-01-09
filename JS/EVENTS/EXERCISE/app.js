/*
1. Modificati elementul de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/
const paragraph = document.getElementById('p1');
const cameleonEventHandler = (event) => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    paragraph.style.backgroundColor = color;
}
paragraph.addEventListener('keyup', cameleonEventHandler)
/*
2. Avand formularul dat, adaugati un event listener pentru buton care apeleaza o
functie postTheGossip cand este apasat
In aceasta functie luati toate valorile fieldurilor si faceti un story din ele
ex "Xulescu este innebunit dupa bere neagra"
*/

// const btn = document.getElementById('exButton');
// const postTheGossip = (event) => {
//     let name = document.getElementById('name').value
//     let adjective = document.getElementById('adjective').value
//     let adverb = document.getElementById('adverb').value
//     let randomWord = document.getElementById('random-word').value
//     console.log(`${name} is ${adjective} ${adverb} ${randomWord}`)
// }
// btn.addEventListener('click', postTheGossip)

/*
2' * Cerinta de mai sus, fara button, in real time si cu event delegation
Hint: eventListenerul de keydown trebui pus pe <ul>
*/
const parentUl = document.getElementById('parentUl');
const postTheGossip = (event) => {
    console.log(event.target.value)
}
parentUl.addEventListener('keydown', postTheGossip)
/* 
3. Creati urmatoarele functii sqrNum, halfNum, percentNum si areaCircle.
Pentru fiecare button aveti de adaugat un event listener pe click.
sa gaseasca valoarea inputului si sa afiseze rezultatul solutiei
Bonus: faceti sa functioneze la parasirea inputului in loc de click
*/
const sqrBtn = document.getElementById('sqr-btn');
const halfBtn = document.getElementById('half-btn');
const prcBtn = document.getElementById('prc-btn');
const areaBtn = document.getElementById('area-btn');

const sqrNum = () => {
    const p = document.getElementById('sqrP');
    const square = document.getElementById('square').value
    p.textContent = square * square;
}
const halfNum = () => {
    const p = document.getElementById('halfP');
    const half = document.getElementById('half').value;
    p.textContent = half / 2;
}
const percentNum = () => {
    const p = document.getElementById('prcP');
    const precentBtn1 = document.getElementById('percent1').value;
    const precentBtn2 = document.getElementById('percent2').value;
    p.textContent = (precentBtn1 * 100) / precentBtn2;
}
const areaCircle = () => {
    const p = document.getElementById('areaP');
    const r = document.getElementById('area').value;
    p.textContent = Math.PI * (r * r);
}

sqrBtn.addEventListener('click', sqrNum);
halfBtn.addEventListener('click', halfNum);
prcBtn.addEventListener('click', percentNum);
areaBtn.addEventListener('click', areaCircle);


/* 
4.Se da un balon. La apasarea tastei ⬆️ sa i se mareasca dimensiunea cu 10%,
iar la apasarea tastei ⬇️ sa i se scada dimensiunea cu 10%.
*/



window.addEventListener('keydown', (event) => {
    const balon = document.querySelector('#balon');
    if(event.key === "ArrowUp") {
        let currentWidth = parseInt(0 + balon.style.fontSize);
        balon.style.fontSize = currentWidth + 20 + "px";
    } else if(event.key === "ArrowDown") {
        let currentWidth = parseInt(0 + balon.style.fontSize);
        balon.style.fontSize = currentWidth - 20 + "px";
    }
})


//SHOPPING LIST

const div = document.getElementById('shoppingDiv');
const h2S = document.createElement('h2');
const h3S = document.createElement('h3');
const mainInput = document.createElement('input');
const submit = document.createElement('input');
const divItems = document.createElement('div');
divItems.classList.add('d-flex-column');


div.style.padding = '15px';
mainInput.setAttribute('type', 'text');
mainInput.setAttribute('id', 'mainInput');
mainInput.classList.add('customized-input')
submit.setAttribute('type', 'submit');
submit.setAttribute('id', 'submit');
submit.classList.add('customized-btn')
div.style.border = '1px solid black';
h2S.textContent = 'Add Items';
h3S.textContent = 'Items';
div.appendChild(h2S);
div.appendChild(mainInput);
div.appendChild(submit);
div.appendChild(h3S);
div.appendChild(divItems);


submit.style.backgroundColor = 'rgb(77, 76, 76)';
submit.style.color = 'white';
submit.style.borderStyle = 'none';
submit.style.borderRadius = '2px';
submit.style.padding = '12px';
submit.style.marginLeft = '10px';


submit.addEventListener('click', () => {
    if(mainInput.value === "") {
        alert('Error! Provide an item!')
    } else if(mainInput.value !== "") {
        const container = document.createElement('div');
        const input = document.createElement('input');
        const deleteBtn = document.createElement('button');
        const checkBtn = document.createElement('input');
        checkBtn.style.width = 'fit-content';
        deleteBtn.innerHTML = 'Delete';
        deleteBtn.style.color = 'white';
        deleteBtn.style.backgroundColor = "rgb(77, 76, 76)";
        deleteBtn.style.borderRadius = '2px';
        submit.style.marginLeft = '10px';
        input.setAttribute('type', 'text');
        checkBtn.setAttribute('type', 'checkbox');
        container.classList.add('d-flex-row');
        container.appendChild(input);
        container.appendChild(deleteBtn);
        container.appendChild(checkBtn);
        input.value = mainInput.value;
        divItems.appendChild(container);
        mainInput.value === ""
        deleteBtn.addEventListener('click', (event) => {
            container.classList.add('d-none');
        })
        checkBtn.addEventListener('click', () => {
            input.classList.toggle('background-color');
        })
    }
})

