function addElement(idCatch, idInsert) {
    fetch("https://raw.githubusercontent.com/RenanPhilip/RenanPhilip/main/index.html")
        .then(r => r.text())
        .then(html => {
            const temp = document.createElement("div");
            temp.innerHTML = html;

            // pega a div/elemento que você quer capturar
            const captured = temp.querySelector(`#${idCatch}`);

            if (captured) {
                document.getElementById(idInsert).innerHTML = captured.innerHTML;
            } else {
                document.getElementById(idInsert).innerText = `Elemento "${idCatch}" não encontrado.`;
            }
        })
        .catch(err => {
            console.error(`Erro ao carregar elemento "${idCatch}":`, err);
            document.getElementById(idInsert).innerText = "Erro ao carregar.";
        });
}
  const toggle = document.getElementById("menu-toggle");
  const menu = document.getElementById("menu");

  // Toggle abr/fecha (evita propagação)
  toggle.addEventListener("click", (e) => {
    menu.classList.toggle("show");
    e.stopPropagation();
  });

  // Fecha ao clicar fora
  document.addEventListener("click", (e) => {
    if (menu.classList.contains("show")) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show");
      }
    }
  });

  // Fecha com ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") menu.classList.remove("show");
  });

// Exemplo de uso:
// addElement("header","header")
// Nome
addElement("nome", "nome");
addElement("skill-tools","skill-tools")
// Resumo Headline
addElement("headline", "headline");
// Resumo 
addElement("resumo-curriculo", "resumo");
// Resumo 
// addElement("resumo", "resumo");

addElement("certificacoes", "certificacoes-container");
addElement("experiencia", "experiencia-section");


document.addEventListener("DOMContentLoaded", () => {
  const alvo = document.querySelector("#nome");
  if (alvo) {
    alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  }
});