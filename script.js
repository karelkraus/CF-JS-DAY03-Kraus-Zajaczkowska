function crystalGazer (job_title, location, partners_name, number_childrens) {

	
	var result = "You will be a " + job_title + " in " +location+ " and married to " +partners_name+  " with " + number_childrens + " childrens";
	document.getElementById("test").innerHTML += result + "<br>";
	return
}
crystalGazer("Businesman","Vienna", "Eva", 3);
crystalGazer("Manager","Berlin", "Adam", 2);
