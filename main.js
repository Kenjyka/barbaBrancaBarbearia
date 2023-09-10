tituloLogo = Array.from(document.querySelectorAll('.titleLetters'))
indexTituloLogo = tituloLogo.length - 1

function brotaletra(letra) {
    setTimeout(() => {
        console.log(letra)
        letra.style.opacity = 1
        indexTituloLogo -= 1
        console.log(indexTituloLogo >= 0)
        if(indexTituloLogo >= 0){
            console.log('iai')
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





