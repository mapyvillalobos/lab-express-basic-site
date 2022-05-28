const express = require("express");
const app = express();

//para usar los archivos
app.use(express.static("public"));

//las rutas
app.get("/home", (req, res, next) => {
  res.sendFile(__dirname + "/views/home.html");
});

app.get("/about", (req, res, next) => {
  res.sendFile(__dirname + "/views/about.html");
});

app.get("/quotes", (req, res, next) => {
  res.sendFile(__dirname + "/views/quotes.html");
});

//prender el server
app.listen(3000, () => {
  console.log("Estoy corriendo en el puerto 3000");
});