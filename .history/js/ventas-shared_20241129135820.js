const numeroPedido = ""


const input = document.getElementById('input-datos');
const botonEnviar = document.getElementById('boton-enviar');

function validarEstructura() {
    try {
        // Obtener los valores de los inputs
        const actualKit = JSON.parse(document.getElementById('input-actualkit').value);
        const datosCliente = JSON.parse(document.getElementById('input-datos-cliente').value);
        const codigo = parseFloat(document.getElementById('input-codigo').value);
        const cobro = parseFloat(document.getElementById('input-cobro').value); // Asignamos el valor de cobro
        const metodoPago = document.getElementById('input-metodo-pago').value;

        // Verificar que 'actualKit' y 'datosCliente' sean arreglos
        if (!Array.isArray(actualKit)) {
            alert('El campo "Actual Kit" debe ser un arreglo.');
            return;
        }
        if (!Array.isArray(datosCliente)) {
            alert('El campo "Datos Cliente" debe ser un arreglo.');
            return;
        }

        // Verificar que 'codigo' y 'cobro' sean números
        if (isNaN(codigo)) {
            alert('El campo "Código" debe ser un número.');
            return;
        }
        if (isNaN(cobro)) {
            alert('El campo "Cobro" debe ser un número.');
            return;
        }

        // Verificar que 'metodoPago' sea una cadena
        if (typeof metodoPago !== 'string' || metodoPago.trim() === '') {
            alert('El campo "Método de Pago" debe ser un texto válido.');
            return;
        }

        // Asignamos el valor de cobro a la variable global numeroPedido
        numeroPedido = cobro;

        // Si todo es válido, mostramos el alert
        alert('La estructura es válida.');

        // Redirigir a venta-2.html
        window.location.href = 'venta-2.html'; // Redirigimos al siguiente archivo
    } catch (error) {
        // Captura errores al convertir a JSON
        alert('Uno de los campos no tiene un formato válido. Asegúrate de usar JSON para los campos de tipo arreglo.');
    }
}


// Agrega el evento click al botón
botonEnviar.addEventListener('click', validarEstructura);