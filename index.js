const fs = require('fs');
const express = require('express');
const url = require('url');

const app = express();

app.use(express.static('public'));

app.use("/", express.static(__dirname + "/pages"));
app.use("/", express.static(__dirname + "/css"));
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

/*
app.get("/nameless", (request, response) => {
  response.sendFile(__dirname + "/pages/nameless.html")
})
*/

app.get("/wordsoup", (request, response) => {
  response.sendFile(__dirname + "/pages/wordsoup1.html");
})

app.get("/connectgame", (request, response) => {
  response.sendFile(__dirname + "/pages/yhdista.html")
})

app.get("/picgame", (request, response) => {
  response.sendFile(__dirname + "/pages/kuva.html")
})

app.get("/wordsearch", (request, response) => {
  response.sendFile(__dirname + "/pages/wordsearch.html")
})

app.get("/koe", (req, res) => {
  fs.open('/vocalbury/animals.json', 'r', (err, fd) => {
    if (err) {
      if (err.code === 'ENOENT') {
        console.error('myfile does not exist');
        return;
      }

      throw err;
    }

    res.send(console.log(fd));
  });
})

app.get("/koe2", (req, res) => {
  res.send(console.log("jooo"));
})

app.get("/crosswords", (req, res) => {
  res.sendFile(__dirname + "/pages/crossword1.html");
})

app.get("/muistipeli", (req, res) => {
  res.sendFile(__dirname + "/pages/memory.html");
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