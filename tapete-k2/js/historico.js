document.getElementById('salvar-pontuacao').addEventListener('click', () => {
  const nomeEquipe = prompt("Digite o nome da equipe:");
  if (!nomeEquipe) return;

  const total = document.getElementById('pontuacao-total').textContent;
  const dataHora = new Date().toLocaleString('pt-BR');

  const novaPontuacao = {
    equipe: nomeEquipe,
    total: parseInt(total),
    data: dataHora
  };

  const historico = JSON.parse(localStorage.getItem("historicoPontuacoes")) || [];
  historico.unshift(novaPontuacao);
  if (historico.length > 10) historico.pop(); // mantém só os 10 últimos

  localStorage.setItem("historicoPontuacoes", JSON.stringify(historico));
  atualizarTabelaHistorico();
});

function atualizarTabelaHistorico() {
  const historico = JSON.parse(localStorage.getItem("historicoPontuacoes")) || [];
  const tbody = document.querySelector("#tabela-historico tbody");
  tbody.innerHTML = "";

  historico.forEach((p, index) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${p.equipe}</td>
      <td>${p.total}</td>
      <td>${p.data}</td>
      <td><button class="btn-excluir-linha" onclick="excluirPontuacao(${index})">🗑️</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function excluirPontuacao(index) {
  const historico = JSON.parse(localStorage.getItem("historicoPontuacoes")) || [];
  historico.splice(index, 1);
  localStorage.setItem("historicoPontuacoes", JSON.stringify(historico));
  atualizarTabelaHistorico();
}

document.getElementById("apagar-tudo").addEventListener("click", () => {
  const confirmar = confirm("Tem certeza que deseja apagar todas as pontuações?");
  if (confirmar) {
    localStorage.removeItem("historicoPontuacoes");
    atualizarTabelaHistorico();
  }
});



// Atualiza a tabela ao abrir a página
document.addEventListener("DOMContentLoaded", atualizarTabelaHistorico);
