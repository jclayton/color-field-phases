// Color Field Phases

var field = document.querySelector('#field');
var hueNumber1 = Math.floor(Math.random() * 360);
var hueNumber2 = Math.floor(Math.random() * 360);
console.log('Hue number 1: ' + hueNumber1);
console.log('Hue number 2: ' + hueNumber2);
var today = new Date();
var hour = today.getHours();
console.log(hour);

function colorField() {
	var animation = requestAnimationFrame(colorField);
	
	var hsl1 = "hsl(" + hueNumber1 + ", 100%, 50%)";
	var hsl2 = "hsl(" + hueNumber2 + ", 100%, 50%)";
	var degree = hour * (360 / 24); // rotate gradient in relation to the time of day
	var hslGradient = "linear-gradient(" + degree + "deg," + hsl1 + "," + hsl2 + ")";
	
	field.style.backgroundImage = hslGradient;
	
	if (hueNumber1 < 360) {
		hueNumber1 += 0.5;
	} else {
		hueNumber1 = 0;
	}

	if (hueNumber2 < 360) {
		hueNumber2 += 0.25;
	} else {
		hueNumber2 = 0;
	}
}

window.addEventListener('load', function() {
	requestAnimationFrame(colorField);
}, false);