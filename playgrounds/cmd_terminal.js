const terminal = document.getElementById("terminal");
const commandInput = document.getElementById("commandInput");

function write(text) {
    terminal.innerHTML += `\n> ${text}`;
    terminal.scrollTop = terminal.scrollHeight;
}

commandInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {

        const command = commandInput.value.trim();

        write(command);

        if (command === "help") {
            write("help, clear, hello, time");
        }

        else if (command === "hello") {
            write("hello user");
        }

        else if (command === "time") {
            write(new Date().toLocaleTimeString());
        }

        else if (command === "clear") {
            terminal.innerHTML = "";
        }

        else {
            write("unknown command");
        }

        commandInput.value = "";
    }

});