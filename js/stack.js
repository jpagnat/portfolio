//Stack
let miStack = [
  "<i class='stack__icon fa-brands fa-html5'></i>",
  "<i class='stack__icon fa-brands fa-css3-alt'></i>",
  "<i class='stack__icon fa-brands fa-js'></i>",
  "<i class='stack__icon fa-brands fa-sass'></i>",
  "<i class='stack__icon fa-brands fa-bootstrap'></i>",
  "<i class='stack__icon fa-brands fa-git-alt'></i>",
];

const stack = document.querySelector(".stack");

function renderStack() {
  miStack.forEach((element) => {
    stack.innerHTML += element;
  });
}

renderStack();
