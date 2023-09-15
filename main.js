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

  element.addEventListener('mouseenter', () => {
    (index == promocionaisCards.length -1) ? indexCardsPromocionais = 0 : indexCardsPromocionais = index;
    if (continuaCarouselCards == true) continuaCarouselCards = false;
    limpaPromocionais()
  })

  element.addEventListener('mouseout', () => {
      if (continuaCarouselCards == false) continuaCarouselCards = true;
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
  if(continuaCarouselCards) {
    (indexCardsPromocionais == promocionaisCards.length - 1) ? indexCardsPromocionais = 0 : indexCardsPromocionais++;
    rodaPromocionais() 
  }
}, 5000);


//scroll events and shenanigans
const cuidadosBarba = document.getElementById('cuidados-barba'),
perdaCapilar = document.getElementById('perda-capilar'),
cortesEstilosos = document.getElementById('cortes-estilosos')


window.addEventListener('scroll', () => {
  oElementoEstaVisivel(cuidadosBarba)
  oElementoEstaVisivel(perdaCapilar)
  oElementoEstaVisivel(cortesEstilosos)
})

function oElementoEstaVisivel(elemento) {
  let area = elemento.getBoundingClientRect()
  console.log(area, elemento)
}