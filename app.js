let menu = document.querySelector(".container-hamburguer");
let menuItens = document.querySelector(".mobile-tools");

menu.addEventListener('click', () => {
  let displayAtual = getComputedStyle(menuItens).display;

  if (displayAtual === "none") {
    menuItens.style.display = "flex";
  } else {
    menuItens.style.display = "none";
  }
});
