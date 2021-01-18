const colors = new XMLHttpRequest();
colors.open('GET', 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json');
colors.onload = () => {
    const response = colors.response;
    const result = JSON.parse(response);
    const body = document.getElementsByTagName('body')[0];
    for(const property in result) {
        const div = document.createElement('div');
        div.style.width = '200px';
        div.style.height = '100px';
        div.style.backgroundColor = result[property];
        div.style.textAlign = 'center';
        div.innerHTML = property;
        body.appendChild(div);
    }
}
colors.send();
