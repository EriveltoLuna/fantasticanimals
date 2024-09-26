//scroll to top button
let btn = document.querySelector(".btn");

window.onscroll = () => {
  if (document.body.scrollTop < 20) {
    btn.classList.remove("active");
  } else {
    btn.classList.add("active");
  }
};

btn.addEventListener("click", () => {
  document.body.scrollTop = 0;
});

// Verifique a distância da primeira imagem
// em relação ao topo da página
const imgTop = document.querySelector("img");
console.log(imgTop.offsetTop);

// Retorne a soma da largura de todas as imagens

function sumWidth() {
  let sum = 0;
  const imgsWidth = document.querySelectorAll("img");
  imgsWidth.forEach((imgWidth) => {
    sum += imgWidth.offsetWidth;
  });
  console.log(sum);
}

window.onload = sumWidth();

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)

// e se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu

const links = document.querySelectorAll(".menu a");

links.forEach((link) => {
  let linkData = link.getBoundingClientRect();
  if ((linkData.height || linkData.width < 48) && window.innerHeight < 720) {
    link.classList.add("menu-mobile");
  }
});
