var sedan = document.getElementById('sedan');
var getCar = document.getElementById('getCar');
var position = 0;
var id;
//событие при наведение курсора
getCar.onmouseover = function() {
	//console.log('over');
	
	if(id) clearInterval(id);
	id = setInterval(toDriveRight, 2);
}

//отвода курсора
getCar.onmouseout = function(){
	//console.log('out')
	
	clearInterval(id);
	id = setInterval(toDriveLeft, 2);
}

function toDriveRight(){
	if(position == 500){
		clearInterval(id);
	}else{
		position ++;
		sedan.style.left = position + 'px';
	}
}

function toDriveLeft(){
	if (position == 0){
		clearInterval(id);
		
	}else{
		position --;
		sedan.style.left = position + 'px';
	}
}
