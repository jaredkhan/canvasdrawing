var save = document.getElementById('save');
var frame = document.getElementById('saveiframe');

var saveImage = function(){
	var url = canvas.toDataURL();
	//console.log(url);	
	var ajax;

	ajax=new XMLHttpRequest();
	  
	ajax.onreadystatechange = function(){
		if(ajax.readyState == 4 && ajax.status == 200){
			var response = ajax.responseText;
			if (response !== "Error"){
				//var saveWindow = window.open('download.php?file='+response,'_blank','location=0,menubar=0,toolbar=0');
				//window.open('download.php?file='+response,'_blank','location=0,menubar=0,toolbar=0,width=200,height=200');
				//setTimeout(function(){saveWindow.close()},1000);
				//window.open(response,'_blank','location=0,menubar=0,toolbar=0');
				frame.src = 'download.php?file='+response;
			}
		}
	}
	
	ajax.open("POST","save.php",true);
	ajax.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	ajax.send("img="+url);
}

save.addEventListener('click', saveImage, false);