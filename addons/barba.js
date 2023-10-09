const linksLogados = document.querySelectorAll(".logged")
const linksNaoLogados = document.querySelectorAll(".notLogged")

console.log(localStorage.getItem("isLoggedIn") == "true")
if (localStorage.getItem("isLoggedIn")  == "true") {
    linksLogados.forEach(link => {
        link.classList.add("active")
    })
    linksNaoLogados.forEach(link => {
        link.classList.remove("active")
    })
} 