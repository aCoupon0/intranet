const numeroPedido = ""



const botonEnviar = document.getElementById('boton-enviar');

// Selección de los inputs por sus IDs
const actualKitInput = document.getElementById("input-datos");
const datosClienteInput = document.getElementById("input-datos-cliente");
const codigoInput = document.getElementById("input-codigo");
const cobroInput = document.getElementById("input-cobro");
const metodoPagoInput = document.getElementById("input-metodo");

// Función para validar la estructura de los inputs
function validarEstructura() {
    let actualKit, datosCliente;

    // Validar ActualKit (debe ser un arreglo)
    try {
        actualKit = JSON.parse(actualKitInput.value); // Convertir a arreglo
        if (!Array.isArray(actualKit)) {
            throw new Error("ActualKit no es un arreglo.");
        }
        console.log("ActualKit contiene:");
        actualKit.forEach((item, index) => console.log(`Elemento ${index + 1}: ${item}`));
    } catch (error) {
        alert("El ActualKit debe ser un arreglo válido en formato JSON. Ejemplo: [\"Producto 1\", \"Producto 2\"]");
        return;
    }

    // Validar Datos Cliente (debe ser un arreglo)
    try {
        datosCliente = JSON.parse(datosClienteInput.value); // Convertir a arreglo
        if (!Array.isArray(datosCliente)) {
            throw new Error("Datos Cliente no es un arreglo.");
        }
        console.log("Datos Cliente contiene:");
        datosCliente.forEach((item, index) => console.log(`Elemento ${index + 1}: ${item}`));
    } catch (error) {
        alert("Los Datos del Cliente deben ser un arreglo válido en formato JSON. Ejemplo: [\"Nombre\", Teléfono, \"Ciudad\", \"Dirección\"]");
        return;
    }

    // Validar Código (debe ser un número)
    const codigo = parseInt(codigoInput.value, 10);
    if (isNaN(codigo)) {
        alert("El Código debe ser un número.");
        return;
    }

    // Validar Cobro (debe ser un número)
    const cobro = parseInt(cobroInput.value, 10);
    if (isNaN(cobro)) {
        alert("El Cobro debe ser un número.");
        return;
    }

    // Validar Método de Pago (debe ser una cadena)
    const metodoPago = metodoPagoInput.value;
    if (!metodoPago || typeof metodoPago !== "string") {
        alert("El Método de Pago debe ser un texto.");
        return;
    }

    // Si todas las validaciones pasan
    alert("La estructura es válida.");
}



// Agrega el evento click al botón
botonEnviar.addEventListener('click', validarEstructura);