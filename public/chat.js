// Make front end socket connection

var socket = io.connect("http://localhost:4000");

// queries

var message = document.getElementById('message'),
      handle = document.getElementById('handle'),
     	 btn = document.getElementById('send'),
      output = document.getElementById('output');

// events

 btn.addEventListener("click", function(){

 	socket.emit("chat", {
 		message: message.value,
 		handle: handle.value
 	});

});


 // listen for events on front end


 socket.on("chat", function(data){

 	 output.innerHTML += '<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
 });