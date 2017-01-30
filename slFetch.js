"use strict";

let fs = require("fs");
let key = fs.readFileSync("keyToSl.txt", "utf-8");

module.exports = {
	makeRequest: makeRequest
}

function makeRequest(station, resolve, line){
	
	const d = new Date(Date.now());
	let month = d.getMonth() + 1;
	month < 10 ? month = "0" + month : month;
	let day = d.getDate();
	day < 10 ? day = "0" + day : day; 
	let hours = d.getHours();
	hours < 10 ? hours = "0" + hours : hours;
	let min = d.getMinutes();
	if(min < 10) min = "0" + min;

	const date = "date=" + d.getFullYear() + "-" + month + "-" + day;
	const time = "time=" + hours + ":" + min;

	let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
	let xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api.resrobot.se/v2/departureBoard?key=" + key + "&id=" + station + "&" + date + "&" + time + "&passlist=0&format=json", true);
	xhr.onload = function(e){
		console.log("bjurling");
		let departures = JSON.parse(xhr.responseText).Departure;
		let tuben = departures.filter(d => {
			return d.Product.num === line ? true : false;
		}).map(d => {
			console.log(d);
			let times = d.time.split(":");
			let timestamp = parseInt(times[0])*60 + parseInt(times[1]);
			return {
				direction: d.direction.split(" ")[0],
				line: d.Product.num,
				time: times[0] + ":" + times[1],
				minutesSinceMidnight: timestamp,
				transportShort: d.Product.catOutS,
				transportLong: d.Product.catOutL,
			};
		})
		resolve(tuben);
	}
	xhr.send();
}