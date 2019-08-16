let pictureArray = ["/cat", "/chicken", "/cow", "/dog", "/horse", "/pig", "/rabbit", "/sheep", "/squirrel"];
let wordArray = ["kišša", "kana", "lehmä", "hurtta", "heponi", "syöttöpottši", "jänis", "karičča", "orava" ];
let num = pictureArray.length;

let temp1 = undefined;
let temp2 = undefined;
let clickCount = 0;
let blockCount = pictureArray.length;

let modal = document.querySelector(".myModal");
let start = document.querySelector("#start_btn");

window.addEventListener("DOMContentLoaded", () => {
  makePieces(num);
  makeWordPieces(num);
})

start.addEventListener("click", ()=> {
  modal.style.display = "none";
})

function makePieces(num) {
  let placeToCreate = document.querySelector(".grid-container");
  let arr = [...pictureArray];
  for(let i = 0; i < num; i++) {
    let spanDiv = document.createElement("div");

    let spanImage = document.createElement("img");
    spanImage.src = arr[i] + ".png";
    spanImage.id = "a" + i;
    spanImage.classList.add("myImageBox");

    spanImage.alt = arr[i];
    spanImage.addEventListener("click", function() {
      clickImageBlock(this.alt, spanImage.id);
      spanImage.classList.remove("myImageBox");
      spanImage.classList.add("myImageBox_selected");
    })

    spanDiv.appendChild(spanImage);
    placeToCreate.appendChild(spanDiv);
    shuffleBlocks(placeToCreate);
  }
}

function makeWordPieces(num) {
  let placeToCreate = document.getElementById("main-right");
  let arr = [...wordArray];
  for(let i = 0; i < num; i++) {
    let spanDiv = document.createElement("div");
    let spanP_element = document.createElement("p");

    spanP_element.innerHTML = arr[i];
    spanP_element.id = "b" + i;
    spanP_element.classList.add("myWordBox");

    spanP_element.addEventListener("click", function() {
      clickWordBlock(this.id);
      spanP_element.classList.remove("myWordBox");
      spanP_element.classList.add("myWordBox_selected");
    });

    spanDiv.appendChild(spanP_element);
    placeToCreate.querySelector(".grid-container").appendChild(spanDiv);
    shuffleBlocks(placeToCreate.querySelector(".grid-container"));
  }
}

function clearBothBlocks(number) {
  document.getElementById("a" + number).style.display = "none";
  document.getElementById("b" + number).style.display = "none";
  temp1 = undefined;
  temp2 = undefined;
  clickCount = 0;
}

function clearSelectedBlock() {
  clickCount = 0;
  let list = document.getElementsByClassName("myWordBox_selected");
  while(list.length) {
    list[0].classList.replace("myWordBox_selected", "myWordBox");
  }
  let list2 = document.getElementsByClassName("myImageBox_selected");
  while(list2.length) {
    list2[0].classList.replace("myImageBox_selected", "myImageBox");
  }
}

function clickWordBlock(id) {
  clickCount++;
  temp1 = id.substring(1);


  if(temp1 == temp2) {
    clearBothBlocks(temp1);
    blockCount--;
    console.log(blockCount);
  }
  if(clickCount >= 1) {
    clearSelectedBlock()
  }
}

function clickImageBlock(text, id) {
  clickCount++;
  text = text.substring(1);
  let strippedId = id.substring(1);
  temp2 = strippedId;

  if(temp1 == temp2) {
    clearBothBlocks(temp2);
    blockCount--;
    console.log(blockCount);
  }
  
  if(clickCount >= 1) {
    clearSelectedBlock();
  }
}

function shuffleBlocks(place) {
  for(let i = place.children.length; i >= 0; i--) {
    place.appendChild(place.children[Math.random() * i | 0]);
  }
}

let countBlocks = setInterval(myTimer, 1000);

function myTimer() {
  console.log(blockCount);
  if(blockCount < 1) {
    stopCountingBlocks();
  }
}

function stopCountingBlocks() {
  console.log("STOP!");
  clearInterval(countBlocks);
}