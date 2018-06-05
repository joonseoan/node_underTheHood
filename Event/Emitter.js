// ========= Event Listener ================
// Event Listener : the code that responds to the event
// Listener is a function 

// Actually this is how the event is made in node js.

// function constructor
function Emitter() {

	this.events = {};

}

// prototype method is one of the ways to access to the object 
// It is a same way to add properties 
//		by using Object.create(person) of literal object and new Obj () of class.
// Therefore, it can virtually add or use properties of
// 		prototype object up and above.
// However, it can not physically add the property. 

// add additional sub properties with a function
//		inside of value which is an array
Emitter.prototype.on = function (type, listener) {

	// create another sub property
	this.events[type] = this.events[type] || [];
	this.events[type].push(listener);

}

// execute elements, functions inside of the array above
Emitter.prototype.emit = function (type) {

	if (this.events[type]) {

		this.events[type].forEach(function (listener) {

			listener();

		});
	}

}

var test = new Emitter();
console.log('test: ', test); // "test : Emitter { events: {} }"

// export object based function constructor name
module.exports = Emitter;