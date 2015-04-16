// Color Field Phases

function currentTime() {
	var today = new Date();
	var time = today.toLocaleTimeString();
	document.title = time;
}

setInterval(function() {
	currentTime();
}, 1000);