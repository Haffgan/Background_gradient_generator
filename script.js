var body = document.querySelector(".body1");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3tag = document.querySelector("h3");

function changeColor() {
	body.style.background = "linear-gradient(to right" 
	+ "," 
	+ color1.value 
	+ "," 
	+ color2.value 
	+ ")";
	h3tag.textContent = body.style.background + ";"

}
 changeColor();

color1.addEventListener("input", changeColor);

color2.addEventListener("input", changeColor);