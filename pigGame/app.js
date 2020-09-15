/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

const globalScore = document.getElementsByClassName('player-score');
const curScore = document.getElementsByClassName('player-current-score');
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
    console.log(diceFace);
    
    if(diceFace === 1){                         //if rolled a 1, current score is reset to 0 on display and toAdd value to 0. switches players.
        toAdd = 0;
        curScore[player].textContent = toAdd;
        player = switchPlayer(player);
    }else{
        addScore(diceFace,player);              //else goes into addscore function
    }
return player;
}

function addScore(diceFace,player){
    //adds randomized dice value to current and displays it
    
    toAdd += diceFace;
    curScore[player].textContent = toAdd;
}

function holdScore(player,toAdd){
    //adds the current displayed score to players' global score and displays it.

    globeScore[player] = globeScore[player] + toAdd;
    globalScore[player].textContent = globeScore[player];
  
return player;
}

function switchPlayer(player){
//changes which player is currently active and also tells the game which player is to move next

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

document.addEventListener('click', e => {
    const button = e.target.className
    console.log(button)
    if (button === 'btn-roll'){
        player = rollDice(player);
    }

    if (button === 'btn-hold'){
        player = holdScore(player,toAdd);
        toAdd = 0;
        curScore[player].textContent = toAdd;
        player = switchPlayer(player);
    }

    if (button === 'btn-new'){

        toAdd = 0;                                                              //resets toAdd score on current to 0
        player = 1;                                                             //resets player 2's status to " "
            current = document.querySelector('.player-'+player+'-panel');
            current.className = 'player-'+player+'-panel';
        player = 0;                                                             //resets player 1's status to active
            current = document.querySelector('.player-'+player+'-panel');
            current.className = 'player-'+player+'-panel active';

        for(let i=0;i<2;i++){                                                   //resets all global scores to 0 as well as displays
            globeScore[i] = 0;
            globalScore[i].textContent = '0';
            curScore[i].textContent = '0';
        }

    }
})

