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


function verificarFormulario() {
  document.getElementById("submit-form").addEventListener("click", function(event) {
      event.preventDefault();
      var campo1 = document.getElementById("email").value;

      if (campo1 === "") {
          var alertDivEmail = document.getElementById("div-alert-email");
          if (alertDivEmail) {
              alertDivEmail.style.display = "flex";
          }

          var alertDivPassword = document.getElementById("div-alert-password");
          if (alertDivPassword) {
              alertDivPassword.style.display = "none";
          }
      } else {
          var campo2 = document.getElementById("password").value;
          if (campo2 === "") {
              var alertDivPassword = document.getElementById("div-alert-password");
              if (alertDivPassword) {
                  alertDivPassword.style.display = "flex";
              }
              var alertDivEmail = document.getElementById("div-alert-email");
              if (alertDivEmail) {
                  alertDivEmail.style.display = "none";
              }
          } else {
              var alertDivEmail = document.getElementById("div-alert-email");
              if (alertDivEmail) {
                  alertDivEmail.style.display = "none";
              }
              var alertDivPassword = document.getElementById("div-alert-password");
              if (alertDivPassword) {
                  alertDivPassword.style.display = "none";
              }
              document.getElementById("formulario").submit();
          }
      }
  });
}

verificarFormulario()



