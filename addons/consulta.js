const tipo = document.querySelector("#tipo")
const labelServico = document.querySelector("#tipoLabel")
const servico = document.querySelector("#servico")
const data = document.querySelector("#dia")
const horas = document.querySelector("#horas")
const diaLabel = document.querySelector("#diaLabel")
const btnMarca = document.querySelector("#btnMarca")
const sectHorarios = document.querySelector("#horarios-section")
const pessoaH1 = document.querySelector("#pessoa")


const hoje = new Date()
const diaHoje = hoje.getDate() +1
const mesHoje = hoje.getMonth() + 1
const anoHoje = hoje.getFullYear()
const amanha = new Date()
amanha.setDate(hoje.getDate() + 1)
const diaAmanha = (amanha.getDate())
const mesAmanha = (amanha.getMonth() + 1)
const anoAmanha = amanha.getFullYear()
const maxDia = new Date(amanha)
maxDia.setDate(maxDia.getDate() + 30)
const diaMax = maxDia.getDate() + 1
const mesMax = maxDia.getMonth() + 1
const anoMax = maxDia.getFullYear()

servico.style.display = "none"
labelServico.style.display = "none"
console.log(diaAmanha)
data.setAttribute("min", `${anoAmanha}-${mesAmanha}-${diaAmanha}`)
data.setAttribute("max", `${diaMax}-${mesMax}-${anoMax}`)

diaLabel.innerText = `De ${diaAmanha}/${mesAmanha}/${anoAmanha} à ${diaMax}/${mesMax}/${anoMax}`

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
    servico.value = ""
    let id = ""
    if (tipo.value == "barba") {
        id = "barbagp"
    } 
    else if (tipo.value == "cabelo") {
        id = "cabelogp"
    }
    else if (tipo.value == "face") {
        id = "facegp"
    }
    let aparecer = false
    console.log(id)
    optGroups.forEach(optg => {
        
        if (optg.id != id) {
            optg.style.display = "none"
        } else {
            aparecer = true
            optg.style.display = "flex"
        }
    })

    if (aparecer == true) {
        servico.style.display = "flex"
        labelServico.style.display = "flex"
    }
}

function valueifyDate(date){
    if(typeof date == 'object'){
    return date.getTime();
  }else{
    return new Date(date).getTime();
  } 
}


tipo.addEventListener("click", () => {
    ativaBotao()
    mudaServico()
})
servico.addEventListener("blur", () => {
    ativaBotao()
})
data.addEventListener("blur", () => {
    let maxdiaCheck = new Date(maxDia)
    maxdiaCheck.setDate(maxdiaCheck.getDate() + 1)
    if (Date.parse(data.value) < Date.parse(`${anoHoje}-${mesHoje}-${diaHoje}`) || Date.parse(data.value) > Date.parse(maxdiaCheck)) {
        alert("coloque uma data válida")
        data.value = ""
        ativaBotao()
    }
})
horas.addEventListener("blur", () => {
    ativaBotao()
})
var removeAtual = ""
btnMarca.addEventListener("click", evento => {
    evento.preventDefault()
    let horarios = []
    if (localStorage.getItem("horarios")) {
        horarios = [...JSON.parse(localStorage.getItem("horarios"))]
    }

    let horarioId = 1
    if (localStorage.getItem("horarioID")) {
        horarioId = JSON.parse(localStorage.getItem("horarioID"))
    }

    let logins = JSON.parse(localStorage.getItem("logins"))
    let user = JSON.parse(localStorage.getItem("loggedAccount"))
    const index = logins.findIndex( object => {
        console.log(object.email, user.email)
        return object.email == user.email
    })

    horarios[horarios.length] = {
        id:horarioId,
        dia: data.value,
        hora: horas.value,
        cliente: user.email,
        tipo: tipo.value,
        servico: servico.value
    }
    let horasMarcadas = user.horarios
    if (!horasMarcadas) {
        horasMarcadas = []
        console.log(horasMarcadas)
    }
    horasMarcadas[horasMarcadas.length] = horarioId
    console.log(horasMarcadas)
    user.horarios = horasMarcadas

    logins[index] = user

    localStorage.setItem("logins", JSON.stringify(logins))
    logins = JSON.parse(localStorage.getItem("logins"))
    localStorage.setItem("loggedAccount", JSON.stringify(logins[index]))

    localStorage.setItem("horarios", JSON.stringify(horarios))
    horarioId++
    localStorage.setItem("horarioID", JSON.stringify(horarioId))

    window.location.reload()
})

