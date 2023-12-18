const obterProduto = () => {
  return JSON.parse(localStorage.getItem("product"));
};

const setarDadosProduto = () => {
  const product = obterProduto();
  document.querySelector("title").innerHTML += product.name.toUpperCase();
  document.getElementById("name-product").innerHTML = product.name;
  document.querySelector(".product-img-contain").style.backgroundImage = `linear-gradient(rgba(17, 17, 17, 0.3), rgba(20, 20, 20, 0.3)), url('../img/${product.imagemSrc}')`;
  document.getElementById("old-value").innerHTML = product.valueOld;
  document.getElementById("value").innerHTML = product.value;
};

window.onload = () => {
  setarDadosProduto();
};
