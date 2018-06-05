const a = 1;
const b = 2;
const c = a + b;
console.log(c);

/*

  module: **reusable block of a code
          It does not accidently impact on other codes
  
  common js modules: an agreed-upon standard for
  		  how code modules should be structured.

	In other words, the module was created by JS later on and then
		node has follow up with the module.

	1) First-class functions: everything you can do with other types
							you can do with with functions

	2) Function expressions : a block of code that results in a value

*/

// functiona statement
function greet() {

	console.log('hello');

}

// invoke the function
greet();

// "The first class function"
// functions are "first class" in javascript as mentioned above.
// It is like a variable in window. In other words, everything we 
// 		can do with other types (for instance, variable or object) like
//		variables we can do with functions
// More generally, the function can do everything as variables or other types do!!!!
// For instance, we can directly use functions as parameters like variables.
function logGreet(fn) {

	// invoke the function
	// must invoke the function to execute it!!!
	fn();

}

// greet from the first class 
logGreet(greet);

// "Function Expression" : "function () {}"
// this variable with function can be reusable.
const greetMe = function me() {

	console.log('Hey, Tony');

};

greetMe();

// Function Expression" is still the first class!!
// So we can use it as a parameter like up and above.
// case1) reuse the function defined in "global object"
logGreet(greetMe);

/*
error when invokes function's name 
because function name here is not the first class.

const greetMe = function me() {

	console.log('Hey, Tony');

};
me();

*/

// case2) use a function expression on the fly
logGreet(function () {

	console.log('Hello Tony!!!!!');

});