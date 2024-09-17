// Activity 1 : Basic regular Expression

// Task 1 : Write a regular expression to match  simple pattern (e.g., match all occurences of the word "javascript" in a string) Log the matches.

function matchJavaScript(str) {
    // Regular expression to match "javascript" (case-insensitive and global)
    const regex = /javascript/gi;

    // Use match() to find all matches
    const matches = str.match(regex);

    // Log the matches
    console.log(matches);
}

// Example usage
const inputString = "JavaScript is a powerful language. I love coding in JavaScript.";
matchJavaScript(inputString); // Output: ["JavaScript", "JavaScript"]


// Task 2 : Write a regular expression to match  all the digits in a string. Log the matches.

function matchDigits(str) {
    // Regular expression to match all digits (global)
    const regex = /\d/g;

    // Use match() to find all digit matches
    const matches = str.match(regex);

    // Log the matches
    console.log(matches);
}

// Example usage
const inputStrings2 = "My phone number is 123456 and my zip code is 78910.";
matchDigits(inputStrings2); // Output: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "1", "0"]
