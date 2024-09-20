// Activity : Understanding SessionStorage 

// Task 1 : Write a script to save a string value to sessionStorage and retrieve it. Log the retrieved value

const valueToSave = "Hello, this is a test string!";
sessionStorage.setItem("myString", valueToSave);

// Retrieve the string value from sessionStorage
const retrievedValue = sessionStorage.getItem("myString");

// Log the retrieved value to the console
console.log(retrievedValue);


// Task 2 : Write a script to save an object by converting it to JSON string. Retrieve and parse the object, then log it.

const myObject = {
    name: "Atif Khan",
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS"]
  };
  
  // Convert the object to a JSON string and save it in sessionStorage
  sessionStorage.setItem("myObject", JSON.stringify(myObject));
  
  // Retrieve the JSON string from sessionStorage and parse it back to an object
  const retrievedObject = JSON.parse(sessionStorage.getItem("myObject"));
  
  // Log the retrieved object to the console
  console.log(retrievedObject);
  