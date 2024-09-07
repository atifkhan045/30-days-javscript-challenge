// Activity 1 : Linked List

// Task 1 : Implement a Node class to represent an element in a linked list with properties value and next.

class Node {
    constructor(value) {
      this.value = value; 
      this.next = null;  
    }
  }
  
  const firstNode = new Node(10);
  const secondNode = new Node(20);
  
  firstNode.next = secondNode; // Linking the first node to the second node
  
  console.log(firstNode.value); // Output: 10
  console.log(firstNode.next.value); // Output: 20


// Task 2 :  Implement a linked list class with methods to add a node to the end, remove a node from the end and display all nodes.

class Node2 {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null; // The head (first node) of the linked list
    }
  
    // Method to add a node to the end of the list
    addNode(value) {
      const newNode = new Node(value);
  
      if (!this.head) {
        // If the list is empty, the new node becomes the head
        this.head = newNode;
      } else {
        // Otherwise, find the last node and link it to the new node
        let current = this.head;
        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
      }
    }
  
    // Method to remove a node from the end of the list
    removeNode() {
      if (!this.head) {
        console.log("The list is empty, nothing to remove.");
        return;
      }
  
      if (!this.head.next) {
        // If there's only one node, remove it by setting the head to null
        this.head = null;
      } else {
        // Otherwise, find the second last node and set its next to null
        let current = this.head;
        while (current.next && current.next.next) {
          current = current.next;
        }
        current.next = null;
      }
    }
  
    // Method to display all nodes in the list
    displayNodes() {
      if (!this.head) {
        console.log("The list is empty.");
        return;
      }
  
      let current = this.head;
      while (current) {
        console.log(current.value);
        current = current.next;
      }
    }
  }
  
  const myList = new LinkedList();
  
  myList.addNode(10);
  myList.addNode(20);
  myList.addNode(30);
  
  console.log("Nodes in the list:");
  myList.displayNodes(); // Output: 10 20 30
  
  console.log("\nRemoving a node...");
  myList.removeNode(); // Removes 30
  
  console.log("\nNodes in the list after removal:");
  myList.displayNodes(); // Output: 10 20
  

// Activity 2 : Stack.

// Task 3 : Implement a stack class with methods push(add element), pop (remove element) and peek(view the top element).

class Stack {
    constructor() {
      this.items = [];
    }
  
    // Method to add an element to the stack
    push(element) {
      this.items.push(element);
    }
  
    // Method to remove and return the top element from the stack
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    // Method to view the top element of the stack
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    // Method to check if the stack is empty
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Method to display all the elements of the stack
    printStack() {
      return this.items.join(" ");
    }
  }
  
  const stack = new Stack();
  
  stack.push(10);
  stack.push(20);
  stack.push(30);
  
  console.log(stack.peek()); // Output: 30
  
  console.log(stack.pop()); // Output: 30
  console.log(stack.peek()); // Output: 20
  
  console.log(stack.printStack()); // Output: 10 20
  
// Task 4 : Use the stack class to reverse a string by pushing all characters onto the stack and popping them off.

class Stack2 {
    constructor() {
      this.items = [];
    }
  
    push(element) {
      this.items.push(element);
    }
  
    pop() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items.pop();
    }
  
    peek() {
      if (this.isEmpty()) {
        return "Stack is empty";
      }
      return this.items[this.items.length - 1];
    }
  
    isEmpty() {
      return this.items.length === 0;
    }
  }
  
  // Function to reverse a string using the Stack class
  function reverseString(str) {
    const stack2= new Stack2();
    
    // Push all characters of the string onto the stack
    for (let i = 0; i < str.length; i++) {
      stack2.push(str[i]);
    }
  
    let reversedStr = "";
  
    // Pop all characters off the stack and append to the reversed string
    while (!stack2.isEmpty()) {
      reversedStr += stack2.pop();
    }
  
    return reversedStr;
  }
  
  // Example usage:
  const originalString = "Atif Khan";
  const reversedString = reverseString(originalString);
  
  console.log("Original String:", originalString); // Output: "Atif Khan"
  console.log("Reversed String:", reversedString); // Output: "nahK fitA"
  