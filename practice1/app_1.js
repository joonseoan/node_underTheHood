// require('./greet_1');
// "require" is contained in "module" of global object in node. 
// It is a function in moudle 
//		and is also swtiching to parameter in a wrapping function of module
//		that executes running the node when we executes the code.
const hello = require('./greet_1');
// without export
// hello(); // => error "hello is not defined"

/*
	name / value pair : name which maps to a value.
	object literal: name/value pairs separated by commas
		and surrounded by curly braces.

		{
			Street: 'Main',
			Number: {

				ApartmentUnit: 301,
				Floor: 39
	
			}
		}

*/

const person = {

	firstName : 'John',
	lastName : 'Doe',
	greet :  () => {

		// when using "=>" {}, when using "function", { firstName: 'John', lastName: 'Doe', greet: [Function: greet] }
		console.log(this); 
		console.log('hello ' + this.firstName, this.lastName);

	}

}

/*
	Inheritance : one object gets access to the properties
	and methods of another object.
*/

// var newObj = Object.create(person) => new object
person.greet();

// ============= class and function constructor =============
// A normal function that is used to construct objects
// The "this" variable points a new empty object and that
// object is returned from the function automatically

// constructor funcrion
function Person(lastName, firstName) {

	this.lastName = lastName;
	this.last = lastName;
	this.first = firstName;
	console.log(this)
}

Person('john', 'Friends'); // this (global object)

//access to variable(global.last, global.first)
console.log(last, global.first);

const fullName = new Person('james', 'dean');  
console.log(fullName); // => this = Person { last: 'james', first: 'dean' }

// access to variable
console.log(fullName.last, fullName.first);

// *********** creating prototype "object" inside of Person object
// 1) This is a way to insert new fnct property into this object.
fullName.fnct = function () {

	console.log('working? test', this.last, this.lastName);
	console.log(this);

}

fullName.fnct();	

// 2) It is way to implement the object "Person"
//		so it can use the other properties of the objecet.
// Bear in mind that it is not put in this object.
Person.prototype.greet = function () {
	
	// "this" is still Person{}
	console.log('Hello' + this.last, this.first);
	console.log('prototype: ', this);

};

// using fullName instance,
// this is ******"empty variable" inside of thie object.
fullName.greet();

// "prototype" is not inside of Person object
console.log('fullName', fullName);

console.log(fullName.greet); // => [Function]

/*
	Therefore, "this" is decided on Weather or not it is inside of function or object.
*/

// It is a way to find prototype virtual function.****************
console.log(fullName.__proto__); // => Person { greet: [Function] }

/* value reference (primitive variable) VS referene reference?*/

// primitive (uses different memory space)
var a = 1;
change(a);

// b = 1
function change(b) {

	b = 2;

}
console.log(a);

// ******************************************************88
// reference type (same memory space)
// d = entire c object based on refrence variable
function changeObj(d) {

	d.prop1 = function () {};
	d.prop2 = {};

}

// c and d are same object. they use the same memory space
var c = {};
c.prop1 = {};
changeObj(c);
console.log(c); // { prop1: [Function], prop2: {} }

// ----------------Javascript Aside
// immediately invoked function expression
// It is a scode : where is my code in module?
// Can I access it?

// function expression
// Anonymous function can immediately invoked.
// It is invoked in the last minutes
// Inside of the function does not affect 
//		the functions and variables outside of that function.

const firstname = 'Jane';

(function () {

	const firstname = 'John';
	console.log(firstname);

}());

console.log(firstname);

(function (lastname) {

	const firstname = 'John';

	console.log(firstname);
	console.log(lastname);

}('Doh'));

// ====== wrapping up module: How doe node module really work?
// Module.Exports and Required

// "Module" is a Object of V8 engine like process.
// It is a global object.
// Module mainly works on wrapping our all codes and even string in a function
//		which is a property of "module" object. This function has another parameters
//		which are default ones THAT run our code or execute itself with our code
// Also, they are another properties which are default properties that apply for any files
//		consisting of filename, dirname, and, load where the new code we write is loaded into Module object.
// Finally, module has "export" and "require" properties which are empty at the beginning to contain 
// 		new properties, the codes we write down.
// Then, the properties up and above are invoked in V8,
//		when the codes execute.

// Auto executes in Module object
// [Definition of module]
// (function (****exports, require, module, __filename, _dirname) {

//		import our codes to "export" property
//		// "Our new code"


// [Invoked] when uses "require"
//  "fn(****module.exports, require, module, file name...)

// [Return]
// Finally it module.exports is returned to the file which might be index.js file."
// ************* must see the structure picture file. "module.PNG"1!!!
// So module is able to protect our code inside of its function because of the scope
//		then effectively dispose this function and hen affect our code (which is an object) 

// "require" is a funcion, that i pass a "path"
//"module.exports" is what the require function return
// This works because our code is actually wrapped in a function that
//		given these things as function parameters
