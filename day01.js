// day 1 of 30 days javscript challenge

// activity 1 variable declaration
// task 1 declare a variable using var, assign it a number and log the value.
var num = 45;
console.log(num)

// task 2 declare a variable using let, assign it a string and log the value.
let str = "30 days of javascript Challenge";
console.log(str)

// activity 2 constant declaration
// task 3 declare a variable using const, assign it a boolean value and log the value on console
const bool = true;
console.log(bool);

// activity 3 Data types
// task 4 create variables of different data types (number , string , boolean , object , array) and log the typeof all variables 
var num2 = 45;
let str2 = "30 days of js challenge"
const bool2 = true;
var obj = {name: "atif", age: 21};
let arr = [1,2,3,4];
console.log(typeof(num2))
console.log(typeof(str2))
console.log(typeof(bool2))
console.log(typeof(obj))
console.log(typeof(arr))

// activity 4 reassigning variable 
// task 5 declare a variable using let, assign it an initial value, reassign a new value 
// and log both value to the console

let num3 = 45;
console.log(`initial value ${num3}`);
num3 = 54;
console.log(`new value ${num3}`);

// activity 5
// task 6 try reassigning a variable decalred with const and observe the error 

const num4 = 45;
console.log(num4)
num4 = 54;
console.log(num4);