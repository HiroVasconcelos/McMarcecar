const btn = document.getElementById("buttonTop")

btn.addEventListener("click", function(){
    window.scrollTo(0, 0)
})

document.addEventListener('scroll', ocultar)

function ocultar(){
    if(window.scrollY > 125){
        btn.style.display = "flex"
    }
    else {
        btn.style.display = "none"
    }
}