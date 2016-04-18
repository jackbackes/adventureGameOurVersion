var Connection = require('./connection');

var Node = function(title, text) {
	this.title = title;
	this.text = text;
	this.connections = [];
};

Node.prototype.connect = function(aNode, aString, short) {

	var checkForConnections = [];
	for( var i = 0; i<this.connections.length; i++ ) {
		if( this.connections[i].name === aString ) throw new Error();
	}

	//push the connection to the array
	//this.connections.push([aNode, aString]);
	this.connections.push(new Connection(aNode, aString, short))

}

module.exports = Node;
