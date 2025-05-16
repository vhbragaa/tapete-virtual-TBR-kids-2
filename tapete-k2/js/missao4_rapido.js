document.addEventListener("DOMContentLoaded", () => {
  const robo = document.getElementById("robo-ecologico");

  function posicionarRobo(valor) {
    if (!robo) return;

    robo.style.position = "absolute";
    robo.style.width = "12%";
    robo.style.height = "12%";

    switch (valor) {
      case "total":
        robo.style.top = "5%";
        robo.style.left = "5%";
        pontos["departamento"] = 65;
        break;
      case "parcial":
        robo.style.top = "5%";
        robo.style.left = "16%";
        pontos["departamento"] = 35;
        break;
      default:
        robo.style.top = "82%";
        robo.style.left = "3%";
        pontos["departamento"] = 0;
    }

    atualizarPontuacao();
  }

  document.querySelectorAll('input[name="departamento"]').forEach(radio => {
    radio.addEventListener("change", () => {
      posicionarRobo(radio.value);
    });
  });
});
