var wordArr = ["KARJALA", "SUOMI", "RUOTSI", "NORJA", "SAKSA", "JAPANI", "VENÄJÄ", "RANSKA"]; // change these words to right answers
var rightAnswer = [];
var startAnswer = 0;
var endAnswer = 0;
var firstClick = false;
var gridSize = 10;

function startGame() {
	document.getElementById("button").style.visibility = "hidden";
	makeGrid();
	wordToGrid();
	fillLetters();
	wordsToFind();
}

function makeGrid(){ 
	var div = document.getElementById("game");
	for(var i = 1; i<gridSize*gridSize+1; i++) { // Make grid
		if(i%gridSize == 0) {
			div.innerHTML += "<div id="+ i +" class='square' onclick='checkAnswer("+ i +")'></div><br>";
		} else {
			div.innerHTML += "<div id="+ i +" class='square' onclick='checkAnswer("+ i +")'></div>";
		}
	}
}

function wordToGrid() { // puts words to grid
	for (var i = 0; i<5; i++) { // words 5
		var check;
		var setWordArr = wordArr[i].split(""); // string to array
		var direction = wordDirection();
		var idNum = wordStartPlace(setWordArr.length, gridSize ,direction);
		var startIdNum = idNum;
		
		for(var j = 0; j<setWordArr.length; j++) { 
			var check;
			var type = document.getElementById(idNum);
			if(type.innerHTML == "" || type.innerHTML == setWordArr[j]) { // if found place to word then push it to array else try again
				type.innerHTML = setWordArr[j];
				idNum += direction;
				check = true;
			} else {
				check = false;
				i--;
				break;
			}		
		}
		if(check == true) {
			rightAnswer.push({start: startIdNum, end: idNum - direction, wordLength: setWordArr.length, direction: direction, answer: wordArr[i]});
		}	
	}		
}

function wordDirection() { // gets word direction
	var dir = Math.floor((Math.random() * 2) + 1);
	if(dir == 2) {
		return 1; //right
	} else if(dir == 1) {
		return 10; // down
	} else if(dir == 3) {
		return 11; // rightdown
	} else if(dir == 4) {
		return -1; //left
	}
}

function wordStartPlace(wordLength, grid, dire) { // checks direction of word and then checks start place
	var direction = dire;
	var rows = grid - wordLength + 1;
	//console.log(rows + " test")
	var startId = Math.floor((Math.random() * rows)) + 1 * Math.floor((Math.random() * grid)) * grid + 1;
	var startIdDown = Math.floor((Math.random() * rows) + 1) * Math.floor((Math.random() * grid) + 1);
	if(direction == 1) {
		return startId;
	}  
	if(direction == 10) {
		//console.log(startIdDown+" id")
		return startIdDown;
	}
	// rightdown, up, left, rightup, leftdown, leftup 
}

function fillLetters() { // fills empty grid divs
	for(var i = 1; i<gridSize*gridSize+1; i++) {
		var type = document.getElementById(i);
		if (type.innerHTML == "") {
			type.innerHTML = randomLetter();
		}
	}		
}

function randomLetter() { // letter randomiser
	var letters = "ZAQWSXCDERFVBGTYHNMJUIKLOPÖÄÅŠ";
	var letterArr = letters.split("");
	var letter = letterArr[Math.floor((Math.random() * letterArr.length))];
	return letter;

}

function wordsToFind() { // puts words to find after grid
	var end = document.getElementById("end");
	for(var i = 0; i<rightAnswer.length; i++) { 
			end.innerHTML += "<h2 id=answer"+ i +">"+ rightAnswer[i].answer +"</h2>";
	}
}

function checkAnswer(num) {
	console.log(firstClick)
	for(var i = 0; i<rightAnswer.length; i++) {
		if(firstClick == false && num == rightAnswer[i].start) { 
			startAnswer = num;
			firstClick = true;
			return;
		}	
	}
	if(firstClick == true) {
		endAnswer = num;
		firstClick = false;

		for(var i = 0; i<rightAnswer.length; i++) {
			var answerLength = rightAnswer[i].wordLength;
			if(startAnswer == rightAnswer[i].start && endAnswer == rightAnswer[i].end) { // if word first letter cliked and last
				document.getElementById("answer"+i).style.textDecoration = "line-through"; // if word finded linethrough answer
				var dirNum = rightAnswer[i].start;										 // then paint background blue
				for(var j = 0; j<answerLength; j++) { 									 // checks direction	
					document.getElementById(dirNum).style.background = "blue"; 
					dirNum += rightAnswer[i].direction;
				}	
			}
		}	
	}
}

// Aloitus paikat sanoille, oikea ja alas tehty!
// vaikeus tasot helppo, medium, vaikea
// äänet
// random sanat gridiin