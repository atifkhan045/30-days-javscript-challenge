// Leet Code Problem

// Activity : Reverse Integer

// Task : Solve the "Reverse Integer" Problem of Leetcode
// Write a function that takes an integer and return it with its digits reversed
// Handle edge cases like negatiive numbers and numbers ending in zero
// Log the reversed integers for a few test cases.

function reverseInteger(x) {
    const isNegative = x < 0; // Check if the number is negative
    let reversed = 0;

    // Work with the absolute value of the number
    x = Math.abs(x);

    // Reverse the digits
    while (x > 0) {
        reversed = reversed * 10 + (x % 10); // Add the last digit to reversed
        x = Math.floor(x / 10); // Remove the last digit from x
    }

    // Handle overflow (assuming 32-bit signed integer range)
    if (reversed > Math.pow(2, 31) - 1 || reversed < Math.pow(-2, 31)) {
        return 0;
    }

    // Return the reversed number, reapplying the negative sign if necessary
    return isNegative ? -reversed : reversed;
}

// Test cases
console.log(reverseInteger(123));     // 321
console.log(reverseInteger(-456));    // -654
console.log(reverseInteger(1200));    // 21 (zeros are dropped)
console.log(reverseInteger(0));       // 0
