<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
    <title>Tapete K2 - Desafio TBR</title>
    <link rel="stylesheet" href="./css/styles.css">
    <link rel="stylesheet" href="./css/missao_reintegracao.css">
    <link rel="stylesheet" href="./css/missao_reflorestamento.css">
    <link rel="stylesheet" href="./css/missao_renascimento.css">
    <link rel="stylesheet" href="./css/missao_departamento.css">
    <link rel="stylesheet" href="./css/cronometro.css">
    <link rel="stylesheet" href="./css/interruptor.css">
    <link rel="stylesheet" href="./css/formulario.css">
    <link rel="stylesheet" href="./css/historico.css">
    <script src="./js/pontuacao.js" defer></script>
    <script src="./js/missao_reintegracao.js" defer></script>
    <script src="./js/missao_reflorestamento.js" defer></script>
    <script src="./js/missao_renascimento.js" defer></script>
    <script src="./js/missao_departamento.js" defer></script>
    <script src="./js/cronometro.js" defer></script>
    <script src="./js/interruptor.js" defer></script>
    <script src="./js/missao1_rapido.js" defer></script>
    <script src="./js/missao2_rapido.js" defer></script>
    <script src="./js/missao3_rapido.js" defer></script>
    <script src="./js/missao4_rapido.js" defer></script>
    <script src="./js/reset_geral.js" defer></script>
    <script src="./js/scripts.js" defer></script>
    <script src="./js/historico.js" defer></script>


</head>
<body>
<div id="mobile-warning" style="display: none;">
  <div class="mobile-overlay">
    <div class="mobile-message">
      🚫 Este site está disponível apenas para computadores atualmente.<br>
      Por favor, acesse em uma tela maior.
    </div>
  </div>
</div>

<div class="layout-principal">
<div class="painel-topo">
  <div class="painel-lado-esquerdo">
    <h3 id="cronometro-display">⏱️ 02:00</h3>
    <div class="cronometro-botoes">
      <button id="btn-iniciar">▶️ Iniciar</button>
      <button id="btn-pausar">⏸️ Pausar</button>
      <button id="btn-resetar-cronometro">🔁 Resetar</button>
    </div>
  </div>

  <div class="painel-lado-direito">
    <label class="modo-switch">
      <input type="checkbox" id="modo-switch">
      <span class="slider round"></span>
    </label>
    <span id="modo-label">Modo: Interativo 🖱️</span>
  </div>
