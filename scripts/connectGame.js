var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var xMousePos;
var yMousePos;
var xMouseEndPos;
var yMouseEndPos;
var mouseClick = false;
var left = 10;
var right = 100;
var points = 0;
var rounds = 0;
var boxArr = [false, false, false, false, false, false, false, false, false, false];

var wordArr = [
			{suomi: "Koira", karjala: "Koira"},
			{suomi: "Kissa", karjala: "Kišša"},
			{suomi: "Perhonen", karjala: "Liipukkaini"},
			{suomi: "Muurahainen", karjala: "Muurahaini"},
			{suomi: "Hiiri", karjala: "Hiiri"},
			{suomi: "Sammakko", karjala: "Skokuna"},
			{suomi: "Jänis", karjala: "Jänis"},
			{suomi: "Kettu", karjala: "Repo"},
			{suomi: "Hevonen", karjala: "Heponi"},
			{suomi: "Karhu", karjala: "Kontie"}
];
var rectArr = [
			{x: 50, y: 50},
			{x: 50, y: 150},
			{x: 50, y: 250},
			{x: 50, y: 350},
			{x: 50, y: 450}
];
var questArr = [];
var rightAnswerArr = [];

startGame();
canvas.addEventListener("mousedown", mousePosition, false);

function startGame() {
	ctx.clearRect(0, 0, 600, 600);
	document.getElementById("nextButton").style.visibility = "hidden";
	boxArr = [false, false, false, false, false, false, false, false, false, false];
	makeArrays();

	for (var i = 0; i < rectArr.length; i++) {
		roundRect(rectArr[i].x, rectArr[i].y, 150, 50, 20);
		roundRect(rectArr[i].x+350, rectArr[i].y, 150, 50, 20);
	}

	for (var i = 0; i < rectArr.length; i++) {
		drawText(questArr[i].answer, rectArr[i].x+10, rectArr[i].y+30);
		drawText(rightAnswerArr[i].answer, rectArr[i].x+360, rectArr[i].y+30);
	}
}

function drawText(text, x, y) {
	ctx.font = "20px Arial";
	ctx.fillText(text, x, y);
}

function drawLine(x, y, xEnd, yEnd, left, right) { // draw line between answers and add point if answer is right
		ctx.beginPath();
		if (left == right) {
			points += 1;
			ctx.strokeStyle="green";
			ctx.lineWidth = 3;
			ctx.moveTo(x, y);
			ctx.lineTo(xEnd, yEnd);	
		} else {
			ctx.strokeStyle="red";
			ctx.lineWidth = 3;
			ctx.moveTo(x, y);
			ctx.lineTo(xEnd, yEnd);	
		}
		ctx.stroke();
		ctx.closePath();
		rounds += 1;
		
		if(rounds == 5) {
			document.getElementById("nextButton").style.visibility = "visible";
			console.log("kaikki vastattu");
			rounds = 0;
			questArr = [];
			rightAnswerArr = [];
			boxArr = [];
		}
		console.log(points);
		
}

function roundRect(x, y, w, h, radius) {// draws retangle with round corners
  var r = x + w;
  var b = y + h;
  ctx.beginPath();
  ctx.strokeStyle="green";
  ctx.lineWidth="3";
  ctx.moveTo(x+radius, y);
  ctx.lineTo(r-radius, y);
  ctx.quadraticCurveTo(r, y, r, y+radius);
  ctx.lineTo(r, y+h-radius);
  ctx.quadraticCurveTo(r, b, r-radius, b);
  ctx.lineTo(x+radius, b);
  ctx.quadraticCurveTo(x, b, x, b-radius);
  ctx.lineTo(x, y+radius);
  ctx.quadraticCurveTo(x, y, x+radius, y);
  ctx.stroke();
}

