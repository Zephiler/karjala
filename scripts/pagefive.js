let sentences = {};
let temp = "/fish.png";
let temp2 = "";
let btn1 = document.querySelector("#paina");
let pictureArray = ["/bear", "/dog", "/horse", "/pig", "/sheep", "/cat", "/wolf", "/fox"];
let bearArr = ["kontio", "kontie", "otso", "mesikammen"];
let dogArr = ["rakki", "piski", "hurtta", "rekku"];
let horseArr = ["heppa", "heponi", "humma", "heponen"];
let pigArr = ["possu", "sika", "porsas", "syöttöpottši"];
let sheepArr = ["karičča", "vasikka", "pässi", "lammas"];
let catArr = ["kisu", "misu", "kišša", "katti"];
let wolfArr = ["susi", "šuši", "hukka", "wolfen"];
let foxArr = ["repo", "kettu", "repolainen", "kitsune"];
//let quickCheck = "a";   // this have to be deleted!!
let up_l_msg = document.querySelector("#left-up-msg");
let up_r_msg = document.querySelector("#right-up-msg");
let down_l_msg = document.querySelector("#left-down-msg");
let down_r_msg = document.querySelector("#right-down-msg");

let cBlock = document.querySelector("#centerBlock");
// let guessCount = 0;
// let helperBlock = document.querySelector("#helperBlock");
// let helpNeeded = document.querySelector("#wantHelp");

// let helpYes = document.querySelector("#helpYes");
// let helpNo = document.querySelector("#helpNo");

window.addEventListener("DOMContentLoaded", () => {
    let xhttpRequest = new XMLHttpRequest();
    xhttpRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            sentences = JSON.parse(this.responseText);
            console.log(sentences);
        }
    };
    xhttpRequest.open("GET", "./vocalbury/animals.json", true);
    xhttpRequest.send();

    getRandomImage();
})

btn1.addEventListener("click", () => {
    let value = document.querySelector("#textInput1").value;
    checkIfCorrect(value);

})

/*
helpYes.addEventListener("click", () => {
    helperBlock.style.visibility = "visible";
    guessCount = 0;
});
*/
/*
helpNo.addEventListener("click", () => {
    helpNeeded.style.visibility = "hidden";
    helperBlock.style.visibility = "hidden";
    guessCount = guessCount - 2;
})
*/

function getRandomImage() {
    console.log("TEMP = " + temp + " TEMP2 = " + temp2);
    let startImage = Math.floor(Math.random() * Math.floor(pictureArray.length));
    let a = document.querySelector("#kuva");
    switch (startImage) {
        case 0:
            a.src = "/animalImages/bear.png";
            a.value = "kontie";
            up_l_msg.innerHTML = bearArr[0];
            up_r_msg.innerHTML = bearArr[1];
            down_l_msg.innerHTML = bearArr[2];
            down_r_msg.innerHTML = bearArr[3];
            //  helperBlock.innerHTML = "kontie";
            break;
        case 1:
            a.src = "/animalImages/dog.png";
            a.value = "hurtta";
            up_l_msg.innerHTML = dogArr[0];
            up_r_msg.innerHTML = dogArr[1];
            down_l_msg.innerHTML = dogArr[2];
            down_r_msg.innerHTML = dogArr[3];
            //  helperBlock.innerHTML = "hurtta";
            break;
        case 2:
            a.src = "/animalImages/horse2.png";
            a.value = "heponi";
            up_l_msg.innerHTML = horseArr[0];
            up_r_msg.innerHTML = horseArr[1];
            down_l_msg.innerHTML = horseArr[2];
            down_r_msg.innerHTML = horseArr[3];
            //  helperBlock.innerHTML = "heponi";
            break;
        case 3:
            a.src = "/animalImages/pig.png";
            a.value = "syöttöpottsi";
            up_l_msg.innerHTML = pigArr[0];
            up_r_msg.innerHTML = pigArr[1];
            down_l_msg.innerHTML = pigArr[2];
            down_r_msg.innerHTML = pigArr[3];
            //  helperBlock.innerHTML = "syöttöpottši";
            break;
        case 4:
            a.src = "/animalImages/sheep.png";
            a.value = "karicca";
            up_l_msg.innerHTML = sheepArr[0];
            up_r_msg.innerHTML = sheepArr[1];
            down_l_msg.innerHTML = sheepArr[2];
            down_r_msg.innerHTML = sheepArr[3];
            //  helperBlock.innerHTML = "karičča";
            break;
        case 5:
            a.src = "/animalImages/cat.png";
            a.value = "kissa";
            up_l_msg.innerHTML = catArr[0];
            up_r_msg.innerHTML = catArr[1];
            down_l_msg.innerHTML = catArr[2];
            down_r_msg.innerHTML = catArr[3];
            //  helperBlock.innerHTML = "kišša";
            break;
        case 6:
            a.src = "/animalImages/wolf.png";
            a.value = "hukka";
            up_l_msg.innerHTML = wolfArr[0];
            up_r_msg.innerHTML = wolfArr[1];
            down_l_msg.innerHTML = wolfArr[2];
            down_r_msg.innerHTML = wolfArr[3];
            //  helperBlock.innerHTML = "hukka";
            break;
        case 7:
            a.src = "/animalImages/fox.png";
            a.value = "repo";
            up_l_msg.innerHTML = foxArr[0];
            up_r_msg.innerHTML = foxArr[1];
            down_l_msg.innerHTML = foxArr[2];
            down_r_msg.innerHTML = foxArr[3];
            // helperBlock.innerHTML = "repo";
            break;
    }
    temp = a.value;
    if (temp == temp2) {
        console.log(" INNER LOOP !!!");
        getRandomImage();
    }

    a.width = 150;
    a.height = 150;
    a.alt = "kuva";
    a.style.alignSelf = "center";
}

function getRandomInt(max) {
    max = Math.floor(Math.random() * Math.floor(max));
    return max;
}

function checkIfCorrect(val) {
    //  guessCount++;
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

    /*
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
        */

    if (val == a.value) {   // || quickCheck == "a"   this should be deleted!!
        //  guessCount = 0;
        //  helperBlock.style.visibility = "hidden";
        //  helpNeeded.style.visibility = "hidden";
        // helperBlock.style.border = "none";
        // helperBlock.style.background = "transparent";
        cBlock.style.boxShadow = "0px 0px 0px 2px green";
        setTimeout(() => {
            cBlock.style.boxShadow = "0px 0px 0px 2px black";
        }, 200);
        document.querySelector("#textInput1").value = "";
        getRandomImage();
    }
    else {
        console.log("virhe");
        cBlock.style.boxShadow = "0px 0px 0px 2px red";
        setTimeout(() => {
            cBlock.style.boxShadow = "0px 0px 0px 2px black";
        }, 200);
        document.querySelector("#textInput1").value = "";
    }
    /* if (guessCount >= 3) {
        helpNeeded.style.visibility = "visible"
        // helperBlock.style.border = "1px solid black";
        // helperBlock.style.background = "white";
    }
    */
    //console.log(guessCount);
}