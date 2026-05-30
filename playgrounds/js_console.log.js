const consoleBox = document.getElementById("consoleBox");
const editor = document.getElementById("editor");
const run = document.getElementById("run");

run.addEventListener("click", () => {

    consoleBox.innerHTML = "";

    const fakeConsole = {
        log: (...args) => {
            consoleBox.innerHTML += args.join(" ") + "\n";
        }
    };

    try {
        new Function("console", editor.value)(fakeConsole);
    }

    catch(error) {
        consoleBox.innerHTML += error;
    }

});