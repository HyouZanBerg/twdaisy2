const container_content = document.getElementById("container-content")

const fontAbtn = document.getElementById("fontAbtn")
const fontBbtn = document.getElementById("fontBbtn")
const fontCbtn = document.getElementById("fontCbtn")
const fontDbtn = document.getElementById("fontDbtn")
const fontEbtn = document.getElementById("fontEbtn")

const fontClasses = [
    "font-times",
    "font-verdana",
    "font-courier",
    "font-georgia",
    "font-tahoma"
]

function setFont(fontClass){
    container_content.classList.remove(...fontClasses)
    container_content.classList.add(fontClass)
}

fontAbtn.addEventListener("click", ()=>{setFont("font-times")})
fontBbtn.addEventListener("click", ()=>{setFont("font-verdana")})
fontCbtn.addEventListener("click", ()=>{setFont("font-courier")})
fontDbtn.addEventListener("click", ()=>{setFont("font-georgia")})
fontEbtn.addEventListener("click", ()=>{setFont("font-tahoma")})