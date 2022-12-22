# TicTacToe : Abaris’s Toe
## **The project**

Elemental theme as Tic Tac Toe game with 4 elements including fire, wind, water, and earth.

**Main features**
1. feature to change board size from 3x3 to 5x5 and also connect 4 game.
2. bot feature using random method.
3. feature to change background as per matching element.
4. feature to change element together with token representing X and O.

**Challenges**
1. the design change during the creation process.
2. cannot think about main code during design.
3. referencing cells inside the board when recreated whole board after have changed board size.
4. adding connect 4 loop to fill in correct cell and index from below to top.
5. reference image in js to adjust in css in a differnt file reference layer.

**Features to implement in the future**
1. add minimax into bot logic.
2. add hover to show token before click.
3. transition for connect 4 to make token drop from top to the position.

---

**Plan by steps in first version**

1. **html elements for 3x3 as skeleton**
2. **Add basic css for 3x3**
3. **Add Javascript together with html and css**
    1. **Main features (MVP)**
        1. Skeleton : click to visualise tokens and put into winning condition
        2. Winning condition : check winner and conditions
        3. Game-over area : win/lose/tie in html and css after winning condition
        4. Game-over restart : add restart button inside game-over area
        5. Turn : show tokens as event when hover
        6. Strike : show strike after winner condition met
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
                    3. add profile icon for 4 wizards
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