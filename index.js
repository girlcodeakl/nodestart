//set up
var express = require('express')
var app = express();

//If a client asks for a file,
//look in the public folder. If it's there, give it to them.
app.use(express.static(__dirname + '/public'));

//listen for connections on port 3000
app.listen(3000);
console.log("I am listening... open a web browser and go to localhost:3000 to connect.");
