console.log("obj2gltf.js - start!");

const obj2gltf = require("obj2gltf");
const fs = require("fs");
obj2gltf("./3d/obj/bbb00001.obj").then(function (gltf) {
  const data = Buffer.from(JSON.stringify(gltf));
  fs.writeFileSync("./3d/gltf/bbb00001.gltf", data);
});
