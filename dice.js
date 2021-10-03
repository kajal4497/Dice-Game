var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6 imgs
var randomDiceImage = "dice" + randomNumber1 + ".png";
var randomImageSource = randomDiceImage; // images from 1-6
var image1 = document.querySelectorAll("img")[0];  //based on image tag
image1.setAttribute("src", randomImageSource); //attribute name that we want to change: src


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src" , randomImageSource2);
 
// if player 1 wins

if (randomNumber1 > randomNumber2){
	document.querySelector("h1").innerHTML = "Player 1 wins!"; //The querySelector() allows you to find the first element that matches one or more CSS selectors.
}
else if(randomNumber2 > randomNumber1){
	document.querySelector("h1").innerHTML = "Player 2 wins! ";
}
else{
	document.querySelector("h1").innerHTML = "It's Draw!";
}
