console.log("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];
var checkForMatch = function () {
	if (cardsInPlay[0] === cardsInPlay[1]) {
console.log("You found a match!");
} else {
console.log("Sorry, try again.");
}
}
var flipCard = function (cardId) {
console.log("User flipped " + cards[cardId]);
cardsInPlay.push(cards[cardId]);
if (cardsInPlay === 2) {	
} else if (cardsInPlay[0] === cardsInPlay[1]) {	
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}
checkForMatch();	
}
	flipCard(0);
	flipCard(2);





/*alert('Hello!');
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);
*/