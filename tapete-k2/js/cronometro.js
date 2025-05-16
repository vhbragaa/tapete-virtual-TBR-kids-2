let tempoRestante = 120;
let cronometroIntervalo = null;

function atualizarDisplay() {
  const minutos = String(Math.floor(tempoRestante / 60)).padStart(2, '0');
  const segundos = String(tempoRestante % 60).padStart(2, '0');
  document.getElementById("cronometro-display").innerText = `⏱️ ${minutos}:${segundos}`;
}

document.getElementById("btn-iniciar").addEventListener("click", () => {
  if (cronometroIntervalo !== null) return; // já rodando

  iniciarContagemInicial();
});

function iniciarContagemInicial() {
  const overlay = document.getElementById("contagem-inicial");
  overlay.classList.remove("hidden");

  const mensagens = ["3", "2", "1", "TBR!"];
  let etapa = 0;

  overlay.innerText = mensagens[etapa];

  const intervaloContagem = setInterval(() => {
    etapa++;
    if (etapa < mensagens.length) {
      overlay.innerText = mensagens[etapa];
    } else {
      clearInterval(intervaloContagem);
      overlay.classList.add("hidden");
      iniciarCronometro(); // começa o cronômetro real
    }
  }, 1000);
}

function iniciarCronometro() {
  cronometroIntervalo = setInterval(() => {
    if (tempoRestante > 0) {
      tempoRestante--;
      atualizarDisplay();
    } else {
      clearInterval(cronometroIntervalo);
      cronometroIntervalo = null;
    }
  }, 1000);
}


document.getElementById("btn-pausar").addEventListener("click", () => {
  clearInterval(cronometroIntervalo);
  cronometroIntervalo = null;
});

document.getElementById("btn-resetar-cronometro").addEventListener("click", () => {
  clearInterval(cronometroIntervalo);
  cronometroIntervalo = null;
  tempoRestante = 120;
  atualizarDisplay();
});

atualizarDisplay(); // define display inicial
