require('dotenv').config()

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/login", (req, res) => {
  res.send("<h1>log in User</h1>");
});

app.get("/loginUser", (req, res) => {
    res.send("<h1>log in User Again</h1>");
  });

app.listen(process.port.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});

ssh-keygen -o -t rsa -C "nirajsali12@gmail.com"

SHA256:xhvoLLxSQ3XdTMrNqgCZWDiQZOhSrt/ChBkG3c1+RMs

ssh-keygen -t ed25519 -C "nirajsali12@gmail.com"
