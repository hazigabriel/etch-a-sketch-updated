let userInputSubmit =  document.getElementById('userInputSubmit');
let eraseGridButton =  document.getElementById('eraseGridButton');
let colorOnButton = document.getElementById("colorOnButton");
let monochromeOnButton = document.getElementById("monochromeOnButton");
let gradientOnButton = document.getElementById("gradientOnButton")
let userInput = document.getElementById("userInput");
let gridArea = document.querySelector(".grid-area");
///target the parent elements of the color mode button, so that I can add/remove the "active class"
let colorLabel = document.getElementById("colorLabel");
let monochromeLabel = document.getElementById("monochromeLabel");
let gradientLabel =	document.getElementById("gradientLabel");

let colorMode = function() {
		document.querySelectorAll(".gridBlock").forEach(function(divElelement){
		divElelement.addEventListener("mouseenter", function(e){
			e.target.style.background = "rgb(" + randomRGBColor() +","+ randomRGBColor() +","+ randomRGBColor() +")" ;
			e.target.style.border = "none";
		})
	})
}
let blackMode = function() {
	document.querySelectorAll(".gridBlock").forEach(function(divElelement){
		divElelement.addEventListener("mouseenter", function(e){
			e.target.style.background = "black" ;
			e.target.style.border = "none";
		})
	})
};

monochromeOnButton.onclick = function(){
	blackMode();
	///add the "active" class to the selected butotn, and remove it from the other buttons
	colorLabel.classList.remove("active");
	monochromeLabel.classList.add("active");
	gradientLabel.classList.remove("active");
}
colorOnButton.onclick = function(){
	colorMode();
	///add the "active" class to the selected butotn, and remove it from the other buttons
	colorLabel.classList.add("active");
	monochromeLabel.classList.remove("active");
	gradientLabel.classList.remove("active");
}
gradientOnButton.onclick = function() {

	///add the "active" class to the selected butotn, and remove it from the other buttons
	colorLabel.classList.remove("active");
	monochromeLabel.classList.remove("active");
	gradientLabel.classList.add("active");
}

colorMode()

//take the user input, if all conditions are met generate a grid, with a relative block sizes
//to fill the grid area and delete the previous elements
userInputSubmit.onclick = function(){
  
	if(isNaN(userInput.value)) {
		alert("Please input digits only");
	} else if(userInput.value < 1 || userInput.value > 64) {
		alert("Please input a number between 16 and 64.");
	} else {
		gridArea.innerHTML = ""; //delete previous div elements
		for(let i = 0; i < userInput.value * userInput.value; i++) {
			let newDiv = document.createElement("div");
			newDiv.style.cssText = "height:" + (640 / userInput.value) + "px; width:" + (640 / userInput.value) +"px;";
			newDiv.classList.add("gridBlock");
			gridArea.appendChild(newDiv);

		} 
 		
	};
	//the following if function checks what color function should be called after a new grid is generated
	if(colorLabel.classList.contains("active")) {
		colorMode();
	} else if (monochromeLabel.classList.contains("active")) {
		blackMode();
	} else {
		alert("gradiento")
	}
}

//generate a random number between 0 and 256, for our colorMode
function randomRGBColor() {
	return Math.trunc((Math.random() * 256))
};


eraseGridButton.onclick = function() {
	let currentDiv = document.querySelectorAll(".gridBlock");
	for(i = 0; i < currentDiv.length; i++) {
		currentDiv[i].style.cssText ="background: white, border:0.5px solid #c9c9c9;"
	}
}
 