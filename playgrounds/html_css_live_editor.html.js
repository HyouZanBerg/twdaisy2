const preview = document.getElementById("preview");
const editor = document.getElementById("editor");

editor.value = `
<h1>Hello World</h1>
<button>Click Me</button>
`;

preview.innerHTML = editor.value;

editor.addEventListener("input", () => {
    preview.innerHTML = editor.value;
});