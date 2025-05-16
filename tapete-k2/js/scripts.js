document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".missao-toggle").forEach(botao => {
    botao.addEventListener("click", () => {
      const missao = botao.closest(".missao");
      missao.classList.toggle("ativa");
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth < 900;
  if (isMobile) {
    document.getElementById("mobile-warning").style.display = "block";
    document.querySelector(".layout-principal").style.display = "none";
  }
});
