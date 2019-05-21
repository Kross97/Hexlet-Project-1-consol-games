install:
	npm install

start:
<<<<<<< HEAD
	npx babel-node src/bin/brain-games.js
=======
	npx babel-node src/bin/brain-games.js
>>>>>>> da08ee70b4d5a76a453bf00d3995932259998d73

publish : 
	npm publish --dry-run

lint:
	npx eslint