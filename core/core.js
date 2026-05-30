const searchbtn = document.getElementById("searchbtn")
const settingbtn = document.getElementById("settingbtn")
const barbtn = document.getElementById("barbtn")
const searchbar = document.getElementById("searchbar")
const settingbar = document.getElementById("settingbar")
const subnavbar = document.getElementById("subnavbar")
const time = document.getElementById("time")

let searchOpen = false;
let settingOpen = false;
let barOpen = false;

const today = new Date();
const hours = today.getUTCHours()+7;
const minutes = today.getUTCMinutes();
const seconds = today.getUTCSeconds();
const formattedTime = new Intl.DateTimeFormat('id-ID', { hour: '2-digit', minute: '2-digit'}).format(today);

time.innerHTML = formattedTime

searchbtn.addEventListener("click", () => {
    searchOpen = !searchOpen
    settingOpen = false
    barOpen = false
    render()
})

settingbtn.addEventListener("click", () => {
    searchOpen = false
    settingOpen = !settingOpen
    barOpen = false
    render()
})

barbtn.addEventListener("click", () => {
    searchOpen = false
    settingOpen = false
    barOpen = !barOpen
    render()
})

function render(){
    searchbar.classList.toggle("hidden", !searchOpen)
    settingbar.classList.toggle("hidden", !settingOpen)
    subnavbar.classList.toggle("hidden", !barOpen)
}
