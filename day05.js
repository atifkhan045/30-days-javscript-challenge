// Activity 1 Switch case 
// task 1 write a program that uses a switch case to determine the day of the week based 
// on a number (1-7) and log the day name to the console.

const dayNumber = 3; // You can change this number to test different cases
let dayName;
switch(dayNumber){
    case 1 :
        dayName = 'Monday'
        break;
    case 2 :
        dayName = 'Tuesday'
        break;
    case 3 :
        dayName = 'Wednesday'
        break;
    case 4 :
        dayName = 'Thursday'
        break;
    case 5 :
        dayName = 'Friday'
        break;
    case 6 :
        dayName = 'Saturday'
        break;
    case 7 :
        dayName = 'Sunday'
    default :
    console.log('Invalid day number')
}

console.log(`The day of the week is ${dayName}`)


// Task 2 Write a program that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F')
// based on a score and log the grade to the console.

const score = 90;
let grade;
switch(true){
    case (score >= 90) :
        grade = 'A';
        break;
    case (score >= 75) :
        grade = 'B';
        break;
    case (score >= 60) :
        grade = 'C';
        break;
    case (score >= 35) :
        grade = 'D';
        break;
    case (score <= 35) :
        grade = 'F';
        break;
    
    
}
console.log(`you got grade ${grade}`)