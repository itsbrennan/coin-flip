
let heads = document.getElementById("heads");

let tails = document.getElementById("tails");

let userGuess = "";

let userWins = document.getElementById("userWins");
let userLosses = document.getElementById("userLosses");

userWins = 0;
userLosses = 0;

heads.onclick = function (){
	userGuess = "heads";
	alert("you chose " + userGuess);
	printToScreen();
	// $("#heads").removeClass('heads').addClass('heads-selected');
}

tails.onclick = function (){
	userGuess = "tails";
	alert("you chose " + userGuess);
	printToScreen();
}

			
let flipButton = document.getElementById("flipButton");

	flipButton.onclick = function () {
				
	let result;

	var flip = coinFlip();//determin heads or tails
	if (flip>0.5) {
		result = "heads";
	} else {
		result = "tails";
	}

	var displayResult = document.getElementById("displayResult"); //display flip result
	displayResult.innerHTML = result;
	printToScreen();

	if (userGuess === "heads" && result === "heads"){
		
		return userWins++;
	} else {
		
		return userLosses++;
	}


};


function coinFlip() {//returns a random number between 0 and 1
	return Math.floor(Math.random() * 2);
}

const printToScreen = () => {
	document.getElementById('userGuess').innerText = userGuess;
	document.getElementById('userWins').innerText = userWins;
	document.getElementById('userLosses').innerText = userLosses;
}
