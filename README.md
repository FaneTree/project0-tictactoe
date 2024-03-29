# TicTacToe : Abaris’s Toe
## **Introduction**

Elemental theme as Tic Tac Toe game with 4 elements including fire, wind, water, and earth.

### **Built with**
- HTML 5 
- CSS 3
- JavaScript
---

### **How to play game**
You can play tic tac toe game through [here](https://fanetree.github.io/project0-tictactoe/).
The game includes features to change board size together with connect 4 by using the buttons on bottom left.

### **Snapshots**
- Start game
![Start game](./images/screenshot/Start.png)
- Bot
![Bot](./images/screenshot/Bot.png)
- Connect 4
![Connect4](./images/screenshot/connect4.png)
---
### **Putting it all together**

1. **Features**
    - Ability to change board size from 3x3 to 5x5 and also connect 4 game.
    ![changeGame](./images/screenshot/buttons.png)

    - The bot using random method.
    ```JavaScript
        const botTurn = function(){
        // get emply cell
        let moves = [];
        let i = 0;
        let cells  = document.querySelectorAll(".cell")
        for (let cell of cells){
            if(cell.innerHTML==""){
                moves[i] = cell.getAttribute("cellIndex");
                i++
            }
        }
        let move = moves[Math.floor(Math.random()*moves.length)];
        return move;
        }
    ```

    - Background change as per matching element.
    - The change in element together with token representing X and O.
    ```JavaScript
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
    ```

2. **Challenges**
    - The design change during the creation process.

    - Struggling to plan about main code during design as a skeleton during planning process and eventually use startGame function to call the whole thing.

    - Referencing cells inside the board when recreated whole board after have changed board size.

    - Adding connect 4 loop to fill in correct cell and index from below to top.

    - Referencing the background sources in js to adjust the background in css on a differnt file reference layer.

    - Problem to reference DOM when recreated the whole cells again after changed board size.


3. **Features or code to implement in the future**
    - add minimax into bot logic.

    - add hover to show token before click.

    - transition for connect 4 to make token drop from top to the position.

    - add timer into the game.

    - improve the code in buttons and referencing after recreate the cells

4. **Lessons**
    - Stick to your design when you deal with css and html.
    - While use const for functions, always aware code order.
    - Try to refer everything starting with 0 when deal with arrays.

---
#### **Plan by steps in first version**
![firstPlan](./images/screenshot/Plan.png)
1. **html elements for 3x3 as skeleton**
2. **Add basic css for 3x3**
3. **Add Javascript together with html and css**
    1. **Main features (MVP)**
        1. Skeleton : click to visualise tokens and put into winning condition
        2. Winning condition : check winner and conditions
        3. Game-over area : win/lose/tie in html and css after winning condition
        4. Game-over restart : add restart button inside game-over area
        5. Turn : show tokens as event when hover
    2. **Additional features**
        1. **Phase I**
            1. Add Images
                1. add tokens images for 4 elements
                2. add strike images for 4 elements
                3.  add 6 background for mages match
                    1. same element cannot fight each other
                    2. background change as per the matching element
                        1. fire x water
                        2. fire x wind
                        3. fire x earth
                        4. earth x wind
                        5. earth x water
                        6. water x wind
                    3. add profile icon for 4 elements
            2. Add sound
                1. win / lose / tie ⇒ 3 sounds
                2. element sounds ⇒ 1 sound for each element (4 sounds)
        2. **Phase II**
            1. Add score count
            2. Add menu button as three line
                1. Reset the game
                2. turn on/off sound
                3. choose bot level + easy (random)
                4. timer - / + and show the time in second
        3. **Phase III**
            1. Add bot hard (logical)
            2. Add - / + buttons to reduce or add board size
            3. Add connect 4 game
        4. **Phase IV**
            1. Add skills for each wizards (might have to be in 4x4 above)
                1. Fire : remove 1 line
                2. Wind : push 1 line to 1 side
                3. Earth : block 4 blocks
                4. Water : copy 1 line

--- 

Copyright Tanakorn Treechorvitaya
