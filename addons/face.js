const modais = document.querySelectorAll(".modal")
const sairModais = document.querySelectorAll(".sair")

modais.forEach(modal => {
    modal.parentElement.addEventListener("click", (evento) => {
        evento.stopImmediatePropagation()

        modal.classList.add("active")
    })
})

sairModais.forEach(sair => {
    sair.addEventListener("click", (evento) => {
        evento.stopImmediatePropagation()

        sair.parentElement.classList.remove("active")
    })
})