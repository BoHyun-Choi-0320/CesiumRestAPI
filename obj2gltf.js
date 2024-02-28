const obj2gltf = require("obj2gltf");
const fs = require("fs");

console.log("obj2gltf.js - start!");
obj2gltf("./public/image/3d/obj/bbb00001.obj").then(function (gltf) {
  const data = Buffer.from(JSON.stringify(gltf));
  fs.writeFileSync("./public/image/3d/gltf/bbb00001.gltf", data);
});

console.log("obj2gltf.js - end!");
