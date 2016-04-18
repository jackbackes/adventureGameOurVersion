var Connection = function(nextNode, condition, short) {
	this.value = nextNode;
	this.name = condition;
	this.short = short || this.name;
};

module.exports = Connection;


// var Connection = function(nextNode, condition) {
// 	this.value = nextNode;
// 	this.name = condition;
// 	this.short = this.name;
// };

// module.exports = Connection;
