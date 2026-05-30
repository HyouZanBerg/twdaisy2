const header = document.getElementById("header")
const nav = document.getElementById("nav")
const container = document.getElementById("container")
const container_content = document.getElementById("container-content")
const footer = document.getElementById("footer")
const searchbar = document.getElementById("searchbar")
const settingbar = document.getElementById("settingbar")
const subnavbar = document.getElementById("subnavbar")

const darkbtn = document.getElementById("darkbtn")
const lightbtn = document.getElementById("lightbtn")

let isLight = false;


darkbtn.addEventListener("click", () => {
    isLight = false
    switchTheme()
})

lightbtn.addEventListener("click", () => {
    isLight = true
    switchTheme()
})

function switchTheme(){
    header.classList.toggle("bg-neutral-400", isLight)
    nav.classList.toggle("bg-neutral-400", isLight)
    container.classList.toggle("bg-zinc-400", isLight)
    footer.classList.toggle("bg-neutral-400", isLight)
    container_content.classList.toggle("bg-neutral-400", isLight)

    searchbar.classList.toggle("bg-[rgba(255,255,255,0.4)]", isLight)
    settingbar.classList.toggle("bg-[rgba(255,255,255,0.4)]", isLight)
    subnavbar.classList.toggle("bg-[rgba(255,255,255,0.4)]", isLight)

    header.classList.toggle("text-slate-800", isLight)
    nav.classList.toggle("text-slate-800", isLight)
    container.classList.toggle("text-slate-800", isLight)
    footer.classList.toggle("text-slate-800", isLight)

    searchbar.classList.toggle("text-[rgba(0,0,0,0.8)]", isLight)
    settingbar.classList.toggle("text-[rgba(0,0,0,0.8)]", isLight)
    subnavbar.classList.toggle("text-[rgba(0,0,0,0.8)]", isLight)
}