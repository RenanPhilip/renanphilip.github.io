
async function addElement(arquivo, idCatch, idInsert) {
  try {
    const host = window.location.host;
    const protocol = window.location.protocol;

    const r = await fetch(`${protocol}//${host}/${arquivo}`);
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
  ['/RenanPhilip/shared/navbar_components/navbar.html', 'navbar-menu', 'contatos-grid'],
  ['RenanPhilip/index.html', "nome", "nome"],
  ['RenanPhilip/index.html', "especialidade", "especialidade"],
  ['RenanPhilip/index.html', "headline", "headline"],
  ['RenanPhilip/index.html', "resumo-curriculo", "resumo"],
  ['RenanPhilip/index.html', "certificacoes", "certificacoes-container"],
  ['RenanPhilip/index.html', "experiencia", "experiencia-section"]
];

Promise.all(elementos.map(([a, b, c]) => addElement(a, b, c)))
  .then(() => {
    console.log("Todos os elementos carregados.");
  });