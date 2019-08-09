let weekdays = {};
let randomIntDay = 0;
let guessCount = 0;
let rightGuessCount = 0;
let blockVal = 0;
let modal = document.querySelector("#points_modal");
let closeModalButton = document.querySelector("#close_modal");
let playAgainModalButton = document.querySelector("#play_again");
let totalPoints = document.querySelector("#total_points");
let start = document.querySelector("#start_btn");

// let myInterval = setInterval(updateTime, 500);
let countGuesses;
let clear_btn = document.querySelector("#clear_button");

window.addEventListener('DOMContentLoaded', () => {
//  setTimeout(function() {

  let xhttpReg = new XMLHttpRequest();
  xhttpReg.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      weekdays = JSON.parse(this.responseText);
    }
  };
  xhttpReg.open("GET", "week.json", true);
  xhttpReg.send();

  let myBtn2 = document.querySelector("#myBtn2");
  let myBtn3 = document.querySelector("#myBtn3");
  let myBtn4 = document.querySelector("#myBtn4");
  let myBtn5 = document.querySelector("#myBtn5");
 // let modal = document.querySelector("#points_modal");
 // let closeModalButton = document.querySelector("#close_modal");

//  let guesses = document.getElementById("guesses");
//  let allguesses = document.getElementById("allGuesses");
//  let wordToFind = document.getElementById("theDay");
//  let mainDiv = document.getElementById("main");

 // let d_t_s = document.querySelector("#div_to_span");
 // let input_block = document.querySelector("#blocknumbers");

 /* i took this in the beginning
  let clear_btn = document.querySelector("#clear_button");
*/

//  let ok_btn = document.querySelector("#ok_btn");

  // buttons to create how many blocks..
  myBtn2.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    clearBlocks();
    blockVal = document.getElementById("myBtn2").value;
    makeBlocks(blockVal);
    disableBlockButtons(arr);
    countGuesses = setInterval(myTimer, 100);

  });
  myBtn3.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    clearBlocks();
    blockVal = document.getElementById("myBtn3").value;
    makeBlocks(blockVal);
    disableBlockButtons(arr);
    countGuesses = setInterval(myTimer, 100);
    //setInterval(updateTime, 500);
  });
  myBtn4.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    clearBlocks();
    blockVal = document.getElementById("myBtn4").value;
    makeBlocks(blockVal);
    disableBlockButtons(arr);
    countGuesses = setInterval(myTimer, 100);
   // setInterval(updateTime, 500);
  });
  myBtn5.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    clearBlocks();
    blockVal = document.getElementById("myBtn5").value;
    makeBlocks(blockVal);
    disableBlockButtons(arr);
    countGuesses = setInterval(myTimer, 100);
    //setInterval(updateTime, 500);
  });

  playAgainModalButton.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    guessCount = 0;
    rightGuessCount = 0;
    document.getElementById("guesses").innerHTML = "&nbsp0&nbsp";
    document.getElementById("allGuesses").innerHTML = "&nbsp0&nbsp";
    hideModal();
    releaseBlockButtons(arr);
    clearBlocks();


  });

  closeModalButton.addEventListener("click", function() {
    console.log("close modal");
    hideModal();
    guessCount = 0;
    rightGuessCount = 0;
    clearBlocks();
    clearInterval(updateTime);
    let startmodal = document.getElementById("startmodal");
    startmodal.style.display = "block";
    start.classList.remove("disabled");
  /*  let arr = document.getElementsByClassName("myButton");
    hideModal();
    releaseBlockButtons(arr);
    clearBlocks();
    */
  });

  }
)

  // CLEAR BUTTON LOGIC
  clear_btn.addEventListener("click", function() {
    let arr = document.getElementsByClassName("myButton");
    clearPoints();
    clearBlocks();
    releaseBlockButtons(arr);
   // clearInterval(myInterval);
    stopCountingGuesses();
  })

start.addEventListener("click", () => {
  let startmodal = document.getElementById("startmodal");
  startmodal.style.display = "none";
})

