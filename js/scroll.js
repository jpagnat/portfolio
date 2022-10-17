//Header
const headerName = document.querySelector(".header__presentation");

ScrollReveal().reveal(headerName, {
  delay: 500,
  distance: "50px",
  easing: "ease-in",
  scale: 0.85,
});

//Links
const links = document.querySelectorAll("a");
console.log(links);

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
