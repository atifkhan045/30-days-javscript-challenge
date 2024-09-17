// Activity 1 : Array Algorithm

// Task 1 : Write a function to rotate an array bt k positions. log the rotated array.
function rotateArrayLeft(arr, k) {
    k = k % arr.length;  // Handle cases where k is greater than the array length

    let rotatedPart = arr.slice(k); // Get the part after the first k elements
    let remainingPart = arr.slice(0, k); // Get the first k elements

    let rotatedArray = rotatedPart.concat(remainingPart);

    console.log(rotatedArray);
}

// Example usage
let array = [1, 2, 3, 4, 5, 6, 7];
let k = 3; // Rotate by 3 positions
rotateArrayLeft(array, k); // Output: [4, 5, 6, 7, 1, 2, 3]


// Task 2 : Write a function to merge two sorted arrays into one sorted array. log the merged array.
function mergeSortedArrays(arr1, arr2) {
    let mergedArray = [];
    let i = 0, j = 0;

    // Compare elements from both arrays and add the smaller one to mergedArray
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArray.push(arr1[i]);
            i++; // Move pointer for arr1
        } else {
            mergedArray.push(arr2[j]);
            j++; // Move pointer for arr2
        }
    }

    // Add any remaining elements from arr1 (if any)
    while (i < arr1.length) {
        mergedArray.push(arr1[i]);
        i++;
    }

    // Add any remaining elements from arr2 (if any)
    while (j < arr2.length) {
        mergedArray.push(arr2[j]);
        j++;
    }

    console.log(mergedArray);
}

// Example usage
let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
mergeSortedArrays(array1, array2); // Output: [1, 2, 3, 4, 5, 6, 7, 8]
