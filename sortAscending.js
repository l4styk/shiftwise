function sortCardsInAscendingOrder (cardArray) {
	function ordinal (card) {
		var parts = card.split(' ');
		var positionOne;
		var offset;
		if(parts[0] === 'ace'){
			positionOne = 0;
		} else if (parts[0] === 'jack'){
			positionOne = 40;
		} else if (parts[0] === 'queen') {
			positionOne = 44;
		} else if (parts[0] === 'king') {
			positionOne = 48;
		} else {
			// parts[0] is a number
			positionOne = (parseInt(parts[0])-1)*4;
		}
		if (parts[2] === 'clubs'){
			offset = 0;
		} else if (parts[2] === 'diamonds') {
			offset = 1;
		} else if (parts[2] === 'hearts') {
			offset = 2;
		} else {
			offset = 3;
		}
		return positionOne + offset;
	}

	cardArray.sort(function (a, b) {
		return ordinal(a) - ordinal(b);
	});
};

module.exports = sortCardsInAscendingOrder;