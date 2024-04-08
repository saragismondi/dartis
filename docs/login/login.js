function seePassword() {
const abierto = document.getElementById("abierto");
const cerrado = document.getElementById("cerrado");

abierto.addEventListener("click", function() {
  abierto.style.display = "none";
  cerrado.style.display = "block";
});

cerrado.addEventListener("click", function() {
  cerrado.style.display = "none";
  abierto.style.display = "block";
});
}

seePassword();