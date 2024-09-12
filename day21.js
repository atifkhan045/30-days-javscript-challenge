// Activity 1 : Searching Algorithms 

// Task 1 : Implement a linear search algorithm to find a target value in an array. Log the index of the target value.

function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) {
            console.log(`Target found at index: ${i}`);
            return i; // Return index if target is found
        }
    }
    console.log("Target not found");
    return -1; // Return -1 if target is not found
}

// Example usage
const array = [10, 24, 35, 47, 59];
const targetValue = 35;
linearSearch(array, targetValue);


// Task 2 : Implement the binary search algorithm to find a target value in a sorted array. Log the index of the target value.


function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            console.log(`Target found at index: ${mid}`);
            return mid; // Return index if target is found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search the right half
        } else {
            right = mid - 1; // Search the left half
        }
    }

    console.log("Target not found");
    return -1; // Return -1 if target is not found
}

// Example usage
const sortedArray = [10, 24, 35, 47, 59, 68, 72];
const targetValue2 = 47;
binarySearch(sortedArray, targetValue2);
