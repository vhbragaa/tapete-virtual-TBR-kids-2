function atualizarReintegracao(animalId, tipo) {
  const animal = document.getElementById(animalId);
  const destino = document.getElementById(`destino-${animalId}`);
  const drop = document.getElementById(`drop-${animalId}`);

  if (!animal || !destino || !drop) return;

  const tapeteRect = document.querySelector(".tapete-container").getBoundingClientRect();
  const destinoRect = destino.getBoundingClientRect();
  const dropRect = drop.getBoundingClientRect();

  if (tipo === "fora") {
    // Voltar pro local original
    drop.appendChild(animal);
    animal.style.position = "relative";
    animal.style.width = "77%";
    animal.style.height = "77%";
    animal.style.top = "0";
    animal.style.left = "0";
    pontos[animalId] = 0;
  } else {
    animal.style.position = "absolute";
    animal.style.width = "6.5%";
    animal.style.height = "6.5%";

    const deslocamento = tipo === "parcial" ? 0 : 15; // pra parcial ficar deslocado

    animal.style.left = `${destino.offsetLeft + deslocamento}px`;
    animal.style.top = `${destino.offsetTop + deslocamento}px`;

    document.querySelector(".tapete-container").appendChild(animal);

    pontos[animalId] = tipo === "total"
      ? (animalId === "tamandua" ? 70 : animalId === "macaco" ? 50 : 30)
      : (animalId === "tamandua" ? 35 : animalId === "macaco" ? 25 : 15);
  }

  atualizarPontuacao();
}

// Eventos do formulário
["tamandua", "macaco", "onca"].forEach(id => {
  document.querySelectorAll(`input[name="${id}"]`).forEach(radio => {
    radio.addEventListener("change", () => {
      atualizarReintegracao(id, radio.value);
    });
  });
});
