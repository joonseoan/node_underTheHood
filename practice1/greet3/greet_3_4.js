function Greet4 () {

	this.greet = 'Hello World4';
	this.greetings = function () {

		console.log('Hellow World4. This is object');

	};

}

// exports an object itself!!!!
module.exports = Greet4;
