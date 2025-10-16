let menu = document.querySelector(".container-hamburguer")
let menuItens = document.querySelector(".mobile-tools")

menu.addEventListener('click', () => {
  if (menuItens.style.display == "none") {
    menuItens.style.display = "flex"
  } else {
    menuItens.style.display = "none"
  }
});