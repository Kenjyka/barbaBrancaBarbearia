const btnSair = document.querySelector("#sair")
const btnCadastro = document.querySelector("#cadastro")
const btnCadastroMobile = document.querySelector("#cadastro-mobile")
const perfil = document.querySelectorAll(".perfil-nav")
console.log(perfil)

btnSair.addEventListener("click", () => {
  localStorage.setItem("isLoggedIn", JSON.stringify(false))
  localStorage.removeItem("loggedAccount")
})

if(localStorage.getItem("isLoggedIn")  == "true") {
  btnCadastro.parentElement.classList.add("inactive")
  btnCadastroMobile.parentElement.classList.add("inactive")
  perfil.forEach(atual => {
    atual.classList.add("active")
  })
} else {
  if(btnCadastro.parentElement.classList.contains("inactive")) {
    btnCadastro.parentElement.classList.remove("inactive")
    btnCadastroMobile.parentElement.classList.remove("inactive")
  }
 perfil.forEach(atual => {
  if (atual.classList.contains("active")) {
    atual.classList.remove("active")
  }
 })
}