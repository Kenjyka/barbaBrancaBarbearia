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


  elementFilho.addEventListener('mouseout', () => {
    console.log('eita')
    continuaCarouselCards = true;
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



// comentarios
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
  


  setInterval(() => {
    if (podeRodarComentarios) scrollBarraComentario(barraComentario);
  }, 10000);
})

function scrollBarraComentario(barra){
  const scrollMax = barra.scrollWidth - barra.clientWidth;
  (scrollMax == barra.scrollLeft) ? barra.scrollLeft = 0 : barra.scrollLeft += 300;
}

const btnComentar = document.querySelectorAll(".comentar-button")
const btnComentarSair = document.querySelectorAll(".cancel-comment")

btnComentar.forEach(btn => {
  btn.addEventListener("click", () => {
    let alvo = btn.parentElement.querySelector(".modal-comentar")
    alvo.classList.toggle("active")
  })
})

btnComentarSair.forEach(btnSair => {
  btnSair.addEventListener("click", () => {
    let alvo = btnSair.parentElement.parentElement
    alvo.classList.remove("active")
  })
})





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