// Activity  : understanding Local storage 

// Task 1 : Write a script to save a string value to localStorage and retrieve it. Log the retrieved value.

// Save a string value to localStorage
localStorage.setItem('myString', 'Hello, Atif!');

// Retrieve the value from localStorage
const retrievedValue = localStorage.getItem('myString');

// Log the retrieved value
console.log(retrievedValue);

// Task 2 : Write a script to save an object to localStorage by comverting it JSON string. retrieved and parsed the object , then log it.

// Define an object
const user = {
    name: 'Atif Khan',
    age: 23,
    profession: 'Frontend Developer'
};

// Save the object to localStorage by converting it to a JSON string
localStorage.setItem('user', JSON.stringify(user));

// Retrieve the object from localStorage
const retrievedUser = localStorage.getItem('user');

// Parse the JSON string back to an object
const parsedUser = JSON.parse(retrievedUser);

// Log the parsed object
console.log(parsedUser);





