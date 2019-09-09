var cardArr = [];
var cards = [];
var pic = './memoryImages/tausta.png';
// var pic = './tausta.png';
// var pic = '/memoryImages/tausta.png';
var victory = 0;
var winCards = 0;
var flips = 0;
var totalFlips = 0;
// card number and pic

var testCards = [
	{ id: 1, pairNum: 1, pic: "url('./memoryImages/sun.jpg')" },
	{ id: 2, pairNum: 1, pic: "url('./memoryImages/sun.jpg')" },
	{ id: 3, pairNum: 2, pic: "url('./memoryImages/dino.jpg')" },
	{ id: 4, pairNum: 2, pic: "url('./memoryImages/dino.jpg')" },
	{ id: 5, pairNum: 3, pic: "url('./memoryImages/bean.jpg')" },
	{ id: 6, pairNum: 3, pic: "url('./memoryImages/bean.jpg')" },
	{ id: 7, pairNum: 4, pic: "url('./memoryImages/arska.png')" },
	{ id: 8, pairNum: 4, pic: "url('./memoryImages/arska.png')" },
	{ id: 9, pairNum: 5, pic: "url('./memoryImages/siili.jpg')" },
	{ id: 10, pairNum: 5, pic: "url('./memoryImages/siili.jpg')" }
];

// Function makes gameboard. 
function startGame(cardNumber) {
	for (j = 0; j < cardNumber; j++) {
		cards.push([testCards[j].id]);
	}
	for (i = 0; i < cardNumber; i++) {
		var cardId = Math.floor((Math.random() * cards.length));
		document.getElementById("game").innerHTML += "<div id=" + cards[cardId] + " class='memScreen' onclick='flipCard(" + cards[cardId] + ")'></div>";
		cards.splice(cardId, 1);
		winCards += 1;
	}
	// hide buttons
	var buttons = document.getElementsByClassName("buttons");
	for (var i = 0; i < buttons.length; i++) {
		buttons[i].style.display = "none";
	}
}

// Makes card flip and checks if cards is pair
function flipCard(id) {
	flips += 1;
	if (flips < 3) {
		var card = document.getElementById(id);
		card.style.backgroundImage = testCards[id - 1].pic;
		cardArr.push({ id: id, pairNum: testCards[id - 1].pairNum }); // push too fast?
		if (cardArr.length == 2) {
			if (cardArr[0].pairNum !== cardArr[1].pairNum) { // if flipped cards pairNum is not same then flip cards back
				setTimeout(function () {
					document.getElementById(cardArr[0].id).style.backgroundImage = "url('./memoryImages/tausta.png')";
					document.getElementById(cardArr[1].id).style.backgroundImage = "url('./memoryImages/tausta.png')";
					cardArr = [];
					flips = 0;
					totalFlips += 2;
				}, 500); // time 
			} else {
				document.getElementById(cardArr[0].id).removeAttribute("onclick");
				document.getElementById(cardArr[1].id).removeAttribute("onclick");
				cardArr = [];
				flips = 0;
				victory += 1;
				totalFlips += 2;
				if (victory == (winCards / 2)) {
					console.log("voitit")
					console.log(totalFlips)
					document.getElementById("end").innerHTML += "<button class='buttons' onclick='fresh()'>Uusipeli</button>"
				}
			}
		}
	}
}

function fresh() {
	location.reload();
}

// Lisää kuvat/tekstit. Fontti miltä näyttää
// pisteet?
// parempi ulkoasu