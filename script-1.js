
const colorSetttings = document.querySelector(".main-txt-toggler")
const pageThemes = document.querySelector(".page-themes")

colorSetttings.addEventListener("click", ()=>{
    pageThemes.classList.toggle("open")
})

// close themes on scroll

window.addEventListener("scroll", ()=>{
    if(pageThemes.classList.contains("open")){
        pageThemes.classList.remove("open")
    }
})

// change main color

const themeTxtColors = document.querySelectorAll(".theme-txt-color")

function changeTxtColor(color){
    themeTxtColors.forEach((txtColor)=>{
        if(txtColor.getAttribute("title") === color){
            txtColor.removeAttribute("disabled")
        }else{
            txtColor.setAttribute("disabled", true)
        }
    })
}

// Toggle background color

const toggleBg = document.querySelector(".background-toggler")

toggleBg.addEventListener("click", ()=>{
    document.querySelector("body").classList.toggle("dark")
})

