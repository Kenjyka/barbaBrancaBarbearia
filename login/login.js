const username = document.getElementById("email-login")
const senha = document.getElementById("password")
const btnEnviar = document.getElementById("enviar-login")

let logins = []
if (localStorage.getItem("logins")) {
    logins = [...JSON.parse(localStorage.getItem("logins"))]
}

btnEnviar.addEventListener("click", evento => {
    evento.preventDefault()
    console.log(username.value)
    if(username.value == "" ||  senha.value == "") {
        alert("Ainda há campos a serem preenchidos")
    }
    else {
        const index = logins.findIndex( object => {
            return object.email == username.value
        })
    if (logins[index].senha == senha.value && index != -1) {
        localStorage.setItem("isLoggedIn", true)
        localStorage.setItem("loggedAccount", JSON.stringify(logins[index]))
    }
    }
})