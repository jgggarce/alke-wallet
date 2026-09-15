$(document).ready(function() {

  if (localStorage.getItem("alkeLogueado") !== "true") {
    window.location.href = "login.html";
  }

  $("#saldoActual").text(getSaldo());

  $("#btnLogout").on("click", function(e) {
    e.preventDefault();
    localStorage.removeItem("alkeLogueado");
    window.location.href = "login.html";
  });

});
