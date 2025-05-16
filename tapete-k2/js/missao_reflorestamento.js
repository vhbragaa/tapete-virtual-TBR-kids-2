const botaoSementes = document.getElementById("liberar-sementes");
const tapeteContainer = document.querySelector(".tapete-container");

const areaPlantio1Path = document.getElementById("plantio1-path");
const areaPlantio2 = document.getElementById("plantio-2").querySelector("polygon");

const estadoSementes = new Map();

// === FUNÇÕES DE VERIFICAÇÃO DE COLISÃO ===

function pontoDentroDoPlantio1(x, y) {
    const svg = document.querySelector("#plantio-1 svg");
    const point = svg.createSVGPoint();
    point.x = x;
    point.y = y;

    const matrix = svg.getScreenCTM().inverse();
    const transformedPoint = point.matrixTransform(matrix);

    return areaPlantio1Path.isPointInFill(transformedPoint);
}

function pontoDentroDoPoligono(x, y) {
    const svg = document.querySelector("#plantio-2 svg");
    const point = svg.createSVGPoint();
    point.x = x;
    point.y = y;

    const matrix = svg.getScreenCTM().inverse();
    const transformedPoint = point.matrixTransform(matrix);

    return areaPlantio2.isPointInFill(transformedPoint);
}

// === FUNÇÕES DE AVALIAÇÃO DE CADA ÁREA ===

function avaliarSementePlantio(semente, sementeRect, plantioId, verificaFunc) {
    const estado = estadoSementes.get(semente.id);
    const statusKey = `status${plantioId}`;
    const pontosKey = `pontos${plantioId}`;
    const pontoLabel = `plantio-${plantioId}`;

    const dentroTotal = (
        verificaFunc(sementeRect.left + 5, sementeRect.top + 5) &&
        verificaFunc(sementeRect.right - 5, sementeRect.top + 5) &&
        verificaFunc(sementeRect.left + 5, sementeRect.bottom - 5) &&
        verificaFunc(sementeRect.right - 5, sementeRect.bottom - 5)
    );

    const dentroParcial = (
        !dentroTotal && (
            verificaFunc(sementeRect.left + 5, sementeRect.top + 5) ||
            verificaFunc(sementeRect.right - 5, sementeRect.top + 5) ||
            verificaFunc(sementeRect.left + 5, sementeRect.bottom - 5) ||
            verificaFunc(sementeRect.right - 5, sementeRect.bottom - 5)
        )
    );

        if (dentroTotal && estado[statusKey] !== "totalmente") {
        pontos[pontoLabel] -= estado[pontosKey];
        estado[statusKey] = "totalmente";
        estado[pontosKey] = (plantioId === 1) ? 10 : 14;
        pontos[pontoLabel] += estado[pontosKey];
    } else if (dentroParcial && estado[statusKey] !== "parcialmente") {
        pontos[pontoLabel] -= estado[pontosKey];
        estado[statusKey] = "parcialmente";
        estado[pontosKey] = (plantioId === 1) ? 5 : 7;
        pontos[pontoLabel] += estado[pontosKey];

    } else if (!dentroTotal && !dentroParcial && estado[statusKey] !== "fora") {
        pontos[pontoLabel] -= estado[pontosKey];
        estado[statusKey] = "fora";
        estado[pontosKey] = 0;
    }

    atualizarPontuacao();
}

// === LIBERAÇÃO DE SEMENTES ===

botaoSementes.addEventListener("click", () => {
    // Remover as antigas
    document.querySelectorAll(".semente").forEach(semente => semente.remove());
    estadoSementes.clear();

    for (let i = 0; i < 10; i++) {
        const semente = document.createElement("div");
        semente.classList.add("semente");

        const offsetX = Math.random() * 15 + 62;
        const offsetY = Math.random() * 12 + 13;

        semente.style.left = `${offsetX}%`;
        semente.style.top = `${offsetY}%`;
        semente.style.width = "2%";
        semente.style.height = "2%";
        semente.style.position = "absolute";

        semente.setAttribute("draggable", "true");
        semente.id = `semente-${i}`;

        estadoSementes.set(semente.id, {
            status1: "fora", pontos1: 0,
            status2: "fora", pontos2: 0
        });

        semente.addEventListener("dragstart", (e) => {
            e.dataTransfer.setData("text/plain", e.target.id);
        });

        tapeteContainer.appendChild(semente);

        // Avalia onde caiu ao ser liberada
        setTimeout(() => {
            const rect = semente.getBoundingClientRect();
            avaliarSementePlantio(semente, rect, 1, pontoDentroDoPlantio1);
            avaliarSementePlantio(semente, rect, 2, pontoDentroDoPoligono);
        }, 10);
    }

    pontos["plantio-1"] = 0;
    pontos["plantio-2"] = 0;
    atualizarPontuacao();
});

// === DROP MANUAL ===

tapeteContainer.addEventListener("drop", (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("text");
    const semente = document.getElementById(id);
    if (!semente || !semente.classList.contains("semente")) return;

    const tapeteRect = tapeteContainer.getBoundingClientRect();
    const x = e.clientX - tapeteRect.left;
    const y = e.clientY - tapeteRect.top;

    semente.style.position = "absolute";

    const tapeteWidth = tapeteContainer.offsetWidth;
    const tapeteHeight = tapeteContainer.offsetHeight;

    const larguraSemente = tapeteWidth * 0.02;
    const alturaSemente = tapeteHeight * 0.02;

    const percentX = ((x - larguraSemente / 2) / tapeteWidth) * 100;
    const percentY = ((y - alturaSemente / 2) / tapeteHeight) * 100;

    semente.style.width = "2%";
    semente.style.height = "2%";
    semente.style.left = `${percentX}%`;
    semente.style.top = `${percentY}%`;

    const rect = semente.getBoundingClientRect();
    avaliarSementePlantio(semente, rect, 1, pontoDentroDoPlantio1);
    avaliarSementePlantio(semente, rect, 2, pontoDentroDoPoligono);
    verificarBonusReflorestamento();

});

// === RESET ===

document.getElementById("resetar-pontuacao").addEventListener("click", () => {
    pontos["plantio-1"] = 0;
    pontos["plantio-2"] = 0;
    atualizarPontuacao();

    document.querySelectorAll(".semente").forEach(semente => semente.remove());
    estadoSementes.clear();
});

function verificarBonusReflorestamento() {
  let sementesValidas = 0;

  for (let estado of estadoSementes.values()) {
    const pontuando1 = estado.status1 === "totalmente" || estado.status1 === "parcialmente";
    const pontuando2 = estado.status2 === "totalmente" || estado.status2 === "parcialmente";

    if (pontuando1 || pontuando2) {
      sementesValidas++;
    }
  }

  const todasPontuando = sementesValidas === 10;
  const jaTinhaBonus = pontos["bonus-reflorestamento"] === 40;

  if (todasPontuando && !jaTinhaBonus) {
    pontos["bonus-reflorestamento"] = 40;
  } else if (!todasPontuando && jaTinhaBonus) {
    pontos["bonus-reflorestamento"] = 0;
  }

  atualizarPontuacao();
}

document.getElementById("resetar-pontuacao").addEventListener("click", () => {
    // Resetar plantios
    pontos["plantio-1"] = 0;
    pontos["plantio-2"] = 0;

    // 🔁 Resetar bônus
    pontos["bonus-reflorestamento"] = 0;

    // Resetar sementes
    document.querySelectorAll(".semente").forEach(semente => semente.remove());
    estadoSementes.clear();

    atualizarPontuacao();
});

