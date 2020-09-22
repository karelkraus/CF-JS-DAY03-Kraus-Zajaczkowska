function conversion(degrees) {
	const pi = 3.14;
	var result = degrees * (pi/180);
	document.getElementById("test").innerHTML += result
	return
}

conversion(200)