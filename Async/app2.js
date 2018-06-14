const fs = require('fs');

console.log(__dirname);

// just creates a buffer to store a text stream for the time being
// "highWaterMark" is for controlling buffer size.
const readable = fs.createReadStream(__dirname + '/Theory',
 {encoding : 'utf8'}, {highWaterMark : 0.1 * 1024});

const writable = fs.createWriteStream(__dirname + '/TheoryCopy');

// setup a function property into an array of Emmitter
// Bear in mind again that chunK is a group broken down from the stream

// This is a way to read and write a file using the moudle inside of node.
// Readable stream <-> Writable stream! They are connected on the basis of "PIPE"
// Therefore, we can say the function below acts like "Pipe"!!
// It is always that pipe starts from readable_stream to writable stream
readable.on('data', function(chunk) {

    console.log(writable);
    writable.write(chunk);

    console.log(chunk);

});

const readable1 = fs.createReadStream(__dirname + '/Theory')
const writable1 = fs.createWriteStream(__dirname + '/TheoryCopy1');


// readable1.on('data', function(chunk) {
    
    //     console.log(writable1);
    //     writable1.write(chunk);
    
    //     console.log(chunk);
    
    // });
    
// By using pipe function of readable1 
// (bear in mind that pipe starts from "readable" to "writable" streams)
// Therefore, "writable1" is a destination
// Same function as up and above.
readable1.pipe(writable1)   
    
const zlib = require('zlib');

// setup destination 2
const compressed = fs.createWriteStream(__dirname + '/Theory.gz');

// setup destination 1
const gzip = zlib.createGzip();

// sends the readable streams to gzip to be compressed
//      and then, sends the compressed stream to file that
//      writes the zip streams 
readable1.pipe(gzip).pipe(compressed);

// ************************************************
// Big word alert
// Method chaining :!!!!!!
// : A method returns an object !!!!
// So we can keep calling more methods.
// Sometimes it returns the parent object (called
//   cascading) and sometimes some other object.
// *************************************************

