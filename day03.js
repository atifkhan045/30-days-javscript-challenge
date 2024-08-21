
// Activity 1 Comparison Operator 

// task 1: write a program to compare two number using > and < then log the result to the console.

const num1 = 10;
const num2 = 5;
const isNum1GreaterThanNum2 = num1 > num2;
console.log(`Is num1 greater than num2? ${isNum1GreaterThanNum2}`);

const num3 = 10;
const num4 = 5;
const isNum3LessThanNum4 = num3 < num4;
console.log(`Is num3 less than num4? ${isNum3LessThanNum4}`);

// Task 2: Compare two numbers using >= and <=, then log the result to the console.

const num5 = 12;
const num6 = 6;
const isNum5GreaterThanOrEqualToNum6 = num5 >= num6;
console.log(`Is num5 greater than or equal to num6? ${isNum5GreaterThanOrEqualToNum6}`);

const num7 = 12;
const num8 = 6;
const isNum7LessThanOrEqualToNum8 = num7 <= num8;
console.log(`Is num7 less than or equal to num8? ${isNum7LessThanOrEqualToNum8}`);

// Task 3: Compare two numbers using == and ===, then log the result to the console.

const num9 = 2;
const num10 = '2';
const isNum9EqualToNum10 = (num9 == num10);
console.log(`Is num9 equal to num10? ${isNum9EqualToNum10}`)


const num11 = 2;
const num12 = '2';
const isNum11EqualToNum12 = (num11 === num12);
console.log(`Is num11 equal to num12? ${isNum11EqualToNum12}`)


// Activity 4:  Logical Operator 

// task 4: write a program that uses the && operator to combine two conditions and log the result to the console
const condition1 = true;
const condition2 = true;
const combine = (condition1 && condition2);
console.log(`Is condition1 and condition2 both are true ? ${combine}`);


// task 5: write a program that uses the || operator to combine two conditions and log the result to the console
const condition3 = true;
const condition4 = false;
const combine2 = (condition3 || condition4);
console.log(`Is condition3 or condition4 taking true ? ${combine2}`);



// task 6: write a program that uses the ! operator to negate a condition and log the result to the console
const condition5 = true;
const negateValue = !condition5;
console.log(`Is condition5 taking truthy value ? ${negateValue}`);


// Activity 3: Ternary operator 

// Task 7: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
const number = 10;
const result = number < 0 ? "negative" : "positive";
console.log(`The number is ${result}.`);
