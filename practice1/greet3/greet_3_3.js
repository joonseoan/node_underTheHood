function Greet3 () {

	this.greet = 'Hello World3';
	this.greetings = function () {

		console.log('Hellow World3 This is object');

	};

}

// export instance
module.exports = new Greet3();
