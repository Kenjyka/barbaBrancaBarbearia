const hamburguerMobile = document.querySelector("#menu-mobile")
const sairMobile = document.querySelector("#sairMobile")
const linksMobile = document.querySelector("#linksMobile")

hamburguerMobile.addEventListener("click", ()=> {
  linksMobile.classList.toggle("active")
})
sairMobile.addEventListener("click", ()=> {
  linksMobile.classList.toggle("active")
})