const game = document.getElementById("game");
const player = document.getElementById("player");
const object = document.getElementById("object");

let playerX = 45;
let objectX = Math.random() * 90;
let objectY = 0;

function update() {
    objectY += 1;

    if (objectY > 95) {
        objectY = 0;
        objectX = Math.random() * 90;
    }

    object.style.top = objectY + "%";
    object.style.left = objectX + "%";

    player.style.left = playerX + "%";

    requestAnimationFrame(update);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
        playerX -= 3;
    }

    if (event.key === "ArrowRight") {
        playerX += 3;
    }

    playerX = Math.max(0, Math.min(90, playerX));
});

update();