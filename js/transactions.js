$(document).ready(function() {

  var movimientos = JSON.parse(localStorage.getItem("alkeMovimientos"));

  if (movimientos.length === 0) {
    $("#sinMovimientos").show();
  } else {
    var filas = "";
    movimientos.forEach(function(m) {
      var signo = m.tipo === "Deposito" ? "+" : "-";
      filas += "<tr>";
      filas += "<td>" + m.fecha + "</td>";
      filas += "<td>" + m.tipo + "</td>";
      filas += "<td>" + m.descripcion + "</td>";
      filas += "<td>" + signo + "$" + m.monto + "</td>";
      filas += "</tr>";
    });
    $("#tablaMovimientos").html(filas);
  }

});
