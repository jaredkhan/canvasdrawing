var canvas  = document.getElementsByTagName("canvas")[0];
var context = canvas.getContext("2d");
var toolbar = document.getElementById("toolbar");
var radius = 20;
var prevpoint = false;
var dragging  = false;
var clearButton = document.getElementById('clear');
var currentState;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.onresize = function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight
	context.putImageData(currentState, 0, 0);
	context.lineWidth = radius*2;
};

context.lineWidth = radius*2;

window.onresize = function(){	
	var currentImage = context.getImageData(0,0,canvas.width,canvas.height);
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	context.putImageData(currentImage, 0,0);
}

var putPoint = function(e){
	if(dragging){
		if(prevpoint){			
			context.lineTo(e.clientX, e.clientY);
			context.stroke();
		}else
			prevpoint = true;
		context.beginPath();
		context.arc(e.clientX, e.clientY, radius, 0, 2*Math.PI);
		context.fill();
		context.beginPath();
		context.moveTo(e.clientX, e.clientY);
	}
}
var engage = function(e){
	dragging = true;
	putPoint(e);
}

var disengage = function(){
	dragging = false;
	prevpoint = false;
	currentState = context.getImageData(0, 0, canvas.width, canvas.height);
}

function clear(){
	context.clearRect(0,0,window.innerWidth,window.innerHeight);
}

canvas.addEventListener("mousemove", putPoint, false);
canvas.addEventListener("mousedown", engage, false);
canvas.addEventListener("mouseup", disengage, false);
canvas.addEventListener("mouseout", disengage, false);

clearButton.addEventListener("click", clear, false);