// Player Hand Score
// The function playerHandScore that takes in a string of face cards (Jack, Queen, and King only) and returns the total score of the players hand.

// The cards are represented by the first letter in the name of the card:

// A "K" is 4 points
// A "Q" is 3 points
// A "J" is 2 points
// Example Usage:
const playerHandScore = (hand) => {
    let score = 0;
    //for-of loop that iterates over the elements in the hand array
    for (const card of hand) {
      score += (card === 'K') ? 4 : (card === 'Q') ? 3 : (card === 'J') ? 2 : 0;
    }
    return score;
  }


console.log( playerHandScore("K") ); // 4
console.log( playerHandScore("KJ") ); // 6
console.log( playerHandScore("KQQ") ); // 10 