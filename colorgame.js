var numSquares = 6;
var colors = generateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");


for (var i=0; i<modeButtons.length; i++) {
	modeButtons[i].addEventListener("click",function(){
		modeButtons[0].classList.remove("selected");
		modeButtons[1].classList.remove("selected");
		this.classList.add("selected");
		
		// if (this.textContent === "Easy") {
		// 	numSquares = 3;
		// } else {
		// 	numSquares 6;
		// } 

		//Above 4 lines of logic can also be written as 

		this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;

		//figure out how many squares to show
		//pick new colors
		//pick a new pickedColor
		//update page to reflect changes
		reset();

	})
}

// New function reset instead a lot of code down below commented

function reset() {
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change displayed color to picked color
	colorDisplay.textContent = pickedColor;
	//change colors of squares
	for (var i=0; i<squares.length; i++) {
		if(colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
	messageDisplay.textContent = "";
	resetButton.textContent = "New Colors";
}

// easyBtn.addEventListener("click", function() {
// 	easyBtn.classList.add("selected");
// 	hardBtn.classList.remove("selected");
// 	numSquares = 3;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		if(colors[i]) {
// 			squares[i].style.backgroundColor = colors[i];
// 		} else {
// 			squares[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function() {
// 	hardBtn.classList.add("selected");
// 	easyBtn.classList.remove("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i=0; i<squares.length; i++) {
// 		squares[i].style.backgroundColor = colors[i];
// 		squares[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	// //generate all new colors
	// colors = generateRandomColors(numSquares);
	// //pick a new random color from array
	// pickedColor = pickColor();
	// //change displayed color to picked color
	// colorDisplay.textContent = pickedColor;
	// //change colors of squares
	// for (var i=0; i<squares.length; i++) {
	// //add initial colors to squares
	// squares[i].style.backgroundColor = colors[i];
	// }
	// h1.style.backgroundColor = "steelblue";
	// messageDisplay.textContent = "";
	// this.textContent = "New Colors";

	reset();

})

colorDisplay.textContent = pickedColor;

for (var i=0; i<squares.length; i++) {
	//add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add eventListeners to squares
	squares[i].addEventListener("click",function() {
		//grab color of clicked square
		var clickedColor = this.style.backgroundColor;
		//Compared clicked color with the picked color
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";

		} else {
			this.style.backgroundColor = "#232323";
			messageDisplay.textContent = "Try Again!";	
		}
	});
}

function changeColors(color) {
	//loop through all suares
	for (var i=0; i<squares.length; i++) {
	//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num) {
	//make an array
	var arr = [];
	//add num of random colors to that array
	for( var i=0; i<num; i++) {
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	//pick a green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	//pick a blue from 0 - 255
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}