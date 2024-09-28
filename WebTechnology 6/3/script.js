// Variables to store dice values for both users
let user1Dice = 0;
let user2Dice = 0;

// Function to generate a random number between 1 and 6
function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

// Roll dice for User 1
document.getElementById('user1-roll').addEventListener('click', () => {
    user1Dice = rollDice();
    document.getElementById('user1-dice').textContent = `User 1 rolled: ${user1Dice}`;
});

// Roll dice for User 2
document.getElementById('user2-roll').addEventListener('click', () => {
    user2Dice = rollDice();
    document.getElementById('user2-dice').textContent = `User 2 rolled: ${user2Dice}`;
});

// Find the winner
document.getElementById('winner-button').addEventListener('click', () => {
    if (user1Dice > user2Dice) {
        alert('User 1 is the winner!');
    } else if (user2Dice > user1Dice) {
        alert('User 2 is the winner!');
    } else {
        alert('It\'s a tie!');
    }
});
