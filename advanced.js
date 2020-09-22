function time (minutes){
		if (minutes > 60) {
			var hour = minutes/60;
			var y = Math.floor(hour)
			var x = y * 60;
			var min = minutes - x;
			document.getElementById("test").innerHTML += minutes + " minutes=" + y + " hour(s)" + min + " minute(s)";
		}
		else {
			var min2 = minutes
			document.getElementById("test").innerHTML += minutes + " minute(s)";
		}
}

time(123)