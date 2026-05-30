const toollists = document.getElementById("toollists")
const gamelists = document.getElementById("gamelists")
const playgroundlists = document.getElementById("playgroundlists")

let subnavdata = {
    tools:[],
    games:[],
    playgrounds:[]
}

fetch("../core/subnavlist.json")
    .then(response => response.json())
    .then(data => {
        subnavdata = data

        toollists.innerHTML = "";
        gamelists.innerHTML = "";
        playgroundlists.innerHTML = "";

        const toollimit = subnavdata["tools"].length;
        const gamelimit = subnavdata["games"].length;
        const playgroundlimit = subnavdata["playgrounds"].length;
        
        for(let i = 0; i < toollimit; i++) {
            toollists.innerHTML += `
                <li class="p-1 border-b border-slate-700 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer">
                    <a href="../tools/${subnavdata["tools"][i]}.html">
                        ${subnavdata["tools"][i]}
                    </a>
                </li>
            `;
        }

        for(let i = 0; i < gamelimit; i++) {
            gamelists.innerHTML += `
                <li class="p-1 border-b border-slate-700 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer">
                    <a href="../games/${subnavdata["games"][i]}.html">
                        ${subnavdata["games"][i]}
                    </a>
                </li>
            `;
        }
        
        for(let i = 0; i < playgroundlimit; i++) {
            playgroundlists.innerHTML += `
                <li class="p-1 border-b border-slate-700 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer">
                    <a href="./${subnavdata["playgrounds"][i]}.html">
                        ${subnavdata["playgrounds"][i]}
                    </a>
                </li>
            `;
        }
    })
    .catch(error => console.error("Gagal memuat data:", error));
