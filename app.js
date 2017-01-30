"use strict";

let slFetch = require("./slFetch.js");

let express = require("express");
let app = express();

app.use(express.static(__dirname));

app.get("/timetable/:station/:line", (req, res) => {
	let p3 = new Promise((resolve, reject)=>{
		return slFetch.makeRequest(req.params.station, resolve, req.params.line);
	})
	Promise.resolve(p3).then(val => res.send(val));
});

app.listen(3000, () => {
	console.log("Listens to port 3000");
})