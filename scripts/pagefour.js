let sentences = {};

let btn1 = document.querySelector("#paina");
let pictureArray = ["/bear", "/dog", "/horse", "/pig", "/sheep", "/cat", "/wolf", "/fox"]

window.addEventListener("DOMContentLoaded", () => {
  let xhttpRequest = new XMLHttpRequest();
  xhttpRequest.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
      sentences = JSON.parse(this.responseText);
    }
  };
  xhttpRequest.open("GET", "./animals.json", true);
  xhttpRequest.send();

  getRandomImage();
})

btn1.addEventListener("click", () => {
  let value = document.querySelector("#textInput1").value;
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
  let imageNumber = getRandomInt(pictureArray.length);
  checkIfCorrect(value, imageNumber);

})

function getRandomImage() {
//  console.log("get random image");
//  console.log(Math.floor(Math.random() * Math.floor(pictureArray.length)) + " getRandomImage");
  let startImage = Math.floor(Math.random() * Math.floor(pictureArray.length));
  let a = document.querySelector("#kuva");
  switch(startImage) {
    case 0:
      a.src = "/bear.png";
      a.value = "bear";
      break;
    case 1:
      a.src = "/dog.png";
      a.value = "dog";
      break;
    case 2:
      a.src = "/horse.png";
      a.value = "horse";
      break;
    case 3:
      a.src = "/pig.png";
      a.value = "pig";
      break;
    case 4:
      a.src = "/sheep.png";
      a.value = "sheep";
      break;
    case 5:
      a.src = "/cat.png";
      a.value = "cat";
      break;
    case 6:
      a.src = "/wolf.png";
      a.value = "wolf";
      break;
    case 7:
      a.src = "/fox.png";
      a.value = "fox";
      break;
  }

  a.width = 200;
  a.height = 200;
  a.alt = "kuva";
  a.style.alignSelf= "center";
  console.log("get random image " + a.value);
}

function getRandomInt(max) {
  max = Math.floor(Math.random() * Math.floor(max));
  return max;
}

/*
function doSomething() {
  let arr = [...pictureArray];
  let c = document.createElement("div");
  let a = document.createElement("img");
  let b = document.querySelector(".mycol");
  a.src = arr[0] + ".png";
  console.log(a);
  a.width = 100;
  a.height = 100;
  a.alt = "joo";
  c.appendChild(a);
  b.appendChild(c);
}
*/

function checkIfCorrect(val, imNumber) {
  let a = document.querySelector("#kuva");
  let input = document.querySelector("#textInput1");
  console.log("val is " + val + " " + imNumber);
  switch(input.value) {
    case "dog":
      a.src = "/dog.png";
      break;
    case "cat":
      a.src = "/cat.png";
      break;
    case "wolf":
      a.src = "/wolf.png";
      break;
    case "pig":
      a.src = "/pig.png";
      break;
    case "bear":
      a.src = "/bear.png";
      break;
    case "horse":
      a.src = "/horse.png";
      break;
    case "heponi":
      a.src = "/horse.png";
      break;
    case "sheep":
      a.src = "/sheep.png";
      break;
    case "fox":
      a.src = "/fox.png";
      break;

  }

  /*
  if(input.value == "dog") {
    a.src = "/dog.png";
    a.width = 200;
    a.height = 200;
    a.alt = "kuva";
    a.style.alignSelf= "center";
    input.value = "";
  }
  else {
    a.src = "/cat.png";
    a.width = 200;
    a.height = 200;
    a.alt = "kuva";
    a.style.alignSelf= "center";
    input.value = "";
  }
  */
 if(input.value == "fish") {
  a.width = 548;
  a.height = 150;
  a.alt = "kuva";
  a.style.alignSelf= "center";
  input.value = "";
 } 
 else {
  a.width = 200;
  a.height = 200;
  a.alt = "kuva";
  a.style.alignSelf= "center";
  input.value = "";
 }

 if(val == a.value) {
   getRandomImage();
  // return console.log("even");
  // jeejee
 }

}