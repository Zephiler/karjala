var picArray = [
	{ pic: "../memoryImages/sun.jpg", checkId: 0 },
	{ pic: "../memoryImages/dino.jpg", checkId: 1 },
	{ pic: "../memoryImages/arska.png", checkId: 2 },
	{ pic: "../memoryImages/bean.jpg", checkId: 3 }
];

var cardArray = [
	{ answer: "Aurinko", checkId: 0 },
	{ answer: "Dinosaurus", checkId: 1 },
	{ answer: "Arska", checkId: 2 },
	{ answer: "Bean", checkId: 3 }
];
var guessed = false;
var points = 0;
var rounds = 0;

function startGame() {
	guessed = false;
	var n = 0;
	var answerArr = [];
	var randomNumber = randomNum(picArray.length);
	var gameScreen = document.getElementById("game");
	document.getElementById("nextButton").style.visibility = "hidden";
	gameScreen.innerHTML = "<div id='pic'><img src=" + picArray[randomNumber].pic + "></div>"; // load picture from cardArray
	// answers moved new array and checks that there aren't same answers
	answerArr.push(cardArray[randomNumber]);
	while (n < 1) {
		var numOne = randomNum(cardArray.length);
		var numTwo = randomNum(cardArray.length);
		if (numOne !== answerArr[0].checkId && numTwo !== numOne && numTwo !== answerArr[0].checkId) {
			answerArr.push(cardArray[numOne]);
			answerArr.push(cardArray[numTwo]);
			answerArr = shuffle(answerArr);
			n++;
		}
	}

	for (i = 0; i < 3; i++) {
		gameScreen.innerHTML += "<div id='choice'><h3 id='" + answerArr[i].checkId + "' class='answers' onclick='checkAnswer(" + answerArr[i].checkId + " , " + randomNumber + ")'>" + answerArr[i].answer + "</h3></div>";
	}
	document.getElementById("button").style.display = "none";
	console.log(answerArr);

}

function checkAnswer(cardNum, answer) {
	if (guessed == false) {
		var answers = document.getElementsByClassName("answers");
		for (var i = 0; i < 3; i++) {
			answers[i].style.cursor = "default";
			answers[i].style.backgroundColor = "white";
		}
		if (cardNum == answer) {
			document.getElementById(cardNum).style.backgroundColor = "green";
			document.getElementById("nextButton").style.visibility = "visible";
			points += 1;
			rounds += 1;
			guessed = true;
			console.log(points);
		} else {
			document.getElementById(cardNum).style.backgroundColor = "red";
			document.getElementById("nextButton").style.visibility = "visible";
			guessed = true;
			rounds += 1;
			console.log(points);
		}
	}
	if (rounds == 10) {
		console.log("Arvasit oikeni " + points + "/10");
		document.getElementById("nextButton").style.display = "none";
		document.getElementById("newGameButton").style.visibility = "visible";
	}
}

function randomNum(num) {
	var number = Math.floor(Math.random() * num);
	return number;
}
// shuffle array to move answers different order
function shuffle(a) {
	var j, x, i;
	for (i = a.length - 1; i > 0; i--) {
		j = Math.floor(Math.random() * (i + 1));
		x = a[i];
		a[i] = a[j];
		a[j] = x;
	}
	return a;
}

function startNewGame() {
	location.reload();
}

// vienankielen vastaukset ja uudet kuvat
// ulkoasu, mobiili sovitus
// äänet