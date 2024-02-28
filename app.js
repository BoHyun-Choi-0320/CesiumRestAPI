const express = require("express");
const { default: objTogltf } = require("./public/js/objTogltf");
const obj2gltf = require("obj2gltf");
const fs = require("fs");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

// app.use("/public", express.static(__dirname + "/public"));

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/view/index.html");
});

app.post("/convert/obj2gltf", (res, req) => {
  console.log("/convert/obj2gltf - start!");
  objTogltf.objTogltf();
  console.log("/convert/obj2gltf - end!");
});

app.listen(port, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});
