// Get all variables
const cells = document.querySelectorAll(".cell");
const winningMessage = document.querySelector(".winningMessage");
const restartBtn = document.querySelectorAll("#reset");
const buttonsClick = document.querySelectorAll(".button");

// console.log(cells);
// console.log(winningMessage);
// console.log(restartBtn);

const winningConditions = {
    "3x3": {
        row1: [1, 2, 3],
        row2: [4, 5, 6],
        row3: [7, 8, 9],
        col1: [1, 4, 7],
        col2: [2, 5, 8],
        col3: [3, 6, 9],
        diag1: [1, 5, 9],
        diag2: [3, 5, 7],
    },
    "4x4": {
        row1: [1, 2, 3, 4],
        row2: [5, 6, 7, 8],
        row3: [9, 10, 11, 12],
        row4: [13, 14, 15, 16],
        col1: [1, 5, 9, 13],
        col2: [2, 6, 10, 14],
        col3: [3, 7, 11, 15],
        col4: [4, 8, 12, 16],
        diag1: [1, 6, 11, 16],
        diag2: [4, 7, 10, 13],
    },
    "5x5": {
        row1: [1, 2, 3, 4, 5],
        row2: [6, 7, 8, 9, 10],
        row3: [11, 12, 13, 14, 15],
        row4: [16, 17, 18, 19, 20],
        row5: [21, 22, 23, 24, 25],
        col1: [1, 6, 11, 16, 21],
        col2: [2, 7, 12, 17, 22],
        col3: [3, 8, 13, 18, 23],
        col4: [4, 9, 14, 19, 24],
        col5: [5, 10, 15, 20, 25],
        diag1: [1, 7, 13, 19, 25],
        diag2: [5, 9, 13, 17, 21],
    },
    "Connect4": {
        Condition: {
            row1: [1, 2, 3, 4],
            row2: [6, 7, 8, 9],
            row3: [11, 12, 13, 14],
            row4: [16, 17, 18, 19],
            row5: [21, 22, 23, 24],
            row6: [2, 3, 4, 5],
            row7: [7, 8, 9, 10],
            row8: [12, 13, 14, 15],
            row9: [17, 18, 19, 20],
            row10: [22, 23, 24, 25],
            col1: [1, 6, 11, 16],
            col2: [2, 7, 12, 17],
            col3: [3, 8, 13, 18],
            col4: [4, 9, 14, 19],
            col5: [5, 10, 15, 20],
            col6: [6, 11, 16, 21],
            col7: [7, 12, 17, 22],
            col8: [8, 13, 18, 23],
            col9: [9, 14, 19, 24],
            col10: [10, 15, 20, 25],
            diag1: [1, 7, 13, 19],
            diag2: [5, 9, 13, 17],
            diag3: [7, 13, 19, 25],
            diag4: [9, 13, 17, 21],
            diag5: [6, 12, 18, 24],
            diag6: [2, 8, 14, 20],
            diag7: [16, 12, 8, 4],
            diag8: [22, 18, 14, 10]
        },

        insert: {
            line1: [1, 6, 11, 16, 21],
            line2: [2, 7, 12, 17, 22],
            line3: [3, 8, 13, 18, 23],
            line4: [4, 9, 14, 19, 24],
            line5: [5, 10, 15, 20, 25]
        }
    }
};

const mage1token = document.querySelector('.mage1token');
const mage2token = document.querySelector('.mage2token');
const mage1name = document.querySelector('.Player1');
const mage2name = document.querySelector('.Player2');
const scoreUpdate = document.querySelector('.update');
// console.log(scoreUpdate.innerHTML)
const elements = ['Fire','Wind','Water','Earth']
const backgroundIndex = [
    [1,2], // fireWind
    [1,3], //fireWater
    [1,4], //fireEarth
    [2,3], //windWater
    [2,4], //windEarth
    [3,4], //waterEarth
];

const backgrounds = [
    'images/backgrounds/char1char2.gif',
    'images/backgrounds/char1char3.gif',
    'images/backgrounds/char1char4.gif',
    'images/backgrounds/char2char3.gif',
    'images/backgrounds/char2char4.gif',
    'images/backgrounds/char3char4.gif',
];

const characters = [
    'images/characters/char1.png',
    'images/characters/char2.png',
    'images/characters/char3.png',
    'images/characters/char4.png',
];

const tokens = [
    'images/tokens/token1.png',
    'images/tokens/token2.png',
    'images/tokens/token3.png',
    'images/tokens/token4.png',
];

// define variables

let storeCells = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let currentBoard = "3x3";
let lineSize = 3;
let gameStart = false;
let turnCount = 0;
let player1Score = 0;
let player2Score = 0;
let character1Element = elements[2];
let character2Element = elements[3];
let currentPlayerElement = character1Element;

let characterLeft = 3;
let characterRight = 4;

// define audio files
let soundPlay = true;
const cellsound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-assets/Collision8-Bit.ogg');
const winsound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/pause.wav')
const drawsound = new Audio('http://codeskulptor-demos.commondatastorage.googleapis.com/GalaxyInvaders/bonus.wav')
const buttonsound = new Audio('http://commondatastorage.googleapis.com/codeskulptor-demos/pyman_assets/eatpellet.ogg')

// state functions

const dataToCell = function(cell,index){
    storeCells[index] = currentPlayer;
    if(currentPlayer == "X"){
        cell.appendChild(mage1token.cloneNode(true));
    } else if (currentPlayer = "O"){
        cell.appendChild(mage2token.cloneNode(true));
    }
    if(soundPlay){
        cellsound.play()
    }
};

const playerTurn = function(){
    if (currentPlayer == "X"){
        currentPlayer = "O";
        currentPlayerElement = character2Element
    } else {
        currentPlayer = "X";
        currentPlayerElement = character1Element
    };
    winningMessage.textContent = `${currentPlayerElement}'s turn`;
};

