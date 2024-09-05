// Activity 1 : Understanding closures

// Task 1 : Write a function that returns another function, where the inner function access a
// variable from the outer function's scope. call the inner function and log the result.

function outer(){
    let a = 1;

    return function inner(){
        console.log('accessing value from inner function',a)
    }
}
const inner = outer()
inner()

// Create a closure that maintains a private counter, implement functions to increment and get 
// the current value of the counter.

function createCounter(){
    let counter = 0;

   return {
    increment : function(){
        counter++;
    },
    getValue : function(){
        return counter;
    },
   };
}
const myCounter = createCounter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
console.log(myCounter.getValue())

// Activity 2 : Practical closures 

// Task 3 : Write a function that generates unique id's , use closure to keep track of last 
// generated id and increment it with each call.

function createIdGenerator(){
    let lastId = 0;

    return function generateUniqueId(){
        return lastId += 1;
    }
}

const idGenerator = createIdGenerator();
console.log(idGenerator())
console.log(idGenerator())
console.log(idGenerator())
console.log(idGenerator())


// Task 4 : Create a closure that captures a user's name and return a function that greet the user by name

function outerGreet(name){
    return function innerGreet(){
        return `Welcome to this platform ${name}`
    }
}
const greetAtif = outerGreet("Atif")
console.log(greetAtif())
const greetJohn = outerGreet("John")
console.log(greetJohn())

// Activity 3 : Closures in loop 

// Task 5 : Write a loop that creates an array of functions. Each function should log it's index
// when called, Use a closure to ensure each function logs the correct index.

function createFunctionArray(){
    const functions = [];

    for(let i=0; i<5; i++){
        functions.push(function(){
            console.log(i);
        })
    }
    return functions;
}

const functionArray = createFunctionArray();
functionArray[0]();
functionArray[1]();
functionArray[2]();


// Activity 4 : Module Pattern

// Task 6 : Use closure to create a simple module for managing a collection of items. Implement 
// methods to add , remove any list item.

function createItemManager(){
    let items = [];

    return {
        addItem : function(item){
            items.push(item)
            console.log(`${item} item has been added`)
        },
        removeItem: function(item){
            const index = items.indexOf(item)
            if(index !== -1){
                items.splice(index,1)
                console.log(`${item} has been removed from ${items}`)
            }
            else{
                console.log(`${item} not found`)
            }
        },

        itemList : function(){
            console.log(`items : ${items}`)
        }

    }
}

const myItemsManager = createItemManager();

myItemsManager.addItem("Apple")
myItemsManager.addItem("Banana")
myItemsManager.addItem("Mango")
myItemsManager.removeItem("Apple");

myItemManager.itemList()