const greetings = require('./greetings.json');

const spanish = function () {

	console.log('Halo');
	console.log('from json: ', greetings.spanish);

}

module.exports = spanish;