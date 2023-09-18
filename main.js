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





//scroll events and shenanigans
// const cuidadosBarba = document.getElementById('cuidados-barba'),
// perdaCapilar = document.getElementById('perda-capilar'),
// cortesEstilosos = document.getElementById('cortes-estilosos')


// window.addEventListener('scroll', () => {
//   oElementoEstaVisivel(cuidadosBarba)
//   oElementoEstaVisivel(perdaCapilar)
//   oElementoEstaVisivel(cortesEstilosos)
// })

// function oElementoEstaVisivel(elemento) {
//   let area = elemento.getBoundingClientRect()
//   console.log(area.top, elemento)
// }