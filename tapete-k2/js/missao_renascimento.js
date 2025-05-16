const haste = document.getElementById("haste");
const semicirculo = document.querySelector(".semicirculo-container");

let segurando = false;
let anguloAtual = -90; // começa exatamente como no CSS

// Quando clica na haste
haste.addEventListener("mousedown", (e) => {
  e.preventDefault();
  segurando = true;
  haste.classList.add("grabbing");

  // pega a rotação atual diretamente do transform (se já tiver sido girada)
  const match = haste.style.transform.match(/rotate\(([-\d.]+)deg\)/);
  if (match) {
    anguloAtual = parseFloat(match[1]);
  }
});

// Quando solta o botão
document.addEventListener("mouseup", () => {
  segurando = false;
  haste.classList.remove("grabbing");
  atualizarPontuacaoRenascimento();
});

// Enquanto move o mouse com o botão segurado
document.addEventListener("mousemove", (e) => {
  // Só mover a haste se estiver no modo interativo
  const modoRapido = document.getElementById("modo-switch")?.checked;
  if (!segurando || modoRapido) return;

  if (!segurando) return;

  const movimentoX = e.movementX;
  anguloAtual += movimentoX * 0.5; // sensibilidade ajustável

  if (anguloAtual < -90) anguloAtual = -90; // trava no preto
  if (anguloAtual > 90) anguloAtual = 90;   // trava no verde

  haste.style.transform = `translateX(-50%) rotate(${anguloAtual}deg)`;
  haste.dataset.angulo = anguloAtual;
});

function atualizarPontuacaoRenascimento() {
  const angulo = parseFloat(haste.dataset.angulo || -90);
  const anguloCorrigido = angulo + 90; // -90 → 0, 0 → 90, 90 → 180

  let pontuacao = 0;

  if (anguloCorrigido <20) {
    pontuacao = 0; // preto
  } else if (anguloCorrigido >= 20 && anguloCorrigido < 150) {
    // azul (floresta)
    if (anguloCorrigido > 30 && anguloCorrigido < 150) {
      pontuacao = 45; // totalmente
    } else {
      pontuacao = 25; // parcialmente
    }
  } else if (anguloCorrigido >= 150) {
    // verde (reserva)
    if (anguloCorrigido > 155.5) {
      pontuacao = 105; // totalmente
    } else {
      pontuacao = 75; // parcialmente
    }
  }

  pontos["renascimento"] = pontuacao;
  atualizarPontuacao();
}

document.getElementById("resetar-pontuacao").addEventListener("click", () => {
  // 🔁 Resetar posição da haste para o preto (ângulo -90°)
  haste.style.transform = "translateX(-50%) rotate(-90deg)";
  haste.dataset.angulo = -90;

  // 🧼 Zerar pontuação da missão Renascimento
  pontos["renascimento"] = 0;
  atualizarPontuacao(); // já existente
});

