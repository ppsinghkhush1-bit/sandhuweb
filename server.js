const express = require("express");
const path = require("path");

const app = express();

app.use(express.static(__dirname));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/sitemap.xml", (req, res) => {
  res.sendFile(path.join(__dirname, "sitemap.xml"));
});

app.get("/robots.txt", (req, res) => {
  res.sendFile(path.join(__dirname, "robots.txt"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
