
let steps = 0;

const stepsDisplay = document.getElementById("steps");
const startBtn = document.getElementById("startBtn");
const resetBtn = document.getElementById("resetBtn");

startBtn.addEventListener("click", function () {
    steps++;

    stepsDisplay.textContent = steps;
});

resetBtn.addEventListener("click", function () {
    steps = 0;

    stepsDisplay.textContent = steps;
});
