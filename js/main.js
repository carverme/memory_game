console.log("Up and running!");
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var cardOne = cards[0];
cardsInPlay.push('cardOne');
console.log("User flipped queen" + " " + cardsInPlay['cardOne']);

var cardTwo = cards[2];
cardsInPlay.push('cardTwo');
console.log("User flipped king" + " " + cardsInPlay['cardTwo']);

if (cardsInPlay === 2) {	
} else if (cardsInPlay[0] === cardsInPlay[1]) {	
	alert("You found a match!");
} else if (cardsInPlay[0] !== cardsInPlay[1]) {
	alert("Sorry, try again.");
}

/*alert('Hello!');
console.log("User flipped" + cardOne);
console.log("User flipped" + cardTwo);
*/