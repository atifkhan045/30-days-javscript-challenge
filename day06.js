// Activity 1 conditional (ternary) operator 
// Task 6: Write a program that uses the ternary operator to check if a number is even or odd
// and log the result to the console.

// Define a number
const num = 11;

// Use the ternary operator to check if the number is even or odd
const result = num % 2 === 0 ? 'The number is even' : 'The number is odd';

// Log the result to the console
console.log(result);


// Activity 2 Combining conditions

// task 2 write a program to check if a year is a leap year using multiple condition 
// (divisible by 4 but not 100 unless also divisible by 400 ) and log the result to the console

const year = 2000
if((year % 4 === 0 && year % 100 !==0) || year % 400 ===0 ){
   console.log(`${year} is a leap year`)
}
else{
    console.log(`${year} is not a leap year`)
}
