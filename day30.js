// Activity : Palindrome Number

// Task : Solve The "Palindrome Number" Problem on leetcode.
// 1 - Write a function that takes an integer and returns true if it is palindrome, and flase otherwise.
// 2 - log the result for a few test cases, including edge cases like negative numbers.

const isPalindrome = (num) => {
    // Edge case: negative numbers are not palindrome
    if (num < 0) {
      return false;
    }
  
    // Convert number to string and check if it reads the same forward and backward
    const strNum = num.toString();
    const reversedStrNum = strNum.split('').reverse().join('');
    
    return strNum === reversedStrNum;
  };
  
  // Test cases
  console.log(isPalindrome(121));  // true (Palindrome)
  console.log(isPalindrome(-121)); // false (Negative number, not a palindrome)
  console.log(isPalindrome(10));   // false (Not a palindrome)
  console.log(isPalindrome(12321)); // true (Palindrome)
  console.log(isPalindrome(0));    // true (Edge case, palindrome)
  