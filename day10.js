// Activity 1 : Object Creation and Access

// Task 1 : Create an object representing a book with properties like title,author, and year
// and log the object to the console.

const book = {
    title: "Till The Last Breath",
    author : "Dushyant Roy",
    year : 2017
}
console.log(book)

// task 2 : Access and log the title and author properties of the object 

const book2 = {
    title: "Till The Last Breath",
    author : "Dushyant Roy",
    year : 2017
}

console.log(book2.title)
console.log(book2.author)

// Activity 2 : Object Methods

// Task 3 : Add a method to the book object that return's a string with the book's title and 
// author and log the result of calling this method.


const book3 = {
    title: "Till The Last Breath",
    author : "Dushyant Roy",
    year : 2017,

    BookData : function(){
      return `${this.title} by ${this.author}`
    }
}

console.log(book3.BookData(),`hhh`)


// task 4 : Add a method to the book object that takes parameter (year) and update's a book 
// year property , then log the updated object

const book4 = {
    title: "Till The Last Breath",
    author : "Dushyant Roy",
    year : 2017,

    updateYear: function(newYear) {
        this.year = newYear;
    }
}

book4.updateYear(2024)
console.log(book4)

// Activity 3 : Nested Object

// task 5 : create a nested object representing the libraries with properties like
// name and books (an array of book object) and log the library object to the console
const libraries = {
    name : "City Library",
    books : [
       {
        title : "Atomic Habits",
        author : "James Clear"
       },
       {
        title: "Till The Last Breath",
        author : "Dushyant Roy"
       }
    ]
}
console.log(libraries);


// task 6 : Access and log the name of the library and the titles of all the books in the library

const libraries2 = {
    name : "City Library",
    books : [
       {
        title : "Atomic Habits",
        author : "James Clear"
       },
       {
        title: "Till The Last Breath",
        author : "Dushyant Roy"
       }
    ]
}
console.log(libraries2.name);
libraries.books.forEach(book => {
    console.log(book.title);
  });
