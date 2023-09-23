const hamburguerMobile = document.querySelector("#menu-mobile")
const sairMobile = document.querySelector("#sairMobile")
const linksMobile = document.querySelector("#linksMobile")

hamburguerMobile.addEventListener("click", ()=> {
  linksMobile.classList.toggle("active")
})
sairMobile.addEventListener("click", ()=> {
  linksMobile.classList.toggle("active")
})

const mobileArrow = [...linksMobile.querySelectorAll(".material-symbols-sharp")] 

mobileArrow.forEach(arrow => {
  arrow.addEventListener("click", () => {
    arrow.classList.toggle("rotated")
    console.log(arrow)
    let alvo = arrow.parentElement.parentElement.querySelector("ul")
    alvo.classList.toggle("active")
    mobileArrow.forEach(element => {
      console.log(element.parentElement)
      let alvoMenor = element.parentElement.parentElement.querySelector("ul")
      if (alvoMenor.classList.contains("active") && alvoMenor != alvo) {
        alvoMenor.classList.remove("active")
      }
      if (element.classList.contains("rotated" && element != arrow)) {
        element.classList.remove("rotated")
      }
    })
    
  })
})