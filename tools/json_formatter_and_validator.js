const boxinput = document.getElementById("boxinput");
const boxresult = document.getElementById("boxresult");

function minify(){
    try{
        const parsed = JSON.parse(boxinput.value);
        boxresult.value = JSON.stringify(parsed);
    } catch {
        boxresult.value = "Invalid JSON";
    }
};

function beautify(){
    try{
        const parsed = JSON.parse(boxinput.value);
        boxresult.value = JSON.stringify(parsed, null, 2);
    } catch {
        boxresult.value = "Invalid JSON";
    }
};

function copy(){
    boxresult.select();
    boxresult.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(boxresult.value);
};

boxinput.addEventListener("input", () => {
    boxresult.value = boxinput.value;
})

window.beautify = beautify;
window.minify = minify;
window.copy = copy;