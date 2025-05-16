document.addEventListener("DOMContentLoaded", () => {
  const modoSwitch = document.getElementById("modo-switch");
  const modoLabel = document.getElementById("modo-label");
  const formulario = document.getElementById("formulario-rapido");
  const tapete = document.querySelector(".tapete-container");
  const botaoSementes = document.getElementById("liberar-sementes");
  const haste = document.getElementById("haste");

  function setInterativo(ativo) {
    // texto do botão
    modoLabel.innerText = ativo ? "Modo: Interativo 🖱️" : "Modo: Rápido ⚡";

    // mostrar ou esconder questionário
    formulario.style.display = ativo ? "none" : "block";

    // botão de sementes
    if (botaoSementes) botaoSementes.disabled = !ativo;

    // habilitar ou desabilitar drag
    document.querySelectorAll(".animal, .semente, #robo-ecologico").forEach(el => {
      el.setAttribute("draggable", ativo);
      el.style.pointerEvents = ativo ? "auto" : "none";
    });

    // bloquear ou liberar a haste
    if (haste) {
      haste.style.pointerEvents = ativo ? "auto" : "none";
      haste.style.cursor = ativo ? "grab" : "default";
    }
  }

  // ao alternar o botão
  modoSwitch.addEventListener("change", () => {
    setInterativo(!modoSwitch.checked);
  });

  // inicializa de acordo com o estado do switch
  setInterativo(!modoSwitch.checked);
});
