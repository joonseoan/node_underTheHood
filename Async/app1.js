// Buffer() is node's global object like Date() of javascript

var buf = new Buffer('Hello', 'utf-8');

console.log(buf); // 
console.log(buf.toString());
console.log(buf.toJSON());

function greet(callback) {
    
    console.log('Hello');

    var data = { name : 'json ' };

    callback(data);

}

greet(function(data) {

    console.log('first');
    console.log(data);

});

greet(function(data) {
    
    console.log('second');
    console.log(data.name);

});

// ================== async and call back
const fs = require('fs');
console.log(__dirname);
const text = fs.readFileSync(__dirname + '/hello.txt', 'utf-8');
console.log(text);

//*******************error at the first parameter: it is a standard!!!.
// if err === null, it is no error!!!! The callback objects in node standardizes 
//      that the first parameter is "err" For instance,
//      fs.readFile's callback has a err parameter for the callback function.
// Bear in mind over and over that the invoker of this callback invokes this function
//      at the "libuv in node"

//******************************************
// For asychronous function, "node" uses buffer to be ready to fire up the data.
// Data is stored in buffer in a binary data which is encoded in a way of ascii and so on.
// Therefore, in order to decode the data, we must use utf-8 to conver the data into the 
//      human readable data. In a nut shell, the data from any other system must be decoded
//      with the decoder like "utf-8" to communicate with human being.
const text2 = fs.readFile(__dirname + '/hello.txt', 'utf-8', (err, data) => {

    console.log(data);

});;

console.log('I am done!!!');   