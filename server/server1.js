/* // assign http object/module to http variable
const http = require('http');

// In the background
// emit('request', req, res)
// If "request" from client gets to the server,
//      execute emit['request'] => invoke req, res properties

// Execute createServer(), a function of http
// It has a callback
http.createServer((req, res) => {

    //specify MIME (which defines the content type)
    res.writeHead(200, { 'Context-Type' : 'text/plain' });
    res.end('Hello World\n');

// Promise resolve() when the server successfully responde to the client
//      Then, open a port to communicate with the client.
}).listen(1337, '127.0.0.1');
  */


// ------------- OUTPUTTING HTML FILE ----------------

// *******************
// Template:Text designed to be the basis for final
//      text or content after being processed

// const http = require('http');
// const fs = require('fs');

// http.createServer((req, res) => {

//     // status and MIME setup for res.header
//     res.writeHead(200, { 'Context-Type' : 'text/html' });
    
//     // 1) 
//     // read a file (html)
//     var html = fs.readFileSync(__dirname + '/index.html', 'utf8');
    
    
//     var msg = 'Buzz World';
    
//     // replace() is a function of html object **************
//     //      to manipulate html by taking advantage of placeholder {Message}
//     html = html.replace('{Message}', msg);
    
//     // entering html res(readable) -> req (writable) on the browser point of view 
//     res.end(html);
    
//     // 2)
//     // By using streams to send 'respose' over http "response header"
//     // Simplified, higer performance
//     // "res" is a property that must run
//     fs.createReadStream(__dirname + '/index.html').pipe(res);

// }).listen(1337, '127.0.0.1');


const http = require('http');
const fs = require('fs');

// *********************8
// Serialize : translating an object into a format that can be stored
//      in memory or transferred over network protocol like http.
// *****************88

// When we send data (object) to client over http, we must convert
//      the data into JSON/XML format.
// It is called "Serialize data"

// Also, when we convert JSON/XML into object which is readable in 
//      javascript, it is deserialize

http.createServer((req, res) => {

    // Define MIME to JSON
    res.writeHead(200, { 'Context-Type' : 'application/json' });
    
    var obj = {

        firstName : 'John',
        lastName : 'Mosi'
    };

    // Like below, in order to send object over the network
    //      we need to swtich the format to JSON by utilizing
    //      JSON.stringfy() 
    res.end(JSON.stringify(obj));

    console.log('global.JSON', global.JSON);
    // console.log('toJSON', obj.toJSON()); obj.toJSON() => invalid systax
    console.log('JSON.StryingFY', JSON.stringify(obj));

}).listen(1337, '127.0.0.1');


