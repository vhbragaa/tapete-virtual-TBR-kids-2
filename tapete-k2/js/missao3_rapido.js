document.addEventListener("DOMContentLoaded", () => {
  const campos = {
    "area1-parcial": 5,
    "area1-total": 10,
    "area2-parcial": 7,
    "area2-total": 14
  };

  const ids = Object.keys(campos);
  const aviso = document.getElementById("aviso-sementes");

  function atualizarPontuacaoReflorestamento() {
  let totalSementes = 0;
  let pontos1 = 0;
  let pontos2 = 0;

  // Calcula o total de sementes e pontos
  ids.forEach(id => {
    const valor = parseInt(document.getElementById(id).value) || 0;
    totalSementes += valor;

    if (id.startsWith("area1")) pontos1 += valor * campos[id];
    if (id.startsWith("area2")) pontos2 += valor * campos[id];
  });

  // Se ultrapassou o limite de sementes, zera a pontuação
  const ultrapassouLimite = totalSementes > 10;

  pontos["plantio-1"] = ultrapassouLimite ? 0 : pontos1;
  pontos["plantio-2"] = ultrapassouLimite ? 0 : pontos2;
  pontos["bonus-reflorestamento"] = (!ultrapassouLimite && totalSementes === 10) ? 40 : 0;

  aviso.style.display = ultrapassouLimite ? "block" : "none";

  atualizarPontuacao();
}

  ids.forEach(id => {
    document.getElementById(id).addEventListener("input", atualizarPontuacaoReflorestamento);
  });
});
