console.log("joo");

let a = document.getElementById("dropdown1");

a.addEventListener("mouseover", () => {
    console.log("jooooo");
    $('.dropdown-toggle').dropdown()
})