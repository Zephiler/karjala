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
  qText.innerHTML = "";
  giveRandomWord(gridArr);
})

info.addEventListener("mouseenter", function () {
  document.getElementById("startmodal").style.display = "block";
})

info.addEventListener("mouseleave", function () {
  document.getElementById("startmodal").style.display = "none";
})

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
  // qText.style.color = "white";  // new!!
  bubble.style.visibility = "hidden";
}

function allowDrop(event) {
  event.preventDefault();
  //qText.style.color = "black";
  bubble.style.visibility = "hidden";
}

function drop(event) {
  //qText.style.color = "black";
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  bubble.style.visibility = "hidden";

  // console.log(data);  // data is the grabbed item

  if (data != rText.innerHTML) {
    //qText.style.color = "black";
    //bubble.style.visibility = "visible";
    console.log("NOT equal");
    centerBlock.classList.remove(...centerBlock.classList);
    centerBlock.classList.add("grid-item");
    centerBlock.classList.add("changeCat");
    centerBlock.classList.add("item2");
    /*
    centerBlock.style.background = "url(./kissa_no4.png)";
    centerBlock.style.width = "280px";
    centerBlock.style.height = "400px";
    centerBlock.style.padding = "50px";

    centerBlock.style.backgroundPosition = "center";
    centerBlock.style.backgroundSize = "100% 100%";
    centerBlock.style.backgroundRepeat = "no-repeat";
    */

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

  else {
    // qText.style.color = "red";
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
    gridArr = gridArr.filter(e => e != data);
    console.log(gridArr);
    event.target.appendChild(document.getElementById(data));
    event.target.removeChild(document.getElementById(data));

    let newDiv = document.createElement("div");
    let gContainer = document.querySelector(".grid-containerDD");
    newDiv.classList.add("grid-item");
    newDiv.style.backgroundColor = "transparent";
    gContainer.appendChild(newDiv);

    giveRandomWord(gridArr);
  }
}

function giveRandomWord(amount) {
  for (let i = 0; i < amount.length; i++) {
    startQuestion = getRandomInt(amount.length);
    rText.innerHTML = amount[startQuestion]; //.id
  }

  switch (rText.innerHTML) {
    case "firstGridItem":
      console.log("chicken");
      qText.innerHTML = "tahtoisin kanaa";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)

      }
      break;
    case "thirdGridItem":
      console.log("rabbit");
      qText.innerHTML = "tahtoisin jänistä";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "fourthGridItem":
      console.log("dog");
      qText.innerHTML = "en pidä koirista";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "fifthGridItem":
      console.log("string");
      qText.innerHTML = "tahtoisin leikkiä langalla";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "sixthGridItem":
      console.log("fish");
      qText.innerHTML = "tahtoisin kalaa";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "seventhGridItem":
      console.log("cat");
      qText.innerHTML = "tahtoisin leikkikaverin";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "eighthGridItem":
      console.log("harja");
      qText.innerHTML = "tahtoisin harjata";
      if (correct == 8) {
        setTimeout(function () {
          qText.innerHTML = "kiitos!";
          endModal.style.display = "block";
        }, 1000)
      }
      break;
    case "ninthGridItem":
      console.log("milk");
      qText.innerHTML = "tahtoisin maitoa";
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