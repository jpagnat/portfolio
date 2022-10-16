const proyectos = [
  {
    title: "Time Cards",
    img: "./img/proyectos/proyecto2.png",
    description: "Proyecto Frontend Mentor",
    back: "Sitio web responsive. Consumo de JSON para renderizar tarjetas",
    page: "https://jpagnat.github.io/time-cards/",
    github: "https://github.com/jpagnat/time-cards",
    tecnologias: "HTML, CSS, JavaScript, JSON",
  },
  {
    title: "Credit Card Interactive",
    img: "./img/proyectos/proyecto3.png",
    description: "Proyecto Frontend Mentor",
    back: "Sitio web responsive con formulario dinamico y tarjeta actualizada en tiempo real",
    page: "https://jpagnat.github.io/credit-card/",
    github: "https://github.com/jpagnat/credit-card",
    tecnologias: "HTML, CSS, SASS, JavaScript",
  },
  {
    title: "Portfolio v1 ",
    img: "./img/proyectos/proyecto4.png",
    description: "Proyecto Educativo",
    back: "Portfolio personal realizado como proyecto final del curso de Desarrollo Web.",
    page: "https://jpagnat.github.io/portfolio-template/",
    github: "https://github.com/jpagnat/portfolio-template",
    tecnologias: "HTML, CSS, JavaScript",
  },
  {
    title: "Manage",
    img: "./img/proyectos/proyecto1.png",
    description: "Proyecto Educativo",
    back: "Sitio web informativo realizado como proyecto final de la materia Front End I",
    page: "https://jpagnat.github.io/practiceI/",
    github: "https://github.com/jpagnat/practiceI",
    tecnologias: "HTML, CSS",
  },
];

const cardContainer = document.querySelector(".work__projects");

function loadCards() {
  for (let i = 0; i < proyectos.length; i++) {
    cardContainer.innerHTML += `<div class="work__element" id=${i}></div>`;

    const el = document.getElementById(i);
    el.style.backgroundImage = `url(${proyectos[i].img})`;
  }
}

loadCards();
