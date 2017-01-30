const KARLAPLAN = "740021650";
const JUNGFRUGATAN = "740045964";
const STADION = "740021647";
$(document).ready(function(){
	theFetch(JUNGFRUGATAN, 4, "#jungfru");
	theFetch(KARLAPLAN, 13, "#karla");
	theFetch(STADION, 14, "#stadion");
})

function theFetch(station, line, id){
	var xhr = new XMLHttpRequest();

	xhr.onreadystatechange = function(){
		if(this.readyState !== 4) return;
		var data = JSON.parse(this.response);
		console.log(data[0])
		var table = $("<table>");
		data.map(function(d){
			var row = $("<tr>");
			row.append($("<th>").html(d.line + " - " + d.direction));
			//row.append($("<th>").html(d.direction));
			row.append($("<th>").html(d.time));
			var timeLeft = (new Date().getHours()*60 + new Date().getMinutes());
			row.append($("<th>").html(d.minutesSinceMidnight - timeLeft));
			$(id).append(row);
		})
	};
	xhr.open("GET", "/timetable/" + station + "/" + line, true);
	xhr.send();
}