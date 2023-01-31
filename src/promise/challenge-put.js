import fetch from "node-fetch";
const API = "https://api.escuelajs.co/api/v1";

function putData(urlApi, data) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    });
    return response;
}

const data = {
    "title": "Marvelous New Product",
    "price": 963,
};

putData(`${API}/products/253`, data)
    .then(response => response.json())
    .then(data => console.log(data))

