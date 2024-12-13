// Selección de todos los inputs
const inputs = {
    limpiador: document.getElementById("input-limpiador"),
    hidratante: document.getElementById("input-hidratante"),
    bloqueador: document.getElementById("input-bloqueador"),
    potenciador: document.getElementById("input-potenciador"),
    nombre: document.getElementById("input-nombre"),
    celular: document.getElementById("input-celular"),
    ciudad: document.getElementById("input-ciudad"),
    direccion: document.getElementById("input-direccion"),
    codigo: document.getElementById("input-codigo"),
    cobro: document.getElementById("input-cobro"),
    metodo: document.getElementById("input-metodo"),
};

// Botón de envío
const botonEnviar = document.getElementById("boton-enviar");

// Almacena el número de pedido (cobro) para usarlo en venta-2.html
let numeroPedido = "";

// Función simplificada: almacena el cobro y redirige
botonEnviar.addEventListener("click", () => {
    numeroPedido = inputs.codigo.value; // Guardar el valor de "Cobro"

    // Redirigir a venta-2.html
    if (numeroPedido.trim() !== "") {
        alert("Datos enviados correctamente. Redirigiendo...");
        window.location.href = "../html/venta-2.html";
    } else {
        alert("Por favor, completa el campo de Cobro antes de continuar.");
    }
});

