var BasicCard = function (front, back) {
	if(!(this instanceof BasicCard)){
		return new BasicCard(front,back);
	}

	this.front = front;
	this.back = back;
	this.writeInFile();
};
BasicCard.prototype.writeInFile = function () {
	var fs = require('fs');

	var card = 'Front : ' + this.front + '\n' +
		'Back  : ' + this.back + '\n' +
		'+\n';

	fs.appendFile('./assets/log/basicCards.txt', card, function (err) {
		if(err) throw err;
	});
};


module.exports = BasicCard;
