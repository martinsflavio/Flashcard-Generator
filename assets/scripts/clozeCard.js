var ClozeCard = function(text, cloze) {
	if(!(this instanceof ClozeCard)){
		return new ClozeCard(text, cloze);
	}

	this.fulText = text;
	this.cloze = cloze;
	this.clozeCardInit();
};

ClozeCard.prototype.clozeCardInit = function () {
	var emptySpace = '';

	// Creat's empty space
	for(var i = 0; i < this.cloze.length; i++){
		emptySpace += '_';
	}

	if(this.fulText.search(this.cloze) !== -1){
		this.parcial = this.fulText.replace(this.cloze, emptySpace);

		this.writeInFile();
	} else {
		this.parcial = 'Invalid input';
		throw new Error('"' + this.cloze + '"  doesn\'t exist in  "' + this.fulText + '" !');
	}

};
ClozeCard.prototype.writeInFile = function () {
	var fs = require('fs');
	var card = 'Cloze    : ' + this.cloze + '\n' +
		'Parcial  : ' + this.parcial + '\n' +
		'FullText : ' + this.fulText + '\n' +
		'+\n';

	fs.appendFile('./assets/log/clozeCards.txt', card, function (err) {
		if(err) throw err;
	});
};


module.exports = ClozeCard;