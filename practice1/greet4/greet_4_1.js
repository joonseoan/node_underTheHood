
// It is a case of mutation by changing of adding value of sub properties. 

// As we are not chaging "exports" and instead,
//			adding or changing value of its property,

// We can mutate the object that still dedicates to
// 		the same memory space
exports.greet = function () {
	
	console.log('hello mutation');

}

console.log('exports: ', exports);
console.log('module.exports: ', module.exports);
