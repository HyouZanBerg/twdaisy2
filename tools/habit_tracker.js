function addNote(){
    const boxnote = document.getElementById("boxnote");
    const boxinput = document.getElementById("boxinput");
    const btnclass = "w-6 h-6 border rounded";

    if(boxinput.value.trim() === "") return;

    const newNote = document.createElement('div');
    newNote.className = "flex flex-row py-1 border-b border-black";
    newNote.innerHTML = `
        <textarea class="text-sm flex-grow h-6 bg-transparent outline-none pr-2">${boxinput.value}</textarea> 
        <button class="${btnclass}" onclick="toggleHabit(this)">M</button>
        <button class="${btnclass}" onclick="toggleHabit(this)">T</button>
        <button class="${btnclass}" onclick="toggleHabit(this)">W</button>
        <button class="${btnclass}" onclick="toggleHabit(this)">Th</button>
        <button class="${btnclass}" onclick="toggleHabit(this)">F</button>
    `;

    boxnote.appendChild(newNote);
    boxinput.value = '';
};

function toggleHabit(btn) {
    btn.classList.toggle("bg-red-500");
};

document.getElementById("boxinput").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    addNote();
  }
});