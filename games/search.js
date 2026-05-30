const searchinput = document.getElementById("searchinput")
const searchResult = document.getElementById("searchResult")

let searchData = []

fetch("../core/searchlist.json")
    .then(response => response.json())
    .then(data => {
        searchData = data
        renderList(searchData)
    })
    .catch(error => console.error("Gagal memuat data:", error));

function renderList(data) {
    searchResult.innerHTML = "";
    const limit = Math.min(8, data.length);
    
    for(let i = 0; i < limit; i++) {
        searchResult.innerHTML += `
            <li class="p-2 border-b border-slate-700 hover:bg-[rgba(0,0,0,0.2)] cursor-pointer">
                <a  >${data[i]}</a>
            </li>
        `;
    }
}

searchinput.addEventListener("input", () => {
    const keyword = searchinput.value.toLowerCase()

    searchResult.innerHTML = ""

    if(keyword === ""){
        renderList(searchData)
        return
    }

    const filtered = searchData.filter(item =>
        item.toLowerCase().includes(keyword)
    )

   if(filtered.length === 0){
        searchResult.innerHTML = `<li class="p-2 text-gray-400">no result found</li>`;
    } else {
        renderList(filtered); 
    }
})