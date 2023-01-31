/* const promise = new Promise((resolve, reject) => {
    resolve('OK')
}); */



const cows = 12;

const countCows = new Promise((resolve, reject) => {
    if (cows > 10) {
        resolve(`We've ${cows} cows on the farm`);
    } else {
        reject(`There is no cows on the farm`);
    }
});

countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => console.log('finally'));




function delay(time, message) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, time)
    })
}

delay(2000, 'hello').then((message) => {
    console.log(message);
})