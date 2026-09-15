# Alke Wallet

Proyecto del Modulo 2 (Fundamentos del desarrollo Frontend) del bootcamp.

Es una wallet digital simulada hecha con HTML, CSS, Bootstrap, JavaScript y jQuery.

## Como probarlo

1. Abrir el archivo `login.html` en el navegador (o `index.html`, que redirige al login).
2. Usuario: `admin`
3. Password: `1234`
4. Desde el menu se puede depositar, enviar dinero a un contacto y ver el historial de movimientos.

Los datos (saldo, contactos y movimientos) se guardan en el localStorage del navegador, no hay backend todavia.

## Estructura

- `login.html` / `menu.html` / `deposit.html` / `sendmoney.html` / `transactions.html`
- `css/style.css`
- `js/data.js` (datos guardados en localStorage)
- `js/login.js`, `js/menu.js`, `js/deposit.js`, `js/sendmoney.js`, `js/transactions.js`
