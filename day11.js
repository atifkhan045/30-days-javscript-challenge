// Activity 1 : Template Literals

// task 1 : use template literals to create a string that includes variables for a person's name
// and age and log the string to the console.
const name = 'Atif';
const age = 22;
console.log(`my name is ${name} and i am ${age} year old guy who have been practicing javascript from past few weeks`)

// task 2 : create a multi-line string using template literals and log it to the console

const multiLineStr = `This is a multi-line string.
It can span multiple lines without using concatenation.
Template literals make it easy to create strings with multiple lines.

- Line 1
- Line 2
- Line 3`
console.log(multiLineStr)

// Activity 2 : Destructuring
// task 3 : Use array destructuring to extract the first and second elements from an array of 
// numbers and log them to the console

const numbers = [10,20,30,40]
const [firstElement, secondElement] = numbers;
console.log(`First Element: ${firstElement}`);
console.log(`Second Element: ${secondElement}`);

// task 4 : Use object destructuring to extract the title and author from a book object 
// and log them to the console

const book = {
    title:"Till The Last Breath",
    author: "Dushyant Roy",
    year: "2018",
}
const {title, author} = book;
console.log(`First Property: ${title} Second Property: ${author}`)

// Activity 3 : Spread and Rest Operator
// task 5 : use the spread operator to create a new array that includes all elements of an existing 
// array plus additional element , and log the new array to the console.

const originalArray = [1,2,3,4,5]
const newArray = [...originalArray ,6,7,8]
console.log(newArray);

// task 6 : use a rest operator in a function to accept an arbitrary number of argument , sum them
// and return the result 

function sum(...numbers){
    return numbers.reduce((acc , num) => acc + num );
}
console.log(sum(1,2,3))
console.log(sum(1,2,3,4))
console.log(sum(1,2,3,4,5))


// Activity 4 : Default Parameters

// Task 7 : write a function that takes two parameters and return their product, with the second 
// parameter having default value 

function multiply(a , b = 10){
    return a * b;
}
console.log(multiply(10))
console.log(multiply(10,5))
