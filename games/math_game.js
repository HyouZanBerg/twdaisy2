let cards = [];

for (let i = 0; i < 100; i++) {
    let a = Math.floor(Math.random() * 100);
    let b = Math.floor(Math.random() * 100);

    cards.push({
        q: `${a} + ${b}`,
        a: a + b
    });
}

let index = 0;
let correctMark = "None";
let pointSum = 0;
let answered = false;

const qa = document.getElementById("qa");
const correction = document.getElementById("correction");
const point = document.getElementById("point");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const answer = document.getElementById("answer");

function update(c, p) {
    correction.textContent = c;
    point.textContent = p;
}

function renderCard() {
    answered = false;
    qa.textContent = cards[index].q;
    answer.value = "";
}

function checkAnswer() {
    const user = Number(answer.value);

    if (user === cards[index].a) {
        correctMark = "correct";
        pointSum++;
    } else {
        correctMark = "wrong";
        pointSum--;
    }

    update(correctMark, pointSum);
    qa.textContent = cards[index].a;
    answered = true;
}

function nextCard() {
    index = (index + 1) % cards.length;
    correctMark = "none"
    update(correctMark, pointSum);
    renderCard();
}

function prevCard() {
    index = (index - 1 + cards.length) % cards.length;
    correctMark = "none"
    update(correctMark, pointSum);
    renderCard();
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") prevCard();
    if (event.key === "ArrowRight") nextCard();
});

answer.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (!answered) {
            checkAnswer();
        } else {
            nextCard();
        }
    }
});

prev.addEventListener("click", prevCard);
next.addEventListener("click", nextCard);

renderCard();
update(correctMark, pointSum);