if (localStorage.getItem("isAdmin")) {
    let horarios = JSON.parse(localStorage.getItem("horarios"))
    console.log(horarios)
    let alvo = sectHorarios.querySelector("div")

    if (horarios) {
        horarios.forEach(hora => {
            let horarioFormatado = new Date(hora.dia)
    
            let horarioDiv = document.createElement("div")
            horarioDiv.classList.add("horarioMarcado")
            horarioDiv.innerHTML = `
            <span class="remove">X</span>
            <span class="tipo">${horarios[index].tipo}</span>
            <span class="servico">${horarios[index].servico}</span>
            <footer>
                <span class="diaMarcado">${horarioFormatado.getDay() + 1}/ ${horarioFormatado.getMonth() + 1}/ ${horarioFormatado.getFullYear()}</span>
                <span>às</span>
                <span class="horaMarcado">${horarios[index].hora}:00</span>
            </footer>
            ` 
    
            alvo.appendChild(horarioDiv)
            btnMarca.parentElement.parentElement.classList.remove("active") 
        })
    } 
    let container = document.querySelector("#containerMarcar")
    container.classList.add("none")
    
} else {
    let user = JSON.parse(localStorage.getItem("loggedAccount"))
    let horarios = user.horarios

    if (horarios) {
        horarios.forEach(hora => {
            let horarios = JSON.parse(localStorage.getItem("horarios"))
            const index = horarios.findIndex( object => {
                return object.id == hora
            })
            if (index != -1) {
                let alvo = sectHorarios.querySelector("div")
                let horarioFormatado = new Date(horarios[index].dia)

                let horarioDiv = document.createElement("div")
                horarioDiv.classList.add("horarioMarcado")
                horarioDiv.innerHTML = `
                <span class="remove">X</span>
                <span class="none">${horarios[index].id}</span>
                <span class="tipo">${horarios[index].tipo}</span>
                <span class="servico">${horarios[index].servico}</span>
                <footer>
                    <span class="diaMarcado">${horarioFormatado.getDay() + 1}/ ${horarioFormatado.getMonth() + 1}/ ${horarioFormatado.getFullYear()}</span>
                    <span>às</span>
                    <span class="horaMarcado">${horarios[index].hora}:00</span>
                </footer>
               ` 

                alvo.appendChild(horarioDiv)
                let sair = horarioDiv.querySelector(".remove")
                sair.addEventListener("click", (evento) => {
                    evento.stopImmediatePropagation()
                    removeAtual = sair.parentElement
                    fModal()
                })
                btnMarca.parentElement.parentElement.classList.remove("active")
            }
            
            
        })
    }
}


const modal = document.querySelector("#modal")

function fModal () {
    modal.classList.toggle("active")

    let aceitar = modal.querySelector("#prosseguir")
    let negar = modal.querySelector("#cancelar")

    aceitar.addEventListener("click", () => {
        modal.classList.toggle("active")

        let alvoRemoveAntes = removeAtual.querySelector(".none")
        let alvoRemove = parseInt(alvoRemoveAntes.innerText)
        console.log(alvoRemove)
        let marcados = JSON.parse(localStorage.getItem("horarios"))
        const index = marcados.findIndex( object => {
            return object.id == alvoRemove
        })

        marcados.splice(index, 1)

        localStorage.setItem("horarios", JSON.stringify(marcados))
        location.reload()
    })

    negar.addEventListener("click", () => {
        modal.classList.toggle("active")
        removeAtual = ""
    })
}


const ativadores = document.querySelectorAll(".ativador")
const sair = document.querySelectorAll(".sair")

ativadores.forEach(ativador => {
    ativador.addEventListener("click", (evento) => {
        evento.stopImmediatePropagation()

        ativador.parentElement.classList.toggle("active")
    })
})

sair.forEach(sairBtn => {
    sairBtn.addEventListener("click", (evento) => {
        evento.stopImmediatePropagation()

        sairBtn.parentElement.classList.remove("active")
    })
})

pessoaH1.innerText = JSON.parse(localStorage.getItem("loggedAccount")).nome


const body = document.querySelector("body")
if (body.clientWidth > 801) {
    let user = JSON.parse(localStorage.getItem("loggedAccount"))
    let horarios = user.horarios

    if (horarios.length > 0) {
        let container = document.querySelector("#horarios-section")
        container.classList.add("active")
    } else {
        let container = document.querySelector("#containerMarcar")
        container.classList.add("active")
    }

    
}