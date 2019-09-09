const images = document.getElementsByClassName("image");
//images is not an array; it's a HTML Collection -->array
const imagesArray = Array.from(images);

const letters = document.getElementsByTagName("td");
//letters is not an array; it's a HTML Collection -->array
const lettersArray = Array.from(letters);

let inital = "";
let noneSelected;
let manySelected;
let onlySelected;
let someCorrect;
let onlyCorrect;



//images listeners
for (let i = 0; i < images.length; i++){
    images[i].addEventListener("click", selectImage);
}

//select image
function selectImage(){
    const noImage = imagesArray.find(function(el){
        return el.className === "imgSelected";
    });
    const selected = lettersArray.filter(function(el){
        return el.className === "letterSelected" || el.className === "letterCorrectRed";
    });
    if (noImage === undefined) {
        if (this.className === "image") {
            this.className = "imgSelected";
        }
    } else {
        if (this.className === "imgSelected"){
            this.className = "image";
            console.log(selected);
            for (let i = 0; i < selected.length; i++){
                if (selected[i].className === "letterSelected"){
                    document.getElementById(selected[i].id).className = "";
                } else if (selected[i].className === "letterCorrectRed"){
                    document.getElementById(selected[i].id).className = "letterCorrect";
                }
            }
        }
    }
}

//letters listeners
for (let i = 0; i < letters.length; i++) {
    letters[i].addEventListener("click", selectLetter);
    letters[i].addEventListener("mouseover", hoveredLetter);
    letters[i].addEventListener("mouseout", leaveLetter);
}

//select initial or final letter
function selectLetter(){
    const noImage = imagesArray.find(function(el){
        return el.className === "imgSelected"
    });
    const imageSelected = imagesArray.find(function(el){
        return el.className === "imgSelected"
    });
    const allImages = imagesArray.every(function(el){
        return el.className === "imageCorrect";
    });
    noneSelected = lettersArray.every(function(el){
        return el.className === "";
    });
    manySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected" || el.className === "letterCorrectRed";
    });
    someCorrect = lettersArray.filter(function(el){
        return el.className === "letterCorrect";
    });
    onlySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected";
    });
    let wrongLettersA, wrongLettersB;


    if (noImage !== undefined) {
        if (noneSelected === true) {
            this.className = "letterSelected";
            initial = this.id;
        } else if (noneSelected === false && someCorrect === undefined){
            this.className = "";
            intial = "";
        } else if (noneSelected === false && someCorrect !== undefined && onlySelected.length === 0){
            if (this.className === "") {
                this.className = "letterSelected";
            } else if (this.className === "letterCorrect"){
                this.className = "letterCorrectRed";
            }
            initial = this.id;
        } else {
            if (manySelected.length === 1) {
                if (this.className === "letterSelected") {
                    this.className = "";
                } else if (this.className === "letterCorrectRed"){
                    this.className = "letterCorrect";
                }
                initial = "";
            } else if (manySelected.length > 1) {
                const fruitImage = document.getElementById(imageSelected.id).getAttribute("value");
                let fruitName = "";
                for (let k = 0; k < manySelected.length; k++){
                    const letter = document.getElementById(manySelected[k].id).innerHTML;
                    fruitName += letter;
                }
                console.log(fruitName);
                console.log(fruitImage);

                if (fruitImage == fruitName.toLowerCase() || fruitImage == fruitName.toLowerCase().split("").reverse().join("")){
                    document.getElementById(imageSelected.id).className = "imageCorrect";
                    for (let k = 0; k < manySelected.length; k++) {
                        document.getElementById(manySelected[k].id).className = "letterCorrect";
                    }
                    initial = "";
                    //for the final result??
                    if (allImages === true){
                        console.log("game finished");
                    }
                } else {
                    console.log("wrong matching");
                    document.getElementById(imageSelected.id).className = "imageIncorrect";
                    setTimeout(() => (document.getElementById(imageSelected.id).className = "image"), 500);
                    for (let k = 0; k < manySelected.length; k++) {
                        if (document.getElementById(manySelected[k].id).className === "letterSelected"){ 
                            document.getElementById(manySelected[k].id).className = "letterIncorrect";
                            wrongLettersA = lettersArray.filter(function(el){
                                return el.className === "letterIncorrect"});
                            for (let m = 0; m < wrongLettersA.length; m++){
                                    setTimeout(() => (document.getElementById(wrongLettersA[m].id).className = ""), 500);
                            }
                        } else if (document.getElementById(manySelected[k].id).className === "letterCorrectRed"){
                            document.getElementById(manySelected[k].id).className = "letterCorrectGrey";
                            wrongLettersB = lettersArray.filter(function(el){
                                return el.className === "letterCorrectGrey"});
                            for (let m = 0; m < wrongLettersB.length; m++){
                                    setTimeout(() => (document.getElementById(wrongLettersB[m].id).className = "letterCorrect"), 500);
                            }
                        }
                    }
                }
            }
        }
    }
}

