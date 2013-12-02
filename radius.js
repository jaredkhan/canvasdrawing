var widthToRad = function(w){
	return (w-handleWidth)/(controlWidth-handleWidth)*(maxRad-minRad)+minRad;
}

var radToWidth = function(r){
	return (r-minRad)/(maxRad-minRad)*(controlWidth-handleWidth)+handleWidth;
}

var setRadius = function(newradius){
	if(newradius>maxRad)
		newradius = maxRad;
	else if(newradius<minRad)
		newRadius = minRad;
	radius = newradius;
	context.lineWidth = radius*2;
	console.log(radius);
	inner.style.width = radToWidth(radius)+"px";
}

var slide = function(e){
	if(radDrag){
		console.log('slide');
		var newWidth = radToWidth(radius)+e.clientX-baseX;
		if(newWidth>controlWidth){
			newWidth = controlWidth;
		}else if(newWidth<handleWidth){
			newWidth = handleWidth;
		}
		inner.style.width = newWidth+"px";
	}
}

var baseX = 0,
	controlWidth = 200,
	minRad = 0.5,
	maxRad = 100,
	defaultRad = 50,
	radDrag  = false,
	control  = document.getElementById('rad'),
	handle   = document.getElementById('radhandle'),
	handleWidth= handle.clientWidth;
	inner    = document.getElementById('radinner'),
	inner;
	
setRadius(defaultRad);
control.style.width = controlWidth+"px";

handle.addEventListener('mousedown', function(e){
	console.log('handledown');
	radDrag = true;
	baseX = e.clientX;
});
document.addEventListener('mouseup', function(){
	console.log('docup');
	if(radDrag){
		radDrag = false;
		setRadius(widthToRad(parseInt(inner.style.width)));
	}
});
document.addEventListener('mousemove', slide);