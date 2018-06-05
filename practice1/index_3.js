const greet1 = require('./greet3/greet_3_1');
const greet2 = require('./greet3/greet_3_2').greet2;

greet1();
greet2();

const Greet3_3 = require('./greet3/greet_3_3');
const Greet3_4 = require('./greet3/greet_3_3');

// Geet3_3
console.log(Greet3_3);
Greet3_3.greetings();
Greet3_3.greet = 'World Changed by Joon';

Greet3_4.greetings(); // => World Changed By Joon

// "exports" places "an object" on a memory space.
// Then, Module.exports cached the memory space
//		whenever it is "require"ed from other modules/file
//		it uses the same momeory sapce.
// Therefore, the swtiched value is stored and shared
//		in a same memeory space.
console.log(Greet3_4.greet); // 'World Changed by Joon'


// import an object
const Greet4 = require('./greet3/greet_3_4');

const greet4_1 = new Greet4();
greet4_1.greetings();
greet4_1.greet = "changed world";

const greet4_2 = new Greet4();
console.log(greet4_2.greet)