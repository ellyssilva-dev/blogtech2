const botoes = document.querySelectorAll(".btn-like");

botoes.forEach(function (botao) {
  let curtiu = false;
  botao.addEventListener("click", botaoClicado);
  function botaoClicado() {
    //console.log("fui clicado");
    let texto = botao.querySelector("span");
    if (curtiu === false) {
      texto.textContent++;
      curtiu = true;
    } else {
      texto.textContent--;
      curtiu = false;
    }
  }
});

// DARK MODE
const themeBtn = document.querySelector(".theme-toggle");
themeBtn.addEventListener("click", () => {
  // Alterna a classe "dark-theme" no body
  document.body.classList.toggle("dark-theme");

  // Atualiza o texto do botão com base no tema atual
  themeBtn.textContent = document.body.classList.contains("dark-theme")
    ? "☀️"
    : "🌓";
});