/* TIC TAC toe, v.1.0 Stupar Andrej, 21.08.2017 ... Loving it so far :D
/* TASK: restructure the overall code, minimize repeating,
         all functionalities set tho
*/


$(document).ready(() => {

    let startGame = false;
    let firstMove = true;
    let secondMove = true;
    let thirdMove = true;
    let turnX = false;
    let turnO = false;
    let pPosArr = [];
    let aiPosArr = [];
    let ai_Id, playerId;
    let endGame = false;
    let winner = undefined;

    // at splash, initialize #modal, hide #game
    $("#modal").css("display", "block");
    $("#game").css("display", "none");

    // in modal, choose player and start game
    $("#inputX").on("click", () => {
        // if starting over, reset the data from previous game
        if (startGame === true) {
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
        console.log('turnX: ', turnX);
        console.log('turnO: ', turnO);
        console.log("player id ", playerId);
        console.log("ai id ", ai_Id);
        console.log('aiPosArr', aiPosArr);
        console.log('pPosArr', pPosArr);
    });
    // complete reset when game starting over, all changes altered during game
    function reset() {
        firstMove = true;
        secondMove = true;
        thirdMove = true;
        turnX = false;
        turnO = false;
        pPosArr = [];
        aiPosArr = [];
        ai_Id, playerId;
        endGame = false;
        winner = undefined;

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
    }
    // control the display of draw or win display modals
    function victoryModal(typeOfVictory) {
        if (typeOfVictory === "draw") {
            $("#game").css("display", "none");
            $("#draw").css("display", "block");
            let counter = 5;
            let int3 = setInterval(() => {
                console.log("kosha", counter);
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
            name: "a1",
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

        console.log('starting');
        // mark the start of the game, ai always starts first
        if (startGame === false) {
            startGame = true;
            aiMove();
        }
        else if (startGame === true) {
            aiMove();
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
        // go through all the possible victory combinations
        function checkVictory() {
            // check if all fields are full and end the game
            let check = dataObj.reduce((operator, item) => {
                if (item.checked === true) {
                    operator++;
                }
                return operator;
            }, 0);

            // a1a2a3
            if (dataObj[0].getValue() === "X" && dataObj[1].getValue() === "X" && dataObj[2].getValue() === "X" && endGame === false) {
                dataObj[0].draw();
                dataObj[1].draw();
                dataObj[2].draw();
                console.log('victory for X through A1 A2 A3');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[0].getValue() === "O" && dataObj[1].getValue() === "O" && dataObj[2].getValue() === "O" && endGame === false) {
                dataObj[0].draw();
                dataObj[1].draw();
                dataObj[2].draw();
                console.log('victory for O through A1 A2 A3');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // a1b1c1
            else if (dataObj[0].getValue() === "X" && dataObj[3].getValue() === "X" && dataObj[6].getValue() === "X" && endGame === false) {
                dataObj[0].draw();
                dataObj[3].draw();
                dataObj[6].draw();
                console.log('victory for X through A1 B1 C1');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[0].getValue() === "O" && dataObj[3].getValue() === "O" && dataObj[6].getValue() === "O" && endGame === false) {
                dataObj[0].draw();
                dataObj[3].draw();
                dataObj[6].draw();
                console.log('victory for O through A1 B1 C1');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // c1c2c3
            else if (dataObj[6].getValue() === "X" && dataObj[7].getValue() === "X" && dataObj[8].getValue() === "X" && endGame === false) {
                dataObj[6].draw();
                dataObj[7].draw();
                dataObj[8].draw();
                console.log('victory for X through c1c2c3');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[6].getValue() === "O" && dataObj[7].getValue() === "O" && dataObj[8].getValue() === "O" && endGame === false) {
                dataObj[6].draw();
                dataObj[7].draw();
                dataObj[8].draw();
                console.log('victory for O through c1c2c3');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // a3b3c3
            else if (dataObj[2].getValue() === "X" && dataObj[5].getValue() === "X" && dataObj[8].getValue() === "X" && endGame === false) {
                dataObj[2].draw();
                dataObj[5].draw();
                dataObj[8].draw();
                console.log('victory for X through a3b3c3');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[2].getValue() === "O" && dataObj[5].getValue() === "O" && dataObj[8].getValue() === "O" && endGame === false) {
                dataObj[2].draw();
                dataObj[5].draw();
                dataObj[8].draw();
                console.log('victory for O through a3b3c3');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // a2b2c2
            else if (dataObj[1].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[7].getValue() === "X" && endGame === false) {
                dataObj[1].draw();
                dataObj[4].draw();
                dataObj[7].draw();
                console.log('victory for X through a2b2c2 (middle horizontal)');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[1].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[7].getValue() === "O" && endGame === false) {
                dataObj[1].draw();
                dataObj[4].draw();
                dataObj[7].draw();
                console.log('victory for O through a2b2c2 (middle horizontal)');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // b1b2b3
            else if (dataObj[3].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[5].getValue() === "X" && endGame === false) {
                dataObj[3].draw();
                dataObj[4].draw();
                dataObj[5].draw();
                console.log('victory for X through b1b2b3 (middle vertical)');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[3].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[5].getValue() === "O" && endGame === false) {
                dataObj[3].draw();
                dataObj[4].draw();
                dataObj[5].draw();
                winner = "O";
                victoryModal("win");
                console.log('victory for O through 1b2b3 (middle vertical)');
                endGame = true;
            }
            // a3b2c1
            else if (dataObj[2].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[6].getValue() === "X" && endGame === false) {
                dataObj[2].draw();
                dataObj[4].draw();
                dataObj[6].draw();
                console.log('victory for X through a3b2c1 (diagnonal)');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[2].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[6].getValue() === "O" && endGame === false) {
                dataObj[2].draw();
                dataObj[4].draw();
                dataObj[6].draw();
                console.log('victory for O through a3b2c1 (diagnonal)');
                winner = "O";
                victoryModal("win");
                endGame = true;
            }
            // a1b2c3
            else if (dataObj[0].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[8].getValue() === "X" && endGame === false) {
                dataObj[0].draw();
                dataObj[4].draw();
                dataObj[8].draw();
                console.log('victory for X through a1b2c3 (diagnonal)');
                winner = "X";
                victoryModal("win");
                endGame = true;
            } else if (dataObj[0].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[8].getValue() === "O" && endGame === false) {
                dataObj[0].draw();
                dataObj[4].draw();
                dataObj[8].draw();
                console.log('victory for O through a1b2c3 (diagnonal)');
                winner = "O";
                victoryModal("win");
                endGame = true;
                // if all fields are full, end game, do it in a fancy way 
            } else if (check === 9 && endGame === false) {


                console.log("Time's up");
                endGame = true;
                // bring up draw modal
                victoryModal("draw");

            }
        }
        // recursive function: generate a second move for ai, checks if corners are avaiable, else places randomly
        function aiSecondMove(num, sideString) {
            if (dataObj[num].owner === undefined) {
                dataObj[num].display();
                dataObj[num].checked = true;
                dataObj[num].owner = sideString;
                aiPosArr.push(dataObj[num].id);
            } else {
                aiSecondMove(generateNum(0, 8, true), sideString);
            }
        }
        // swap last 2 numbers so we can check on all combinations of the last two numbers 
        function swapL2NArr(arr) {
            if (arr === aiPosArr) {
                let holder = [];
                holder.push(arr[arr.length - 1]);
                holder.push(arr[arr.length - 2]);
                arr.pop();
                arr.pop();
                var x = arr.concat(holder);
                aiPosArr = x;
            }
            else if (arr === pPosArr) {
                let holder = [];
                holder.push(arr[arr.length - 1]);
                holder.push(arr[arr.length - 2]);
                arr.pop();
                arr.pop();
                var x = arr.concat(holder);
                pPosArr = x;
            }

        }
        // if two fields are nearby with same symbol, defend
        function atckDef() {

            // if the array we're using is not incremently sorted, do so
            if (pPosArr[pPosArr.length - 2] > pPosArr[pPosArr.length - 1]) {
                swapL2NArr(pPosArr);
            }
            if (aiPosArr[aiPosArr.length - 2] > aiPosArr[aiPosArr.length - 1]) {
                swapL2NArr(aiPosArr);
            }

            // OFFENCE --------------------------------------------------------

            if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 1 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                dataObj[6].owner = ai_Id;
                aiPosArr.push(dataObj[6].id);
                nextTurn();
            }
            // 0,3
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 3 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                dataObj[2].owner = ai_Id;
                aiPosArr.push(dataObj[2].id);
                nextTurn();
            }
            // 1,2
            else if (aiPosArr[aiPosArr.length - 2] === 1 && aiPosArr[aiPosArr.length - 1] === 2 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                dataObj[0].owner = ai_Id;
                aiPosArr.push(dataObj[0].id);
                nextTurn();
            }
            // 2,5
            else if (aiPosArr[aiPosArr.length - 2] === 2 && aiPosArr[aiPosArr.length - 1] === 5 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                dataObj[8].owner = ai_Id;
                aiPosArr.push(dataObj[8].id);
                nextTurn();
            }
            //1,4
            else if (aiPosArr[aiPosArr.length - 2] === 1 && aiPosArr[aiPosArr.length - 1] === 4 && dataObj[5].checked === false) {
                dataObj[5].display();
                dataObj[5].checked = true;
                dataObj[5].owner = ai_Id;
                aiPosArr.push(dataObj[5].id);
                nextTurn();
            }
            // 7,4
            else if (aiPosArr[aiPosArr.length - 2] === 4 && aiPosArr[aiPosArr.length - 1] === 7 && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                dataObj[3].owner = ai_Id;
                aiPosArr.push(dataObj[3].id);
                nextTurn();
            }
            // 6,3
            else if (aiPosArr[aiPosArr.length - 2] === 3 && aiPosArr[aiPosArr.length - 1] === 6 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                dataObj[0].owner = ai_Id;
                aiPosArr.push(dataObj[0].id);
                nextTurn();
            }
            // 6,7
            else if (aiPosArr[aiPosArr.length - 2] === 6 && aiPosArr[aiPosArr.length - 1] === 7 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                dataObj[8].owner = ai_Id;
                aiPosArr.push(dataObj[8].id);
                nextTurn();
            }
            // 8,7
            else if (aiPosArr[aiPosArr.length - 2] === 7 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                dataObj[2].owner = ai_Id;
                aiPosArr.push(dataObj[2].id);
                nextTurn();
            }
            // 8,5
            else if (aiPosArr[aiPosArr.length - 2] === 5 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                dataObj[6].owner = ai_Id;
                aiPosArr.push(dataObj[6].id);
                nextTurn();
            }
            // 4,5
            else if (aiPosArr[aiPosArr.length - 2] === 4 && aiPosArr[aiPosArr.length - 1] === 5 && dataObj[1].checked === false) {
                dataObj[1].display();
                dataObj[1].checked = true;
                dataObj[1].owner = ai_Id;
                aiPosArr.push(dataObj[1].id);
                nextTurn();
            }
            // 3,4
            else if (aiPosArr[aiPosArr.length - 2] === 3 && aiPosArr[aiPosArr.length - 1] === 4 && dataObj[7].checked === false) {
                dataObj[7].display();
                dataObj[7].checked = true;
                dataObj[7].owner = ai_Id;
                aiPosArr.push(dataObj[7].id);
                nextTurn();
            }
            // 6,4
            else if (aiPosArr[aiPosArr.length - 2] === 4 && aiPosArr[aiPosArr.length - 1] === 6 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                dataObj[6].owner = ai_Id;
                aiPosArr.push(dataObj[6].id);
                nextTurn();
            }
            // 2,4
            else if (aiPosArr[aiPosArr.length - 2] === 2 && aiPosArr[aiPosArr.length - 1] === 4 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                dataObj[2].owner = ai_Id;
                aiPosArr.push(dataObj[2].id);
                nextTurn();
            }
            // 8,4
            else if (aiPosArr[aiPosArr.length - 2] === 4 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                dataObj[0].owner = ai_Id;
                aiPosArr.push(dataObj[0].id);
                nextTurn();
            }
            // 0,4
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 4 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                dataObj[8].owner = ai_Id;
                aiPosArr.push(dataObj[8].id);
                nextTurn();
            }
            // 0,2
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 2 && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                dataObj[3].owner = ai_Id;
                aiPosArr.push(dataObj[3].id);
                nextTurn();
            }
            // 3,5
            else if (aiPosArr[aiPosArr.length - 2] === 3 && aiPosArr[aiPosArr.length - 1] === 5 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                dataObj[4].owner = ai_Id;
                aiPosArr.push(dataObj[4].id);
                nextTurn();
            }
            // 6,8
            else if (aiPosArr[aiPosArr.length - 2] === 6 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[5].checked === false) {
                dataObj[5].display();
                dataObj[5].checked = true;
                dataObj[5].owner = ai_Id;
                aiPosArr.push(dataObj[5].id);
                nextTurn();
            }
            // 0,6
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 6 && dataObj[1].checked === false) {
                dataObj[1].display();
                dataObj[1].checked = true;
                dataObj[1].owner = ai_Id;
                aiPosArr.push(dataObj[1].id);
                nextTurn();
            }
            // 1,7
            else if (aiPosArr[aiPosArr.length - 2] === 1 && aiPosArr[aiPosArr.length - 1] === 7 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                dataObj[4].owner = ai_Id;
                aiPosArr.push(dataObj[4].id);
                nextTurn();
            }
            // 2,8
            else if (aiPosArr[aiPosArr.length - 2] === 2 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[7].checked === false) {
                dataObj[7].display();
                dataObj[7].checked = true;
                dataObj[7].owner = ai_Id;
                aiPosArr.push(dataObj[7].id);
                nextTurn();
            }
            // 0,8 (4)
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                dataObj[4].owner = ai_Id;
                aiPosArr.push(dataObj[4].id);
                nextTurn();
            }
            // 0,8 (3)
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[6].owner === ai_Id && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                dataObj[3].owner = ai_Id;
                aiPosArr.push(dataObj[3].id);
                nextTurn();
            }
            // 0,8 (1)
            else if (aiPosArr[aiPosArr.length - 2] === 0 && aiPosArr[aiPosArr.length - 1] === 8 && dataObj[2].owner === ai_Id && dataObj[1].checked === false) {
                dataObj[1].display();
                dataObj[1].checked = true;
                dataObj[1].owner = ai_Id;
                aiPosArr.push(dataObj[1].id);
                nextTurn();
            }
            // end OFFENCE -----------------------------------------------------------

            // DEFENCE --------------------------------------------------------

            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 1 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                dataObj[6].owner;
                nextTurn();
                aiPosArr.push(dataObj[6].id);
            }
            // 0,3
            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 3 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[2].id);
            }
            // 1,2
            else if (pPosArr[pPosArr.length - 2] === 1 && pPosArr[pPosArr.length - 1] === 2 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[0].id);
            }
            // 2,5
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 5 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[8].id);
            }
            //1,4
            else if (pPosArr[pPosArr.length - 2] === 1 && pPosArr[pPosArr.length - 1] === 4 && dataObj[5].checked === false) {
                dataObj[5].display();
                dataObj[5].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[5].id);
            }
            // 7,4
            else if (pPosArr[pPosArr.length - 2] === 4 && pPosArr[pPosArr.length - 1] === 7 && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[3].id);
            }
            // 6,3
            else if (pPosArr[pPosArr.length - 2] === 3 && pPosArr[pPosArr.length - 1] === 6 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[0].id);
            }
            // 6,7
            else if (pPosArr[pPosArr.length - 2] === 6 && pPosArr[pPosArr.length - 1] === 7 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[8].id);
            }
            // 8,7
            else if (pPosArr[pPosArr.length - 2] === 7 && pPosArr[pPosArr.length - 1] === 8 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[2].id);
            }
            // 8,5
            else if (pPosArr[pPosArr.length - 2] === 5 && pPosArr[pPosArr.length - 1] === 8 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[6].id);
            }
            // 4,5
            else if (pPosArr[pPosArr.length - 2] === 4 && pPosArr[pPosArr.length - 1] === 5 && dataObj[1].checked === false) {
                dataObj[1].display();
                dataObj[1].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[1].id);
            }
            // 3,4
            else if (pPosArr[pPosArr.length - 2] === 3 && pPosArr[pPosArr.length - 1] === 4 && dataObj[7].checked === false) {
                dataObj[7].display();
                dataObj[7].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[7].id);
            }
            // 6,4
            else if (pPosArr[pPosArr.length - 2] === 4 && pPosArr[pPosArr.length - 1] === 6 && dataObj[6].checked === false) {
                dataObj[6].display();
                dataObj[6].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[6].id);
            }
            // 2,4
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 4 && dataObj[2].checked === false) {
                dataObj[2].display();
                dataObj[2].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[2].id);
            }
            // 8,4
            else if (pPosArr[pPosArr.length - 2] === 4 && pPosArr[pPosArr.length - 1] === 8 && dataObj[0].checked === false) {
                dataObj[0].display();
                dataObj[0].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[0].id);
            }
            // 0,4
            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 4 && dataObj[8].checked === false) {
                dataObj[8].display();
                dataObj[8].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[8].id);
            }
            // 0,2
            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 2 && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[3].id);
            }
            // 3,5
            else if (pPosArr[pPosArr.length - 2] === 3 && pPosArr[pPosArr.length - 1] === 5 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[4].id);
            }
            // 6,8
            else if (pPosArr[pPosArr.length - 2] === 6 && pPosArr[pPosArr.length - 1] === 8 && dataObj[5].checked === false) {
                dataObj[5].display();
                dataObj[5].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[5].id);
            }
            // 0,6
            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 6 && dataObj[1].checked === false) {
                dataObj[1].display();
                dataObj[1].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[1].id);
            }
            // 1,7
            else if (pPosArr[pPosArr.length - 2] === 1 && pPosArr[pPosArr.length - 1] === 7 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[4].id);
            }
            // 2,8
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 8 && dataObj[7].checked === false) {
                dataObj[7].display();
                dataObj[7].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[7].id);
            }
            // 0,8
            else if (pPosArr[pPosArr.length - 2] === 0 && pPosArr[pPosArr.length - 1] === 8 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[4].id);
            }
            // 2,6
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 6 && dataObj[4].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[4].id);
            }
            // 2,6 (7)
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 6 && dataObj[8].owner === ai_Id && dataObj[7].checked === false) {
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[4].id);
            }
            // 2,6 (3)
            else if (pPosArr[pPosArr.length - 2] === 2 && pPosArr[pPosArr.length - 1] === 6 && dataObj[0].owner === ai_Id && dataObj[3].checked === false) {
                dataObj[3].display();
                dataObj[3].checked = true;
                nextTurn();
                aiPosArr.push(dataObj[3].id);
            }
            // end DEFENCE -----------------------------------------------------------

            // if no offence or defence needed, place ai randomly on corners
            else {
                console.log('going random move, no offence no defence');

                let match;
                if (ai_Id === "X") {
                    if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                        console.log('random 1');

                        for (let i = 0; i < dataObj.length; i++) {
                            if (dataObj[i].checked === false) {
                                match = dataObj[i];
                            }
                        }
                        match.display();
                        match.checked = true;
                        aiPosArr.push(match.id);
                        nextTurn();
                        secondMove = false;
                    }
                    else {
                        console.log('random 2');
                        aiSecondMove(8, "X");
                        nextTurn();
                        secondMove = false;
                    }
                }
                else if (ai_Id === "O") {
                    if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                        console.log('random 3');
                        for (let i = 0; i < dataObj.length; i++) {
                            if (dataObj[i].checked === false) {
                                match = dataObj[i];
                            }
                        }
                        match.display();
                        match.checked = true;
                        aiPosArr.push(match.id);
                        nextTurn();
                        secondMove = false;
                    }
                    else {
                        console.log('random 4');
                        aiSecondMove(8, "O");
                        nextTurn();
                        secondMove = false;
                    }
                }
            }
        }

        function aiMove() {
            //generate a random number referencing corner positions (0,2,6,8) 
            let randomCornerNum = generateNum(0, 8, true);

            // first move, place on random corner -------------
            if (ai_Id === "X" && firstMove === true) {
                dataObj[randomCornerNum].owner = "X";
                dataObj[randomCornerNum].display();
                dataObj[randomCornerNum].checked = true;
                firstMove = false;
                aiPosArr.push(dataObj[randomCornerNum].id)

                nextTurn();
            } else if (ai_Id === "O" && firstMove === true) {
                dataObj[randomCornerNum].owner = "O";
                dataObj[randomCornerNum].display();
                dataObj[randomCornerNum].checked = true;
                firstMove = false;
                aiPosArr.push(dataObj[randomCornerNum].id)

                nextTurn();
            }
            // ------------ end first move -------------------

            // second move, again push on the corners, where avaiable ------------
            else if (ai_Id === "X" && firstMove === false && secondMove === true) {

                // if all corners taken, stop second move
                if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                    nextTurn();
                    secondMove = false;
                } else {
                    aiSecondMove(8, "X");
                    nextTurn();
                    secondMove = false;
                }
            } else if (ai_Id === "O" && firstMove === false && secondMove === true) {
                if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                    nextTurn();
                    secondMove = false;
                } else {
                    aiSecondMove(8, "O");
                    nextTurn();
                    secondMove = false;
                }
            }
            // ------------ end second move -------------------------------

            // ------------ third move -----------------------------------

            else if (ai_Id == "X" && firstMove === false && secondMove === false) {
                // check if player is about to win
                atckDef("X");
            }
            else if (ai_Id == "O" && firstMove === false && secondMove === false) {
                // check if player is about to win
                atckDef("O");
            }
        }
        /* ------------------------------------ inputs ----------------------------------- */

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