// Leet Code Problem

// Activity 1 : Two Sum 

// Task : Solve the "Two Sum" problem of Leetcode.

// Write a function that takes an array of numbers and a target number, and return the indices of the two numbers that add upto the target, 
// Log the indices for a few test cases.

function findTwoSum(arr, target) {
    // Create a map to store numbers and their indices
    const map = new Map();

    // Iterate through the array
    for (let i = 0; i < arr.length; i++) {
        const complement = target - arr[i]; // Find the complement of the current number

        // Check if the complement exists in the map
        if (map.has(complement)) {
            return [map.get(complement), i]; // Return the indices
        }

        // Otherwise, store the current number with its index in the map
        map.set(arr[i], i);
    }

    return null; // Return null if no solution is found
}

// Test cases
console.log(findTwoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(findTwoSum([3, 2, 4], 6));       // [1, 2]
console.log(findTwoSum([1, 5, 3, 6], 8));    // [1, 3]
console.log(findTwoSum([4, 3, 10, 2], 7));   // [1, 3]
