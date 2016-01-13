var startPath = process.argv[2];
if (startPath) {
	var express = require("express");
	var serveIndex = require("serve-index");
	var path = require("path");
	var app = express();
	app.use(function(req, res, next) {
		console.log(req.url);
		next();
	});
	app.use(serveIndex(path.join(startPath)));
	app.use(express.static(path.join(startPath)));
	app.listen(3000);
} else {
	console.log("需要傳入起始路徑");
}