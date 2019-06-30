var MatchGame = {};

var cardValues = [];

for (var i = 1; i < 9; i++) {
  cardValues.push(i);
  cardValues.push(i);
};

console.log(cardValues);

var randomCardValues = cardValues.splice(0, 16, getRandomInt(8));

while (cardValues.length = 0) {
  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  }
  var randomValues = console.log(getRandomInt(8));
  cardValues.splice(0, 16, randomValues);
};

var randomCardValues = cardValues.splice(0, 16, randomValues);
console.log(randomCardValues);

var months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'June']

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ['Jan', 'Feb', 'March', 'April', 'May']



/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
