//Header
const headerName = document.querySelector(".header__presentation");

ScrollReveal().reveal(headerName, {
  delay: 500,
  distance: "50px",
  easing: "ease-in",
  scale: 0.85,
});

//Links
const links = document.querySelectorAll(".nav ul li a");
const linkFooter = document.querySelector(".footer__up a");
const linkHeader = document.querySelector(".header a");

linkFooter.addEventListener("click", clickHandler);
linkHeader.addEventListener("click", clickHandler);

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth",
  });
}
