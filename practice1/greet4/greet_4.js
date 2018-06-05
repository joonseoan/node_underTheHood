// in the node engine, the wrapper of node engine function 
// 		has the "exports" parameter.
// Also, when this wrapper is invoked, the invocation delivers "modue.exports" parameter to "exports" parameter.
// Therefore, "exports" and "module.exports" dedicates to the same object which means that 
//		they use the same memory space.

// However, in javascript, one variable or parameter has the "value" or value is assigned to it
// 		those parameters have different memory spaces.
// For instance, in function aaa (export = 'bbb'); aaa(module.exports)
//		"exports" uses the different memory space from module.exports as "exports" has a value

// It is a "mutate"
//	adding a method or property to an object means that
// you've mutated the object.


exports = function() {

	console.log('Hello');

}


// Therefore they are different object reference from now on.
console.log(exports); // => [Function: exports]
console.log(module.exports); // => {}
