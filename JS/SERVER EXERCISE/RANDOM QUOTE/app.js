const btn = document.querySelector('#xhr');
const quote = document.querySelector('#quote');
const quoteGenerator = () => {
    const xmlReq = new XMLHttpRequest();
    xmlReq.open('GET', 'https://ron-swanson-quotes.herokuapp.com/v2/quotes');
    xmlReq.onload = () => {
        const response = JSON.parse(xmlReq.response);
        quote.innerHTML = response.join('');
    }
    xmlReq.send();
}
btn.addEventListener('click', quoteGenerator)