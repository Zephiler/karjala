let sentences = {};
let temp = "/fish.png";
let temp2 = "";
let btn1 = document.querySelector("#paina");
let pictureArray = ["/bear", "/dog", "/horse", "/pig", "/sheep", "/cat", "/wolf", "/fox"];
let guessCount = 0;
let helperBlock = document.querySelector("#helperBlock");
let helpNeeded = document.querySelector("#wantHelp");

let helpYes = document.querySelector("#helpYes");
let helpNo = document.querySelector("#helpNo");

window.addEventListener("DOMContentLoaded", () => {
  let xhttpRequest = new XMLHttpRequest();
  xhttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      sentences = JSON.parse(this.responseText);
      console.log(sentences);
      for (let i in sentences) {
        console.log(sentences[i].two);
      }
    }
  };
  xhttpRequest.open("GET", "./vocalbury/numbers.json", true);
  xhttpRequest.send();

  getRandomImage();
})



btn1.addEventListener("click", () => {
  let value = document.querySelector("#textInput1").value;
  checkIfCorrect(value);
  /*
   console.log(sentences.animal);
   for(x in sentences.animal) {
     console.log(sentences.animal[x]);
   }
   */

  /*
  for(let a = 0; a < pictureArray.length; a++) {
    console.log(pictureArray[a]);
  }
  */
  // let imageNumber = getRandomInt(pictureArray.length);

})

helpYes.addEventListener("click", () => {
  helperBlock.style.visibility = "visible";
  guessCount = 0;
});

helpNo.addEventListener("click", () => {
  helpNeeded.style.visibility = "hidden";
  helperBlock.style.visibility = "hidden";
  guessCount = guessCount - 2;
})


function getRandomImage() {
  console.log("TEMP = " + temp + " TEMP2 = " + temp2);
  let startImage = Math.floor(Math.random() * Math.floor(pictureArray.length));
  let a = document.querySelector("#kuva");
  switch (startImage) {
    case 0:
      a.src = "/animalImages/bear.png";
      // a.src = "/bear.png";
      a.value = "bear";
      helperBlock.innerHTML = "kontie";
      break;
    case 1:
      a.src = "/animalImages/dog.png";
      a.value = "dog";
      helperBlock.innerHTML = "hurtta";
      break;
    case 2:
      a.src = "/animalImages/horse.png";
      a.value = "horse";
      helperBlock.innerHTML = "heponi";
      break;
    case 3:
      a.src = "/animalImages/pig.png";
      a.value = "pig";
      helperBlock.innerHTML = "syöttöpottši";
      break;
    case 4:
      a.src = "/animalImages/sheep.png";
      a.value = "sheep";
      helperBlock.innerHTML = "karičča";
      break;
    case 5:
      a.src = "/animalImages/cat.png";
      a.value = "cat";
      helperBlock.innerHTML = "kišša";
      break;
    case 6:
      a.src = "/animalImages/wolf.png";
      a.value = "wolf";
      helperBlock.innerHTML = "hukka";
      break;
    case 7:
      a.src = "/animalImages/fox.png";
      a.value = "fox";
      helperBlock.innerHTML = "repo";
      break;
  }
  temp = a.value;
  if (temp == temp2) {
    console.log(" INNER LOOP !!!");
    getRandomImage();
  }

  a.width = 200;
  a.height = 200;
  a.alt = "kuva";
  a.style.alignSelf = "center";
  // console.log("get random image " + a.value);
  // console.log("TEMP = " + temp + " TEMP2 = " + temp2);
}

function getRandomInt(max) {
  max = Math.floor(Math.random() * Math.floor(max));
  return max;
}

function checkIfCorrect(val) {
  guessCount++;
  temp2 = temp;
  let a = document.querySelector("#kuva");
  let input = document.querySelector("#textInput1");
  console.log("val is " + val);
  switch (input.value) {
    case "dog":
      a.src = "/dog.png";
      temp = val;
      break;
    case "cat":
      a.src = "/cat.png";
      temp = val;
      break;
    case "wolf":
      a.src = "/wolf.png";
      temp = val;
      break;
    case "pig":
      a.src = "/pig.png";
      temp = val;
      break;
    case "bear":
      a.src = "/bear.png";
      temp = val;
      break;
    case "horse":
      a.src = "/horse.png";
      temp = val;
      break;
    case "heponi":
      a.src = "/horse.png";
      temp = val;
      break;
    case "sheep":
      a.src = "/sheep.png";
      temp = val;
      break;
    case "fox":
      a.src = "/fox.png";
      temp = val;
      break;
  }


  if (input.value == "fish") {
    a.width = 548;
    a.height = 150;
    a.alt = "kuva";
    a.style.alignSelf = "center";
    input.value = "";
  }
  else {
    a.width = 200;
    a.height = 200;
    a.alt = "kuva";
    a.style.alignSelf = "center";
    input.value = "";
  }

  if (val == a.value) {
    guessCount = 0;
    helperBlock.style.visibility = "hidden";
    helpNeeded.style.visibility = "hidden";
    // helperBlock.style.border = "none";
    // helperBlock.style.background = "transparent";
    getRandomImage();
  }

  if (guessCount >= 3) {
    helpNeeded.style.visibility = "visible"
    // helperBlock.style.border = "1px solid black";
    // helperBlock.style.background = "white";
  }
  console.log(guessCount);
}