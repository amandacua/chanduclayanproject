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
const globalScore = document.getElementsByClassName('player-score');
//const globalScore = document.getElementById('score-1');
const curScore = document.getElementsByClassName('player-current-score');
//const curScore = document.getElementById('current-1');
const dice = document.getElementById('dice');
const key = document.getElementsByTagName('button');
const container = document.getElementsByClassName('wrapper clearfix');
const currentPlayer = document.getElementsByClassName('.player-name');
var img = document.querySelector('img');
var toAdd = 0;
var player = 0;
var globeScore = [0,0];

function rollDice(player){
    var diceFace = (Math.floor(Math.random()*(6-1)) + 1);
    img.src = `dice-${diceFace}.png`;
    
    if(diceFace === 1){
        toAdd = 0;
        curScore[player].textContent = toAdd;
        console.log(player);
        player = switchPlayer(player);
        console.log(player);
    }else{
        toAdd = addScore(diceFace,player,toAdd);
    }
return player;
}

function addScore(diceFace,player){
    /*
    1. Add Score to current player
    2. Apply the rules that was mention 
    3. IF fails then switchPlayer()
    */
    
    toAdd += diceFace;
    curScore[player].textContent = toAdd;
    
return toAdd;
}

function holdScore(player,toAdd){
    /*
    1. Identify the current player.
    2. Assign the current player's score to global score
    3. call switchPlayer()
    */

    globeScore[player] = globeScore[player] + toAdd;
    globalScore[player].textContent = globeScore[player];
    toAdd = 0;
    curScore[player].textContent = toAdd;

    player = switchPlayer(player);

return player;
}

function switchPlayer(player){
/*
1. Identify the current player
2. Switch the 'active' statement to active player
*/
var current = document.querySelector('.player-'+player+'-panel');
current.className = 'player-'+player+'-panel';

if (player === 0){
    player = 1;
    current = document.querySelector('.player-'+player+'-panel');
    current.className = 'player-'+player+'-panel active';

}
else{
    player = 0;
    current = document.querySelector('.player-'+player+'-panel');
    current.className = 'player-'+player+'-panel active';
}

return player;
}

function newGame(){
    globalScore1.innerHTML = 0;
    globalScore2.innerHTML = 0;
    curScore1.innerHTML = 0;
    curScore2.innerHTML = 0;
}

document.addEventListener('click', e => {
    const button = e.target.className
    console.log(button)
    if (button === 'btn-roll'){player = rollDice(player);}
    if (button === 'btn-hold'){player = holdScore(player,toAdd);}
    if (button === 'btn-new'){newGame();}
})

