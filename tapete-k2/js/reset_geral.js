document.addEventListener("DOMContentLoaded", () => {
  const botaoReset = document.getElementById("resetar-pontuacao");
  if (!botaoReset) return;

  botaoReset.addEventListener("click", () => {
    console.log("🔁 Resetando tudo...");

    // 🌱 Sementes
    document.querySelectorAll(".semente").forEach(s => s.remove());
    if (typeof estadoSementes !== "undefined") estadoSementes.clear();

    // 🐾 Animais
    ["tamandua", "macaco", "onca"].forEach(id => {
      const animal = document.getElementById(id);
      const drop = document.getElementById(`drop-${id}`);
      if (animal && drop) {
        drop.appendChild(animal);
        animal.style.position = "relative";
        animal.style.width = "77%";
        animal.style.height = "77%";
        animal.style.top = "0";
        animal.style.left = "0";
      }
      pontos[id] = 0;
    });

    // 🌿 Haste (renascimento)
    const haste = document.getElementById("haste");
    if (haste) {
      haste.style.transform = "translateX(-50%) rotate(-90deg)";
      haste.dataset.angulo = -90;
    }
    pontos["renascimento"] = 0;

    // 🤖 Robô
    const robo = document.getElementById("robo-ecologico");
    if (robo) {
      robo.style.position = "absolute";
      robo.style.top = "87%";
      robo.style.left = "4.3%";
      robo.style.width = "10%";
      robo.style.height = "10%";
    }
    pontos["departamento"] = 0;

    // 🪴 Plantio e bônus
    pontos["plantio-1"] = 0;
    pontos["plantio-2"] = 0;
    pontos["bonus-reflorestamento"] = 0;

    // 🔁 Zerar formulário rápido
    document.querySelectorAll('#formulario-rapido input[type="radio"], #formulario-rapido input[type="checkbox"]').forEach(input => {
      input.checked = input.defaultChecked;
    });

    document.querySelectorAll('#formulario-rapido select').forEach(select => {
      select.selectedIndex = 0;
    });

    document.querySelectorAll('#formulario-rapido input[type="number"]').forEach(input => {
      input.value = 0;
    });

    // ❌ Esconder aviso de excesso de sementes
    const aviso = document.getElementById("aviso-sementes");
    if (aviso) aviso.style.display = "none";

    // ✅ Atualizar tudo
    atualizarPontuacao();
  });
});

document.getElementById("resetar-pontuacao").addEventListener("click", () => {
  // ... (sua lógica existente de reset)

  // Fecha todas as missões colapsáveis
  document.querySelectorAll(".missao").forEach((missao) => {
    missao.classList.remove("ativa");
  });
});
