console.log("page three");
let num = 9;
let centerBlock = document.querySelector("#secondGridItem");
let first = document.querySelector("#firstGridItem");
window.addEventListener("DOMContentLoaded", () => {
  console.log("all loaded");
  // createGridBlocks(num);

})

  first.addEventListener("dragover", allowDrop);
  first.addEventListener("drop", drop);
  first.addEventListener("dragstart", drag);

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