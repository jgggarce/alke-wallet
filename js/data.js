function initData() {
  if (localStorage.getItem("alkeSaldo") === null) {
    localStorage.setItem("alkeSaldo", 50000);
  }
  if (localStorage.getItem("alkeContactos") === null) {
    var contactosIniciales = [
      { nombre: "Juan Perez", cuenta: "0001-1234" },
      { nombre: "Maria Lopez", cuenta: "0002-5678" },
      { nombre: "Pedro Gomez", cuenta: "0003-9101" }
    ];
    localStorage.setItem("alkeContactos", JSON.stringify(contactosIniciales));
  }
  if (localStorage.getItem("alkeMovimientos") === null) {
    localStorage.setItem("alkeMovimientos", JSON.stringify([]));
  }
}

function getSaldo() {
  return parseInt(localStorage.getItem("alkeSaldo"));
}

function setSaldo(valor) {
  localStorage.setItem("alkeSaldo", valor);
}

function agregarMovimiento(tipo, descripcion, monto) {
  var movimientos = JSON.parse(localStorage.getItem("alkeMovimientos"));
  var fecha = new Date();
  movimientos.unshift({
    tipo: tipo,
    descripcion: descripcion,
    monto: monto,
    fecha: fecha.toLocaleDateString() + " " + fecha.toLocaleTimeString()
  });
  localStorage.setItem("alkeMovimientos", JSON.stringify(movimientos));
}

initData();
