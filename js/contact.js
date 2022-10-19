const $form = document.getElementById("form");
const $msg = document.getElementById("msg-enviado");
const $btn = document.querySelector(".form__btn");

$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();
  const form = new FormData(this);

  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });

  if (response.ok) {
    const loader = `<div class="loadercontainer">
        <div class="loadercontainer__carga"></div>
      </div>`;

    $btn.innerHTML = loader;

    setTimeout(function () {
      $btn.innerHTML = `<span>Enviar</span>`;
      $msg.classList.remove("hidden");
      $form.reset();
    }, 4000);
  }

  setTimeout(function () {
    $msg.classList.add("hidden");
  }, 10000);
}
