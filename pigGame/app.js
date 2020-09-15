/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
/*
Functions to create: 
rollDice() : function needs to output the dice 
1. Generate a random number
2. Output that random numbe
newGame()
1. Initialize all to 0 
hold()
1. Take in the current scroe on screen 
2. Move player score to player current score
*/
const globalScore0 = document.getElementById('score-0');
const globalScore1 = document.getElementById('score-1');
const curScore0 = document.getElementById('current-0');
const curScore1 = document.getElementById('current-1');
const dice = document.getElementById('dice');
const key = document.getElementsByTagName('button')
const container = document.getElementsByClassName('wrapper clearfix')
const currentPlayer = document.getElementsByClassName('.player-name')
console.log(currentPlayer)
player = 0;
 
// console.log(globalScore1,globalScore2)
// console.log(rollDice())

function rollDice(){
    var diceFace = (Math.floor(Math.random()*(6-1)) + 1)
    const className = 'dice-'+diceFace+'.png'
    document.getElementsByClassName('dice').src = className
    addScore()
}

function addScore(){
     /*
    1. Add Score to current player
    2. Apply the rules that was mention 
    3. IF fails then switchPlayer()
    */
}

function holdScore(player,curScore){
    /*
1. Identify the current player.
2. Assign the current player's score to global score
3. call switchPlayer()
*/
var toAdd = 'curScore'+player + 'globalScore'+player;
    switchPlayer(player);
}

function switchPlayer(player){
/*
1. Identify the current player
2. Switch the 'active' statement to active player
*/
if (player === 0)
    return player = 1;
else
    return player = 0;
}

function newGame(){
    globalScore1.innerHTML = 0
    globalScore2.innerHTML = 0
    curScore1.innerHTML = 0
    curScore2.innerHTML = 0
}

document.addEventListener('click', e => {
    const button = e.target.className
    console.log(button)
    if (button === 'btn-roll'){rollDice()}
    if (button === 'btn-hold'){holdScore()}
    if (button === 'btn-new'){newGame()}
})

