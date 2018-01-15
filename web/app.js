const run = async () => {
  const res = await fetch("app.wasm");
  const buffer = await res.arrayBuffer();
  const module = await WebAssembly.compile(buffer);
  const instance = await WebAssembly.instantiate(module);
  const exports = instance.exports;

  n = exports.add(1, 2);

  console.log(n);
}

run();
