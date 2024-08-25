// Activity 1 : For loop

// task 1 : write a program to print numbers from 1 to 10 using a for loop.

for(let i=1; i<=10; i++){
    console.log(i)
}
console.log("=====================")

// task 2 : write a program to print the multiplication table of 5 using a for loop.

for(let i=1; i<=10; i++){
    const num = 5;
    console.log(`${num} x ${i} = ${num * i}`)
}
console.log("=====================")


// Activity 2 : While loop

// task 3 : write a program to calculate the sum of numbers from 1 to 10 using while loop.
let sum = 0;
let i =1;
while(i<=10){
    sum+=i;
    i++;
}
console.log(`The total sum of numbers from 1 to 10 is ${sum}`)
console.log("=====================")


// task 4 : write a program to print numbers from 10 to 1 using while loop.
let num = 10
while(num>0){
    console.log(num)
    num--;
}

console.log("=====================")

// Activity 3 : Do... while loop
// task 5 : write a program to print numbers from 1 to 5 using do... while loop.

let j = 1;
do{
    console.log(j);
    j++;
}while(j<=5)
console.log("=====================")

// task 6 : write a program to calculate the factorial of a number using a do... while loop.

let n = 5;
let fact = 1;
let m = n;
do{
    fact *= m;
    m--
}while(m>0)
console.log(fact)

console.log("=====================")


// Activity 4 nested loops.
// task 7 : write a program to print a pattern using nested for loops.
const number = 5; // Number of rows in the pattern

for (let i = 1; i <= number; i++) {
    let row = ''; // Initialize an empty string for each row
    for (let j = 1; j <= i; j++) {
        row += '*' + ' '; // Append asterisks to the row string
    }
    console.log(row); // Print the row
}
