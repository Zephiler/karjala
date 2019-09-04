const fs = require('fs');
const express = require('express');
const url = require('url');

const app = express();

app.use(express.static('public'));

app.use("/", express.static(__dirname + "/pages"));
app.use("/", express.static(__dirname + "/vocalbury"));
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

app.get("/muistipeli", (req, res) => {
  res.sendFile(__dirname + "/pages/memory.html");
})

app.get("/crosswords", (req, res) => {
  res.sendFile(__dirname + "/pages/crossword1.html");
})

app.get("/pickablock", (request, response) => {
  console.log("pickablock game");
  response.sendFile(__dirname + "/pages/page2.html");
});

app.get("/dragdrop", (request, response) => {
  console.log("drag & drop game");
  response.sendFile(__dirname + "/pages/page3.html");
})

app.get("/pagefour", (request, response) => {
  response.sendFile(__dirname + "/pages/page4.html");
})

app.get("/pagefive", (req, res) => {
  res.sendFile(__dirname + "/pages/page5.html");
})
app.listen(5000);