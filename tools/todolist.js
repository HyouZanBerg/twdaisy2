function addNote(){
    const boxnote = document.getElementById("boxnote");
    const boxinput = document.getElementById("boxinput");

    if(boxinput.value.trim() === "") return;

    const newNote = document.createElement('div');
    newNote.className = "flex flex-row py-1 border-b border-black";
    newNote.innerHTML = `<textarea class="text-sm flex-grow h-6 bg-transparent outline-none pr-2">${boxinput.value}</textarea> <button class="flex justify-center text-4xl font-bold text-red-600" onclick="removeNote(this)">x</button>`;

    boxnote.appendChild(newNote);
    boxinput.value = '';
};

function removeNote(btn) {
    const targetNode = btn.parentNode;
    targetNode.remove();
};

const boxinput = document.getElementById("boxinput");

boxinput.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addNote();
  }
});