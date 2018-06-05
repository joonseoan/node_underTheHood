// prototype : links between obj(s)
// There are different ways to create prototype.
// 1) class : instance (new ) => new object
// 2) function constructor : prototype (new ) => new object ************
// 3) object literal like the one down below : Object.create() => new object ************

const person = {

	lastName : '',
	firstName : '',
	greet : function () {

		console.log(this.lastName + ", " + this.firstName);

	}

};

// ****************
const john = Object.create(person);
john.lastName = 'Json';
john.firstName = 'John'


const jane = Object.create(person);
jane.lastName = ''; // => ''
jane.firstName = 'Jane'

jane.greet();
john.greet();

// *******************************========================================== inheritance

const EventEmitter = require('events');
const util = require('util');

function Greetr() {

	// It is like super() that uses parant's properties
	// In other words, "Greetr" object will pass to
	//		 Function constructor, "EventEmitter",
	//		 as a parameter.
	// Then, Greetr can be a function or property of EventEmitter function.
	//		 Aslo, based on javascript scope or lexical envronment,
	//		 it can use the function or properties of EventEmitter.  
	EventEmitter.call(this); // we can use apply(), too.

	this.greeting = 'Hello World';
	
	/*

	this.greet = function () {
		
		console.log(this.greeting);

		// invoke a "emit" function inside of EventEmitter object
		this.emit('greet')	
	}
   
   */
}

// "Greeter" is inherited from EventEmitter
// At this point, Greetr connects to EventEmitter
//		it can utilize functions or properties in EventEmitter. 
// EventEmitter : parents, Greetr : child
// The leverage of the middle man is ********** "prototype" method 
//		assigned to each object. 
// "prototype" links between two object. 
// EventEmitter.prototype and Greetr.prototype.
util.inherits(Greetr, EventEmitter);

// create a new property in "Greetr" object.
Greetr.prototype.greet = function () {

	console.log(this.greeting);

	// *******************
	// "this" in greet:  Greetr {
	// greeting: 'Hello World',
 	// _events: { greet: [Function] },
 	// _eventsCount: 1 }
	console.log('this in greet: ', this);
	
	// invoke the method, "emit()" in EventEmitter
	// 		inside of the second class function
	//		************* " due to inheritance "
	this.emit('greet');

}

// connects to properties of EventEmitter by creating instance, "greeter1"
var greeter1 = new Greetr();

/*
  Greetr { greeting: 'Hello World' }
*/
console.log('greeter1: ', greeter1);


// "greet" of Greetr.prototype.greet is different // inside of Greetr Object 
// 		from "greet" of greeter1.on('greet')  // inside of EventEmitter Object
greeter1.on('greet', function() {

	// *******************
	// this in greet function :   {
	// greeting: 'Hello World',
 	// _events: { greet: [Function] },
 	// _eventsCount: 1 }
	console.log('this in on method: ', this)
	
	console.log('someone greeted!');

});

/*
  Greetr {
  greeting: 'Hello World',
  _events: { greet: [Function] },
  _eventsCount: 1 }
*/
console.log('greeter2: ', greeter1);

greeter1.greet();

greeter1.emit('greet');

// ========================================= Template Literal in Object ======================

const objects = {

	name : 'John Doe',
	greet : function () {

      	console.log(`Hello, ${this.name}`);

	}
}

objects.greet();

// .call() is a "ES6" component.************************
//	greet() => remove bracket and then add .call()
//    - .call() => "undefined" // => must have have parameter value
//    - call(objcect) : involke "greet()" with object parameter
// The paramter { }, an object itself is a "this"
objects.greet.call({ name : 'Jane'});
objects.greet.apply({ name : 'Jane' });

// *********************.appy() vs .call()

function theFunction(name, profession) {
    console.log("My name is " + name + " and I am a " + profession +".");
}

theFunction("John", "fireman");

theFunction.apply(undefined, ["Susan", "school teacher"]);
theFunction.call(undefined, "Claude", "mathematician");
theFunction.call(undefined, ...["Matthew", "physicist"]);


// '{ name: 'John Doe', greet: [Function: greet] }'
console.log(objects);