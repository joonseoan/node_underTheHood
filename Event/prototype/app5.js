'use strict'

const EventEmitter = require('events');
const util = require('util');


class Greetr extends EventEmitter {

	constructor() {

		super();

		this.greeting = 'Hello, World';

	}

	greet(data) {

		// Bearin mind that it is still prototype!!
		console.log(`${ this.greeting }: ${data}`);

		// this : Greetr{ }
		this.emit('greet', data);

	}

}

// function Greetr() {

// 	EventEmitter.call(this);
// 	this.greeting = 'Hello World';

// }

// util.inherits(Greetr, EventEmitter);

// Greetr.prototype.greet = function (data) {

// 	console.log(this.greeting + ': ' + data);
// 	this.emit('greet', data);

// }

var greeter1 = new Greetr();

greeter1.on('greet', function (data) {
	
	console.log('Someone greeted!: ', data);

});

greeter1.greet('Tony');
