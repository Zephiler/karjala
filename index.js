const fs = require('fs');
const express = require('express');
const url = require('url');

const app = express();


//app.use(express.static('public'));  may have to open..

app.use(express.static('public'));

app.use("/", express.static(__dirname + "/pages"));
//app.use("/", express.static(__dirname + "/pagestyle.css"));
app.use("/", express.static(__dirname + "/scripts"));
//app.use("/", express.static(__dirname + "/images"));


app.get("/", (request, response) => {
  response.sendFile(__dirname + "/index.html");
});

app.get("/weekdays", (request, response) => {
  console.log("weekdays game");
  response.sendFile(__dirname + "/pages/page1.html");
});

app.get("/pickablock", (request, response) => {
  console.log("pickablock game");
  response.sendFile(__dirname + "/pages/page2.html");
});

app.get("/dragdrop", (request, response) => {
  console.log("drag & drop game");
  response.sendFile(__dirname + "/pages/page3.html");
})

app.listen(5000);