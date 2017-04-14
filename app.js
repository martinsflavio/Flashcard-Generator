function BasicCard(front, back) {
	if(!(this instanceof BasicCard)){
		return new BasicCard(front,back);
	}

	this.front = front;
	this.back = back;
	this.writeInFile();
}
BasicCard.prototype.writeInFile = function () {
	var fs = require('fs');

	var card = '==========================================\n' +
		'\nFront : ' + this.front + '\n' +
		'Back  : ' + this.back + '\n' +
		'\n==========================================\n';

	fs.appendFile('basicCards.txt', card, function (err) {
		if(err) throw err;
	});
}


function ClozeCard(text, cloze) {
	if(!(this instanceof ClozeCard)){
		return new ClozeCard(text, cloze);
	}

	this.fulText = text;
	this.cloze = cloze;
	this.parcial;
	this.clozeCardInit();
}
ClozeCard.prototype.writeInFile = function () {
	var fs = require('fs');
	var card = '==========================================\n' +
						 '\nCloze    : ' + this.cloze + '\n' +
						 'Parcial  : ' + this.parcial + '\n' +
						 'FullText : ' + this.fulText + '\n' +
						 '\n==========================================\n';

	fs.appendFile('clozeCards.txt', card, function (err) {
		if(err) throw err;
	});
};
ClozeCard.prototype.clozeCardInit = function () {
	var emptySpace = ' ';

	// Creat's empty space
	for(var i = 0; i < this.cloze.length; i++){
		emptySpace += '_ ';
	}

	if(this.fulText.search(this.cloze) !== -1){
		this.parcial = this.fulText.replace(this.cloze, emptySpace);
		this.writeInFile();
	} else {
		this.parcial = 'Invalid input';
		throw new Error('"' + this.cloze + '"  doesn\'t exist in  "' + this.fulText + '" !');
	}

};







var firstPresident =  BasicCard("Who was the first president of the United States?", "George Washington");
console.log(firstPresident instanceof BasicCard);
console.log(firstPresident.front);
console.log(firstPresident.back);
console.log('===================');



var myClozeCard =  ClozeCard('ola mundo, estou apenas testando essa parada', 'essa');
console.log(myClozeCard instanceof ClozeCard);
console.log(myClozeCard.cloze);
console.log(myClozeCard.fulText);
console.log(myClozeCard.parcial);

