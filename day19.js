// Actovity 1 : Queue 

// Task 1 : Implement a Queue class with method enqueue (add element) , dequeue (remove element)
// and front (view the first element) 

class Queue {
    constructor() {
        this.items = []; // Initialize an empty array to store the elements
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // Removes the first element
    }

    // Method to view the first element of the queue
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0]; // Returns the first element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to display all elements in the queue
    printQueue() {
        return this.items.join(" ");
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log("Front element:", queue.front()); // Output: 10
console.log("Removed element:", queue.dequeue()); // Output: 10
console.log("Front element after dequeue:", queue.front()); // Output: 20
console.log("Queue contents:", queue.printQueue()); // Output: 20 30


// Task 2 : Use the queue class to simulate a simple printer queue where print obs are added to the que and process in order.

class Queue2 {
    constructor() {
        this.items = []; // Initialize an empty array to store the elements
    }

    // Method to add an element to the end of the queue
    enqueue(element) {
        this.items.push(element);
    }

    // Method to remove and return the first element from the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift(); // Removes the first element
    }

    // Method to view the first element of the queue
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0]; // Returns the first element
    }

    // Method to check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Method to display all elements in the queue
    printQueue() {
        return this.items.join(" ");
    }
}

// Function to simulate a printer queue
function simulatePrinterQueue(jobs) {
    const printerQueue = new Queue2();

    // Add all jobs to the printer queue
    jobs.forEach(job => {
        console.log(`Adding job: ${job} to the queue.`);
        printerQueue.enqueue(job);
    });

    console.log("\nProcessing jobs...");

    // Process each job in the order they were added
    while (!printerQueue.isEmpty()) {
        const currentJob = printerQueue.dequeue();
        console.log(`Printing job: ${currentJob}`);
    }

    console.log("All jobs have been processed.");
}

// Example usage:
const printJobs = ["Document1", "Document2", "Photo1", "Spreadsheet1"];
simulatePrinterQueue(printJobs);


