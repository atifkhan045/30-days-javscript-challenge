// Activity 1 : Character Classes and Quantifiers 

// Task 1 : Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

const str = "This is a Test String With Some Capitalized Words.";
const regex = /\b[A-Z][a-z]*\b/g;
const matches = str.match(regex);

console.log(matches);


// Task 2 : Write a regular expression to match all sequences of one or more digits in a string. Log the matches.

const str2 = "The year is 2024, and 5 days ago I ran 10km in 45 minutes.";
const regex2 = /\d+/g;
const matches2 = str2.match(regex2);

console.log(matches2);
