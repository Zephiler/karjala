let centerBlock = document.querySelector("#secondGridItem");
let first = document.querySelector("#firstGridItem");

let third = document.querySelector("#thirdGridItem");
let fourth = document.querySelector("#fourthGridItem");
let fifth = document.querySelector("#fifthGridItem");
let sixth = document.querySelector("#sixthGridItem");
let seventh = document.querySelector("#seventhGridItem");
let eighth = document.querySelector("#eighthGridItem");
let ninth = document.querySelector("#ninthGridItem");

let gridContainer = document.getElementById("gridContainer");

let modal = document.querySelector(".myModal");
let start = document.querySelector("#start_btn");
let endModal = document.querySelector(".endModal");
let againButton = document.querySelector("#playAgain");
let notAgainButton = document.querySelector("#dontPlayAgain");

let rText = document.getElementById("randomText");
let qText = document.getElementById("questionText");
let bubble = document.getElementById("bubble");

let startQuestion;
let correct = 0;

let gridArr = ["firstGridItem", "thirdGridItem", "fourthGridItem",
  "fifthGridItem", "sixthGridItem", "seventhGridItem", "eighthGridItem", "ninthGridItem"];

window.addEventListener("DOMContentLoaded", () => {
  checkScreen();
  shuffleBlocks(gridContainer);  // NEW
  qText.innerHTML = "";
  giveRandomWord(gridArr);
})

// here block place is randomized
function shuffleBlocks(place) {
  for (let i = place.children.length; i >= 0; i--) {
    place.appendChild(place.children[Math.random() * i | 0]);
  }
}


