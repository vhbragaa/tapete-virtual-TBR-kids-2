console.log("missao_reintegracao.js carregado!");

// Mapeamento dos destinos
const destinos = {
    "tamandua": document.getElementById("destino-tamandua"),
    "macaco": document.getElementById("destino-macaco"),
    "onca": document.getElementById("destino-onca")
};

const pontuacao = {
    "tamandua": { total: 70, parcial: 35 },
    "macaco": { total: 50, parcial: 25 },
    "onca": { total: 30, parcial: 15 }
};

// Evento de início do arrasto
document.querySelectorAll(".animal").forEach((animal) => {
    animal.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", e.target.id);
    });
});

// Habilita soltura no tapete
document.querySelector(".tapete-container").addEventListener("dragover", (e) => {
    e.preventDefault();
});

// Evento de drop
document.querySelector(".tapete-container").addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const animal = document.getElementById(id);

    // Coloca diretamente no tapete para ser posicionado livremente
    animal.style.position = "absolute";

    const tapeteRect = document.querySelector(".tapete-container").getBoundingClientRect();
    const x = e.clientX - tapeteRect.left;
    const y = e.clientY - tapeteRect.top;


    // Define tamanho proporcional ao tapete
    animal.style.width = "6.5%";
    animal.style.height = "6.5%";

    // Posiciona centralizado no cursor
    animal.style.left = `${x - (animal.offsetWidth / 2)}px`;
    animal.style.top = `${y - (animal.offsetHeight / 2)}px`;



    // Solta no tapete-container
    document.querySelector(".tapete-container").appendChild(animal);

    // Verifica se está dentro da área de destino
    const destino = destinos[id];
    if (destino) {
        const animalRect = animal.getBoundingClientRect();
        const destinoRect = destino.getBoundingClientRect();

        const dentroTotalmente = (
            animalRect.left >= destinoRect.left &&
            animalRect.right <= destinoRect.right &&
            animalRect.top >= destinoRect.top &&
            animalRect.bottom <= destinoRect.bottom
        );

        const dentroParcialmente = (
            animalRect.right > destinoRect.left &&
            animalRect.left < destinoRect.right &&
            animalRect.bottom > destinoRect.top &&
            animalRect.top < destinoRect.bottom
        );

        if (dentroTotalmente) {
            pontos[id] = pontuacao[id].total;
        } else if (dentroParcialmente) {
            pontos[id] = pontuacao[id].parcial;
        } else {
            pontos[id] = 0;
        }

        atualizarPontuacao();
    }
});
document.getElementById("resetar-pontuacao").addEventListener("click", () => {
    console.log("🦡 Resetando os animais...");

    // Resetar posição dos animais
    ["tamandua", "macaco", "onca"].forEach((id) => {
        const animal = document.getElementById(id);
        const dropArea = document.getElementById(`drop-${id}`);

        if (animal && dropArea) {
            dropArea.appendChild(animal);
            animal.style.position = "relative";
            animal.style.width = "77%";
            animal.style.height = "77%";
            animal.style.top = "0";
            animal.style.left = "0";
        } else {
            console.error(`⚠️ Erro ao resetar ${id}`);
        }

        // 🔁 Zerar pontuação do animal
        pontos[id] = 0;
    });

    // Atualizar a pontuação geral
    atualizarPontuacao();
});


