let myBtn = document.getElementById("nappi");
let myBtn2 = document.getElementById("nappi2");
let data_to_receive = document.getElementById("dataToReceive")

myBtn.addEventListener("click", showMonths);
myBtn2.addEventListener("click", showOrderNumbrers);

function showMonths() {
    data_to_receive.innerHTML = "";
    let response = "";
    let xhttpReg = new XMLHttpRequest();
    xhttpReg.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            w = JSON.parse(this.responseText);

            Object.keys(w.month).forEach(function (key) {
                console.log('Key : ' + key + ', Value : ' + w.month[key]);
                response = response + w.month[key] + "<br>";
                data_to_receive.innerHTML = response;
            })

        }
    };
    xhttpReg.open("GET", "month.json", true);
    xhttpReg.send();
}

function showOrderNumbrers() {
    data_to_receive.innerHTML = "";
    let response = "";
    let xhttpReg = new XMLHttpRequest();
    xhttpReg.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            w = JSON.parse(this.responseText);

            Object.keys(w.animal).forEach(function (key) {
                console.log('Key : ' + key + ', Value : ' + w.animal[key]);
                response = response + w.animal[key] + "<br>";
                data_to_receive.innerHTML = response;
            })

        }
    };
    xhttpReg.open("GET", "animals.json", true);
    xhttpReg.send();
}