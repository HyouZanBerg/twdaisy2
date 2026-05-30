const cards = [
    { "q": "あ", "a": "a" },
    { "q": "い", "a": "i" },
    { "q": "う", "a": "u" },
    { "q": "え", "a": "e" },
    { "q": "お", "a": "o" },
    { "q": "か", "a": "ka" },
    { "q": "き", "a": "ki" },
    { "q": "く", "a": "ku" },
    { "q": "け", "a": "ke" },
    { "q": "こ", "a": "ko" },
    { "q": "さ", "a": "sa" },
    { "q": "し", "a": "shi" },
    { "q": "す", "a": "su" },
    { "q": "せ", "a": "se" },
    { "q": "そ", "a": "so" },
    { "q": "た", "a": "ta" },
    { "q": "ち", "a": "chi" },
    { "q": "つ", "a": "tsu" },
    { "q": "て", "a": "te" },
    { "q": "と", "a": "to" }
];

let index = 0;
let showAnswer = false;

const qa = document.getElementById("qa");
const prev = document.getElementById("prev");
const next = document.getElementById("next");

function renderCard(){
    showAnswer = false;
    qa.textContent = cards[index].q;

}

function showingAnswer(){
    showAnswer = true;
    qa.textContent = cards[index].a;
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        if (!showAnswer) {
            showingAnswer();
        } else {
            renderCard();
        }
    }
    
    if (event.key === "ArrowLeft") {
        index = (index - 1 + cards.length) % cards.length;
        renderCard();
    }
    
    if (event.key === "ArrowRight") {
        index = (index + 1) % cards.length;
        renderCard();
    }

});

qa.addEventListener("click", () => {
    if(!showAnswer){
        showingAnswer()
    }else{
        renderCard()
    };
});


prev.addEventListener("click", () => {
    index = (index - 1 + cards.length) % cards.length;
    renderCard();

});

next.addEventListener("click", () => {
    index = (index + 1) % cards.length;
    renderCard();

});

renderCard()