const btnSair = document.querySelector("#sair")
const btnCadastro = document.querySelector("#cadastro")
const btnCadastroMobile = document.querySelector("#cadastro-mobile")
const perfil = document.querySelectorAll(".perfil-nav")


btnSair.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  localStorage.removeItem("loggedAccount")
})

if(localStorage.getItem("isLoggedIn")  == "true") {
  btnCadastro.parentElement.classList.add("inactive")
  btnCadastroMobile.parentElement.classList.add("inactive")
  perfil.forEach(atual => {
    atual.classList.remove("inactive")
    atual.classList.add("active")
  })
}