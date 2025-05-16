console.log("missao_departamento.js carregado!");

// Pontuação da missão
const pontuacaoRobo = {
  total: 65,
  parcial: 35
};

const robo = document.getElementById("robo-ecologico");
const destinoRobo = document.getElementById("destino-robo");

// Evento de início do arrasto
robo.addEventListener("dragstart", (e) => {
  e.dataTransfer.setData("text/plain", e.target.id);
});

// Permite soltar no tapete
document.querySelector(".tapete-container").addEventListener("dragover", (e) => {
  e.preventDefault();
});

// Evento de drop
document.querySelector(".tapete-container").addEventListener("drop", (e) => {
  e.preventDefault();

  const id = e.dataTransfer.getData("text");
  if (id !== "robo-ecologico") return;

  const robo = document.getElementById(id);
  if (!robo || !pontuacaoRobo) return; // proteção dupla

  robo.style.position = "absolute";
  robo.style.width = "10%";
  robo.style.height = "10%";

  const tapeteRect = document.querySelector(".tapete-container").getBoundingClientRect();
  const x = e.clientX - tapeteRect.left;
  const y = e.clientY - tapeteRect.top;

  robo.style.left = `${x - robo.offsetWidth / 2}px`;
  robo.style.top = `${y - robo.offsetHeight / 2}px`;

  document.querySelector(".tapete-container").appendChild(robo);

  // ⚠️ Apenas se robo e destino existirem
  if (!destinoRobo) return;

  const roboRect = robo.getBoundingClientRect();
  const destinoRect = destinoRobo.getBoundingClientRect();

  const dentroTotal = (
    roboRect.left >= destinoRect.left &&
    roboRect.right <= destinoRect.right &&
    roboRect.top >= destinoRect.top &&
    roboRect.bottom <= destinoRect.bottom
  );

  const dentroParcial = (
    roboRect.right > destinoRect.left &&
    roboRect.left < destinoRect.right &&
    roboRect.bottom > destinoRect.top &&
    roboRect.top < destinoRect.bottom
  );

  if (dentroTotal) {
    pontos["departamento"] = pontuacaoRobo.total;
  } else if (dentroParcial) {
    pontos["departamento"] = pontuacaoRobo.parcial;
  } else {
    pontos["departamento"] = 0;
  }

  atualizarPontuacao();
});


document.getElementById("resetar-pontuacao").addEventListener("click", () => {
  const robo = document.getElementById("robo-ecologico");

  if (robo) {
    robo.style.position = "absolute";
    robo.style.top = "87%";
    robo.style.left = "4.3%";
    robo.style.width = "10%";   // reforça o tamanho
    robo.style.height = "10%";
  }

  pontos["departamento"] = 0;
  atualizarPontuacao();
});



