window.onscroll = function () {
  addNavbar();
};

const navbar = document.getElementById("nav");

const sticky = navbar.offsetTop;

function addNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
