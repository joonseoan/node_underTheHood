const util = require('util');

function Person() {

	this.firstname = 'John';
	this.lastname = 'Doe';
	this.greet =  function () {

		console.log('Hello, ' + this.firstname + ' '
		+ this.lastname)
	
	} 

}

/*

	Person.prototype.greet = function() {

		console.log('Hello, ' + this.firstname + ' '
			+ this.lastname);

	}

*/

/*

	****************************************8

	"prototype" is a middle man!!!!
	The child can access to this prototyped function of the parent
		without the  super() or EventEmitter.call(this)
	However, in order to access the physical properties of the parent,
	 	we must specify super() or EventEmitter.call /apply(this)!!!!!!!!!!!!!!1

	****************************************8


*/
function Policeman() {

	
	// super(): input Policeman into Person
	// 		as a parameter.!!!!
	Person.call(this);

	// Without Person.call(this)
	//		"this" is only for badgeNumber of Policeman object
	
	this.badgenumber = '1234';

}

util.inherits(Policeman, Person);

const officer = new Policeman();
officer.greet();

// no problem
const single = new Person();
single.greet();

