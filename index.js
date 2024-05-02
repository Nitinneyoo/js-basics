let name = "Nitin Singh";
console.log(name);

const interestRate = 0.3;
console.log(interestRate);

let age = 23;
console.log(age);

let isApproved = "true";
console.log(isApproved);

let firstName;
console.log(firstName);

let lastName = null;
console.log(lastName);

let person = {
    name :'Nitin',
    age : 23 
};

person.name='Niti';
console.log(person.name);

// Function is basically a set of statement which perform a task or used in to calculate a value.

// Performing a task 

function greet(name, lastName){
    console.log('Hello'+' ' + name + ' ' + lastName);
}
greet('Nitin', 'Singh');

// Calculate a Value 

function square (number) {
    return number * number ;
}
console.log(square(2));