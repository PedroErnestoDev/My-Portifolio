let menu = document.querySelector(".container-hamburguer");
let menuItens = document.querySelector(".mobile-tools");

menu.addEventListener("click", () => {
  let displayAtual = getComputedStyle(menuItens).display;

  if (displayAtual === "none") {
    menuItens.style.display = "flex";
  } else {
    menuItens.style.display = "none";
  }
});

const dicionary = {
  pt: {
    "about-frase": "Oi",
  },

  en: {
    "titulo-outline": "Hi, I'am Pedro Ernesto",
    "paragrafh-outline": "Full-Stack Developer",
    "about-title": "About",
    "about-frase-1":
      "I'm Pedro Henrique Ernesto De Souza, a Fullstack developer in training with a degree        in                Computer Science. My professional career is guided by continuous learning and constant practice indeveloping modern and functional web applications.",
    "about-frase-2":
      "Throughout my training, I gained experience with several languages ​​and tools, including JavaScript, TypeScript, React, Vue, PHP, MySQL, HTML5, CSS3, and Sass.",
    "about-frase-3":
      "Additionally, I have knowledge of code versioning using Git/GitHub and interface design using Figma,always striving to create efficient and aesthetically pleasing solutions."
  },
};

console.log(dicionary.pt["about-frase"]);
