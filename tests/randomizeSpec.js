describe("randomize", function() {
	var shuffleArray = require('../randomize');

	it("should return the same length array and all cards should be in it", function() {
		var cardArray = [
			 "jack of hearts",
			 "queen of diamonds",
			 "7 of clubs",
			 "king of spades"
		];
		shuffleArray(cardArray);
		expect(cardArray.length).toEqual(4);
		expect(cardArray.indexOf('jack of hearts')).not.toEqual(-1);
		expect(cardArray.indexOf('queen of diamonds')).not.toEqual(-1);
		expect(cardArray.indexOf('7 of clubs')).not.toEqual(-1);
		expect(cardArray.indexOf('king of spades')).not.toEqual(-1);
	});

	it("should return an array with the cards in a different order", function () {
		var cardArray = ["ace of hearts", "ace of diamonds", "ace of spades", "ace of clubs",
			 "2 of hearts", "2 of diamonds", "2 of spades", "2 of clubs",
			 "3 of hearts", "3 of diamonds", "3 of spades", "3 of clubs",
			 "4 of hearts", "4 of diamonds", "4 of spades", "4 of clubs",
			 "5 of hearts", "5 of diamonds", "5 of spades", "5 of clubs",
			 "6 of hearts", "6 of diamonds", "6 of spades", "6 of clubs",
			 "7 of hearts", "7 of diamonds", "7 of spades", "7 of clubs",
			 "8 of hearts", "8 of diamonds", "8 of spades", "8 of clubs",
			 "9 of hearts", "9 of diamonds", "9 of spades", "9 of clubs",
			 "10 of hearts", "10 of diamonds", "10 of spades", "10 of clubs",
			 "jack of hearts", "jack of diamonds", "jack of spades", "jack of clubs",
			 "queen of hearts", "queen of diamonds", "queen of spades", "queen of clubs",
			 "king of hearts", "king of diamonds", "king of spades", "king of clubs",
		];
		var joinedBefore = cardArray.join('');
		for (i = 0; i < 100; i++) { 
    		shuffleArray(cardArray);
		};
		var joinedAfter = cardArray.join('');

		expect(joinedBefore).not.toEqual(joinedAfter);

	})

});
