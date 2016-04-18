"use strict";

var inquirer = require('inquirer');

var game = require('./game.source');

var directionQ = [
	{
		type: 'input',
		//name: game.startingPoint.title,
		name: 'response',
		message: game.startingPoint.text
	}
]

var leftQ = [
	{
		type: 'input',
		//name: game.startingPoint.title,
		name: 'response',
		message: game.nodes.leftResp.text
	}
]

function left() {
	inquirer.prompt([{
			type: 'input',
			name: 'response',
			message: game.nodes.leftResp.text
		}]).then(function (answers) {
			
			if(answers.response === 'blue') {
				console.log(game.nodes.yep.text)
			} else {console.log(game.nodes.wrong.text)}
			
		});
}


function ifYouDare() {
	inquirer.prompt(directionQ).then(function (answers) {
		if (answers.response === 'left') {left();
		} else if (answers.response === 'right') {
			console.log(game.nodes.rightResp.text)
		} else{ifYouDare()};
	});
}

//ifYouDare();

/**

This file has no test specs. It might be a tricky one. You need to look at
the docs for the inquirer npm package, and see if you can figure out how
to make the game run!

If you're running out of time, check out our solution to the problem:

https://gist.github.com/queerviolet/7d9fb275b292b062fa5b9b4c99eda77d

**/


function ifYouDarePromise(node) {

	if(!node.connections.length) {
		console.log(node.text);
		return Promise.resolve({node});
	}


	return inquirer.prompt({
		name: 'response',
		message: node.text,
		type: 'list',
		choices: node.connections
	}).then(function (answer) {
		console.log(answer);
		return ifYouDarePromise(game.getNode(answer.response));
		// if (answers.response === 'left') {left();
		// } else if (answers.response === 'right') {
		// 	console.log(game.nodes.rightResp.text)
		// } else{ifYouDare()};
	});
}

ifYouDarePromise(game.startingPoint)
	.then(last => console.log('You fell in a pit and died anyhow.'));


