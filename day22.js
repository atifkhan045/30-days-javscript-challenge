// Activity 3 : String Algorithms 

// Task 1: Write a function to count the occurences of each charachter in a string. Log the charachter counts.

function countCharacterOccurrences(str) {
    // Create an empty object to store character counts
    const charCount = {};
  
    // Loop through each character in the string
    for (let char of str) {
      // If the character is already in the object, increment its count
      if (charCount[char]) {
        charCount[char]++;
      } else {
        // If it's not in the object, add it with a count of 1
        charCount[char] = 1;
      }
    }
  
    // Log the character counts
    console.log(charCount);
  }
  
  // Example usage
  countCharacterOccurrences("hello world");
  

// Task 2: Write a function to find the longest substring without repeating characters in a string. Log the length of the substring.

function lengthOfLongestSubstring(s) {
    let maxLength = 0;
    let start = 0;
    let charIndexMap = {}; // To store the last index of each character
  
    for (let end = 0; end < s.length; end++) {
      const char = s[end];
  
      // If the character is found in the map and is within the current window
      if (char in charIndexMap && charIndexMap[char] >= start) {
        // Move the start to the next position after the last occurrence of the character
        start = charIndexMap[char] + 1;
      }
  
      // Update the last index of the character
      charIndexMap[char] = end;
  
      // Calculate the length of the current substring
      maxLength = Math.max(maxLength, end - start + 1);
    }
  
    console.log(maxLength);
  }
  
  // Example usage
  lengthOfLongestSubstring("abcabcbb");
  