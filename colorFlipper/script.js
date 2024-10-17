const body = document.getElementsByTagName("body")[0];
const redBtn = document.getElementById("red");
const blueBtn = document.getElementById("blue");
const yellowBtn = document.getElementById("yellow");
const randomBtn = document.getElementById("random");
const resetBtn = document.getElementById("reset");


function changeRed(){
    body.style.background = "red";
}
function changeBlue(){
    body.style.background = "blue";
}
function changeYellow(){
    body.style.background = "yellow";
}

let hexNumbers = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];

function changeRand() {
    let hexColorCode = "#";
        for (var i = 0; i < 6; i++) {
            let randomIndex = Math.floor(Math.random() * hexNumbers.length);
            hexColorCode += hexNumbers[randomIndex];
            }
    body.style.background = hexColorCode;
}

resetBtn.onclick = () => {
    location.reload();
};


redBtn.onclick = changeRed;
blueBtn.onclick = changeBlue;
yellowBtn.onclick = changeYellow;
randomBtn.onclick = changeRand;