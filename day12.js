// Activity 1 : Understanding Promises 

// Task 1 : Create a promise that resolve with a message after 2 second and log the
// message to the console

const myPromise = new Promise((resolve,reject )=>{
    setTimeout(() =>{
        resolve('Promise resolve after 2 seconds')
    },2000)
})
myPromise
.then((message) => {
    console.log(message)
})
.catch((error) =>{
    console.log(error)
})

// Task 2 : Create a promise that rejects with an error message after a 2 second time-out 
// and handle error using catch().

const myPromise2 = new Promise((resolve,reject)=>{
   setTimeout(()=>{
    reject("Promise rejects after 2 seconds")
   },2000)
})
myPromise2.then((message)=>{
    console.log(message)
})
.catch((message)=>{
    console.log(message)
})


// Activity 2 : Chaining Promises 

// Task 3 : Create a sequence of promises that simulate fetching data from a server. Chain a 
// promise to log messages in a specific order.
function fetchDataFromServer(url) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Data from ${url}`);
        }, Math.random() * 2000); // Simulate network delay
    });
}

const urls = [
    "https://server1.com/data",
    "https://server2.com/data",
    "https://server3.com/data"
];

fetchDataFromServer(urls[0])
    .then((data) => {
        console.log(data);
        return fetchDataFromServer(urls[1]);
    })
    .then((data) => {
        console.log(data);
        return fetchDataFromServer(urls[2]);
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error("Error fetching data:", error);
    });


// Activity 3 : Using async/await

// Task 4 : write an async function that wait promis to resolve and then log the resolved value
async function logResolvedValue(promise) {
    try {
        const resolvedValue = await promise;
        console.log(resolvedValue);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const myPromise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved successfully!");
    }, 2000); // Simulate a 2-second delay
});

logResolvedValue(myPromise);


// Task 4 : write an async function that hadles a rejected promise using try-catch and log the error message
async function handleRejectedPromise(promise) {
    try {
        const resolvedValue = await promise;
        console.log(resolvedValue);
    } catch (error) {
        console.error('Error:', error);
    }
}

// Example usage
const myPromise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Promise rejected with an error!");
    }, 2000); // Simulate a 2-second delay
});

handleRejectedPromise(myPromise5);
