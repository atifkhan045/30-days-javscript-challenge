// Activity 1 : Basic Recursion

// Task 1 : write a recursive function to calculate the factorial of a number. Log the result 
// for a few test cases.

function factorial(n){
    if(n === 1 || n === 0) return 1;
  
        return n * factorial(n-1)
}
console.log(factorial(5))
console.log(factorial(1))
console.log(factorial(0))
console.log(factorial(4))



// Task 2 : Write a recursive function to calculate the nth fibonacci number. Log the result for a few test cases

function fibonacci(n){
    if(n <= 0){
        return 0
    }
    else if(n === 1){
        return 1
    }

    return fibonacci(n-1) + fibonacci(n-2)
}
console.log(fibonacci(3))

// Activity 2 : Recursion with arrays

// Task 3 : Write a recursive function to find the sum of all elements in an array. Log the result for a few test cases.

function sumArray(arr) {
    // Base case: if the array is empty, the sum is 0
    if (arr.length === 0) {
        return 0;
    }

    // Recursive case: add the first element to the sum of the rest of the array
    return arr[0] + sumArray(arr.slice(1));
}

// Test cases
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
console.log(sumArray([10, 20, 30]));    // Output: 60
console.log(sumArray([-5, 15, 25]));    // Output: 35


// Task 4 : Write a recursive function to find a maximum element in an array. log the result for a few test cases.
function findMax(arr) {
    // Base case: if the array has only one element, return that element
    if (arr.length === 1) {
        return arr[0];
    }

    // Recursive case: find the maximum between the first element and the maximum of the rest of the array
    return Math.max(arr[0], findMax(arr.slice(1)));
}

// Test cases
console.log(findMax([1, 2, 3, 4, 5]));   // Output: 5
console.log(findMax([10, 20, 30, 5]));   // Output: 30
console.log(findMax([-5, -10, -3]));     // Output: -3
console.log(findMax([7, 2, 8, 6, 4]));   // Output: 8


// Activity 3 : String Manipulation with recursion.

// Task 5 : Write a recursive function to reverse a string. Log the result for a few test cases.

function reverseStringRecursive(str) {
    // Base case: if the string is empty or has only one character, return it as is
    if (str.length <= 1) {
        return str;
    }

    // Recursive case: reverse the substring excluding the first character, then add the first character at the end
    return reverseStringRecursive(str.substring(1)) + str[0];
}

// Test cases
console.log(reverseStringRecursive('hello')); // Output: 'olleh'
console.log(reverseStringRecursive('JavaScript')); // Output: 'tpircSavaJ'
console.log(reverseStringRecursive('A')); // Output: 'A'
console.log(reverseStringRecursive('')); // Output: ''



// Task 6 : Write a recursive function to check if the string is a palindrome. Log the result with few test cases 

function isPalindromeRecursive(str) {
    // Remove non-alphanumeric characters and convert to lowercase for case-insensitive comparison
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    // Helper function for recursion
    function checkPalindrome(s, start, end) {
        // Base case: if the start index is greater than or equal to the end index
        if (start >= end) {
            return true;
        }
        // Check characters at start and end indices
        if (s[start] !== s[end]) {
            return false;
        }
        // Recursive case: check the next substring
        return checkPalindrome(s, start + 1, end - 1);
    }

    // Call the helper function
    return checkPalindrome(cleanStr, 0, cleanStr.length - 1);
}

// Test cases
console.log(isPalindromeRecursive('radar')); // Output: true
console.log(isPalindromeRecursive('level')); // Output: true
console.log(isPalindromeRecursive('hello')); // Output: false
console.log(isPalindromeRecursive('A man, a plan, a canal, Panama')); // Output: true
