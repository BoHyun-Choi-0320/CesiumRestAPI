const express = require("express");
const app = express();

const hostname = "127.0.0.1";
const port = 3000;

app.get("/", (res, req) => {
  req.send("Hello, World!");
});

app.listen(port, () => {
  console.log(`Server Running at http://${hostname}:${port}`);
});
