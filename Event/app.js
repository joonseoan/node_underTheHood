var obj = { 

	greet: 'Hello'

};

console.log(obj.greet);
console.log(obj['greet']);

var prop = 'greet';
// ***********invocation with a parmeter in an object
console.log(obj[prop]);

// ARRAY
// function inside of arry.
var array = [];

array.push(function () {

	console.log('hello 1');
})

array.push(function () {

	console.log('hello 2');
})

array.push(function () {

	console.log('hello 3');
})

// invocation of each function elements of "array"
array.forEach(function (fnt) {

	fnt();

});

// ====================== Events customized ========================

// we can use 
const Emitter = require('./Emitter');

const emtr = new Emitter();
console.log('emtr:', emtr); // => emtr: Emitter { events: {} }

emtr.on('greet', function() {

	console.log('Somewhere, soneone said hello');

});

emtr.on('greet', function() {

	console.log('A greeting occurred');

});

// added a property with an array with functions 
console.log('emtr2: ', emtr); // => emtr2:  Emitter { events: { greet: [ [Function], [Function] ] } }

console.log('hello');
emtr.emit('greet');

// ============================= event from node =======================
const Emitters = require('events');
const eventConfig = require('./config').events;

// 1) without magic word object, 'eventConfig'
// const emitters = new Emitters();

// emitters.on('greet', function() {

// 	console.log('Somewhere, soneone said hello2');

// });

// emitters.on('greet', function() {

// 	console.log('A greeting occurred2');

// });

// console.log('hello2');
// emitters.emit('greet');

// With magic word config,
// 		we can use magic world property for
//		the Emiiter's property
const emitters = new Emitters();

emitters.on(eventConfig.GREET, function() {

	console.log('Somewhere, soneone said hello2');

});

emitters.on(eventConfig.GREET, function() {

	console.log('A greeting occurred2');

});

console.log('hello2');
emitters.emit(eventConfig.GREET);