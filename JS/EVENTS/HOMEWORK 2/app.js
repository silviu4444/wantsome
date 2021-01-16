const username = document.querySelector('#username');
const email = document.querySelector('#email');
const firstName = document.querySelector('#firstname');
const lastName = document.querySelector('#lastname');
const phone = document.querySelector('#phone');
const parentNode = username.parentNode;
const errorMessage = document.createElement('div');
const button = document.querySelector('#button');


const valueInput = (input) => {
    let labelContent = input.target.previousElementSibling.innerHTML;
    if(input.target.value === "") {
        errorMessage.textContent = `Please enter ${labelContent.slice(0, labelContent.length - 1)}`;
        errorMessage.classList.add('checkMessage');
        parentNode.insertBefore(errorMessage, input.target);
    } else if(input.target.value !=="" && input.target.previousElementSibling === errorMessage) {
        parentNode.removeChild(errorMessage);
    }
}

const emptyInput = (input) => {
    if(input.target.value !== "" && input.target.previousElementSibling === errorMessage) {
        parentNode.removeChild(errorMessage);
    }
}
const blurClear = (input) => {
    if(input.target.value === "" && input.target.previousElementSibling === errorMessage) {
        parentNode.removeChild(errorMessage);
    }
}


username.addEventListener('focus', valueInput);
username.addEventListener('blur', blurClear);
username.addEventListener('keyup', emptyInput);

email.addEventListener('focus', valueInput);
email.addEventListener('blur', blurClear);
email.addEventListener('keyup', emptyInput);

firstName.addEventListener('focus', valueInput);
firstName.addEventListener('blur', blurClear);
firstName.addEventListener('keyup', emptyInput);

lastName.addEventListener('focus', valueInput);
lastName.addEventListener('blur', blurClear);
lastName.addEventListener('keyup', emptyInput);

phone.addEventListener('focus', valueInput);
phone.addEventListener('blur', blurClear);
phone.addEventListener('keyup', emptyInput);