const checkWinner = function(){
    let gameEnd = false;

    const winConditionsArray = winningConditions[currentBoard];
    for (let condition in winConditionsArray){
        const requiredConditions = winConditionsArray[condition].length
        let playerLeftPanel = 0;
        let playerRightPanel =0;
        // console.log(requiredConditions)
        // console.log(playerLeftPanel)
        // console.log(playerRightPanel)
        for (let numbers of winConditionsArray[condition]){
            for (let i =1; i<=storeCells.length;i++){
                if(i === numbers && storeCells[i-1]=="X"){
                    // console.log(i)
                    // console.log(numbers)
                    // console.log(storeCells[i])
                    playerLeftPanel++
                    // console.log(playerLeftPanel)
                } else if (i === numbers && storeCells[i-1]=="O"){
                    // console.log(i)
                    // console.log(numbers)
                    // console.log(storeCells[i])
                    playerRightPanel++
                    // console.log(playerRightPanel)
                }
            }
        }
        if (playerLeftPanel==requiredConditions){
            gameEnd = true;
            player1Score++
            break;
        } else if (playerRightPanel==requiredConditions){
            gameEnd = true;
            player2Score++
            break;
        }
    }

    if(gameEnd){
        winningMessage.textContent = `${currentPlayerElement} wins!`;
        gameStart = false;
        scoreUpdate.innerHTML = `${player1Score}-${player2Score}`
        if(soundPlay){
            winsound.play()
        }
    }
    else if(!storeCells.includes("")){
        winningMessage.textContent = `Draw!`;
        gameStart = false;
        if(soundPlay){
            drawsound.play()
        }
    }
    else{
        playerTurn();
    }
};

const restartGame = function(){
    currentPlayer = "X";
    storeCells = ["", "", "", "", "", "", "", "", ""];
    currentPlayerElement = character1Element;
    turnCount = 0;
    winningMessage.textContent = `${currentPlayerElement}'s turn`;
    cells.forEach(function(cell){
        cell.textContent = "";
        // cell.removeChild(mage1token);
        // cell.removeChild(mage2token);
    });
    gameStart = true;
};

const cellClicked = function(){
    const index = this.getAttribute("cellIndex");
    if(storeCells[index] != "" || !gameStart){
        return;
    }
    dataToCell(this, index);
    turnCount++; // count turn
    checkWinner();
};

const elementSetup = function(left,right){
    // check background as per elements
    const checkLeftRight = [];
    checkLeftRight.push(left, right);
    for(let i=0;i<backgroundIndex.length;i++){
        if(checkLeftRight.sort().join()==backgroundIndex[i].join()){
            document.querySelector('.main-content').style.backgroundImage = `url(${backgrounds[i]})`
        }
    }
    // add element into the page
    for (let i =1; i<=4;i++){
        if(left==i){
            // change description
            mage1name.textContent = elements[i-1]
            character1Element = mage1name.textContent
            // change character and token
            document.querySelector(".mage1").src = characters[i-1]
            document.querySelector(".mage1token").src = tokens[i-1]
            winningMessage.textContent = `${character1Element}'s turn`
        }
        if(right==i){
            // change description
            mage2name.textContent = elements[i-1]
            character2Element = mage2name.textContent
            // change character and token
            document.querySelector(".mage2").src = characters[i-1]
            document.querySelector(".mage2token").src = tokens[i-1]
        }
    }
    
}

// for character change buttons

const characterIncrease1 = function(){
    if(turnCount==0){
        characterLeft++
        if (characterLeft==characterRight){
            characterLeft++
        }
        if(characterLeft>4){
            characterLeft = 1;
        }
        if (characterLeft==characterRight){
            characterLeft++
        }
        elementSetup(characterLeft,characterRight)
    }
    console.log(characterLeft)
}

const characterIncrease2 = function(){
    if(turnCount==0){
        characterRight++
        if (characterRight==characterLeft){
            characterRight++
        }
        if(characterRight>4){
            characterRight = 1;
        } 
        if (characterRight==characterLeft){
            characterRight++
        }
        elementSetup(characterLeft,characterRight)
    }
    console.log(characterRight)
}
const characterDecrease1 = function(){
    if(turnCount==0){
        characterLeft--
        if (characterLeft==characterRight){
            characterLeft--
        }
        if(characterLeft<1){
            characterLeft = 4;
        } 
        if (characterLeft==characterRight){
            characterLeft--
        }
        elementSetup(characterLeft,characterRight)
    }
    console.log(characterLeft)
}

const characterDecrease2 = function(){
    if(turnCount==0){
        characterRight--
        if (characterRight==characterLeft){
            characterRight--
        }
        if(characterRight<1){
            characterRight = 4;
        }         
        if (characterRight==characterLeft){
            characterRight--
        }
        elementSetup(characterLeft,characterRight)
    }
    console.log(characterRight)
}

const soundOff = function(){
    soundPlay = false;
}

const soundOn = function(){
    soundPlay = true;
}

const buttonSound = function(){
    if(soundPlay){
        buttonsound.play()
    }
}

const startGame = function(){
    // set default element
    elementSetup(characterLeft,characterRight)
    // Add EventListener to every cells
    cells.forEach(function(cell){
        cell.addEventListener("click", cellClicked);
    });
    // Add EventListener to restart button
    for(let button of restartBtn){
        button.addEventListener("click", restartGame);
    }
    // Add sound to every buttons
    for(let button of buttonsClick){
        button.addEventListener("click",buttonSound);
    }
    // Fill in message
    winningMessage.textContent = `${currentPlayerElement}'s turn`;
    // Start the game
    gameStart = true;
}

startGame(); // start the game when refresh