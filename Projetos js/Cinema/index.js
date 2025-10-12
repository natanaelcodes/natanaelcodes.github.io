const mudarcor = document.querySelector(".CV-button");

function corclick() {
  const corpo = document.querySelector("body");
  corpo.style.background = "brown"; // string entre aspas
}

mudarcor.addEventListener("click", corclick);
