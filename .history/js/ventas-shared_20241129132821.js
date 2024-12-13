const primerMensaje = ""


const input = document.getElementById('input-datos');
const botonEnviar = document.getElementById('boton-enviar');

// Función para validar el contenido del input
function validarEstructura() {
    try {
        // Intenta convertir el valor del input en un objeto JSON
        const contenido = JSON.parse(input.value);

        // Verifica que sea un arreglo
        if (!Array.isArray(contenido)) {
            alert('El contenido debe ser un arreglo.');
            return;
        }

        // Validaciones para cada posición del arreglo
        if (
            !Array.isArray(contenido[0]) || // Primera posición: arreglo
            !Array.isArray(contenido[1]) || // Segunda posición: arreglo
            typeof contenido[2] !== 'number' || // Tercera posición: número
            typeof contenido[3] !== 'number' || // Cuarta posición: número
            typeof contenido[4] !== 'string' // Quinta posición: string
        ) {
            alert('La estructura no es válida. Verifica el formato.');
            return;
        }

        // Si pasa todas las validaciones
        alert('La estructura es válida.');
    } catch (error) {
        // Captura errores al convertir a JSON
        alert('El contenido no tiene un formato válido. Asegúrate de usar JSON.');
    }
}

// Agrega el evento click al botón
botonEnviar.addEventListener('click', validarEstructura);