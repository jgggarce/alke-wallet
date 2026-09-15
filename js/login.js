$(document).ready(function() {
console.log("login listo")
  $("#formLogin").on("submit", function(e) {
    e.preventDefault();

    var usuario = $("#usuario").val();
    var pass = $("#password").val();

    if (usuario === "admin" && pass === "1234") {
      localStorage.setItem("alkeLogueado", "true");
      $("#mensajeLogin").removeClass("mensaje-error").addClass("mensaje-ok").text("Ingreso correcto, redirigiendo...");
      setTimeout(function() {
        window.location.href = "menu.html";
      }, 800);
    } else {
      $("#mensajeLogin").removeClass("mensaje-ok").addClass("mensaje-error").text("Usuario o contraseña incorrectos");
    }
  });

});
