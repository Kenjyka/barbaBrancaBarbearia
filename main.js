tituloLogo = Array.from(document.querySelectorAll('.titleLetters'))
indexTituloLogo = tituloLogo.length - 1

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
  if(continuaCarouselCards) {
    (indexCardsPromocionais == promocionaisCards.length - 1) ? indexCardsPromocionais = 0 : indexCardsPromocionais++;
    rodaPromocionais() 
  }
}, 5000);



// aba de comentarios
if (!localStorage.getItem("section-1")) {
  localStorage.setItem("section-1", JSON.stringify({
    comentarios: [1,2,3]
  }))
  localStorage.setItem("section-2", JSON.stringify({
    comentarios: [4,5,6]
  }))
  localStorage.setItem("section-3", JSON.stringify({
    comentarios: [7,8,9]
  }))
  localStorage.setItem("comentarioID", JSON.stringify(10))
}
let comentarioId
  if (localStorage.getItem("comentarioID")) {
    comentarioId = JSON.parse(localStorage.getItem("comentarioID"))
  } else {
    comentarioId = 1
    console.log('opa')
  }
  console.log(comentarioId)
if (!localStorage.getItem("comentarios")) {
  
  localStorage.setItem("comentarios", JSON.stringify([
    {
    id: 1,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 2,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id:3,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 4,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id:5,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 6,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 7,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 8,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  },
  {
    id: 9,
    comentario: `<span class="titulo">Lorem, ipsum dolor.</span>
    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo excepturi corporis voluptatem perferendis nulla dignissimos ducimus non earum ipsum, molestias repellat praesentium ut consectetur maiores. Dignissimos quisquam vitae similique itaque. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores alias, quasi at odit cum harum quam reprehenderit delectus, voluptates voluptas possimus itaque fugiat commodi aliquid doloremque porro sed, mollitia veniam.</p>
    <small>pessoa</small>`
  }

]))
}


const viewportWidth = window.innerWidth
const secoesComentarios = document.querySelectorAll('.contedor')
let podeRodarComentarios = true

function rederizaComentario (alvo, id) {
  console.log(alvo, [...id])
  id.forEach(elemento => {
    let comentarios = JSON.parse(localStorage.getItem("comentarios"))
    const index = comentarios.findIndex( procura => {
      return procura.id == elemento
    })
    console.log(index)
    let comentario = document.createElement("div")
    comentario.setAttribute("class", "comentario") 
    comentario.innerHTML = comentarios[index].comentario
    alvo.appendChild(comentario)
  })
}


