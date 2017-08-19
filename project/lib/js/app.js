/* TIC TAC toe, v.0.1 Stupar Andrej, 18.08.2017 ... Loving it so far :D
// 1. continue building the generate random function, what is missing is return a single value
//    from 0-8, when third argument is active. Now it returns stack overflow
// 2. build the first move from the AI. The first move should position AI at the corner of fields
// 3. build the second move. Should be moving to cornes too.
// 4. build the third move, get position from player and block it
*/

$(document).ready(() => {
    console.log('STARTING');

    // test 

    function test(num, string) {

        if (num === 1) {} else {
            test(num - 1, string)
        }
        console.log(string + " " + num);
    }

    test(2, "moj ocka ima konjicka");

    // end test 
    let P1;
    let P2;

    let firstMove = true;
    let secondMove = true;
    let thirdMove = true;
    let turnX = false;
    let turnO = false;
    let pPosArr = [];
    let aiPosArr = [];
    let ai_Id, playerId;

    // each filed has it's own properties. From here we store changes, transformations etc
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
            }
        },
        {
            name: "b1",
            id: 1,
            owner: undefined,
            checked: false,
            display: function () {
                if (turnX === true && this.checked !== true) {
                    console.log();

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
            }
        },
        {
            name: "c1",
            id: 2,
            owner: undefined,
            checked: false,
            display: function () {
                if (turnX === true && this.checked !== true) {
                    $("#c1").text("x");
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
            }
        }
    ];
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
        // a1a2a3
        if (dataObj[0].getValue() === "X" && dataObj[1].getValue() === "X" && dataObj[2].getValue() === "X") {
            console.log('victory for X through A1 A2 A3');
        } else if (dataObj[0].getValue() === "O" && dataObj[1].getValue() === "O" && dataObj[2].getValue() === "O") {
            console.log('victory for O through A1 A2 A3');
        }
        // a1b1c1
        else if (dataObj[0].getValue() === "X" && dataObj[3].getValue() === "X" && dataObj[6].getValue() === "X") {
            console.log('victory for X through A1 B1 C1');
        } else if (dataObj[0].getValue() === "O" && dataObj[3].getValue() === "O" && dataObj[6].getValue() === "O") {
            console.log('victory for O through A1 B1 C1');
        }
        // c1c2c3
        else if (dataObj[6].getValue() === "X" && dataObj[7].getValue() === "X" && dataObj[8].getValue() === "X") {
            console.log('victory for X through c1c2c3');
        } else if (dataObj[6].getValue() === "O" && dataObj[7].getValue() === "O" && dataObj[8].getValue() === "O") {
            console.log('victory for O through c1c2c3');
        }
        // a3b3c3
        else if (dataObj[2].getValue() === "X" && dataObj[5].getValue() === "X" && dataObj[8].getValue() === "X") {
            console.log('victory for X through a3b3c3');
        } else if (dataObj[2].getValue() === "O" && dataObj[5].getValue() === "O" && dataObj[8].getValue() === "O") {
            console.log('victory for O through a3b3c3');
        }
        // a2b2c2
        else if (dataObj[1].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[7].getValue() === "X") {
            console.log('victory for X through a2b2c2 (middle horizontal)');
        } else if (dataObj[1].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[7].getValue() === "O") {
            console.log('victory for O through a2b2c2 (middle horizontal)');
        }
        // b1b2b3
        else if (dataObj[3].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[5].getValue() === "X") {
            console.log('victory for X through b1b2b3 (middle vertical)');
        } else if (dataObj[3].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[5].getValue() === "O") {
            console.log('victory for O through 1b2b3 (middle vertical)');
        }
        // a3b2c1
        else if (dataObj[2].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[6].getValue() === "X") {
            console.log('victory for X through a3b2c1 (diagnonal)');
        } else if (dataObj[2].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[6].getValue() === "O") {
            console.log('victory for O through a3b2c1 (diagnonal)');
        }
        // a1b2c3
        else if (dataObj[0].getValue() === "X" && dataObj[4].getValue() === "X" && dataObj[8].getValue() === "X") {
            console.log('victory for X through a1b2c3 (diagnonal)');
        } else if (dataObj[0].getValue() === "O" && dataObj[4].getValue() === "O" && dataObj[8].getValue() === "O") {
            console.log('victory for O through a1b2c3 (diagnonal)');
        }
    }

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

    function aiMove() {
        let randomNumById = generateNum(1, 9);
        let randomNumByIndex = generateNum(0, 8);
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
        else if (ai_Id === "X" && firstMove === false) {

            // if all corners taken, stop second move
            if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                console.log('finished');
                nextTurn();
            } else {
                aiSecondMove(8, "X");
                nextTurn();                
            }
        } else if (ai_Id === "O" && firstMove === false) {
            if (dataObj[0].checked === true && dataObj[2].checked === true && dataObj[6].checked === true && dataObj[8].checked === true) {
                console.log('finished');
                nextTurn();
            } else {
                aiSecondMove(8, "O");
                nextTurn();                
            }
        }

        // third move, victory to hell

        else if(ai_Id == "X" && firstMove === false && secondMove === false) {

        }
    }
    /* ------------------------------------ inputs ----------------------------------- */

    // chose side and let A.I. do first move
    $("#inputX").on("click", () => {
        playerId = "X";
        ai_Id = "O";
        turnX = false;
        turnO = true;
        aiMove();
        $("#currentPlayer").text("Current player: X");
    });
    $("#inputO").on("click", () => {
        playerId = "O";
        ai_Id = "X";
        turnO = false;
        turnX = true;
        aiMove();
        $("#currentPlayer").text("Current player: O");
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

    // manage user input and display fields
    let a1 = $("#a1").on("click", () => {
        if (turnX === true) {
            if (dataObj[0].checked === false) {
                dataObj[0].owner = "X";
                dataObj[0].display();
                dataObj[0].checked = true;

                pPosArr.push(dataObj[0].id)

                nextTurn();
                aiMove();
                checkVictory();

            }
        } else if (turnO === true) {
            if (dataObj[0].checked === false) {
                dataObj[0].owner = "O";
                dataObj[0].display();
                dataObj[0].checked = true;

                pPosArr.push(dataObj[0].id)


                nextTurn();
                aiMove();
                checkVictory();
            }
        }


    });
    let a2 = $("#a2").on("click", () => {
        if (turnX === true) {
            if (dataObj[1].checked === false) {
                dataObj[1].owner = "X";
                dataObj[1].display();
                dataObj[1].checked = true;
                nextTurn();
                dataObj[1].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[1].checked === false) {
                dataObj[1].owner = "O";
                dataObj[1].display();
                dataObj[1].checked = true;
                nextTurn();
                dataObj[1].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let a3 = $("#a3").on("click", () => {
        if (turnX === true) {
            if (dataObj[2].checked === false) {
                dataObj[2].owner = "X";
                dataObj[2].display();
                dataObj[2].checked = true;
                nextTurn();
                dataObj[2].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[2].checked === false) {
                dataObj[2].owner = "O";
                dataObj[2].display();
                dataObj[2].checked = true;
                nextTurn();
                dataObj[2].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let b1 = $("#b1").on("click", () => {
        if (turnX === true) {
            if (dataObj[3].checked === false) {
                dataObj[3].owner = "X";
                dataObj[3].display();
                dataObj[3].checked = true;
                nextTurn();
                dataObj[3].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[3].checked === false) {
                dataObj[3].owner = "O";
                dataObj[3].display();
                dataObj[3].checked = true;
                nextTurn();
                dataObj[3].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let b2 = $("#b2").on("click", () => {
        if (turnX === true) {
            if (dataObj[4].checked === false) {
                dataObj[4].owner = "X";
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                dataObj[4].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[4].checked === false) {
                dataObj[4].owner = "O";
                dataObj[4].display();
                dataObj[4].checked = true;
                nextTurn();
                dataObj[4].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let b3 = $("#b3").on("click", () => {
        if (turnX === true) {
            if (dataObj[5].checked === false) {
                dataObj[5].owner = "X";
                dataObj[5].display();
                dataObj[5].checked = true;
                nextTurn();
                dataObj[5].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[5].checked === false) {
                dataObj[5].owner = "O";
                dataObj[5].display();
                dataObj[5].checked = true;
                nextTurn();
                dataObj[5].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let c1 = $("#c1").on("click", () => {
        if (turnX === true) {
            if (dataObj[6].checked === false) {
                dataObj[6].owner = "X";
                dataObj[6].display();
                dataObj[6].checked = true;
                nextTurn();
                dataObj[6].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[6].checked === false) {
                dataObj[6].owner = "O";
                dataObj[6].display();
                dataObj[6].checked = true;
                nextTurn();
                dataObj[6].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let c2 = $("#c2").on("click", () => {
        if (turnX === true) {
            if (dataObj[7].checked === false) {
                dataObj[7].owner = "X";
                dataObj[7].display();
                dataObj[7].checked = true;
                nextTurn();
                dataObj[7].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[7].checked === false) {
                dataObj[7].owner = "O";
                dataObj[7].display();
                dataObj[7].checked = true;
                nextTurn();
                dataObj[7].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
    let c3 = $("#c3").on("click", () => {
        if (turnX === true) {
            if (dataObj[8].checked === false) {
                dataObj[8].owner = "X";
                dataObj[8].display();
                dataObj[8].checked = true;
                nextTurn();
                dataObj[8].getValue();
                aiMove();
                checkVictory();
            }
        } else if (turnO === true) {
            if (dataObj[8].checked === false) {
                dataObj[8].owner = "O";
                dataObj[8].display();
                dataObj[8].checked = true;
                nextTurn();
                dataObj[8].getValue();
                aiMove();
                checkVictory();
            }
        }
    });
});