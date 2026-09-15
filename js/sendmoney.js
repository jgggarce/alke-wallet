$(document).ready(function() {

  $("#saldoActual").text(getSaldo());

  function mostrarContactos(filtro) {
    var contactos = JSON.parse(localStorage.getItem("alkeContactos"));
    var html = "";
    contactos.forEach(function(c) {
      if (c.nombre.toLowerCase().indexOf(filtro.toLowerCase()) !== -1) {
        html += '<div class="contacto-item" data-nombre="' + c.nombre + '">' + c.nombre + " - " + c.cuenta + "</div>";
      }
    });
    $("#listaContactos").html(html);
  }

  $("#buscarContacto").on("keyup", function() {
    var texto = $(this).val();
    if (texto.length > 0) {
      mostrarContactos(texto);
    } else {
      $("#listaContactos").html("");
    }
  });

  $(document).on("click", ".contacto-item", function() {
    var nombre = $(this).attr("data-nombre");
    $("#contactoSeleccionado").val(nombre);
    $("#buscarContacto").val(nombre);
    $("#listaContactos").html("");
  });

  $("#formEnvio").on("submit", function(e) {
    e.preventDefault();

    var contacto = $("#contactoSeleccionado").val();
    var monto = parseInt($("#montoEnvio").val());

    if (contacto === "") {
      $("#mensajeEnvio").removeClass("mensaje-ok").addClass("mensaje-error").text("Selecciona un contacto de la lista");
      return;
    }

    var saldo = getSaldo();
    var nuevoSaldo = saldo - monto;
    setSaldo(nuevoSaldo);
    agregarMovimiento("Envio", "Envio a " + contacto, monto);

    $("#saldoActual").text(nuevoSaldo);
    $("#mensajeEnvio").removeClass("mensaje-error").addClass("mensaje-ok").text("Dinero enviado a " + contacto);
    $("#montoEnvio").val("");
  });

  $("#formNuevoContacto").on("submit", function(e) {
    e.preventDefault();

    var nombre = $("#nombreContacto").val();
    var cuenta = $("#cuentaContacto").val();

    var contactos = JSON.parse(localStorage.getItem("alkeContactos"));
    contactos.push({ nombre: nombre, cuenta: cuenta });
    localStorage.setItem("alkeContactos", JSON.stringify(contactos));

    $("#nombreContacto").val("");
    $("#cuentaContacto").val("");
    alert("Contacto agregado");
  });

});
