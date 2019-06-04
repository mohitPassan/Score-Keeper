var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;

p1Button.addEventListener("click", function(){
	p1Display.textContent = ++p1Score;
});

p2Button.addEventListener("click", function(){
	p2Display.textContent = ++p2Score;
});