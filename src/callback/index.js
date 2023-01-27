function sum(num1, num2) {
    return num1 + num2;
}

function calc(num1, num2, sumNumbers) {
    return sumNumbers(num1, num2);
}

console.log(calc(2, 3, sum));

/* *************************************************** */


setTimeout(() => {
    console.log(`Prueba Ejecutada Correctamente`);
}, 5000);

/* *************************************************** */


function gretting(name) {
    console.log(`Hello ${name}`);
}

setTimeout(gretting, 3000, 'Aegon');