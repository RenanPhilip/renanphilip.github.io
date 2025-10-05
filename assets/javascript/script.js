async function addElement(idCatch, idInsert) {
  try {
    const r = await fetch("https://raw.githubusercontent.com/RenanPhilip/RenanPhilip/main/index.html");
    const html = await r.text();
    const temp = document.createElement("div");
    temp.innerHTML = html;

    const captured = temp.querySelector(`#${idCatch}`);
    const insert = document.getElementById(idInsert);

    if (captured && insert) insert.innerHTML = captured.innerHTML;
    else if (insert) insert.innerText = `Elemento "${idCatch}" não encontrado.`;

  } catch (err) {
    console.error(`Erro ao carregar "${idCatch}":`, err);
    const insert = document.getElementById(idInsert);
    if (insert) insert.innerText = "Erro ao carregar.";
  }
}

// ✅ agrupa os fetches e espera todos terminarem
const elementos = [
  ['navbar', 'navbar'],
  ['menu', 'contatos-grid'],
  ["nome", "nome"],
  ["especialidade", "especialidade"],
  ["headline", "headline"],
  ["resumo-curriculo", "resumo"],
  ["certificacoes", "certificacoes-container"],
  ["experiencia", "experiencia-section"]
];

Promise.all(elementos.map(([a, b]) => addElement(a, b)))
  .then(() => {
    console.log("Todos os elementos carregados.");
    const alvo = document.querySelector("#nome");
    if (alvo) alvo.scrollIntoView({ behavior: "smooth", block: "start" });
  });

// Navbar Toggle
document.addEventListener("DOMContentLoaded", () => {

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
});

// Name Smooth
window.addEventListener("load", () => {
    console.log('window load')
    const alvo = document.querySelector("#nome");
    if (alvo) {
        alvo.scrollIntoView({ behavior: "smooth", block: "start" });
    }
});