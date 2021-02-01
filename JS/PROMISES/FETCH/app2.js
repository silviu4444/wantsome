const makeRequest = url => {
    return fetch(url)
    .then(response => response.json())
}

const postRequest = (url, options) => {
    return fetch(url, options)
}

export { makeRequest, postRequest}