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
        console.log(username)
        const index = logins.findIndex( object => {
            console.log(object.email, username.value)
            return object.email == username.value
        })
        console.log(index)
        if (logins[index].senha == senha.value && index != -1) {
            localStorage.setItem("isLoggedIn", true)
            localStorage.setItem("loggedAccount", JSON.stringify(logins[index]))
            if (logins[index].admin == 'true') {
                localStorage.setItem("isAdmin", true)
            }
            window.location.href = "../index.html"
        } else if (logins[index].senha != senha.value){
            alert("Senha incorreta")
        } else {
            alert("login não encontrado")
        }
    }
})