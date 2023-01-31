import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1/products";

function deleteData(urlApi, id) {
    const response = fetch(`${urlApi}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
    });
    return response;
}

deleteData(API, 252)
    .then(response => response.json())

