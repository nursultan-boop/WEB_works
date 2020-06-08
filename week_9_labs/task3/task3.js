function tValue(x) {
	document.getElementById('window').value += x;
}

function clearInput() {
	var y=document.getElementById('clear').value
	document.getElementById('window').value = y;
}

function calculateResult() {
	var result = eval(document.getElementById('window').value);
	document.getElementById('window').value = result;
}
