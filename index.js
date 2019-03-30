var express = require("express");
var socket = require("socket.io");

// Running the server
var app = express();
var  server = app.listen(4000, function(){
	console.log("Server is running on port 4000");
});



// Static files

app.use(express.static("public"));



// Socket 
var io = socket(server);

io.on("connection", function(socket){
	console.log("User connected", socket.id);
	socket.on("chat", function(data){

		io.sockets.emit("chat", data);
	});
})