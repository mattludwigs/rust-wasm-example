const fs = require("fs");

const fileBuf = fs.readFileSync("./out/app.wasm");
const bufReader = new Uint8Array(fileBuf.length);

for (let i = 0; i < fileBuf.length; i++) {
  bufReader[i] = fileBuf[i];
}

WebAssembly.instantiate(bufReader, {})
  .then(result => result.instance.exports)
  .then(lib => {
    n = lib.add(1, 2);
    console.log(n);
  })
