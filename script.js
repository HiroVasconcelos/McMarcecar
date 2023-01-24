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

function ano_atual() {
    const ano = new Date().getFullYear()

    const copyright = document.getElementById("copyright")
    copyright.innerText = `© ${ano} - MC Marcecar. - Todos os Direitos Reservados.`

    // const node = document.createTextNode(`© ; ${ano} - MC Marcecar. - Todos os Direitos Reservados.`)

    // copyright.appendChild(node)
}