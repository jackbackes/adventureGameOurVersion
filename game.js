var Node = require('./node');

var Game = function() {
	this.nodes = {};
	this.startingPoint = null;
};

Game.prototype.addNode = function(title, text) {
	if (this.nodes[title]) throw new Error();
	this.nodes[title] = new Node(title, text);

	if (Object.keys(this.nodes).length === 1) this.startingPoint = this.nodes[title]; 

	return this.nodes[title];
}

Game.prototype.getNode = function(title) {
	return this.nodes[title]; 
}

Game.prototype.connect = function(node1, node2, aString) {
	this.nodes[node1].connect(node2, aString);
}


module.exports = Game;