//with letter selected, expand word
function hoveredLetter() {
    noneSelected = lettersArray.every(function(el){
        return el.className === "";
    });
    someCorrect = lettersArray.filter(function(el){
        return el.className === "letterCorrect";
    });
    manySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected" || el.className === "letterCorrectRed";
    });
    onlySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected";
    });
    onlyCorrect = lettersArray.filter(function(el){
        return el.className === "letterCorrectRed";
    });

    if (noneSelected === false){
        //esto es sólo para la primera letra!!!
        if ((document.getElementById(initial).className === "letterSelected") && (manySelected.length === 1) ||
            (document.getElementById(initial).className === "letterCorrectRed") && (manySelected.length === 1)){
                
                const letterNum = initial.slice(3);
                const boxesAround = [("box" + (+letterNum - 1)), ("box" + (+letterNum + 1)), ("box" + (+letterNum - 100)), ("box" + (+letterNum + 100)),
                    ("box" + (+letterNum - 101)), ("box" + (+letterNum - 99)), ("box" + (+letterNum + 99)), ("box" + (+letterNum + 101))];
                if (boxesAround.includes(this.id) === true){
                    if (this.className === "") {
                        this.className = "letterSelected"; 
                    } else if (this.className === "letterCorrect") {
                        this.className = "letterCorrectRed"; 
                    }
                }
    //para la 2a, 3a, etc.
        } else if ((document.getElementById(initial).className === "letterSelected") && (manySelected.length > 1) ||
            (document.getElementById(initial).className === "letterCorrectRed") && (manySelected.length > 1)){
                if (manySelected[0].id === initial){
                    const difference = (manySelected[1].id.slice(3)) - (manySelected[0].id.slice(3));
                    if (difference === 1){
                        for (let i = 1; i < (15 - manySelected[1].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[1].id.slice(3) + 1*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    } else if (difference === 99) {
                        for (let i = 1; i < (manySelected[1].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[1].id.slice(3) + 99*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    } else if (difference === 100) {
                        for (let i = 1; i < (15 - manySelected[1].id.slice(3,-2)); i++){
                            if(this.id.slice(3) == (+manySelected[1].id.slice(3) + 100*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    } else if (difference === 101){
                        for (let i = 1; i < (15 - manySelected[1].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[1].id.slice(3) + 101*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    }
                } else {
                    const difference = (manySelected[0].id.slice(3)) - (manySelected[1].id.slice(3));
                    if (difference === -1){
                        for (let i = 1; i < (manySelected[0].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[0].id.slice(3) - 1*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                };
                            }
                        }
                    } else if (difference === -99) {
                        for (let i = 1; i < (15 - manySelected[0].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[0].id.slice(3) - 99*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    } else if (difference === -100) {
                        for (let i = 1; i < (manySelected[0].id.slice(3,-2) +1); i++){
                            if(this.id.slice(3) == (+manySelected[1].id.slice(3) - 100*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    } else if (difference === -101){
                        for (let i = 1; i < (manySelected[0].id.slice(-2)); i++){
                            if(this.id.slice(3) == (+manySelected[0].id.slice(3) - 101*(+i))){
                                if (this.className === "") {
                                    this.className = "letterSelected"; 
                                } else if (this.className === "letterCorrect") {
                                    this.className = "letterCorrectRed"; 
                                }
                            }
                        }
                    }
                }
        }
    }    
}

//with letter selected, return on your steps; 
function leaveLetter (event) {
    noneSelected = lettersArray.every(function(el){
        return el.className === "";
    });
    someCorrect = lettersArray.filter(function(el){
        return el.className === "letterCorrect";
    });
    manySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected" || el.className === "letterCorrectRed";
    });
    onlySelected = lettersArray.filter(function(el){
        return el.className === "letterSelected";
    });
    onlyCorrect = lettersArray.filter(function(el){
        return el.className === "letterCorrectRed";
    });

    if (noneSelected === false) {
        if (manySelected.length === 2){
            let related = event.relatedTarget;
            const letterNum = initial.slice(3);
            const boxesAround = [("box" + (+letterNum - 1)), ("box" + (+letterNum + 1)), ("box" + (+letterNum - 100)), ("box" + (+letterNum + 100)),
                ("box" + (+letterNum - 101)), ("box" + (+letterNum - 99)), ("box" + (+letterNum + 99)), ("box" + (+letterNum + 101))];
            if (boxesAround.includes(related.id) === true) {
                if (this.className === "letterSelected"){
                    this.className = "";
                } else if (this.className === "letterCorrectRed"){
                    this.className = "letterCorrect";
                }
            } else if (related.id === initial){
                if (this.className === "letterSelected"){
                    this.className = "";
                } else if (this.className === "letterCorrectRed"){
                    this.className = "letterCorrect";
                }
            }
        } else if (manySelected.length > 2){
            let related = event.relatedTarget.id.slice(3);
            if (manySelected[0].id === initial){
                const difference = (manySelected[1].id.slice(3)) - (manySelected[0].id.slice(3));
                if (difference === 1 && related - +this.id.slice(3) === -1){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                } else if (difference === 99 && (related - +this.id.slice(3) === -99 || related - +this.id.slice(3) === -100 || related - +this.id.slice(3) === 1)){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                }  else if (difference === 100 && related - +this.id.slice(3) === -100){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                }  else if (difference === 101 && (related - +this.id.slice(3) === -101 || related - +this.id.slice(3) === -100 || related - +this.id.slice(3) === -1)){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                }
            } else {
                const difference = (manySelected[manySelected.length - 2].id.slice(3)) - (manySelected[manySelected.length - 1].id.slice(3));
                if (difference === -1 && related - +this.id.slice(3) === 1){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                } else if (difference === -99 && (related - +this.id.slice(3) === 99  || related - +this.id.slice(3) === 100 || related - +this.id.slice(3) === -1 )){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                }  else if (difference === -100 && related - +this.id.slice(3) === 100){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                }  else if (difference === -101 && (related - +this.id.slice(3) === 101 || related - +this.id.slice(3) === 100 || related - +this.id.slice(3) === 1)){
                    if (this.className === "letterSelected"){
                        this.className = "";
                    } else if (this.className === "letterCorrectRed"){
                        this.className = "letterCorrect";
                    }
                } 
            }    
        }
    }
}