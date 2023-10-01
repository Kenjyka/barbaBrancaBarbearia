tituloLogo = Array.from(document.querySelectorAll('.titleLetters'))
indexTituloLogo = tituloLogo.length - 1

function sleep(ms) {
  return new Promise(espere => setTimeout(espere, ms))
}


function brotaletra(letra) {
    setTimeout(() => {
        letra.style.opacity = 1
        indexTituloLogo -= 1
        if(indexTituloLogo >= 0){
          brotaletra(tituloLogo[indexTituloLogo])  
        } 
    }, 170);
}

tituloLogo.forEach(Element => {
    Element.style.opacity = 0
    Element.style.trasition = "opacity 1s"
})
if(indexTituloLogo >= 0) {
  brotaletra(tituloLogo[indexTituloLogo])  
}

//função dos promocionais

const promocionais = document.getElementById('promocionais')
const promocionaisCards = [...promocionais.querySelectorAll('article')]
let continuaCarouselCards = true
let indexCardsPromocionais = 0
rodaPromocionais()

promocionaisCards.forEach((element, index) => {
  const elementFilho = element.querySelector('.front-promocionais')
  const elementNeto = [...elementFilho.children]
  console.log(elementFilho)
  element.addEventListener('mouseenter', () => {
    indexCardsPromocionais = index;
    continuaCarouselCards = false;
    limpaPromocionais()
  })



  elementFilho.addEventListener('mouseenter', () => {
    console.log('ayo')
    continuaCarouselCards = false
  })
  elementNeto.forEach(neto => {
    neto.addEventListener('mouseenter', ()=> {
      continuaCarouselCards = false
    })
  })
  elementFilho.addEventListener('mouseout', () => {
    console.log('eita')
    continuaCarouselCards = true;
  })
})

function limpaPromocionais () {
  promocionaisCards.forEach(element => {
    if (element.classList.contains('active')) element.classList.remove('active');
  })
}

function rodaPromocionais () {
  if (continuaCarouselCards) {
      limpaPromocionais();
      promocionaisCards[indexCardsPromocionais].classList.add('active');
  }
}

setInterval(() => {
  console.log(continuaCarouselCards)
  if(continuaCarouselCards) {
    (indexCardsPromocionais == promocionaisCards.length - 1) ? indexCardsPromocionais = 0 : indexCardsPromocionais++;
    rodaPromocionais() 
  }
}, 5000);



// aba de comentarios
const viewportWidth = window.innerWidth
const secoesComentarios = document.querySelectorAll('.contedor')
let podeRodarComentarios = true


