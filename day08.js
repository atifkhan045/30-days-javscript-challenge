// Activity 1 : Function declaration

// task 1 : write a function to check if a number is even or odd and log the result to the console.

function check(num){
    if(num % 2 === 0){
       console.log(`${num} is even`)
    }
    else{
        console.log(`${num} is odd`)
    }
}
const num = 3;
check(num)

// task 2 : write a function to calculate the square of a number and return the result.

function square(number){
    return number * number;
}
const number = 3;
console.log(square(number))


// Activity 2 : function expression

// task 3 : write a function expression to find the maximum of two numbers and log the result to the console.

const findMax = function(n1,n2){
    return n1 > n2 ? n1 : n2;
}
const n1 = 5;
const n2 = 6;
const max = findMax(n1,n2);
console.log(`The maximum of ${n1} and ${n2} is ${max}`)

// task 4 : write a function expression to concatenate two strings and return the result.

const concat= function(s1,s2){
    return s1 + s2;
}
const s1 = "Hello";
const s2 = "world";
console.log(concat(s1,s2))


// Activity 3 : arrow function

// task 5 : write an arrow function to calculate the sum of two numbers and return the result.

const sum = (a,b) =>  a + b;

const a = 10;
const b = 20;
console.log(sum(a,b))

// task 6 : write an arrow function to check if a string contains specific character and return 
// a boolean value.

const checkChar =(str, char) =>{
    return str.includes(char);
}
const str = 'atif';
const char = 'a';
console.log(checkChar(str,char))


// Activity 4 : Function Parameters and Default Values

// task 7 : write a function that takes two parameters and return their product, provide a default 
// value to the second parameter.

function product(p1 , p2 = 1){
    return p1 * p2
}
const p1 = 3;
const p2 = 2;
console.log(product(p1)) // output : 3
console.log(product(p1,p2)) // output : 6


// task 8 : write a function that takes a person's name and age and returns a greeting message,
// provide a default value to the age.

function greet(name , age = 18){
    return `hello ${name} happy ${age} birthday` 
}
const personName = 'atif';
const age = 19;
console.log(greet(personName,age)) // hello atif happy 19 birthday
console.log(greet(personName)) // hello atif happy 18 birthday
