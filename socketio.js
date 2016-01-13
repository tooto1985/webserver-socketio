var express = require("express");
var app = express();
var http = require("http").Server(app);
var io = require("socket.io")(http);
var path = require("path");
app.use("/", express.static(path.join(__dirname, "public")));
io.on('connection', function(socket) {
	socket.on("clientsend", function(msg) {
		console.log("clientsend:" + msg);
		socket.emit("serversend", msg + 1);
	});
});
http.listen(3000);