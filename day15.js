// Activity 1 : Class definition

// Tasl 1 : Define a class person with properties name and age , ana add a method to return a
// greeting message, create an instance of the class and log the greeting message.

class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    greet(){
        return `Happy ${this.age} Birthday ${this.name}`
    }
}

const person = new Person("atif", 22)
console.log(person.greet())


// Task 2 : Add a method to the person class that update a age property and logs the updated age.

class Person2{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    updateAge(age){
       this.age = age+1;
       return this.age
    }
}

const person2 = new Person2("john", 22)
console.log(person2.updateAge(person.age))

// Activity 2 : Class Inheritance 

// Task 3 : Define a class student that extends a person class. Add a property studentId and a
// method to return the student Id. Create a instance of student class and log the student id.

class Student extends Person{
    constructor(name, age,studentId){
        super(name,age)
        this.studentId = studentId;
    }
    students(){
        return `your id is ${this.studentId}`;
    }
}
const student = new Student("atif",22,2045);
console.log(student.students())

// Tasl 4 : Override the greeting method in the Student class to include the student Id in the
// message . Log the ocerriden greeting message.

class Student2 extends Person{
    constructor(name, age,studentId){
        super(name,age)
        this.studentId = studentId;
    }
    greet(){
        return `Hello ${this.name} your age is ${this.age} and your id is ${this.studentId}`
    }
}
const student2 = new Student2("atif",22,2045);
console.log(student2.greet())


// Activity 3 : Static methods and properties.

// Task 5 : Add a static method to the person class that returns a generic greeting message. Call
// this generic method without creating an instance of the class and log the message.


class Person3{
    static genericGreeting(){
        return `Hello Welcome to 30 days of javascript challenge`
    }
}

console.log(Person3.genericGreeting())

// Task 6 : Add a static property to the Student class to keep track of the number of the student's
// created . Increment this property to the constructor and log the total number of students.

class Student3{
    static studentCount = 0
    constructor(name,studentId){
        this.name = name;
        this.studentId = studentId;

        Student3.studentCount++
    }
}
const students1 = new Student3("Atif", 2045);
const students2 = new Student3("John", 2046);
const students3 = new Student3("Jane", 2047);
console.log(Student3.studentCount);

// Activity 3 : Getters and Setters

// Task 7 : Add a getter method to the person class to return the full name (assume a firstName
// and lastName property). create an instance and log the full name using getter.

class Person4{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `Full name is ${this.firstName} ${this.lastName}`
    }
}
const person4 = new Person4("Atif","Khan")
console.log(person4.fullName)

// Task 8 : Add a setter method to the person class to update the full name properties (firstName 
// and lastName) update the name using the setter and log the updated full name.

class Person5{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName(){
        return `Full name is ${this.firstName} ${this.lastName}`
    }
    set fullName(name){
        const [firstName, lastName] = name.split(" ");
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

const person5 = new Person5("Atif","Khan")
console.log(person5.fullName)

person5.fullName = "John Doe";
console.log(person5.fullName)