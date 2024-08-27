// Activity 1 : Array Creation and Access

// Task 1 : Create an array of numbers from 1 to 5 and log the array to the console.

const arr = [1,2,3,4,5];
console.log(arr);

// Task 2 : Access the first and the last element of the array and log them to the console.

    const arr2 = [2,,4,6,8];
    const arrLength = arr2.length;
    console.log(arr2[0])
    console.log(arr2[arrLength-1])
    

// Activity 3 : Array Methods (Basic)

// Task 3 : Use a push method to add a new number to the end of the array and log the updated array

const arr3 = [10,20,30];
arr3.push(40);
console.log(arr3);


// Task 4 : Use the pop method to remove the last element from the array and log the updated array

const arr4 = [10,20,30,40,50,60];
arr4.pop()
console.log(arr4);

// Task 5 : Use the shift method to remove the first element from the array and log the updated array

const arr5 = [1,2,3,4,5];
arr5.shift()
console.log(arr5);

// Task 6 : Use the unshift method to add a new number to the beginning of the array and log the updated array
const arr6 = [1,2,3,4];
arr6.unshift(0)
console.log(arr6)

// Activity 3 : Array methods (intermediate)

// Task 7 : use the map method to create a new array where each number is doubled and log the new array.

const arr7 = [1,2,3,4];
const doubled = arr7.map(num => num * 2)
console.log(doubled);

// Task 8 : use the filter method to create a new array with only even numbers and log the new array.

const arr8 = [1,2,3,4,5];
const findEven = arr8.filter(num => num % 2 === 0)
console.log(findEven)

// Task 9 : use the reduce method to to calculate the sum of all numbers in the array and log the new array.
const arr9 = [1,2,3,4];
const sumOfAllNum = arr9.reduce((num1 , num2) => num1 + num2,0)
console.log(sumOfAllNum)

// Activity 4 : Array iteration

// Task 10 : Use a for loop to iterate over the array and log each element to the console
const arr10 = [1,2,3,4,5,6];
for(let i=0; i<=arr.length; i++){
    console.log(arr10[i])
}


// Task 11 : Use a for Each method to iterate over the array and log each element to the console.

const arr11 = [1,2,3,4,5,6];
arr11.forEach((element) =>{
    console.log(element)
})
