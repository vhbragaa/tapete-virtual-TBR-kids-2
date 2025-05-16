const pontos = {
  "tamandua": 0,
  "macaco": 0,
  "onca": 0,
  "plantio-1": 0,
  "plantio-2": 0,
  "renascimento": 0,
  "bonus-reflorestamento" : 0,
  "departamento" : 0
};


function atualizarPontuacao() {
    document.getElementById("pontuacao-tamandua").innerText = pontos["tamandua"];
    document.getElementById("pontuacao-macaco").innerText = pontos["macaco"];
    document.getElementById("pontuacao-onca").innerText = pontos["onca"];
    document.getElementById("pontuacao-plantio-1").innerText = pontos["plantio-1"];
    document.getElementById("pontuacao-plantio-2").innerText = pontos["plantio-2"];
    document.getElementById("pontuacao-renascimento").innerText = pontos["renascimento"];
    document.getElementById("pontuacao-departamento").innerText = pontos["departamento"];
    document.getElementById("pontuacao-bonus-reflorestamento").innerText = pontos["bonus-reflorestamento"];

    const total = Object.values(pontos).reduce((acc, val) => acc + val, 0);
    document.getElementById("pontuacao-total").innerText = total;
}
