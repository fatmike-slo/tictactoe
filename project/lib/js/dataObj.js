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