var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");

var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0 ; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i =0 ; i<squares.length; i++){
		
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});
var resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", function(){
	//generate all new colors
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change color display to match picked color
	this.textContent = "New Colors";
	colorDisplay.textContent = pickedColor;

	messageDisplay.textContent ="";
	//change colors of squres
	for(var i = 0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";
})

colorDisplay.textContent = pickedColor;

for(var i=0; i<squares.length; i++){
	//add initial colors to squares
	squares[i].style.background = colors[i];
	// add click listeners to squares
	squares[i].addEventListener("click", function(){
	
		var clickedColor = this.style.background;	
		//grab color of clicked square
		//compare color to picbackgroundkedColoor
		if(clickedColor===pickedColor){
			messageDisplay.textContent = "Correct!";
			resetButton.textContent = "Play agian?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else{
		 this.style.background= "#232323";
		 	messageDisplay.textContent = "Try Again!";
		}
		
	});
}

function changeColors(color){
	for(var i=0; i<squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = []
	for(var i=0; i<num; i++){
		arr.push(randomColor())
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

