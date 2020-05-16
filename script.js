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

//generate a random number between 0 and 256, for our colorMode
function randomRGBColor() {
	return Math.trunc((Math.random() * 256))
};

//calls the randomRGBColor function 3 times, and each RGB value receives random number between 1 and 256, resets opacity to full
//if the MonochromeMode function was used to hover the element previously

let colorMode = function() {
		document.querySelectorAll(".gridBlock").forEach(function(divElelement){
		divElelement.addEventListener("mouseenter", function(e){
			e.target.style.background = "rgb(" + randomRGBColor() +","+ randomRGBColor() +","+ randomRGBColor() +")" ;
			e.target.style.border = "none";
			e.target.style.opacity = "1";
		})
	})
}

///define the opacity for the monochrom fade function
let op = 0;
//add this.grid block element an additional 0.1 opacity with each color, and sets its color to black
let monochromeMode = function() {
	document.querySelectorAll(".gridBlock").forEach(function(divElelement){
		let opIncrement = 0;
		divElelement.addEventListener("mouseenter", function(e){
			if(opIncrement < 1){
					opIncrement += 0.1;
			}
			e.target.style.opacity = op + opIncrement;
			e.target.style.background = "black" ;
			e.target.style.border = "none";
		})
	})
};
 
 


monochromeOnButton.onclick = function(){
	monochromeMode();
	///add the "active" class to the selected butotn, and remove it from the other buttons
	colorLabel.classList.remove("active");
	monochromeLabel.classList.add("active");
}
colorOnButton.onclick = function(){
	colorMode();
	///add the "active" class to the selected butotn, and remove it from the other buttons
	colorLabel.classList.add("active");
	monochromeLabel.classList.remove("active");
}


//start with color mode by default
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
		monochromeMode();
	}
}


//add original styling to each grid block element
eraseGridButton.onclick = function() {
	let currentDiv = document.querySelectorAll(".gridBlock");
	for(i = 0; i < currentDiv.length; i++) {
		currentDiv[i].style.cssText ="background: white, border:0.5px solid #c9c9c9;"
	}
}
 