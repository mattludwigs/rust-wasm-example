all: build

build:
	rustc +nightly --target wasm32-unknown-unknown -O --crate-type=cdylib src/lib.rs -o web/app.wasm

serve: build
	cp ./out/app.wasm ./web/
	http-server ./web

