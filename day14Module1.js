// Activity 1 : Creating and exporting module 

// Task 1 : Create a module that export a function to add two numbers. import and use this module
// in another script 
// importing this module into day15Module.mjs
export const add = (a, b) => a + b;

// Task 2 : Create a module that exports an object representing the person with properties and methods.
// import and use this module in another script.
export const person = {
    name: "atif",
    age: 22,
    email: "atif04011@gmail.com",
    password: "123456",

    verification(){
        if(this.email && this.password){
            return `Welcome ${this.name}`
        }
        else{
            return `Fill email and password before login`
        }
    }
} 


// Activity 2 : named and default export 

// Task 3 : Create a module that exports multiple functions using named exports. import and use
// these functions in another script.

export const add2 = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a,b) => b !== 0 ? a / b : "Cannot divide by zero";

// Task 4 : Create a module that exports single function using default export. import and use
// these functions in another script.

function wish(name){
    return `Happy Birthday ${name} `
}
export default wish

// Activity 3 : Importing Entire Module

// Task 5 : Create a module that exports multiple constants and function. import the entire 
// module as an object in another script and use it's properties. 

export const PI = 3.14159;
export const E = 2.71828;

export function checkPresence(str,char){
   if(str.includes(char)){
    return `${char} is present in the string`
   }
   else{
    return `${char} is not present in the string`
   }
}

export function checkPassword(password,loginPassword){
    if(password === loginPassword){
        return "Login Succesfully"
    }
    else{
        return "password is incorrect"
    }
}