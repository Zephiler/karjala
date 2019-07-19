console.log("page three");
let num = 9;
let centerBlock = document.querySelector("#secondGridItem");
let first = document.querySelector("#firstGridItem");
let second = document.querySelector("#secondGridItem");
let third = document.querySelector("#thirdGridItem");
let fourth = document.querySelector("#fourthGridItem");
let fifth = document.querySelector("#fifthGridItem");
let sixth = document.querySelector("#sixthGridItem");
let seventh = document.querySelector("#seventhGridItem");
let eighth = document.querySelector("#eighthGridItem");
let ninth = document.querySelector("#ninthGridItem");

let number = document.querySelector(".grid-containerDD").children.length;

window.addEventListener("DOMContentLoaded", () => {
  console.log("all loaded");
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


function drag(event) {
  event.dataTransfer.setData("text", event.target.id);
}

function allowDrop(event) {
  event.preventDefault();
}

function drop(event) {
  event.preventDefault();


  let data = event.dataTransfer.getData("text");
  event.target.appendChild(document.getElementById(data));
  event.target.removeChild(document.getElementById(data));
  number--;
  let newDiv = document.createElement("div");
  let gContainer = document.querySelector(".grid-containerDD");
  newDiv.classList.add("grid-item");
  newDiv.style.backgroundColor = "red";
  gContainer.appendChild(newDiv);
  console.log(number);
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