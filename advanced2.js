var color = function () {
	var x = Math.random()*100;
	var y = Math.random()*100;
	var z = Math.random()*100;
	document.body.style.backgroundColor = "rgb (" + x +"," + y+ "," + z")";
}

color()