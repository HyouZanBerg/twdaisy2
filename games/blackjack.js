const display = document.getElementById("display");
const answer = document.getElementById("answer");
const guess = document.getElementById("guess");
const confirmbtn = document.getElementById("confirm");
const current_money = document.getElementById("current_money");
const money = document.getElementById("money");
const times = document.getElementById("times");

let bj_current_money = 1000;
let bj_money = 0;
let bj_times = 0;

function game_process() {
    let randomNum = Math.floor(Math.random() * 2);
    let bj_guess = guess.value.toLowerCase();

    if (
        (bj_guess === "y" && randomNum === 1) ||
        (bj_guess === "n" && randomNum === 0)
    ) {
        bj_money +=  bj_current_money*2;
        bj_current_money *= 2
        display.textContent = "WIN";
    } else {
        bj_money += Math.floor(bj_current_money * 0.5);
        bj_current_money *= Math.floor(bj_current_money * 0.5);
        display.textContent = "LOSE";
    }

    bj_times++;
    update();
}

function update() {
    current_money.textContent = bj_current_money;
    money.textContent = bj_money;
    times.textContent = bj_times;

}

guess.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        game_process();
    }
});

confirmbtn.addEventListener("click", () => {
    game_process();
});

update();