const cep = document.querySelector("#CEP")
const logradouro = document.querySelector("#logradouro")
const usernameCadastro = document.querySelector("#username-cadastro")
const senhaCadastro = document.querySelector("#passwordCadastro")
const numeroCasa = document.querySelector("#numero_casa")
const dataNascimento = document.querySelector("#data_nascimento")
const email = document.querySelector("#email")


cep.addEventListener("blur", () => {
    let procura = cep.value
    procura = procura.replace("-","")

    if(procura.length != 8) {
        console.log(procura)
    } else {
        fetch(`https://viacep.com.br/ws/${procura}/json/`)
        .then(response => response.json())
        .then(data => {
            logradouro.value = data.logradouro
        })
    }
})

const btnCadastro = document.querySelector("#enviar_cadastro")

btnCadastro.addEventListener("click", (evento) => {
    evento.preventDefault()
    if (logradouro.value == "" || usernameCadastro.value == "" || senhaCadastro.value == "" || numeroCasa.value == "" || dataNascimento.value == "" || email.value == "") {
        alert("Existem campos há serem completados")
    } else {

        let logins = []
        if (localStorage.getItem("logins")) {
            logins = [...JSON.parse(localStorage.getItem("logins"))]
        }
        if ((!logins) || procuraLocal(logins, email.value) == -1) {
            let login =
                {
                    email: email.value,
                    nome: usernameCadastro.value,
                    senha: senhaCadastro.value,
                    dataDeNascimento: dataNascimento.value,
                    endereco: `${logradouro.value} numero ${numeroCasa.value}`,
                    comentarios:''
                }
            logins[logins.length] = login
            localStorage.setItem("logins", JSON.stringify(logins))
            window.location.href = "./login.html"
        }
        else {
            alert("Email já cadastrado")
        }

    }
})

function procuraLocal(elemento, procura) {
    let resultado = elemento.findIndex(object => {
        return object.email == procura
    })
    return resultado
}