secoesComentarios.forEach(element => {
  console.log(element);
  const barraComentario = element.querySelector('.secao-comentarios')
  const comentarios = [...barraComentario.children]

  comentarios.forEach(comentario => {
    const netosComentario = [... comentario.children]
    comentario.addEventListener('mouseenter', () => {
      console.log('oya')
      podeRodarComentarios = false
    })
    comentario.addEventListener('mouseout', () => {
      podeRodarComentarios = true
    })
    netosComentario.forEach(neto => {
      neto.addEventListener('mouseenter', () => {
        podeRodarComentarios = false
      })
    })
  })
  




function scrollBarraComentario(barra){
  const scrollMax = barra.scrollWidth - barra.clientWidth;
  (-scrollMax + 1 >= barra.scrollLeft) ? barra.scrollLeft = 0 : barra.scrollLeft -= 300;
}

const btnComentar = document.querySelectorAll(".comentar-button")
const btnComentarSair = document.querySelectorAll(".cancel-comment")
const btnEnviarComentario = document.querySelectorAll(".modal-comentar-button")
let comentarioId
if (!localStorage.getItem("comentarioId")) {
  comentarioId = 1
} else {
  comentarioId = JSON.parse(localStorage.getItem("comentarioId"))
}

btnEnviarComentario.forEach(btn => {
  btn.addEventListener("click", (evento) => {
    evento.preventDefault()

    let form = btn.parentElement
    let titulo = form.querySelector("#titulo-comentario").value
    let texto = form.querySelector("#body-comentario").value
    let pessoa = JSON.parse(localStorage.getItem("loggedAccount")).nome
    
    if (titulo == "" || texto == "") {
      alert("os campos titulo e texto devem ser preenchidos para que o comentario seja feito!")
    } else {
      let comentario = document.createElement("div")
      comentario.setAttribute("class", "comentario")
      comentario.innerHTML = `<h4>${titulo}</h4><p>${texto}</p><small>${pessoa}</small>`
      let arquivadosComentario = []
      if (localStorage.getItem("comentarios")) {
        arquivadosComentario = JSON.parse(localStorage.getItem("comentarios"))
      }
      arquivadosComentario[arquivadosComentario.length] = {
        id: comentarioId,
        comentario: comentario.innerHTML
      }
      localStorage.setItem("comentarios", JSON.stringify(arquivadosComentario))
      form.parentElement.parentElement.appendChild(comentario)
      comentarioId++
    }

  })
})

let comentariosSection = []


btnComentar.forEach(btn => {
  comentariosSection[comentariosSection.length] = btn.parentElement.querySelector(".modal-comentar")
  btn.addEventListener("click", (evento) => {
    evento.stopImmediatePropagation()
    if (!localStorage.getItem("isLoggedIn")) {
      alert("Essa ação necessita de Login")
    } else {
      let alvo = btn.parentElement.querySelector(".modal-comentar")
      alvo.classList.toggle("active")
      let titulo = alvo.querySelector("#titulo-comentario")
      let texto = alvo.querySelector("#body-comentario")
      titulo.value = ""
      texto.value = ""
      barraComentario.scrollLeft -= 99999999 ;
    }
  })
})

btnComentarSair.forEach(btnSair => {
  btnSair.addEventListener("click", () => {
    let alvo = btnSair.parentElement.parentElement
    alvo.classList.remove("active")
    podeRodarComentarios = true
  })
})

setInterval(() => {
  console.log(podeRodarComentarios, estaComentando())
  if (podeRodarComentarios && (estaComentando() == false)) {scrollBarraComentario(barraComentario)};
}, 3000);
})

function estaComentando() {
  let comentarios = document.querySelectorAll(".modal-comentar")
  let validador = false
  comentarios.forEach(section => {
    console.log("aoba")
    if (section.classList.contains("active")) {
      validador = true
    } else {
      if (validador != true) {
        validador = false
      }
    }
  })
  return validador
}

//scroll events and shenanigans

const logo = document.getElementById('logo')
const cuidadosBarba = document.getElementById('cuidados-barba'),
perdaCapilar = document.getElementById('perda-capilar'),
cortesEstilosos = document.getElementById('cortes-estilosos')
const logoBig = document.getElementById('logo-insection')
const header = document.querySelector("#header")
logo.style.opacity = '0'


let maxDistance = boundingShenanigans(logoBig).bottom + window.scrollY


window.addEventListener('scroll', () => {
  let nowDistance = boundingShenanigans(logoBig).bottom
  logoBig.style.height = `${65  +  100 * (nowDistance / maxDistance)}px`
  logoBig.style.width = `${65  +  100 * (nowDistance / maxDistance)}px`

  if (nowDistance - 100 < 50) {
    logoBig.style.height = `${50 +  100 * (nowDistance / maxDistance)}px`
    logoBig.style.width = `${50 +  100 * (nowDistance / maxDistance)}px`
  }

  if (nowDistance - 100 <= 0 ) {
    logoBig.style.opacity = '0'
    logo.style.opacity = '1'
    if(!header.classList.contains("active")) header.classList.add("active");
  } else {
    logoBig.style.opacity = '1'
    logo.style.opacity = '0'
    if(header.classList.contains("active")) header.classList.remove("active");
  }
})

function boundingShenanigans(elemento) {
  let area = elemento.getBoundingClientRect()
  return area
}

const scrollArrowDown = document.querySelector("#arrowDown")
const section1 = document.querySelector("#section-1")

scrollArrowDown.addEventListener("click", () => {
  section1.scrollIntoView()
})



//header events and shenanigans

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
    atual.classList.add("active")
  })
}