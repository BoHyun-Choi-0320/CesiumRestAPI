const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.use(express.static(__dirname + "/public"));

app.get("/", (res, req) => {
  req.sendFile(__dirname + "/public/view/index.html");
});

app.listen(port, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});
