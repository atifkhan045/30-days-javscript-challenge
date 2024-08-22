// Activity 1 if else statement 

// Task 1 write a program to check if a number is positive , negative , or zero and log the result to the console
const num = 0;

if(num > 0){
    console.log(`${num} is positive`)
}

if(num < 0){
    console.log(`${num} is negative`)
}
if(num === 0){
    console.log(`${num} is zero`)
}

// Task 1 write a program to check if a person is eligible to vote (ag >= 18) and log the result to the console

const age = 17
if(age>=18){
    let person = "Atif";
    console.log(`${person} is eligible to vote`)
}
else{
    person = "Atif";
    console.log(`${person} is not eligible to vote`)
}

// Activity 2 Nested if else statement 

// task 3 write a program to find the largest of three numbers using nested if else statement 
const num1 = 13;
const num2 = 12;
const num3 = 10;
if(num1 >= num2){
    if(num1 >= num3){
        console.log(`The largest number is ${num1}`)
    }else{
        console.log(`The largest number is ${num3}`)
    }
}else{
    if(num2 >= num3){
        console.log(`The largest number is ${num2}`)
    }else{
        console.log(`The largest number is ${num3}`)

    }
}