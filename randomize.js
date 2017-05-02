function shuffleArray(cardArray) {
	for (var i = 0; i < cardArray.length; i++) {
		var j = Math.floor(Math.random() * i);
		var tempArray = cardArray[i];
		cardArray[i] = cardArray[j];
	  	cardArray[j] = tempArray;
	  };  
	return cardArray;
};

module.exports = shuffleArray;
