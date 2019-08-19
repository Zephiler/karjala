// console.log("page three");
let centerBlock = document.querySelector("#secondGridItem");
let first = document.querySelector("#firstGridItem");
// let second = document.querySelector("#secondGridItem");
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

//let gridArr = document.querySelectorAll(".grid-item");
//let arr1 = [];
let startQuestion;
let correct = 0;

let gridArr = ["firstGridItem", "thirdGridItem", "fourthGridItem",
  "fifthGridItem", "sixthGridItem", "seventhGridItem", "eighthGridItem", "ninthGridItem"];

window.addEventListener("DOMContentLoaded", () => {
  qText.innerHTML = "";

  /*
  for(let y = 0; y < gridArr.length; y++) {
    arr1.push(gridArr[y]);
}
 arr1.splice(1,1);
*/
  giveRandomWord(gridArr);
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
  qText.style.color = "red";  // new!!
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  qText.style.color = "black";
  event.preventDefault();
  let data = event.dataTransfer.getData("text");

  // console.log(data);  // data is the grabbed item

  if (data != rText.innerHTML) {
    qText.style.color = "black";
    console.log("NOT equal");
    gridContainer.style.backgroundColor = "red";
    setTimeout(() => {
      gridContainer.style.backgroundColor = "white";
    }, 100);
  }

  else {
    qText.style.color = "red";
    gridContainer.style.backgroundColor = "green";
    setTimeout(() => {
      gridContainer.style.backgroundColor = "white";
    }, 100);
    setTimeout(() => {
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
    gContainer.appendChild(newDiv);

    giveRandomWord(gridArr);
    /*
    setTimeout(() => {
      giveRandomWord(gridArr);
    }, 1000);
    */

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

/*
function createGridBlocks() {
  let placeToCreate = document.querySelector(".grid-container");
  for(let i = 0; i < num; i++) {
    let spanGridBlock = document.createElement("div");
    spanGridBlock.style.height = "100px";
    spanGridBlock.style.width = "100px";
    spanGridBlock.style.margin = "10px";
    spanGridBlock.style.border = "1px solid black";
    placeToCreate.appendChild(spanGridBlock);
    if(i == 1) {
      spanGridBlock.classList.add("second");
      console.log("kakkonen");
    }
  }
}
*/

/*  working code, just for back-up

function drop(event) {
  event.preventDefault();
  let data = event.dataTransfer.getData("text");
  console.log(data);  // data is the grabbed item

  if(data == rText.innerHTML) {
    console.log("equal");
  }

  event.target.appendChild(document.getElementById(data));
  event.target.removeChild(document.getElementById(data));

  let newDiv = document.createElement("div");
  let gContainer = document.querySelector(".grid-containerDD");
  newDiv.classList.add("grid-item");
  gContainer.appendChild(newDiv);

}


*/