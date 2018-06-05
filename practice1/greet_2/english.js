// any file format can be added into exports properties
const greetings = require('./greetings.json');

const english = function () {

	console.log('Hello');
	console.log('from json: ', greetings.english);

}

module.exports = english;

