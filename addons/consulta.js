const tipo = document.querySelector("#tipo")
const labelServico = document.querySelector("#tipoLabel")
const servico = document.querySelector("#servico")
const data = document.querySelector("#dia")
const horas = document.querySelector("#horas")
const btnMarca = document.querySelector("#btnMarca")

servico.style.display = "none"
labelServico.style.display = "none"

console.log(tipo.value, servico.value, data.value, horas.value,btnMarca)

function ativaBotao () {
    console.log(tipo.value, servico.value, data.value, horas.value,btnMarca)
    if (tipo.value &&
    servico.value &&
    data.value &&
    horas.value
    ) {
        if (!btnMarca.classList.contains("active")) {
            btnMarca.classList.add("active")
        }
    } else {
        if (btnMarca.classList.contains("active")) {
            btnMarca.classList.remove("active")
        }
    }
}

function mudaServico () {
    const optGroups = servico.querySelectorAll("optgroup")
    let id = ""
    console.log(servico.value)
    if (servico.value == "barba") {
        id = "barbagp"
    } 
    else if (servico.value == "cabelo") {
        id = "cabelogp"
    }
    else if (servico.value == "face") {
        id = "facegp"
    }
    let aparecer = false
    console.log(id)
    optGroups.forEach(optg => {
        
        if (optg.id != id) {
            optg.style.display = "none"
        } else {
            aparecer = true
        }
    })

    if (aparecer == true) {
        servico.style.display = "flex"
        labelServico.style.display = "flex"
    }
}


tipo.addEventListener("blur", () => {
    ativaBotao()
    mudaServico()
})
servico.addEventListener("blur", () => {
    ativaBotao()
})
data.addEventListener("blur", () => {
    ativaBotao()
})
horas.addEventListener("blur", () => {
    ativaBotao()
})

btnMarca.addEventListener("click", evento => {
    evento.preventDefault()


})