</div>




    <!-- Interface com 3 colunas -->
    <div class="interface-central">
        <!-- Formulário Rápido -->
        <!-- Formulário Rápido com Missões Colapsáveis -->
        <div id="formulario-rapido">
        <h3>MISSÕES</h3>
        
        <div class="form-missao">

            <!-- TAMANDUÁ -->
            <div class="missao">
            <button class="missao-toggle">🦡 Tamanduá-Bandeira</button>
            <div class="missao-conteudo">
                <label><input type="radio" name="tamandua" value="total"> Tocando totalmente (70 pts)</label><br>
                <label><input type="radio" name="tamandua" value="parcial"> Tocando parcialmente (35 pts)</label><br>
                <label><input type="radio" name="tamandua" value="fora" checked> Fora da área (0 pts)</label>
            </div>
            </div>

            <!-- MACACO -->
            <div class="missao">
            <button class="missao-toggle">🐒 Macaco-Prego</button>
            <div class="missao-conteudo">
                <label><input type="radio" name="macaco" value="total"> Tocando totalmente (50 pts)</label><br>
                <label><input type="radio" name="macaco" value="parcial"> Tocando parcialmente (25 pts)</label><br>
                <label><input type="radio" name="macaco" value="fora" checked> Fora da área (0 pts)</label>
            </div>
            </div>

            <!-- ONÇA -->
            <div class="missao">
            <button class="missao-toggle">🐆 Onça-Pintada</button>
            <div class="missao-conteudo">
                <label><input type="radio" name="onca" value="total"> Tocando totalmente (30 pts)</label><br>
                <label><input type="radio" name="onca" value="parcial"> Tocando parcialmente (15 pts)</label><br>
                <label><input type="radio" name="onca" value="fora" checked> Fora da área (0 pts)</label>
            </div>
            </div>

            <!-- RENASCIMENTO -->
            <div class="missao">
            <button class="missao-toggle">🟢🟦 Renascimento Azul</button>
            <div class="missao-conteudo">
                <label><input type="radio" name="arari" value="verde-total"> Totalmente na área verde (105 pts)</label><br>
                <label><input type="radio" name="arari" value="verde-parcial"> Parcialmente na área verde (75 pts)</label><br>
                <label><input type="radio" name="arari" value="azul-total"> Totalmente na área azul (45 pts)</label><br>
                <label><input type="radio" name="arari" value="azul-parcial"> Parcialmente na área azul (25 pts)</label><br>
                <label><input type="radio" name="arari" value="fora" checked> Fora das áreas (0 pts)</label>
            </div>
            </div>

            <!-- REFLORESTAMENTO -->
            <div class="missao">
            <button class="missao-toggle">🌱 Reflorestamento</button>
            <div class="missao-conteudo">
                <label for="area1-parcial">Sementes parcialmente na Área 1:</label>
                <input type="number" id="area1-parcial" min="0" max="10" value="0"><br>

                <label for="area1-total">Sementes totalmente na Área 1:</label>
                <input type="number" id="area1-total" min="0" max="10" value="0"><br>

                <label for="area2-parcial">Sementes parcialmente na Área 2:</label>
                <input type="number" id="area2-parcial" min="0" max="10" value="0"><br>

                <label for="area2-total">Sementes totalmente na Área 2:</label>
                <input type="number" id="area2-total" min="0" max="10" value="0"><br>

                <p id="aviso-sementes" style="color: red; font-weight: bold; display: none;">
                ⚠️ Você excedeu o limite de 10 sementes!
                </p>
            </div>
            </div>

            <!-- DEPARTAMENTO -->
            <div class="missao">
            <button class="missao-toggle">🏢 Departamento Ecológico</button>
            <div class="missao-conteudo">
                <label><input type="radio" name="departamento" value="total"> Robô totalmente na área (65 pts)</label><br>
                <label><input type="radio" name="departamento" value="parcial"> Robô parcialmente na área (35 pts)</label><br>
                <label><input type="radio" name="departamento" value="fora" checked> Fora da área (0 pts)</label>
            </div>
            </div>

        </div>
        </div>



        <!-- Tapete -->
        <div class="tapete-container">
            
            <img src="./images/tapete.jpg" alt="Tapete K2" class="tapete">
            <div class="bloco-robo" id="robo-ecologico" draggable="true">🤖</div>
            <!-- Área de Plantio 1 -->
<!-- Área de Plantio 1 com path SVG invisível -->
<div class="area-plantio" id="plantio-1"
     style="top: 39%; left: 18%; width: 76%; height: 95%; position: absolute; z-index: 3;">
    <svg width="100%" height="100%" viewBox="-8 -6 26 40" preserveAspectRatio="none">
        <path id="plantio1-path"
              d="M 3 5 C 4 6 5 7 4 8 C 3 9 3 9 2 8 C 2 7 0 9 -1 8 C -2 7 -2 6 -2 5 C -4 4 -5 2 1 2 C 2 3 2 4 3 4 C 3 5 3 5 3 5"
              fill="rgba(101, 67, 33, 1)"  />
    </svg>
</div>



<!-- Área de Plantio 2 com formato poligonal -->
<div class="area-plantio" id="plantio-2"
     style="top: 91.6%; right: 7.9%; width: 15.4%; height: 16%; position: absolute; transform: translate(50%, -50%);">
    <svg width="100%" height="100%" viewBox="0 0 127 120" preserveAspectRatio="xMidYMid meet">
        <polygon id="plantio2-poly"
                 points="25,0 127,0 127,120 0,120 0,25"
                 fill="rgba(0, 255, 0, 0)" stroke="#2CE400" stroke-width="5%"/>
    </svg>
</div>


