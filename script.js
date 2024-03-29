var p1Button = document.querySelector("#p1Button");
var p2Button = document.querySelector("#p2Button");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;
var reset = document.querySelector("#reset");
var input = document.querySelector("input");
var scoreDisplay = document.querySelector("p span");

function resetFn() {
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	gameOver = false;
}
p1Button.addEventListener("click", function(){
	if(!gameOver)
		p1Display.textContent = ++p1Score;
	if(p1Score === winningScore)
	{
		p1Display.classList.add("winner");
		gameOver = true;
	}
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
		p2Display.textContent = ++p2Score;
	if(p2Score === winningScore)
	{
		p2Display.classList.add("winner");
		gameOver = true;
	}
});

reset.addEventListener("click",function(){
	resetFn();
});

input.addEventListener("change",function() {
	scoreDisplay.textContent = input.value;
	winningScore = Number(input.value);
	resetFn();
});