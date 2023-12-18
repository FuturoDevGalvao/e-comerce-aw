const adiconarListenerAosCards = () => {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.addEventListener("click", obterDadosDoProduto);
  });
};

const obterDadosDoProduto = (event) => {
  const name = event.currentTarget
    .querySelector(".name")
    .textContent
    .trim();

  const valueOld = event.currentTarget
    .querySelector(".value-old")
    .textContent
    .trim();

  const value = event.currentTarget
    .querySelector(".value")
    .textContent
    .trim();

  const imagemSrc = event.currentTarget
    .querySelector("img")
    .getAttribute("src");

  persistirProduto({
    name: name,
    valueOld: valueOld,
    value: value,
    imagemSrc: imagemSrc,
  });
};

const persistirProduto = (produto) => {
  localStorage.clear();
  localStorage.setItem("product", JSON.stringify(produto));
};

window.onload = () => {
  adiconarListenerAosCards();
}
