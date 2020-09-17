const globalScore = document.getElementsByClassName('player-score');
const curScore = document.getElementsByClassName('player-current-score');

var toAdd = 0;
var player = 0;
var globeScore = [0,0];

function rollDice(player){
    var isOne = false;   //checks if there is 1
    // var total = 0       //declare total

    for (let i = 0 ; i < 2 ; i++){
        var diceFace = (Math.floor(Math.random()*(6-1)) + 1);  // generates a random number
        var dice = document.getElementById(`dice-${i}`);       // takes the current dice
        dice.src = `dice-${diceFace}.png`                      // changes src image

        if (diceFace === 1){
            isOne = true;
        }
        toAdd+=diceFace;
    }

    if(isOne === true){                         //if rolled a 1, current score is reset to 0 on display and toAdd value to 0. switches players.
        curScore[player].textContent = 0;            // sets all the cur score to 0 if 1 is seen
        player = switchPlayer(player);
        toAdd = 0;
        total = 0;
    }else {
        curScore[player].textContent = (toAdd);
    }
    
return player;
}

function holdScore(player,toAdd){
    globalScore[player].textContent = (globeScore[player] += toAdd);    //adds the current displayed score to players' global score and displays it.
return player;
}

function switchPlayer(player){
    document.querySelector(`.player-${player}-panel`).className = `player-${player}-panel`;         // remove active from current player
    player = ( player === 0 ) ? 1 : 0;                                                              //if player =0 then change to 1 else change to 0
    document.querySelector(`.player-${player}-panel`).className = `player-${player}-panel active`;  //add active to next player
return player;
}

function winCheck(player){
    var win = null;
        if(globeScore[player] >= 20){              //check if score reach or exceeded 100
            win = player;
            player = displayWin(win);                        //assigns player currently being checked as winner if exceeded or reached 100
        }else
            player = switchPlayer(player);          //switch players
    return player;
}

function displayWin(win){  
        alert(`Player ${win+1} wins!`);
        player = newGame();
    return player;
}

function newGame(player){
    
    globalScore[0].parentElement.className = 'player-0-panel active';
    globalScore[1].parentElement.className = 'player-1-panel';
        
        for(let i=0;i<2;i++){
            globeScore[i] = 0;                  //resets all global scores to 0 as well as displays
            globalScore[i].textContent = '0';   //resets all displays to 0
            curScore[i].textContent = '0';
        }

        //resets values to default starting values
        win = null;
        toAdd = 0;  
        player = 0;
    return player;
}

document.addEventListener('click', e => {
    const button = e.target.className;
    console.log(button);
    if (button === 'btn-roll'){
        player = rollDice(player);              //go to rollDice function
    }

    if (button === 'btn-hold'){
        player = holdScore(player,toAdd);       //go to holdScore function
        toAdd = 0;                              //reset to Add to 0
        curScore[player].textContent = toAdd;   //reset current score display to 0
        player = winCheck(player);        //check winCondition
    }

    if (button === 'btn-new' || button ==='alert'){
        player = newGame(player);                                                    
    }
})