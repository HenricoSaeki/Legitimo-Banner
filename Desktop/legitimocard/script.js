document.querySelectorAll(".heart").forEach(img => {
  img.addEventListener("click", function(event) {
    const clicado = event.target; // o elemento que foi clicado
    if (clicado.src.includes("coracaored.png")) {
      clicado.src = "imagens/coracaobranco.png";
    } else {
      clicado.src = "imagens/coracaored.png";
    }
  });
});