secoesComentarios.forEach(element => {
  console.log(element);
  let barraComentario = element.querySelector('.secao-comentarios')
  if (barraComentario.parentElement.parentElement.id == "cuidados-barba") {
    rederizaComentario(barraComentario, JSON.parse(localStorage.getItem("section-1")).comentarios)
  } else if (barraComentario.parentElement.parentElement.id == "calvice") {
    rederizaComentario(barraComentario, JSON.parse(localStorage.getItem("section-2")).comentarios) 
  } else if (barraComentario.parentElement.parentElement.id == "cortes-estilosos") {
    rederizaComentario(barraComentario, JSON.parse(localStorage.getItem("section-3")).comentarios) 
  }


  function scrollBarraComentario(barra){
    const scrollMax = barra.scrollWidth - barra.clientWidth;
    (scrollMax <= barra.scrollLeft) ? barra.scrollLeft = 0 : barra.scrollLeft += 220;
  }

  const btnComentar = document.querySelectorAll(".comentar-button")
  const btnComentarSair = document.querySelectorAll(".cancel-comment")
  const btnEnviarComentario = document.querySelectorAll(".modal-comentar-button")
  

  btnEnviarComentario.forEach(btn => {
    btn.addEventListener("click", (evento) => {
      evento.preventDefault()
      evento.stopImmediatePropagation()
      
      let form = btn.parentElement
      console.log(form.parentElement.parentElement.parentElement.parentElement)
      let titulo = form.querySelector("input").value
      let texto = form.querySelector("textarea").value
      let pessoa = JSON.parse(localStorage.getItem("loggedAccount")).nome
      
      if (titulo == "" || texto == "") {
        alert("os campos titulo e texto devem ser preenchidos para que o comentario seja feito!")
      } else {
        let comentario = document.createElement("div")
        comentario.setAttribute("class", "comentario")
        comentario.innerHTML = `<h4>${titulo}</h4><p>${texto}</p><small>${pessoa}</small>`
        let arquivadosComentario = []
        if (localStorage.getItem("comentarios")) {
          arquivadosComentario = [...JSON.parse(localStorage.getItem("comentarios"))]
        }
        arquivadosComentario[arquivadosComentario.length] = {
          id: comentarioId,
          comentario: comentario.innerHTML
        }
        localStorage.setItem("comentarios", JSON.stringify(arquivadosComentario))
        let procuralogin = JSON.parse(localStorage.getItem("logins"))
        let loginAtual = JSON.parse(localStorage.getItem("loggedAccount"))
        const index = procuralogin.findIndex(objeto => {
          return objeto.email == loginAtual.email
        })
        procuralogin[index].comentarios.push(comentarioId)
        localStorage.setItem("logins", JSON.stringify(procuralogin))
        loginAtual = procuralogin[index]
        localStorage.setItem("loggedAccount", JSON.stringify(loginAtual))
        form.parentElement.parentElement.appendChild(comentario)

        if (form.parentElement.parentElement.parentElement.parentElement.id == "cuidados-barba") {
          let comentariosSection = JSON.parse(localStorage.getItem("section-1"))
          comentariosSection.comentarios.push(comentarioId)
          localStorage.setItem("section-1", JSON.stringify(comentariosSection))
        } else if (form.parentElement.parentElement.parentElement.parentElement.id == "calvice") {
          let comentariosSection = JSON.parse(localStorage.getItem("section-2"))
          comentariosSection.comentarios.push(comentarioId)
          localStorage.setItem("section-2", JSON.stringify(comentariosSection))
        } else if (form.parentElement.parentElement.parentElement.parentElement.id == "cortes-estilosos") {
          let comentariosSection = JSON.parse(localStorage.getItem("section-3"))
          comentariosSection.comentarios.push(comentarioId)
          localStorage.setItem("section-3", JSON.stringify(comentariosSection))
        }
        btn.parentElement.parentElement.classList.remove("active")
        btn.parentElement.parentElement.parentElement.scrollLeft += 99999

        comentarioId++
        localStorage.setItem("cometarioID", JSON.stringify(comentarioId))
      }

    })
  })

  let comentariosSection = []


  btnComentar.forEach(btn => {
    comentariosSection[comentariosSection.length] = btn.parentElement.querySelector(".modal-comentar")
    btn.addEventListener("click", (evento) => {
      evento.stopImmediatePropagation()
      barraComentario = btn.parentElement.querySelector(".secao-comentarios")
      if (!localStorage.getItem("isLoggedIn")) {
        alert("Essa ação necessita de Login")
      } else {
        let alvo = btn.parentElement.querySelector(".modal-comentar")
        console.log(alvo)
        alvo.classList.toggle("active")
        let titulo = alvo.querySelector("input")
        let texto = alvo.querySelector("textarea")
        titulo.value = ""
        texto.value = ""
        barraComentario.scrollLeft -= 999999 ;
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
    if (podeRodarComentarios && (estaComentando() == false)) {scrollBarraComentario(barraComentario)};
  }, 3000);



})

function estaComentando() {
  let comentarios = document.querySelectorAll(".modal-comentar")
  let validador = false
  comentarios.forEach(section => {
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



const sectionCommentHeader = [...document.querySelectorAll(".section-comment-header")]

sectionCommentHeader.forEach((titulo)=> {
  titulo.addEventListener("click", ()=> {
    sectionCommentHeader.forEach(elemento => {
      if (elemento.classList.contains("active")) {
        elemento.classList.remove("active")
      }
    })
    titulo.classList.add("active")
    commentShow()
  })
})


function commentShow() {
  let contedores = [...document.querySelectorAll(".contedor")]
  if (sectionCommentHeader[0].classList.contains("active")) {
    if (!contedores[0].classList.contains("active")) {contedores[0].classList.add("active")}
    if (contedores[1].classList.contains("active")) {contedores[1].classList.remove("active")}
    if (contedores[2].classList.contains("active")) {contedores[2].classList.remove("active")}
  }
  if (sectionCommentHeader[1].classList.contains("active")) {
    if (!contedores[1].classList.contains("active")) {contedores[1].classList.add("active")}
    if (contedores[0].classList.contains("active")) {contedores[0].classList.remove("active")}
    if (contedores[2].classList.contains("active")) {contedores[2].classList.remove("active")}
  }
  if (sectionCommentHeader[2].classList.contains("active")) {
    if (!contedores[2].classList.contains("active")) {contedores[2].classList.add("active")}
    if (contedores[1].classList.contains("active")) {contedores[1].classList.remove("active")}
    if (contedores[0].classList.contains("active")) {contedores[0].classList.remove("active")}
  }
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