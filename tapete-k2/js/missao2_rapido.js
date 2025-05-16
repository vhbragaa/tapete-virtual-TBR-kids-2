document.addEventListener("DOMContentLoaded", () => {
  const arari = document.getElementById("haste");

  function posicionarArari(valor) {
    if (!arari) return;

    let x = 0, cor = "";
    switch (valor) {
      case "verde-total":
        x = 90;
        pontos["renascimento"] = 105;
        break;
      case "verde-parcial":
        x = 63;
        pontos["renascimento"] = 75;
        break;
      case "azul-total":
        x = 0;
        pontos["renascimento"] = 45;
        break;
      case "azul-parcial":
        x = -63;
        pontos["renascimento"] = 25;
        break;
      default:
        x = -90;
        pontos["renascimento"] = 0;
    }

    arari.style.transform = `translateX(-50%) rotate(${x}deg)`;
    arari.dataset.angulo = x;
    atualizarPontuacao();
  }

  document.querySelectorAll('input[name="arari"]').forEach(input => {
    input.addEventListener("change", () => {
      posicionarArari(input.value);
    });
  });
});
