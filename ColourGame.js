var squares = document.querySelectorAll(".square");
var reset = document.getElementById("reset");
var feedback = document.getElementById("feedback");
var clickedColour;
var num;
var theColor;
var colours = [];

newGame();
reset.addEventListener("click",setup);


function newGame(){
	setup();
	//determine whether the user clicked the correct colour
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click",function(){
			clickedColour = this.style.backgroundColor;
			console.log(clickedColour);
			if(clickedColour === theColor){
			for (var i = 0; i < squares.length; i++){
				squares[i].style.backgroundColor = theColor; 
			}
			feedback.textContent = "You got it!";
			} else {
				this.style.backgroundColor = "#232323";
				feedback.textContent = "Nope. Try Again.";
			}
		});
	}
}

function setup(){
	feedback.textContent = "";

	//initialize array of colours
	for (var i = 0; i < squares.length; i++){
		colours[i] = randColor(); 
	}
	//randomly select 1 of the 6
	num = Math.floor(Math.random()*6);
	theColor = colours[num];
	document.getElementById("rgbcolour").textContent = theColor;
	
	//initialize all 6 squares with the array above
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colours[i]; 
	}
}

//returns a random rgb colour
function randColor(){
	var R = Math.floor((Math.random()*255)+1);
	var G = Math.floor((Math.random()*255)+1);
	var B = Math.floor((Math.random()*255)+1);

	return "rgb(" + R + ", " + G + ", " + B + ")";
}