<div id="destino-robo" class="missao-ecologica"></div>

                <!-- Área de cobertura para Reflorestamento -->
        <div class="reflorestamento-cover" id="reflorestamento-area" style="top: 2%; right: 1.3%;transform: rotate(45deg) scale(0.67);">
            <!-- Botão para liberar as sementes, posicionado sobre o quadrado verde -->
                <button id="liberar-sementes" class="btn-sementes">LIBERAR SEMENTES 🌱</button>
        </div>


        <!-- Área de destino para Onça-Pintada (Azul) -->
        <div class="destino" id="destino-tamandua" style="top: 40.2%; left: 49.5%;">
        </div>

        <!-- Área de destino para Macaco-Prego (Cinza) -->
        <div class="destino" id="destino-macaco" style="top: 61.85%; left: 22.8%;">
        </div>

        <!-- Área de destino para Tamanduá-Bandeira (Verde) -->
        <div class="destino" id="destino-onca" style="top: 4.4%; left: 31.4%;">
        </div>

        <div class="drop-area" id="drop-tamandua"
            style="top: 49.3%; right: 7.45%; background-color: #0074D9; transform: translate(50%, -50%) rotate(10deg) scale(0.8);">
            <div class="animal" draggable="true" id="tamandua">
                🦡
            </div>
        </div>

        <div class="drop-area" id="drop-macaco"
            style="top: 36.25%; right: 5.45%; background-color: #AAAAAA; transform: translate(50%, -50%) rotate(10deg) scale(0.8);">
            <div class="animal" draggable="true" id="macaco">
                🐒
            </div>
        </div>

        <div class="drop-area" id="drop-onca"
            style="top: 62.7%; right: 9.7%; background-color: #2ECC40; transform: translate(50%, -50%) rotate(10deg) scale(0.8);">
            <div class="animal" draggable="true" id="onca">
                🐆
            </div>
        </div>
        

        
<!-- Missão Renascimento Azul -->
<div id="renascimento-azul" class="elemento-tapete">
  <div class="semicirculo-container">
    <div id="haste"></div>
  </div>
</div>
        </div>

        <!-- Pontuação -->
        <div class="pontuacao-container">
            <h2>Pontuação das Missões</h2>
            <table>
                <thead>
                    <tr>
                        <th>Missão</th>
                        <th>Pontuação</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Reintegração - Tamanduá-Bandeira</td><td id="pontuacao-tamandua">0</td></tr>
                    <tr><td>Reintegração - Macaco-Prego</td><td id="pontuacao-macaco">0</td></tr>
                    <tr><td>Reintegração - Onça-Pintada</td><td id="pontuacao-onca">0</td></tr>
                    <tr><td>Plantio - Área 1</td><td id="pontuacao-plantio-1">0</td></tr>
                    <tr><td>Plantio - Área 2</td><td id="pontuacao-plantio-2">0</td></tr>
                    <tr><td>Bônus Reflorestamento</td><td id="pontuacao-bonus-reflorestamento">0</td></tr>
                    <tr><td>Renascimento Azul</td><td id="pontuacao-renascimento">0</td></tr>
                    <tr><td>Departamento Ecológico</td><td id="pontuacao-departamento">0</td></tr>
                </tbody>
            </table>
            <h3>Total: <span id="pontuacao-total">0</span></h3>
            <button id="resetar-pontuacao" class="btn-reset">Resetar Tudo 🔄</button>
            <button id="salvar-pontuacao" class="btn-salvar">Salvar Pontuação 💾</button>

        </div>



    </div>
        <div class="historico-container">
            <h2>Últimas Pontuações Salvas</h2>
                <table id="tabela-historico">
                <thead>
                    <tr>
                    <th>Equipe</th>
                    <th>Pontuação Total</th>
                    <th>Data/Hora</th>
                    <th>Ações</th>
                    </tr>
                </thead>
                <tbody></tbody>
                </table>
                <!-- Botão Apagar Tudo -->
                <button id="apagar-tudo" class="btn-apagar-tudo">🧹 Apagar Todas as Pontuações</button>
        </div>
<div id="contagem-inicial" class="contagem-overlay hidden"></div>
</body>
</html>