function checkScreen() {
  // Mobile View
  if (/Mobi|Android/i.test(navigator.userAgent)) {
    console.log("Mobile");
    first.addEventListener("click", () => {
      if (qText.innerHTML == "Tämä šiivatta šuau munie" || qText.innerHTML == "Tämä šiivatta kotkottau") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("firstGridItem").remove();
        gridArr = gridArr.filter(e => e != "firstGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }

    })
    third.addEventListener("click", () => {
      if (qText.innerHTML == "Tällä elukalla on pität korvat" || qText.innerHTML == "Tämä elukka hyppelöy kiirehesti.") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("thirdGridItem").remove();
        gridArr = gridArr.filter(e => e != "thirdGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }

    })
    fourth.addEventListener("click", () => {
      if (qText.innerHTML == "Šillä on pruuni karva" || qText.innerHTML == "Tämä elukka haukkuu") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("fourthGridItem").remove();
        gridArr = gridArr.filter(e => e != "fourthGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
    fifth.addEventListener("click", () => {
      if (qText.innerHTML == "Miula himottais leikkie ruškien lankakerän kera" || qText.innerHTML == "Täštä šie tikutat lämpimät kintahat.") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("fifthGridItem").remove();
        gridArr = gridArr.filter(e => e != "fifthGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
    sixth.addEventListener("click", () => {
      if (qText.innerHTML == "Tämä eläy veješšä" || qText.innerHTML == "Anna miula kalua") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("sixthGridItem").remove();
        gridArr = gridArr.filter(e => e != "sixthGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
    seventh.addEventListener("click", () => {
      if (qText.innerHTML == "Mie tahon leikkie valkien kiššan kera" || qText.innerHTML == "Tämä elukka n’aukuu.") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("seventhGridItem").remove();
        gridArr = gridArr.filter(e => e != "seventhGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
    eighth.addEventListener("click", () => {
      if (qText.innerHTML == "Voitko šie šukie milma?" || qText.innerHTML == "Anna miula keltani harja.") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("eighthGridItem").remove();
        gridArr = gridArr.filter(e => e != "eighthGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
    ninth.addEventListener("click", () => {
      if (qText.innerHTML == "Miula himottais juuvva maitua" || qText.innerHTML == "Anna miula maitua") {
        bubble.style.visibility = "hidden";
        rightAnswer();
        document.getElementById("ninthGridItem").remove();
        gridArr = gridArr.filter(e => e != "ninthGridItem");
        createEmptyDiv();
        if (correct == 8) {
          setTimeout(function () {
            qText.innerHTML = "kiitos!";
            endModal.style.display = "block";
          }, 1000)
        }
        else {
          setTimeout(() => {
            giveRandomWord(gridArr);
          }, 1000);
        }
      }
      else {
        bubble.style.visibility = "hidden";
        wrongAnswer();
      }
    })
  }


  // Laptop View gets drag and drop feature
  else {
    console.log("Not mobile");
    first.addEventListener("dragover", allowDrop);
    first.addEventListener("drop", drop);
    first.addEventListener("dragstart", drag);

    third.addEventListener("dragover", allowDrop);
    third.addEventListener("drop", drop);
    third.addEventListener("dragstart", drag);

    fourth.addEventListener("dragover", allowDrop);
    fourth.addEventListener("drop", drop);
    fourth.addEventListener("dragstart", drag);

    fifth.addEventListener("dragover", allowDrop);
    fifth.addEventListener("drop", drop);
    fifth.addEventListener("dragstart", drag);

    sixth.addEventListener("dragover", allowDrop);
    sixth.addEventListener("drop", drop);
    sixth.addEventListener("dragstart", drag);

    seventh.addEventListener("dragover", allowDrop);
    seventh.addEventListener("drop", drop);
    seventh.addEventListener("dragstart", drag);

    eighth.addEventListener("dragover", allowDrop);
    eighth.addEventListener("drop", drop);
    eighth.addEventListener("dragstart", drag);

    ninth.addEventListener("dragover", allowDrop);
    ninth.addEventListener("drop", drop);
    ninth.addEventListener("dragstart", drag);

    centerBlock.addEventListener("dragover", allowDrop);
    centerBlock.addEventListener("drop", drop);
  }
}

info.addEventListener("mouseenter", function () {
  document.getElementById("startmodal").style.display = "block";
})

info.addEventListener("mouseleave", function () {
  document.getElementById("startmodal").style.display = "none";
})

start.addEventListener("click", () => {
  modal.style.display = "none";
});

againButton.addEventListener("click", () => {
  refresh();
});

notAgainButton.addEventListener("click", () => {
  endModal.style.display = "none";
})

function refresh() {
  setTimeout(function () {
    location.reload()
  }, 100);
}

function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
  bubble.style.visibility = "hidden";
}

function allowDrop(event) {
  event.preventDefault();
  bubble.style.visibility = "hidden";
}

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  bubble.style.visibility = "hidden";

  // console.log(data);  // data is the grabbed item

  if (data != rText.innerHTML) {
    wrongAnswer();
  }

  else {
    rightAnswer();

    gridArr = gridArr.filter(e => e != data);
    console.log(gridArr);
    event.target.appendChild(document.getElementById(data));
    event.target.removeChild(document.getElementById(data));

    createEmptyDiv()
    giveRandomWord(gridArr);
  }
}

function createEmptyDiv() {
  let newDiv = document.createElement("div");
  let gContainer = document.querySelector(".grid-containerDD");
  newDiv.classList.add("grid-item");
  newDiv.style.backgroundColor = "transparent";
  gContainer.appendChild(newDiv);
}

function wrongAnswer() {
  centerBlock.classList.remove(...centerBlock.classList);
  centerBlock.classList.add("grid-item");
  centerBlock.classList.add("changeCat");
  centerBlock.classList.add("item2");

  gridContainer.style.backgroundColor = "red";
  document.querySelector("body").style.background = "red";
  setTimeout(() => {
    gridContainer.style.backgroundColor = "transparent";
    document.querySelector("body").style.background = "#C0EAF7";
    centerBlock.classList.add("changeCat2");
  }, 500);

  setTimeout(() => {
    bubble.style.visibility = "visible";
    qText.style.color = "red";
  }, 1000);
}

function rightAnswer() {
  centerBlock.classList.remove(...centerBlock.classList);
  centerBlock.classList.add("item2");
  centerBlock.classList.add("grid-item");
  gridContainer.style.backgroundColor = "green";
  document.querySelector("body").style.background = "green";
  setTimeout(() => {
    gridContainer.style.backgroundColor = "transparent";
    document.querySelector("body").style.background = "#C0EAF7";
  }, 500);
  setTimeout(() => {
    bubble.style.visibility = "visible";
    qText.style.color = "black";
  }, 1000);
  correct++;
}

function giveRandomWord(amount) {
  for (let i = 0; i < amount.length; i++) {
    startQuestion = getRandomInt(amount.length);
    rText.innerHTML = amount[startQuestion]; //.id
  }
  let randomNumber = getRandomInt(2);
  switch (rText.innerHTML) {
    case "firstGridItem":
      console.log("chicken");
      if (randomNumber == 0) { qText.innerHTML = "Tämä šiivatta šuau munie"; }
      else { qText.innerHTML = "Tämä šiivatta kotkottau"; }

      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)

      }
      break;
    case "thirdGridItem":
      console.log("rabbit");
      if (randomNumber == 0) { qText.innerHTML = "Tällä elukalla on pität korvat"; }
      else { qText.innerHTML = "Tämä elukka hyppelöy kiirehesti."; }
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "fourthGridItem":
      console.log("dog");
      if (randomNumber == 0) { qText.innerHTML = "Šillä on pruuni karva"; }
      else { qText.innerHTML = "Tämä elukka haukkuu"; }

      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "fifthGridItem":
      console.log("string");
      if (randomNumber == 0) { qText.innerHTML = "Miula himottais leikkie ruškien lankakerän kera"; }
      else { qText.innerHTML = "Täštä šie tikutat lämpimät kintahat."; }
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "sixthGridItem":
      console.log("fish");
      if (randomNumber == 0) { qText.innerHTML = "Tämä eläy veješšä"; }
      else { qText.innerHTML = "Anna miula kalua"; }

      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "seventhGridItem":
      console.log("cat");
      if (randomNumber == 0) { qText.innerHTML = "Mie tahon leikkie valkien kiššan kera"; }
      else { qText.innerHTML = "Tämä elukka n’aukuu."; }

      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "eighthGridItem":
      console.log("harja");
      if (randomNumber == 0) { qText.innerHTML = "Voitko šie šukie milma?"; }
      else { qText.innerHTML = "Anna miula keltani harja."; }
      // 
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "ninthGridItem":
      console.log("milk");
      let d = getRandomInt(2);
      if (d == 0) { qText.innerHTML = "Miula himottais juuvva maitua"; }
      else { qText.innerHTML = "Anna miula maitua"; }

      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
  }
}

function getRandomInt(max) {
  max = Math.floor(Math.random() * Math.floor(max));
  return max;
}