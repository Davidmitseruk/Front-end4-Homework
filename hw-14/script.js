function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}


const promises = [
    delayedPromise("A", Math.random() * 3000),
    delayedPromise("B", Math.random() * 3000),
    delayedPromise("C", Math.random() * 3000),
    delayedPromise("D", Math.random() * 3000),
    delayedPromise("E", Math.random() * 3000)
];


Promise.all(promises).then(results => {
    console.log("All promises resolved:", results);
}).catch(error => {
    console.error("An error occurred:", error);
});



//2 
function delayedPromise(value, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(value);
        }, delay);
    });
}

function randomDelay(value) {
    const delay = Math.floor(Math.random() * 4000) + 1000; 
    return delayedPromise(value, delay);
}


const promisess = [
    randomDelay("A"),
    randomDelay("B"),
    randomDelay("C"),
    randomDelay("D"),
    randomDelay("E")
];


Promise.all(promisess).then(results => {
    console.log("All promises resolved:", results);
}).catch(error => {
    console.error("An error occurred:", error);
});


Promise.race(promisess).then(result => {
    console.log("Fastest promise resolved:", result);
}).catch(error => {
    console.error("An error occurred:", error);
});