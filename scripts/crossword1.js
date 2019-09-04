const words = document.getElementsByClassName("wordBox");
const wordRow = document.getElementsByClassName("wordRow");
const wordSection = document.getElementById("left");

const exercise = document.getElementsByClassName("exercise");
const imagesSection = document.getElementsByClassName("images");


const wordBoxes = wordSection.children;
//wordBoxes is not an array; it's a HTML Collection -->array
const wordsArray = Array.from(wordBoxes);

//answers:
const rightAnswers = {
    answer1: document.getElementById("word4").innerHTML,
    answer2: document.getElementById("word2").innerHTML,
    answer3: document.getElementById("word3").innerHTML,
    answer4: document.getElementById("word7").innerHTML,
    answer5: document.getElementById("word1").innerHTML,
    answer6: document.getElementById("word6").innerHTML,
    answer7: document.getElementById("word8").innerHTML,
    answer8: document.getElementById("word5").innerHTML,
    answer9: document.getElementById("word9").innerHTML,
}

//word listeners - to catch them; wiht loop, bcs of being a ClassName
for (let i = 0; i < words.length; i++) {
    words[i].addEventListener("dragstart", dragStart);
    words[i].addEventListener("dragend", dragEnd);
}

//answerBox listeners; with loop too!
for (let k = 0; k < wordRow.length; k++){
    wordRow[k].addEventListener("dragover", dragOver);
    wordRow[k].addEventListener("dragenter", dragEnter);
    wordRow[k].addEventListener("dragleave", dragLeave);
    wordRow[k].addEventListener("drop", dragDrop);
}

//listener for other areas
exercise[0].addEventListener("drop", dragDrop);
exercise[0].addEventListener("dragover", dragOver);
imagesSection[0].addEventListener("drop", dragDrop);
imagesSection[0].addEventListener("dragover", dragOver);
imagesSection[1].addEventListener("drop", dragDrop);
imagesSection[1].addEventListener("dragover", dragOver);
wordSection.addEventListener("drop", dragDrop);
wordSection.addEventListener("dragover", dragOver);


//dragging functions
function dragStart(e){
    console.log(this.id);
    //we use this. for indicating the specific word being dragged
    e.dataTransfer.setData("Text", this.innerHTML);
    e.dataTransfer.setData("Id", this.id);
    this.className += " hold";
    setTimeout (() => (this.className = "invisible"), 0);
    setTimeout(() => (this.innerHTML = ""), 0);

}

function dragEnd(){
    const allInvisible = wordsArray.every(function(el){
        return el.className === "invisible";
    });
    //when ended, print message to section #left;
    if (allInvisible === true) {
        document.getElementById("left").id += "B";
        document.getElementById("leftB").innerHTML = `<div><h2>Congratulations!</h2>
        <p>Now read the highlighted word in vertical and select from below the number it refers to!</p></div>`
        document.getElementById("leftB").innerHTML += `<div class="newImages" id="newImages"> <div class="image" id="numberA"></div> 
            <div class="image" id="numberB"></div> <div class="image" id="numberC"></div> </div>`;
        
        const newImages = document.getElementById("newImages").children;
        for (let i = 0; i < newImages.length; i++) {
            newImages[i].addEventListener("click", checkNumber);
        }

        function checkNumber() {
            if (this.id === "numberB"){
                console.log("right!!");
                this.style.border = "2px solid green";
                document.getElementById("leftB").innerHTML += `<div><h2>Double congratulations!!</h2></div>`;
            } else {
                console.log("wrong");
                this.style.border = "2px solid red";
                document.getElementById("leftB").innerHTML += `<div><h2>That's not correct. Try again!</h2></div>`;
            }
        }
    }
}

function dragOver(e){
    e.preventDefault();
}

function dragEnter(e){
    e.preventDefault();
    const letterBox = this.children;
    for (let l = 0; l < letterBox.length; l++) {
        letterBox[l].className = " hovered";
    }
}

function dragLeave(){
    const letterBox = this.children;
    for (let m = 0; m < letterBox.length; m++) {
        letterBox[m].className = "box";
    }
}

function dragDrop(e){
//dataTransfer.getData only available when dropping (security reasons)

    const selectedWord = e.dataTransfer.getData("Text");
    const rightAnswer = rightAnswers[this.id];
    const wordId = e.dataTransfer.getData("Id");

    console.log(this);

    if (this.className === "wordRow") {
        if (selectedWord === rightAnswer) {
            document.getElementById(wordId).className = "invisible";
            const letterBox = this.children;
            for (let n = 0; n < letterBox.length; n++) {
                letterBox[n].innerHTML = selectedWord[n];
                letterBox[n].className = "correct";
                setTimeout (() => (letterBox[n].className = "box"), 500);
            }
        } else {
        //if it's incorrect, return word to the left
        console.log("word dropped wrong");
            const letterBox = this.children;
            for (let n = 0; n < letterBox.length; n++) {
                letterBox[n].className = "incorrect";
                setTimeout (() => (letterBox[n].className = "box"), 500);
            }
            document.getElementById(wordId).className = "wordBox incorrect";
            document.getElementById(wordId).innerHTML = `${selectedWord}`;
            setTimeout(() => (document.getElementById(wordId).className = "wordBox"), 500);

        }
    } else {
        console.log("exercise area");
        //doesn't work
        console.log("word dropped outside");
        document.getElementById(wordId).className = "wordBox";
        document.getElementById(wordId).innerHTML = `${selectedWord}`;
    }
}


