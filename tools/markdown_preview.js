const boxinput = document.getElementById("boxinput");
const boxresult = document.getElementById("boxresult");

function copy(){
    navigator.clipboard.writeText(boxinput.value);
};

boxinput.addEventListener("input", () => {
    boxresult.innerHTML = marked.parse(boxinput.value);
});

window.copy = copy;