const globalScore = document.getElementsByClassName('player-score');
const curScore = document.getElementsByClassName('player-current-score');

var toAdd = 0;
var player = 0;
var globeScore = [0,0];

function rollDice(player){
    var isOne = false   //checks if there is 1
    var total = 0       //declare total

    for (let i = 0 ; i < 2 ; i++){
        var diceFace = (Math.floor(Math.random()*(6-1)) + 1);  // generates a random number
        var dice = document.getElementById(`dice-${i}`)        // takes the current dice
        dice.src = `dice-${diceFace}.png`                      // changes src image

        if (diceFace === 1){isOne = true}
        total+=diceFace
    }

    if(isOne === true){                         //if rolled a 1, current score is reset to 0 on display and toAdd value to 0. switches players.
        curScore[0].textContent = 0;            // sets all the cur score to 0 if 1 is seen
        curScore[1].textContent = 0;
        player = switchPlayer(player);
        toAdd = 0
        total = 0
    }else {
        curScore[player].textContent = (toAdd += total)
    }
    
return player;
}

function holdScore(player,toAdd){
    //adds the current displayed score to players' global score and displays it.
    globalScore[player].textContent = (globeScore[player] += toAdd); 
return player;
}

function switchPlayer(player){
    // remove active to previous player
    document.querySelector(`.player-${player}-panel`).className = `player-${player}-panel`;  
    //if player =0 then change to 1 else change to 0
    player = ( player === 0 ) ? 1 : 0;
    //add active to current player
    document.querySelector(`.player-${player}-panel`).className = `player-${player}-panel active`;
return player;
}

function winCondition(player,globeScore){
    var win = null;
        if(globeScore[player] >= 10){              //check if score reach or exceeded 100
            win = player;
            displayWin(win)                           //assigns player currently being checked as winner if exceeded or reached 100
        }
    return win;
}

function displayWin(win){        
    // document.getElementById(`name-${win}`).parentElement.className= `winner`
    // setTimeout(newGame,1000)
    document.getElementById(`name-${win}`).innerHTML= `Congrats Player ${win+1}`
    setTimeout(newGame,1000)
}

function newGame(){
    console.log('New game')
    win = null;
    toAdd = 0;                                                              //resets toAdd score on current to 0
        globalScore[0].parentElement.className = 'player-0-panel active'
        globalScore[1].parentElement.className = 'player-1-panel'
        
    for(let i=0;i<2;i++){             
        document.getElementById(`name-${i}`).innerHTML = `Player ${i+1}`                        //resets all global scores to 0 as well as displays
        globalScore[i].textContent = '0';
        curScore[i].textContent = '0';
    }

}

document.addEventListener('click', e => {
    const button = e.target.className
    console.log(button)
    if (button === 'btn-roll'){
        player = rollDice(player);              //go to rollDice function
    }

    if (button === 'btn-hold'){
        player = holdScore(player,toAdd);       //go to holdScore function
        toAdd = 0;                              //reset to Add to 0
        curScore[player].textContent = toAdd;   //reset current score display to 0
        win = winCondition(player,globeScore);  //check winCondition
        // displayWin(win);                        //display if winner
        player = switchPlayer(player);          //switch players
    }

    if (button === 'btn-new'){
        newGame()
    }
})
