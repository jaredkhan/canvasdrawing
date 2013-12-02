var colors = ['black', 'grey', 'white', '#d90500', '#ffa300', '#ffe100', '#b3ff00', '#0096ff', '#c06fe3'];
var palette = document.getElementById('colors');

//make function for color switching
var setColor = function(color){
	context.fillStyle = color;
	context.strokeStyle = color;
	var active = document.getElementsByClassName('swatch active')[0];
	if(active) 
		active.className = 'swatch';
}

var setSwatch = function(e){
	var swatch = e.target;
	setColor(swatch.style.backgroundColor);
	swatch.className += ' active';
}

//BUILD COLOR PALETTE
for(var i = 0, n = colors.length; i<n; i++){
	var swatch = document.createElement('div');
	swatch.className = 'swatch';
	swatch.style.backgroundColor = colors[i];
	swatch.addEventListener('click', setSwatch);
	palette.appendChild(swatch);
}


//make array of swatch elems
var swatches = document.getElementsByClassName('swatch');

//give first swatch active status
setSwatch(swatches[0]);