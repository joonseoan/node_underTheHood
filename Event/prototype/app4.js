'use strict'

class Person {

	constructor(firstname, lastname) {

		this.firstname = firstname;
		this.lastname = lastname; 

	}

	greet () {

		// Person.prototype.greet = function()
		// EventEmitter.prototype.on/emitter = function()
		// Both are inherited tot their children.
		// 		without super()???? but only with "extends"???
		// That might be true.
		console.log('Hello, ' + this.firstname + ' '
		+ this.lastname);

	}

}

// constructor in calss
// function Person (firstname, lastname) {

// 	this.firstname = firstname;
// 	this.lastname = lastname;

// }

// helper function in class
// Person.prototype.greet = function() {

// 	console.log('Hello, ' + this.firstname + ' '
// 	+ this.lastname);

// }

const john = new Person('John', 'Doe');
john.greet();

const jane = new Person('Jane', 'Kimberly');
jane.greet();

console.log(john.__proto__);
console.log(jane.__proto__);
console.log(john.__proto__ === jane.__proto__);