// let myInterval = setInterval(updateTime, 500);

function updateTime() {
  console.log(guessCount);
  if(guessCount >= 10) {
    // console.log(guessCount);
  //  alert(" funkkari ")
  //  document.getElementById("guesses").innerHTML = "&nbsp0&nbsp";
  //  document.getElementById("allGuesses").innerHTML = "&nbsp0&nbsp";
    let m = document.querySelector("#points_modal");
    total_points.innerHTML = "Sinun pisteesi: " + rightGuessCount + " / " + guessCount;
    total_points.style.fontSize = "20px";
    m.style.display = "block";
    guessCount = 0;
    rightGuessCount = 0;
    //clearInterval(this);
  }
}

function clearPoints() {
  rightGuessCount = 0;
  guessCount = 0;
  document.getElementById("guesses").innerHTML = "&nbsp0&nbsp";
  document.getElementById("allGuesses").innerHTML = "&nbsp0&nbsp";
  clearInterval(updateTime);
  //setInterval(updateTime, 500);
}

function disableBlockButtons(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i].classList.add("disabled");
  }
}

function releaseBlockButtons(arr) {
  for(let i = 0; i < arr.length; i++) {
    arr[i].classList.remove("disabled");
  }
}

function changeText(id) {
  let x = document.getElementById(id);
  if (x.innerHTML == "yksi") {
    x.innerHTML = "change";
  } else {
    x.innerHTML = "yksi";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function randomDayFunc(x, y) {
  let randomLanguage = "";
  let result1 = Math.floor(Math.random() * 5) + 1;

  switch(result1) {
    case 1:
      randomLanguage = x.viikko;
      break;
    case 2:
      randomLanguage = x.week;
      break;
    case 3:
      randomLanguage = x.netäli;
      break;
    case 4:
      randomLanguage = x.viikkoni;
      break;
    case 5:
      randomLanguage = x.netällli;
      break;
  }

  // check what is the correct word
  if(y == 0) console.log(x.netäli.monday);
  if(y == 1) console.log(x.netäli.tuesday);
  if(y == 2) console.log(x.netäli.wednesday);
  if(y == 3) console.log(x.netäli.thursday);
  if(y == 4) console.log(x.netäli.friday);
  if(y == 5) console.log(x.netäli.saturday);
  if(y == 6) console.log(x.netäli.sunday);

  // 
  if(y == 0) return randomLanguage.monday;
  if(y == 1) return randomLanguage.tuesday;
  if(y == 2) return randomLanguage.wednesday;
  if(y == 3) return randomLanguage.thursday;
  if(y == 4) return randomLanguage.friday;
  if(y == 5) return randomLanguage.saturday;
  if(y == 6) return randomLanguage.sunday;

}

function clickBlock(block) {
  let arr = document.getElementsByClassName("myButton");
  let guess = false;
  let rightGuesses = document.getElementById("guesses");
  let guesses = document.getElementById("allGuesses");
  let words = ["ensiarki","tiistaini","keskiarki","nelläsarki","piätinkkä","lauantaini","sunnuntaini",
                "maanantaini","toinearki","kekimmäiniarki","neljäspäivä","piätäntšä","suovatta","pyhäpiävä"];
  let finnish = ["maanantai", "tiistai", "keskiviikko", "torstai", "perjantai", "lauantai", "sunnuntai"];

  let vienaWords = ["enšiarki","toiniarki","serota","nelläšpäivä","piätinččä","šuovatta","pyhäpäivä"];
  let engWords = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
  let falseWords = ["ensimmäiniarki","toisimmainiarki","serokkaini","nelläspäivä","piätintčä","šuovata","pyhätšä"]

  block.classList.add("myBox_green");
  setTimeout(() => {
    block.classList.remove("myBox_green");
  }, 200);

  for(let i = 0; i < words.length; i++) {
    if(block.innerHTML == words[i]) {
      guess = false;
    }
  }
  for(let i = 0; i < finnish.length; i++) {
    if(block.innerHTML == finnish[i]) {
      guess = false;
    }
  }
  for(let i = 0; i < vienaWords.length; i++) {
    if(block.innerHTML == vienaWords[i]) {
      guess = true;
    }
  }
  for(let i = 0; i < engWords.length; i++) {
    if(block.innerHTML == engWords[i]) {
      guess = false;
    }
  }
  for(let i = 0; i < falseWords.length; i++) {
    if(block.innerHTML == falseWords[i]) {
      guess = false;
    }
  }

  if(guess) {
    ++guessCount;
    ++rightGuessCount;
    guesses.innerHTML = "&nbsp" + guessCount + "&nbsp";
    rightGuesses.innerHTML = "&nbsp" + rightGuessCount + "&nbsp"; 

   /* if(guessCount >= 10 || rightGuessCount >= 10) {
      guessCount = 0;
      rightGuessCount = 0;
      guesses.innerHTML = "&nbsp" + guessCount + "&nbsp";
      rightGuesses.innerHTML = "&nbsp" + rightGuessCount + "&nbsp";
      alert("All guesses made"); 
      releaseBlockButtons(arr);
      clearBlocks();
      clearPoints();
    } 

    else {
     // rightGuessCount++;
     // guessCount++;
      rightGuesses.innerHTML = "&nbsp" + rightGuessCount + "&nbsp";
      guesses.innerHTML = "&nbsp" + guessCount + "&nbsp";
      clearBlocks();
      makeBlocks(blockVal);
    } */
    clearBlocks();
    makeBlocks(blockVal);
  }

  else {
    ++guessCount;
    guesses.innerHTML = "&nbsp" + guessCount + "&nbsp";
   /* if(guessCount == 10 || rightGuessCount == 10) {   
      releaseBlockButtons(arr);
      clearBlocks();
      clearPoints();
      alert("guessCount: " + guessCount);
    }
    */
  }
 // checkPoints(guessCount);
  console.log("guessCount: " + guessCount);
  console.log("rightGuessCount: " + rightGuessCount);
}

function checkPoints(p) {
  if(p == 10) {
    console.log("checkPoints");
  }
}

function hoverBlock(block) {
  block.classList.add("myBox_orange");
}

function outOfBlock(block) {
  block.classList.remove("myBox_orange");
}

function shuffleBlocks() {
  let blockCount = document.getElementById("main");
  for(let i = blockCount.children.length; i >= 0; i--) {
    blockCount.appendChild(blockCount.children[Math.random() * i | 0]);
  }
}

function clearBlocks() {
  let d_t_s = document.querySelector("#div_to_span");
//  let rightGuesses = document.getElementById("guesses");
//  let guesses = document.getElementById("allGuesses");

  document.getElementById("theDay").innerHTML = "";
  randomIntDay = 0;
  d_t_s.innerHTML = "";
  // input_block.value = "";
  let e = document.querySelector("#main");
  let c = e.lastChild;
    while(c) {
      e.removeChild(c);
      c = e.lastChild;
    }
}

function makeBlocks(number) {
 // console.log(document.getElementById(number));
  let num = number;
  let wordToFind = document.getElementById("theDay");
  let mainDiv = document.getElementById("main");
  randomIntDay = getRandomInt(7);
  if(randomIntDay == 0) wordToFind.innerHTML = "Maanantai";
  if(randomIntDay == 1) wordToFind.innerHTML = "Tiistai";
  if(randomIntDay == 2) wordToFind.innerHTML = "Keskiviikko";
  if(randomIntDay == 3) wordToFind.innerHTML = "Torstai";
  if(randomIntDay == 4) wordToFind.innerHTML = "Perjantai";
  if(randomIntDay == 5) wordToFind.innerHTML = "Lauantai";
  if(randomIntDay == 6) wordToFind.innerHTML = "Sunnuntai";

  wordToFind.style.fontWeight = "bold";
  wordToFind.style.fontSize = "22px";

  //  in for loop we make sure that there is one correct and one false answer, 
  //  if 2 blocks selected, the blocks created in loop won't be added at all.
  for(let i = 0; (i < number -2); i++) {
    let spanBlock = document.createElement("p");
    spanBlock.innerHTML = randomDayFunc(weekdays, randomIntDay);
    spanBlock.classList.add("myBox");
    spanBlock.addEventListener("click", function() {
      clickBlock(this, num);
    });
    spanBlock.addEventListener("mouseenter", function() {
      hoverBlock(this);
    });
    spanBlock.addEventListener("mouseleave", function() {
      outOfBlock(this);
    });
    mainDiv.appendChild(spanBlock)[i];
  }
  let correctBlock = document.createElement("p");
  if(wordToFind.innerHTML == "Maanantai") correctBlock.innerHTML = "enšiarki";
  if(wordToFind.innerHTML == "Tiistai") correctBlock.innerHTML = "toiniarki";
  if(wordToFind.innerHTML == "Keskiviikko") correctBlock.innerHTML = "serota";
  if(wordToFind.innerHTML == "Torstai") correctBlock.innerHTML = "nelläšpäivä";
  if(wordToFind.innerHTML == "Perjantai") correctBlock.innerHTML = "piätinččä";
  if(wordToFind.innerHTML == "Lauantai") correctBlock.innerHTML = "šuovatta";
  if(wordToFind.innerHTML == "Sunnuntai") correctBlock.innerHTML = "pyhäpäivä";
  correctBlock.classList.add("myBox");
  correctBlock.addEventListener("click", function() {
    clickBlock(this);
  });
  correctBlock.addEventListener("mouseenter", function() {
    hoverBlock(this);
  });
  correctBlock.addEventListener("mouseleave", function() {
    outOfBlock(this);
  });
  mainDiv.appendChild(correctBlock);

  let falseBlock = document.createElement("p");
  if(wordToFind.innerHTML == "Maanantai") falseBlock.innerHTML = "ensimmäiniarki";
  if(wordToFind.innerHTML == "Tiistai") falseBlock.innerHTML = "toisimmainiarki";
  if(wordToFind.innerHTML == "Keskiviikko") falseBlock.innerHTML = "serokkaini";
  if(wordToFind.innerHTML == "Torstai") falseBlock.innerHTML = "nelläspäivä";
  if(wordToFind.innerHTML == "Perjantai") falseBlock.innerHTML = "piätintčä";
  if(wordToFind.innerHTML == "Lauantai") falseBlock.innerHTML = "šuovata";
  if(wordToFind.innerHTML == "Sunnuntai") falseBlock.innerHTML = "pyhätšä";
  falseBlock.classList.add("myBox");
  falseBlock.addEventListener("click", function() {
    clickBlock(this);
  });
  falseBlock.addEventListener("mouseenter", function() {
    hoverBlock(this);
  });
  falseBlock.addEventListener("mouseleave", function() {
    outOfBlock(this);
  });
  mainDiv.appendChild(falseBlock);

  shuffleBlocks();
 }

 function hideModal() {
  modal.style.display = "none";
 }


// let countGuesses = setInterval(myTimer, 500);

function myTimer() {
  console.log(guessCount);
  if(guessCount >= 10) {
      let m = document.querySelector("#points_modal");
      total_points.innerHTML = "Sinun pisteesi: " + rightGuessCount + " / " + guessCount;
      total_points.style.fontSize = "20px";
      m.style.display = "block";
      guessCount = 0;
      rightGuessCount = 0;
    stopCountingGuesses();
  }
}

function stopCountingGuesses() {
  console.log("STOP!");
  clearInterval(countGuesses);
}

// below ones used to be under DOMContenctLoaded function

// OK BUTTON LOGIC
/*  right now trying to add correct answer as left side and making sure that all answers are same day */
/*  ok_btn.addEventListener("click", () => {
    randomIntDay = getRandomInt(7);
    if(randomIntDay == 0) document.getElementById("theDay").innerHTML = "Maananai";
    if(randomIntDay == 1) document.getElementById("theDay").innerHTML = "Tiistai";
    if(randomIntDay == 2) document.getElementById("theDay").innerHTML = "Keskiviikko";
    if(randomIntDay == 3) document.getElementById("theDay").innerHTML = "Torstai";
    if(randomIntDay == 4) document.getElementById("theDay").innerHTML = "Perjantai";
    if(randomIntDay == 5) document.getElementById("theDay").innerHTML = "Lauantai";
    if(randomIntDay == 6) document.getElementById("theDay").innerHTML = "Sunnuntai";

    for(let i = 0; i < input_block.value; i++) {
    var para = document.createElement("P");
      para.innerHTML = randomDayFunc(weekdays, randomIntDay);
      console.log(randomIntDay);
      para.classList.add("myBox");
      document.getElementById("main").appendChild(para)[i];
  }
})
*/
  // this block should work OK
  /*
  let myBtn = document.getElementById("paina");
    myBtn.addEventListener("click", function painettu() {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          //document.getElementById("koe").innerHTML =
          //this.responseText;
          let x = JSON.parse(this.responseText);
          console.log(x);
          document.getElementById("koe").innerHTML = x.netäli.monday + " " + x.week.monday + " " + x.viikkoni.monday + " " + x.netällli.monday;
        }
      };
      xhttp.open("GET", "week.json", true);
      xhttp.send();
    })

  let kokeilu = document.querySelector("#kokeilu");
    kokeilu.addEventListener("click", () => {
      console.log(randomLanguage());
    })
    */


  // I shold check this block..
/*  input_block.addEventListener("keyup", () => {
    console.log(input_block.value);

    if(input_block.value === NaN) { console.log("NaN"); }
    else {
      for(let i = 0; i < input_block.value; i++) {
        let x = document.createElement("span");
        let t = document.createTextNode(input_block.value);
        x.appendChild(t);
        d_t_s.appendChild(x);
      }
    } 
  }) */


// above ones used to be under DOMContenctLoaded function

// below ones are not used anymore

/*
function randomLanguage() {
  let a = getRandomInt(5);
    switch(a) {
      case 0:
        a = weekdays.viikko;
        break;
      case 1:
        a =  weekdays.week;
        break;
      case 2:
        a = weekdays.netäli;
        break;
      case 3:
        a = weekdays.viikkoni;
        break;
      case 4:
        a = weekdays.netällli;
        break;
    }
  let b = getRandomInt(7);
    switch(b) {
      case 0:
        b =  a.monday;
        break;
      case 1:
        b =  a.tuesday;
        break;
      case 2:
        b = a.wednesday;
        break;
      case 3:
        b = a.thursday;
        break;
      case 4:
        b = a.friday;
        break;
      case 5:
        b = a.saturday;
      case 6:
        b = a.sunday;
    }
  return b;
}
*/

/*
function randomWord() {
  let x = getRandomInt(7);
  switch(x) {
    case 0:
      return weekdays.viikko.monday;
    case 1:
      return weekdays.viikko.tuesday; 
    case 2:
      return weekdays.viikko.wednesday; 
    case 3:
      return weekdays.viikko.thursday; 
    case 4:
      return weekdays.viikko.friday; 
    case 5:
      return weekdays.viikko.saturday; 
    case 6:
      return weekdays.viikko.sunday; 
  }
  return x;
}
*/
  /*
  function clearBlocks() {
    document.getElementById("theDay").innerHTML = "";
    randomIntDay = 0;
    d_t_s.innerHTML = "";
    // input_block.value = "";
    let e = document.querySelector("#main");
    let c = e.lastChild;
      while(c) {
        e.removeChild(c);
        c = e.lastChild;
      }
  }
  */
 
  /**   else {
    guessCount++;
  }
  guesses.innerHTML = guessCount;

  if(guessCount == 10) {
    alert("arvaukset tehty")
    clearBlocks();
    guessCount = 0;
  } */