// Activity 1 : Sorting Algorithms 

// Task 1 : Implement the bubble sort algorithm to sort an array of numbers in ascending orders. Log the sorted array.

// Function to implement Bubble Sort
function bubbleSort(arr) {
    let n = arr.length;

    // Traverse through all array elements
    for (let i = 0; i < n - 1; i++) {
        // Last i elements are already in place
        for (let j = 0; j < n - i - 1; j++) {
            // Swap if the element found is greater than the next element
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage:
const numbers = [64, 34, 25, 12, 22, 11, 90];
const sortedNumbers = bubbleSort(numbers);

console.log("Sorted array:", sortedNumbers);


// Task 2 : Implement thr seection sort algorithm to sort an array of numbers in ascending orders. Log the sorted array.

// Function to implement Selection Sort
function selectionSort(arr) {
    let n = arr.length;

    // Traverse through the entire array
    for (let i = 0; i < n - 1; i++) {
        // Assume the first unsorted element is the minimum
        let minIndex = i;

        // Find the minimum element in the remaining unsorted array
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }

        // Swap the found minimum element with the first unsorted element
        if (minIndex !== i) {
            let temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }

    return arr;
}

// Example usage:
const numbers2 = [64, 25, 12, 22, 11];
const sortedNumbers2 = selectionSort(numbers2);

console.log("Sorted array:", sortedNumbers2);

// Task 3 : Implement thr quick sort algorithm to sort an array of numbers in ascending orders. Log the sorted array.

// Function to implement Quick Sort
function quickSort(arr) {
    // Base case: arrays with 0 or 1 element are already sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the pivot element (in this case, the first element)
    let pivot = arr[0];

    // Arrays to hold the elements less than and greater than the pivot
    let left = [];
    let right = [];

    // Partitioning the array into two halves
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Recursively sort the left and right sub-arrays and concatenate with the pivot
    return quickSort(left).concat(pivot, quickSort(right));
}

// Example usage:
const numbers3 = [64, 25, 12, 22, 11, 90, 88];
const sortedNumbers3 = quickSort(numbers3);

console.log("Sorted array:", sortedNumbers3);
