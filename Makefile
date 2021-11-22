build:
	npm run build

start:
	npm run start

dev:
	HOST=0.0.0.0 npm run dev

remove-builds:
	rm -rf .next
	rm -rf out

remove-node-modules:
	rm -rf node_modules

clean: remove-builds
	rm server.log
