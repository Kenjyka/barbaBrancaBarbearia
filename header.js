const btnSair = document.querySelector("#sair")
const btnCadastroH = document.querySelector("#cadastro")
const btnCadastroHMobile = document.querySelector("#cadastro-mobile")
const perfil = document.querySelectorAll(".perfil-nav")
console.log(perfil)

btnSair.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  localStorage.removeItem("loggedAccount")
})

if(localStorage.getItem("isLoggedIn")  == "true") {
  btnCadastroH.parentElement.classList.add("inactive")
  btnCadastroHMobile.parentElement.classList.add("inactive")
  perfil.forEach(atual => {
    atual.classList.add("active")
  })
} else {
  if(btnCadastroH.parentElement.classList.contains("inactive")) {
    btnCadastroH.parentElement.classList.remove("inactive")
    btnCadastroHMobile.parentElement.classList.remove("inactive")
  }
 perfil.forEach(atual => {
  if (atual.classList.contains("active")) {
    atual.classList.remove("active")
  }
 })
}
