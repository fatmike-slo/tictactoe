/* TIC TAC toe, v.1.0 Stupar Andrej, 21.08.2017 ... Loving it so far :D
/* maybe, just maybe it will be a sound idea to put the dataObj global
     
*/

/*test area */

/**/

$(document).ready(() => {

    let startGame = false;
    let firstMove = true;
    let secondMove = true;
    let turnX = false;
    let turnO = false;
    let pPosArr = [];
    let aiPosArr = [];
    let ai_Id, playerId;
    let endGame = false;
    let winner = undefined;
    let check = 0;
    let nextMove = false;
    // at splash, initialize #modal, hide #game
    $("#modal").css("display", "block");
    $("#game").css("display", "none");

    // in modal, choose player and start game
    $("#inputX").on("click", () => {
        // if starting over, reset the data from previous game
        if (startGame === true) {
            console.log('RESETIRAMO, kliknili na X');
            
            reset();
        }
        let int1 = setInterval(() => {
            $("#modal").fadeOut("slow", () => {
                $("#displayWinner").text("");
                $("#modal").css("display", "none");
                $("#game").css("display", "block");
                clearInterval(int1);
            });
        }, 500);
        // by default after player choooses, set the conditions for the game 
        playerId = "X";
        ai_Id = "O";
        turnX = false;
        turnO = true;
        $("#currentPlayer").text("Current player: X");
        game();
    });
    $("#inputO").on("click", () => {
        if (startGame === true) {
            console.log('RESETIRAMO, kliknili na O');
            
            reset();
        }
        let int2 = setInterval(() => {
            $("#modal").fadeOut("slow", () => {

                $("#modal").css("display", "none");
                $("#game").css("display", "block");
                clearInterval(int2);
            });
        }, 500);
        playerId = "O";
        ai_Id = "X";
        turnO = false;
        turnX = true;
        $("#currentPlayer").text("Current player: O");
        game();
    });

    // info button
    $("#infoButton").on("click", () => {
        console.log('ZAGNAN?');
        
        console.log('turnX: ', turnX);
        console.log('turnO: ', turnO);
        console.log("player id ", playerId);
        console.log("ai id ", ai_Id);
        console.log('aiPosArr', aiPosArr);
        console.log('pPosArr', pPosArr);
    });
    // reset globals when game starting over
    function reset() {
        firstMove = true;
        secondMove = true;
        turnX = false;
        turnO = false;
        pPosArr = [];
        aiPosArr = [];
        ai_Id, playerId;
        endGame = false;
        winner = undefined;
        nextMove = false;
        check = 0;
     
        $("#a1").text("");
        $("#a2").text("");
        $("#a3").text("");
        $("#b1").text("");
        $("#b2").text("");
        $("#b3").text("");
        $("#c1").text("");
        $("#c2").text("");
        $("#c3").text("");
        $("#a1").css("color", "white");
        $("#a2").css("color", "white");
        $("#a3").css("color", "white");
        $("#b1").css("color", "white");
        $("#b2").css("color", "white");
        $("#b3").css("color", "white");
        $("#c1").css("color", "white");
        $("#c2").css("color", "white");
        $("#c3").css("color", "white");
        // reset changes made to #game after winning 
        $("#game").css("margin-top", "100px");
        $("#displayWinner").text("");
        $("#restartCounter").css("display", "none");
        $("#currentPlayer").css("display", "block");
    }

    // control the display of draw or win display modals
    function victoryModal(typeOfVictory) {
        if (typeOfVictory === "draw") {
            $("#game").css("display", "none");
            $("#draw").css("display", "block");
            let counter = 5;
            let int3 = setInterval(() => {
                if (counter === 1) {

                    $("#draw").fadeOut("slow", () => {
                        $("#modal").css("display", "block");
                        $("#draw").css("display", "none");
                    });
                }
                else if (counter === 0) {
                    clearInterval(int3);
                }
                $("#countdown").text(counter);
                counter--;
            }, 1000);
        }
        else if (typeOfVictory === "win") {
            $("#displayWinner").text("Winner is: " + winner);
            $("#currentPlayer").css("display", "none");
            $("#game").css("margin-top", "35px");

            let counter = 5;
            let int4 = setInterval(() => {
                if (counter === 1) {
                    $("#game").fadeOut("slow", () => {
                        $("#modal").css("display", "block");
                        $("#game").css("display", "none");
                    });
                }
                else if (counter === 0) {
                    clearInterval(int4);
                }
                $("#restartCounter").css("display", "block");
                $("#restartCounter").text("Restarting in : " + counter);
                counter--;
            }, 1000);
        }
    }

    // the game itself
    function game() {
     // each field has it's own properties. From here we store changes, transformations etc

    let dataObj = [{
        name: "#a1",
        id: 0,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#a1").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#a1").text("O");
            }
        },
        getValue: function () {
            if ($("#a1").text() === "X") {
                return "X";
            } else if ($("#a1").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#a1").css("color", "red");
            $("#a1").css("color", "red");
        }
    },
    {
        name: "a2",
        id: 3,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#a2").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#a2").text("O");
            }
        },
        getValue: function () {
            if ($("#a2").text() === "X") {
                return "X";
            } else if ($("#a2").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#a2").css("color", "red");
            $("#a2").css("color", "red");
        }
    },
    {
        name: "a3",
        id: 6,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#a3").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#a3").text("O");
            }
        },
        getValue: function () {
            if ($("#a3").text() === "X") {
                return "X";
            } else if ($("#a3").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#a3").css("color", "red");
            $("#a3").css("color", "red");
        }
    },
    {
        name: "b1",
        id: 1,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {

                $("#b1").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#b1").text("O");
            }
        },
        getValue: function () {
            if ($("#b1").text() === "X") {
                return "X";
            } else if ($("#b1").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#b1").css("color", "red");
            $("#b1").css("color", "red");
        }
    },
    {
        name: "b2",
        id: 4,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#b2").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#b2").text("O");
            }
        },
        getValue: function () {
            if ($("#b2").text() === "X") {
                return "X";
            } else if ($("#b2").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#b2").css("color", "red");
            $("#b2").css("color", "red");
        }
    },
    {
        name: "b3",
        id: 7,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#b3").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#b3").text("O");
            }
        },
        getValue: function () {
            if ($("#b3").text() === "X") {
                return "X";
            } else if ($("#b3").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#b3").css("color", "red");
            $("#b3").css("color", "red");
        }
    },
    {
        name: "c1",
        id: 2,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#c1").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#c1").text("O");
            }
        },
        getValue: function () {
            if ($("#c1").text() === "X") {
                return "X";
            } else if ($("#c1").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#c1").css("color", "red");
            $("#c1").css("color", "red");
        }
    },
    {
        name: "c2",
        id: 5,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#c2").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#c2").text("O");
            }
        },
        getValue: function () {
            if ($("#c2").text() === "X") {
                return "X";
            } else if ($("#c2").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#c2").css("color", "red");
            $("#c2").css("color", "red");
        }
    },
    {
        name: "c3",
        id: 8,
        owner: undefined,
        checked: false,
        display: function () {
            if (turnX === true && this.checked !== true) {
                $("#c3").text("X");
            } else if (turnO === true && this.checked !== true) {
                $("#c3").text("O");
            }
        },
        getValue: function () {
            if ($("#c3").text() === "X") {
                return "X";
            } else if ($("#c3").text() === "O") {
                return "O";
            }
        },
        draw: function () {
            $("#c3").css("color", "red");
            $("#c3").css("color", "red");
        }
    }
    ];
       
        // BEGIN here ---------------------------------

        // mark the start of the game, ai always starts first
        if (startGame === false) {
            console.log('starting first time, startGame === false');

            startGame = true;
            aiMove();
        }
        else if (startGame === true) {
            console.log('starting again, startGame === true');
            reset();
            aiMove();
            startGame = false;
        }


        // function that takes two numbers and returns random, can be used for returning odd numbers in the specified range 
        function generateNum(num1, num2, corner) {
            var holderArr = [];

            // return odd number between the range
            let randomNum = Math.round(Math.random() * 10 - 1) + 1;
            if (corner === undefined) {
                if (randomNum <= num2 && randomNum >= num1) {
                    return randomNum;
                } else {
                    return 5;
                }
            }

            // return only a number from 0,2,6,8 .. which are the coordinates for corner positions
            if (corner === true) {
                for (let i = num1; i < num2 + 1; i++) {
                    if (i === 0 || i === 2 || i === 6 || i == 8) {
                        holderArr.push(i);
                    }
                }
                return returnOdd();
            }
            // !! for later use, return a single number from the array 0-8
            function returnOdd() {
                let match;
                let rndN = Math.round(Math.random() * 3 - 1) + 1;
                return holderArr[rndN];
            }
        }

        // next turn, switch player and print who's next to play
        function nextTurn() {
            if (turnX === true) {
                turnX = false;
                turnO = true;
                $("#currentPlayer").text("Current player: O");
            } else if (turnO === true) {
                turnO = false;
                turnX = true;
                $("#currentPlayer").text("Current player: X");
            }
        }
        function victoryComb(i1, i2, i3, side) {
            if (dataObj[i1].getValue() === side && dataObj[i2].getValue() === side && dataObj[i3].getValue() === side && endGame === false) {
                dataObj[i1].draw();
                dataObj[i2].draw();
                dataObj[i3].draw();
                console.log('victory for' + side + 'through A1 A2 A3');
                winner = side;
                victoryModal("win");
                endGame = true;
            }
        }
        // go through all the possible victory combinations
        function checkVictory() {
            // check if all fields are full and end the game
            check = dataObj.reduce((operator, item) => {
                if (item.checked === true) {
                    operator++;
                }
                return operator;
            }, 0);
            // a1a2a3
            victoryComb(0, 1, 2, "X");
            victoryComb(0, 1, 2, "O");
            // a1b1c1
            victoryComb(0, 3, 6, "X");
            victoryComb(0, 3, 6, "O");
            // c1c2c3
            victoryComb(6, 7, 8, "X");
            victoryComb(6, 7, 8, "O");
            // a3b3c3
            victoryComb(2, 5, 8, "X");
            victoryComb(2, 5, 8, "O");
            // a2b2c2
            victoryComb(1, 4, 7, "X");
            victoryComb(1, 4, 7, "O");
            // b1b2b3
            victoryComb(3, 4, 5, "X");
            victoryComb(3, 4, 5, "O");
            // a3b2c1
            victoryComb(2, 4, 6, "X");
            victoryComb(2, 4, 6, "O");

            // a1b2c3
            victoryComb(0, 4, 8, "X");
            victoryComb(0, 4, 8, "O");

            // check if draw
            if (check === 9 && endGame === false) {

                console.log("Time's up");
                endGame = true;
                // bring up draw modal
                victoryModal("draw");
            }
        }

        function generateSecondMove() {

            // after finding avaiable corner position, with the help of array move to a random corner position
            let holderArr = [];
            dataObj.forEach((item, index) => {
                // beacuse dataObj is structured differently, it's index is differenet from position index(how the numbers are structured) 
                if (item.checked === false) {
                    if (index === 0 ||
                        index === 2 ||
                        index === 6 ||
                        index === 8) {
                        holderArr.push(index);
                    }
                }
            });
            // we extrapolated all avaiable corner position, lets randomize the avaiable positions
            // it can have 2 numbers or 3 (if player chooses not a corner for the second move)
            if (holderArr.length === 2) {
                // generate a rnd num between 0 - 1 (as indexes are if length === 2)
                let randomNum = Math.round(Math.random() * 1 - 1) + 1;
                console.log("second move, length === 2", holderArr[randomNum]);
                dataObj[holderArr[randomNum]].display();
                dataObj[holderArr[randomNum]].checked = true;
                dataObj[holderArr[randomNum]].owner = ai_Id;
                aiPosArr.push(dataObj[holderArr[randomNum]].id);

            }
            else if (holderArr.length === 3) {
                // generate a rnd num between 0 - 2 (as indexes are if length === 3)
                let randomNum = Math.round(Math.random() * 2 - 1) + 1;
                console.log("second move, length === 3", holderArr[randomNum]);
                dataObj[holderArr[randomNum]].display();
                dataObj[holderArr[randomNum]].checked = true;
                dataObj[holderArr[randomNum]].owner = ai_Id;
                aiPosArr.push(dataObj[holderArr[randomNum]].id);
            }
            // if only one corner left
            else if (holderArr.length === 1) {
                console.log("second move,length === 1");

                dataObj[holderArr[0]].display();
                dataObj[holderArr[0]].checked = true;
                dataObj[holderArr[0]].owner = ai_Id;
                aiPosArr.push(dataObj[holderArr[0]].id)
            }
            else if(holderArr.length === 0) {
                console.log('second move, length === 0');
                dataObj.forEach((item)=> {
                    if(item.checked === false) {
                        item.display();
                        item.checked = true;
                        item.owner = ai_Id;
                        aiPosArr.push(item.id);
                    }
                });
            }
           
        }

        function thirdMove(sideArr, num1, num2, checker) {
            let holderArr = [];
            // find the wanted numbers, store them for comparison
            // OFFENCE
            if (sideArr === aiPosArr && nextMove === false) {
                sideArr.forEach((item, index) => {
                    if (item === num1 || item === num2) {
                        holderArr.push(item);
                    }
                });
                // once we get searched the numbers, sort them and perform move check
                if (holderArr[holderArr.length - 2] > holderArr[holderArr.length - 1]) {
                    let swapper;
                    swapper = holderArr[holderArr.length - 2];
                    holderArr[holderArr.length - 2] = holderArr[holderArr.length - 1];
                    holderArr[holderArr.length - 1] = swapper;
                }
                if (holderArr[0] === num1 && holderArr[1] === num2 && dataObj[checker].checked === false) {
                    dataObj[checker].display();
                    dataObj[checker].checked = true;
                    dataObj[checker].owner = ai_Id;
                    sideArr.push(dataObj[checker].id);
                    console.log("third move offence", num1, num2, checker);
                    nextMove = true;
                    checkVictory();                    
                }
            }
            //DEFENCE
            else if (sideArr === pPosArr && nextMove === false) {
                sideArr.forEach((item, index) => {
                    if (item === num1 || item === num2) {
                        holderArr.push(item);
                    }
                });
                // once we get searched the numbers, sort them and perform move check
                if (holderArr[holderArr.length - 2] > holderArr[holderArr.length - 1]) {
                    let swapper;
                    swapper = holderArr[holderArr.length - 2];
                    holderArr[holderArr.length - 2] = holderArr[holderArr.length - 1];
                    holderArr[holderArr.length - 1] = swapper;
                }
                if (holderArr[0] === num1 && holderArr[1] === num2 && dataObj[checker].checked === false) {
                    dataObj[checker].display();
                    dataObj[checker].checked = true;
                    dataObj[checker].owner = ai_Id;                    
                    aiPosArr.push(dataObj[checker].id);
                    console.log("third move defence", num1, num2, checker);
                    nextMove = true;
                    checkVictory();                    
                }

            }
        }

        function aiMove() {
            //generate a random number referencing corner positions (0,2,6,8) 
            let randomCornerNum = generateNum(0, 8, true);

            // ---------------- first move -------------

            // place on random corner
            if (ai_Id === "X" && firstMove === true) {
                console.log('first move, placing on corner X');

                dataObj[randomCornerNum].owner = "X";
                dataObj[randomCornerNum].display();
                dataObj[randomCornerNum].checked = true;
                aiPosArr.push(dataObj[randomCornerNum].id)

                firstMove = false;
                secondMove = true;
                nextTurn();
            } else if (ai_Id === "O" && firstMove === true) {
                console.log('first move, placing on corner O');

                dataObj[randomCornerNum].owner = "O";
                dataObj[randomCornerNum].display();
                dataObj[randomCornerNum].checked = true;
                aiPosArr.push(dataObj[randomCornerNum].id)

                firstMove = false;
                secondMove = true;
                nextTurn();
            }

            // -----------------second move-----------------------
            else if (secondMove === true) {
                generateSecondMove();
                secondMove = false;
                nextTurn();
            }

            // --------------- third and on move -----------------
            else if (firstMove === false && secondMove === false) {
                console.log('third move initalized');

                // get ai moves for OFFENCE
                thirdMove(aiPosArr, 0, 1, 6);
                thirdMove(aiPosArr, 0, 3, 2);
                thirdMove(aiPosArr, 1, 2, 0);
                thirdMove(aiPosArr, 2, 5, 8);
                thirdMove(aiPosArr, 1, 4, 5);
                thirdMove(aiPosArr, 4, 7, 3);
                thirdMove(aiPosArr, 3, 6, 0);
                thirdMove(aiPosArr, 6, 7, 8);
                thirdMove(aiPosArr, 7, 8, 2);
                thirdMove(aiPosArr, 5, 8, 6);
                thirdMove(aiPosArr, 4, 5, 1);
                thirdMove(aiPosArr, 3, 4, 7);
                thirdMove(aiPosArr, 4, 6, 6);
                thirdMove(aiPosArr, 2, 4, 2);
                thirdMove(aiPosArr, 4, 8, 0);
                thirdMove(aiPosArr, 0, 4, 8);
                thirdMove(aiPosArr, 0, 2, 3);
                thirdMove(aiPosArr, 3, 5, 4);
                thirdMove(aiPosArr, 6, 8, 5);
                thirdMove(aiPosArr, 0, 6, 1);
                thirdMove(aiPosArr, 1, 7, 4);
                thirdMove(aiPosArr, 2, 8, 7);
                thirdMove(aiPosArr, 0, 8, 4);
                thirdMove(aiPosArr, 2, 6, 4);
                // defence
                thirdMove(pPosArr, 0, 1, 6);
                thirdMove(pPosArr, 0, 3, 2);
                thirdMove(pPosArr, 1, 2, 0);
                thirdMove(pPosArr, 2, 5, 8);
                thirdMove(pPosArr, 1, 4, 5);
                thirdMove(pPosArr, 4, 7, 3);
                thirdMove(pPosArr, 3, 6, 0);
                thirdMove(pPosArr, 6, 7, 8);
                thirdMove(pPosArr, 7, 8, 2);
                thirdMove(pPosArr, 5, 8, 6);
                thirdMove(pPosArr, 4, 5, 1);
                thirdMove(pPosArr, 3, 4, 7);
                thirdMove(pPosArr, 4, 6, 6);
                thirdMove(pPosArr, 2, 4, 2);
                thirdMove(pPosArr, 4, 8, 0);
                thirdMove(pPosArr, 0, 4, 8);
                thirdMove(pPosArr, 0, 2, 3);
                thirdMove(pPosArr, 3, 5, 4);
                thirdMove(pPosArr, 6, 8, 5);
                thirdMove(pPosArr, 0, 6, 1);
                thirdMove(pPosArr, 1, 7, 4);
                thirdMove(pPosArr, 2, 8, 7);
                thirdMove(pPosArr, 0, 8, 4);
                thirdMove(pPosArr, 2, 6, 4);

                if (nextMove === false) {
                    console.log('nextMove je false, postavi random!');
                    generateSecondMove();
                    checkVictory();
                    nextTurn();
                }
                else if (nextMove === true) {
                    console.log('al pa tle, ne naredit nic');
                    nextTurn();
                    nextMove = false;
                }

            }
        }



        /* ------------------------------------ inputs ----------------------------------- */

        // additional info,
        $("#infoButton").on("click", ()=> {
            console.log('kliknil enkrat notranji info');
            
            console.log("dataObj", dataObj);
            
        });

        // manage user input and display fields
        let a1 = $("#a1").on("click", () => {

            if (turnX === true && endGame === false) {
                if (dataObj[0].checked === false) {
                    dataObj[0].owner = "X";
                    dataObj[0].display();
                    dataObj[0].checked = true;

                    pPosArr.push(dataObj[0].id)
                    checkVictory();

                    nextTurn();
                    aiMove();
                    checkVictory();

                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[0].checked === false) {
                    dataObj[0].owner = "O";
                    dataObj[0].display();
                    dataObj[0].checked = true;

                    pPosArr.push(dataObj[0].id)
                    checkVictory();


                    nextTurn();
                    aiMove();
                    checkVictory();
                }
            }


        });
        let a2 = $("#a2").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[1].checked === false) {
                    dataObj[1].owner = "X";
                    dataObj[1].display();
                    dataObj[1].checked = true;


                    pPosArr.push(dataObj[1].id)
                    checkVictory();


                    nextTurn();
                    dataObj[1].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[1].checked === false) {
                    dataObj[1].owner = "O";
                    dataObj[1].display();
                    dataObj[1].checked = true;

                    pPosArr.push(dataObj[1].id)
                    checkVictory();

                    nextTurn();
                    dataObj[1].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let a3 = $("#a3").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[2].checked === false) {
                    dataObj[2].owner = "X";
                    dataObj[2].display();
                    dataObj[2].checked = true;

                    pPosArr.push(dataObj[2].id);
                    checkVictory();

                    nextTurn();
                    dataObj[2].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[2].checked === false) {
                    dataObj[2].owner = "O";
                    dataObj[2].display();
                    dataObj[2].checked = true;

                    pPosArr.push(dataObj[2].id);
                    checkVictory();

                    nextTurn();
                    dataObj[2].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let b1 = $("#b1").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[3].checked === false) {
                    dataObj[3].owner = "X";
                    dataObj[3].display();
                    dataObj[3].checked = true;

                    pPosArr.push(dataObj[3].id);
                    checkVictory();

                    nextTurn();
                    dataObj[3].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[3].checked === false) {
                    dataObj[3].owner = "O";
                    dataObj[3].display();
                    dataObj[3].checked = true;

                    pPosArr.push(dataObj[3].id);
                    checkVictory();

                    nextTurn();
                    dataObj[3].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let b2 = $("#b2").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[4].checked === false) {
                    dataObj[4].owner = "X";
                    dataObj[4].display();
                    dataObj[4].checked = true;

                    pPosArr.push(dataObj[4].id);
                    checkVictory();

                    nextTurn();
                    dataObj[4].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[4].checked === false) {
                    dataObj[4].owner = "O";
                    dataObj[4].display();
                    dataObj[4].checked = true;

                    pPosArr.push(dataObj[4].id);
                    checkVictory();
                    checkVictory();

                    nextTurn();
                    dataObj[4].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let b3 = $("#b3").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[5].checked === false) {
                    dataObj[5].owner = "X";
                    dataObj[5].display();
                    dataObj[5].checked = true;

                    pPosArr.push(dataObj[5].id);
                    checkVictory();

                    nextTurn();
                    dataObj[5].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[5].checked === false) {
                    dataObj[5].owner = "O";
                    dataObj[5].display();
                    dataObj[5].checked = true;

                    pPosArr.push(dataObj[5].id);
                    checkVictory();

                    nextTurn();
                    dataObj[5].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let c1 = $("#c1").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[6].checked === false) {
                    dataObj[6].owner = "X";
                    dataObj[6].display();
                    dataObj[6].checked = true;

                    pPosArr.push(dataObj[6].id);
                    checkVictory();

                    nextTurn();
                    dataObj[6].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[6].checked === false) {
                    dataObj[6].owner = "O";
                    dataObj[6].display();
                    dataObj[6].checked = true;

                    pPosArr.push(dataObj[6].id);
                    checkVictory();

                    nextTurn();
                    dataObj[6].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let c2 = $("#c2").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[7].checked === false) {
                    dataObj[7].owner = "X";
                    dataObj[7].display();
                    dataObj[7].checked = true;

                    pPosArr.push(dataObj[7].id);
                    checkVictory();
                    nextTurn();
                    dataObj[7].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[7].checked === false) {
                    dataObj[7].owner = "O";
                    dataObj[7].display();
                    dataObj[7].checked = true;

                    pPosArr.push(dataObj[7].id);
                    checkVictory();

                    nextTurn();
                    dataObj[7].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
        let c3 = $("#c3").on("click", () => {
            if (turnX === true && endGame === false) {
                if (dataObj[8].checked === false) {
                    dataObj[8].owner = "X";
                    dataObj[8].display();
                    dataObj[8].checked = true;

                    pPosArr.push(dataObj[8].id);
                    checkVictory();

                    nextTurn();
                    dataObj[8].getValue();
                    aiMove();
                    checkVictory();
                }
            } else if (turnO === true && endGame === false) {
                if (dataObj[8].checked === false) {
                    dataObj[8].owner = "O";
                    dataObj[8].display();
                    dataObj[8].checked = true;

                    pPosArr.push(dataObj[8].id);
                    checkVictory();

                    nextTurn();
                    dataObj[8].getValue();
                    aiMove();
                    checkVictory();
                }
            }
        });
    }

});