function mousePosition(event) {
	console.log(boxArr);
	if(mouseClick == false) {
		xMousePos = event.clientX;
	    yMousePos = event.clientY;

	    xMousePos -= canvas.offsetLeft;
	    yMousePos -= canvas.offsetTop;
	    
	    if(xMousePos >= 50 && xMousePos <= 200 && yMousePos >= 50 && yMousePos <= 100 && boxArr[0] == false) {
	    	xMousePos = 200;
	    	yMousePos = 75;
	    	mouseClick = true;
	    	boxArr[0] = true;
	    	left = questArr[0].id; 
	    } else if (xMousePos >= 50 && xMousePos <= 200 && yMousePos >= 150 && yMousePos <= 200 && boxArr[2] == false) {
	    	xMousePos = 200;
	    	yMousePos = 175;
	    	mouseClick = true;
	    	boxArr[2] = true;
	    	left = questArr[1].id;
	    } else if (xMousePos >= 50 && xMousePos <= 200 && yMousePos >= 250 && yMousePos <= 300 && boxArr[4] == false) {
	    	xMousePos = 200;
	    	yMousePos = 275;
	    	mouseClick = true;
	    	boxArr[4] = true;
	    	left = questArr[2].id;
	    } else if (xMousePos >= 50 && xMousePos <= 200 && yMousePos >= 350 && yMousePos <= 400 && boxArr[6] == false) {
	    	xMousePos = 200;
	    	yMousePos = 375;
	    	mouseClick = true;
	    	boxArr[6] = true;
	    	left = questArr[3].id;
	    } else if (xMousePos >= 50 && xMousePos <= 200 && yMousePos >= 450 && yMousePos <= 500 && boxArr[8] == false) {
	    	xMousePos = 200;
	    	yMousePos = 475;
	    	mouseClick = true;
	    	boxArr[8] = true;
	    	left = questArr[4].id;
	    }
	} else {
		xMouseEndPos = event.clientX;
	    yMouseEndPos = event.clientY;

	    xMouseEndPos -= canvas.offsetLeft;
	    yMouseEndPos -= canvas.offsetTop;

	    if(xMouseEndPos >= 400 && xMouseEndPos <= 550 && yMouseEndPos >= 50 && yMouseEndPos <= 100 && boxArr[1] == false) {
	    	xMouseEndPos = 400;
	    	yMouseEndPos = 75;
	    	right = rightAnswerArr[0].id;
	    	boxArr[1] = true;
	    	drawLine(xMousePos, yMousePos, xMouseEndPos, yMouseEndPos, left, right);
	    	mouseClick = false;
	    } else if (xMouseEndPos >= 400 && xMouseEndPos <= 550 && yMouseEndPos >= 150 && yMouseEndPos <= 200 && boxArr[3] == false) {
	    	xMouseEndPos = 400;
	    	yMouseEndPos = 175;
	    	right = rightAnswerArr[1].id;
	    	boxArr[3] = true;
	    	drawLine(xMousePos, yMousePos, xMouseEndPos, yMouseEndPos, left, right);
	    	mouseClick = false;
	    } else if (xMouseEndPos >= 400 && xMouseEndPos <= 550 && yMouseEndPos >= 250 && yMouseEndPos <= 300 && boxArr[5] == false) {
	    	xMouseEndPos = 400;
	    	yMouseEndPos = 275;
	    	right = rightAnswerArr[2].id;
	    	boxArr[5] = true;
	    	drawLine(xMousePos, yMousePos, xMouseEndPos, yMouseEndPos, left, right);
	    	mouseClick = false;
	    } else if (xMouseEndPos >= 400 && xMouseEndPos <= 550 && yMouseEndPos >= 350 && yMouseEndPos <= 400 && boxArr[7] == false) {
	    	xMouseEndPos = 400;
	    	yMouseEndPos = 375;
	    	right = rightAnswerArr[3].id;
	    	boxArr[7] = true;
	    	drawLine(xMousePos, yMousePos, xMouseEndPos, yMouseEndPos, left, right);
	    	mouseClick = false;
	    } else if (xMouseEndPos >= 400 && xMouseEndPos <= 550 && yMouseEndPos >= 450 && yMouseEndPos <= 500 && boxArr[9] == false) {
	    	xMouseEndPos = 400;
	    	yMouseEndPos = 475;
	    	right = rightAnswerArr[4].id;
	    	boxArr[9] = true;
	    	drawLine(xMousePos, yMousePos, xMouseEndPos, yMouseEndPos, left, right);
	    	mouseClick = false;
	    }
	}
}

function makeArrays() { // get words from "DBarray" and push own arrays
	var i = 0;
	while (i < 5) {
	var word = randomNum(wordArr.length);	
	questArr.push({answer: wordArr[word].suomi, id: i});
	rightAnswerArr.push({answer: wordArr[word].karjala, id: i});
	wordArr.splice(word, 1);
	i++;
	}
questArr = shuffle(questArr);
rightAnswerArr = shuffle(rightAnswerArr);
console.log(questArr);
console.log(rightAnswerArr);	
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

function fresh() {
	location.reload();
}
// Tekstit
// ulkonäkö
// loppu tulos ja uus kierros
// Jos näyttö mobiili niin height ja width pienempi