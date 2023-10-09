const colorSelect = document.querySelectorAll(".color-select")
const coloridoSect = document.querySelector("#colorido")


colorSelect.forEach(color => {
    color.addEventListener("click", (evento) => {
        evento.stopImmediatePropagation()

        trocaCor(color)
    })
})

function trocaCor(cor) {
    colorSelect.forEach(color => {
        if (color.classList.contains("active")) {
            color.classList.remove("active")
        }

        if (color == cor) {
            color.classList.add("active")
        }
    })

    if (cor.id == "yellow") {
        coloridoSect.style.backgroundColor = "yellow"
    }
    else if (cor.id == "blue") {
        coloridoSect.style.backgroundColor = "blue"
    }
    else if (cor.id == "purple") {
        coloridoSect.style.backgroundColor = "purple"
    }
    else if (cor.id == "red") {
        coloridoSect.style.backgroundColor = "red"
    }
    else if (cor.id == "gray") {
        coloridoSect.style.backgroundColor = "gray"
    }
    else if (cor.id == "black") {
        coloridoSect.style.backgroundColor = "#000"
    }
    else if (cor.id == "green") {
        coloridoSect.style.backgroundColor = "green"
    }
}

const calvoSect = document.querySelector("#calvo")
const btnTrocaCapilar = document.querySelector("#troca-capilar")

btnTrocaCapilar.addEventListener("click", () => {
    if (calvoSect.classList.contains("cabeludo")) {
        btnTrocaCapilar.innerText = "ver o depois"
    }
    else {
        btnTrocaCapilar.innerText = "voltar ao antes"
    }

    calvoSect.classList.toggle("cabeludo")
})