function grade(){
	var math = prompt("add a math grade :");
	var physics = prompt("add a physics Grade");
	var english = prompt("add an English Grade");
	var sum = parseInt(math) + parseInt(physics) + parseInt(english);
	var average = sum/3;
	document.getElementById("students").innerHTML ="the sum is:" + sum + "and the average is" + average;
}

grade();