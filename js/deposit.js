$(document).ready(function() {

  $("#formDeposito").on("submit", function(e) {
    e.preventDefault();

    var monto = parseInt($("#monto").val());
    var saldo = getSaldo();
    var nuevoSaldo = saldo + monto;

    setSaldo(nuevoSaldo);
    console.log("deposito realizado");
    agregarMovimiento("Deposito", "Deposito de fondos", monto);

    $("#saldoActual").text(nuevoSaldo);
    $("#mensajeDeposito").removeClass("mensaje-error").addClass("mensaje-ok").text("Deposito realizado con exito");
    $("#monto").val("");
  });

});
