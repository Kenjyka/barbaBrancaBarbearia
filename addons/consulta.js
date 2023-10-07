const tipo = document.querySelector("#tipo")
const labelServico = document.querySelector("#tipoLabel")
const servico = document.querySelector("#servico")
const data = document.querySelector("#dia")
const horas = document.querySelector("#horas")
const diaLabel = document.querySelector("#diaLabel")
const btnMarca = document.querySelector("#btnMarca")
const sectHorarios = document.querySelector("#horarios-section")

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
    if (Date.parse(data.value) < Date.parse(`${anoHoje}-${mesHoje}-${diaHoje}`) || Date.parse(data.value) > Date.parse(maxDia)) {
        alert("coloque uma data válida")
        data.value = ""
        ativaBotao()
    }
})
horas.addEventListener("blur", () => {
    ativaBotao()
})

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

    let horasMarcadas = user.horasMarcadas
    if (!horasMarcadas) {
        horasMarcadas = []
    }
    horasMarcadas[horasMarcadas.length] = horarioId
    user.horarios = horasMarcadas

    logins[index] = user

    localStorage.setItem("logins", JSON.stringify(logins))
    logins = JSON.parse(localStorage.getItem("logins"))
    localStorage.setItem("loggedAccount", JSON.stringify(logins[index]))

    localStorage.setItem("horarios", JSON.stringify(horarios))
    horarioId++
    localStorage.setItem("horarioID", JSON.stringify(horarioId))
})

if (localStorage.getItem("isAdmin")) {
    let horarios = JSON.parse(localStorage.getItem("horarios"))
    let alvo = sectHorarios.querySelector("div")

    horarios.forEach(hora => {
        let horarioFormatado = new Date(hora.dia)

        let horarioDiv = document.createElement("div")
        horarioDiv.classList.add("horarioMarcado")
        horarioDiv.innerHTML = `
        <span class="remove">X</span>
        <span class="tipo">${hora.tipo}</span>
        <span class="servico">${hora.servico}</span>
        <footer>
            <span class="diaMarcado">${horarioFormatado.getDay() + 1}/ ${horarioFormatado.getMonth() + 1}/ ${horarioFormatado.getFullYear()}</span>
            <span>às</span>
            <span class="horaMarcado">${hora.hora}:00</span>
        </footer>
        ` 
        alvo.appendChild(horarioDiv)
        btnMarca.parentElement.parentElement.classList.remove("active")    
    })
    
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
            }
            
            
        })
    }
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