var example = function() {
	var sentence = "i am developer"
	var res = sentence.charAt(0);
	var first = res.toUpperCase();
	var update = sentence.substring(1);
	var second = first + update;
	return second
	
}

document.getElementById("test").innerHTML += example();

