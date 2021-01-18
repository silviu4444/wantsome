// Attach a button listener to the button
//
// On click on the button, make an AJAX request to reddit for results of cute puppies
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');

const puppiesFunction = () => {
    const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true';
    const xml = new XMLHttpRequest();
    xml.open('GET', puppies);
    xml.onload = () => {
        const response = JSON.parse(xml.response);
        response.data.children.map(element => {
            const img = document.createElement('img');
            img.setAttribute('src', element.data.thumbnail)
            text.appendChild(img);
        })
    }
    xml.send();
}

btn.addEventListener('click', puppiesFunction)