function fn() {
	let rd1 = document.getElementById('r1');
	let rd2 = document.getElementById('r2');
	let rd3 = document.getElementById('r3');

	if(rd1.checked==true)
	document.getElementById('output').innerHTML='#1';
	else if (rd2.checked==true) 
	document.getElementById('output').innerHTML='#2';
	else if (rd3.checked==true) 
	document.getElementById('output').innerHTML='#3';
	 
}

function abc() {
	let a = document.getElementById('sel').selectedIndex;
	let b = document.getElementById('sel').options;
	let rd1 = document.getElementById('r1');
	let rd2 = document.getElementById('r2');
	let rd3 = document.getElementById('r3');
				
	if(rd1.checked==true)
	document.getElementById('sum').innerHTML='$'+13*b[a].text;
	else if (rd2.checked==true) 
	document.getElementById('sum').innerHTML='$'+22*b[a].text;
	else if (rd3.checked==true) 
	document.getElementById('sum').innerHTML='$'+34*b[a].text;
				
	}			
function al() {
	alert('Спасибо за покупку!')
}

