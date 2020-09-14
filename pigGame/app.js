/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const globalScore1 = document.getElementById('score-0');
const globalScore2 = document.getElementById('score-1');
const curScore1 = document.getElementById('current-1');
const dice = document.getElementById('dice');
const key = document.getElementById()
 
console.log(globalScore1,globalScore2)
console.log(rollDice())

function rollDice(){
    var diceFace = (Math.floor(Math.random()*(6-1)) + 1)
    const className = '"'+'image'+diceFace+'.jpg'+'"'
    document.getElementsByClassName('dice').src = className
}
