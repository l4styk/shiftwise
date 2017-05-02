describe("sortAscending", function() {
	var sortCardsInAscendingOrder = require('../sortAscending');

	it("should sort cards of different types", function() {
		var cardArray = [
			 "jack of hearts",
			 "queen of diamonds",
			 "7 of clubs",
			 "king of spades"
		];
		sortCardsInAscendingOrder(cardArray);
		expect(cardArray[0]).toEqual('7 of clubs');
		expect(cardArray[1]).toEqual('jack of hearts');
		expect(cardArray[2]).toEqual('queen of diamonds');
		expect(cardArray[3]).toEqual('king of spades');
	});

	it("should sort cards of same types", function() {
		var cardArray = [
			 "3 of hearts", 
			 "3 of diamonds", 
			 "3 of spades",
			  "3 of clubs"
		];
		sortCardsInAscendingOrder(cardArray);
		expect(cardArray[0]).toEqual('3 of clubs');
		expect(cardArray[1]).toEqual('3 of diamonds');
		expect(cardArray[2]).toEqual('3 of hearts');
		expect(cardArray[3]).toEqual('3 of spades');
	});	
});
