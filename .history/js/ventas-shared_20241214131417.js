document.getElementById("boton-enviar").addEventListener("click", () => {
    const nombre = document.getElementById("input-nombre").value.trim();
    const codigo = document.getElementById("input-codigo").value.trim();
    const limpiador = document.getElementById("input-limpiador").value.trim();
    const hidratante = document.getElementById("input-hidratante").value.trim();
    const bloqueador = document.getElementById("input-bloqueador").value.trim();
    const potenciador = document.getElementById("input-potenciador").value.trim();
    const ciudad = document.getElementById("input-ciudad").value.trim();
    const direccion = document.getElementById("input-direccion").value.trim();
    const cobro = document.getElementById("input-cobro").value.trim();
    const metodoPago = document.querySelector("#input-metodo").value;

    // Construir el mensaje con saltos de línea en HTML
    let mensaje = `Hola *${nombre}*.<br><br>Gracias por tu compra en DermaBox. Tu pedido *#${codigo}* ha sido confirmado y está en preparación.<br><br>Por favor confirma los siguientes datos:<br><br>*Información del cliente*<br>`;
    if (nombre) mensaje += ` - *${nombre}*<br>`;
    if (ciudad) mensaje += ` - *${ciudad}*<br>`;
    if (direccion) mensaje += ` - *${direccion}*<br>`;
    

    mensaje += `<br>*Pedido*<br>`;
    if (limpiador) mensaje += ` - *${limpiador}*<br>`;
    if (hidratante) mensaje += ` - *${hidratante}*<br>`;
    if (bloqueador) mensaje += ` - *${bloqueador}*<br>`;
    if (potenciador) mensaje += ` - *${potenciador}*<br>`;

    mensaje += `<br>*Pago*<br>`;
    if (metodoPago) {
        let metodoTexto = "";
        if (metodoPago === "c") {
            metodoTexto = "Contraentrega";
        } else if (metodoPago === "n") {
            metodoTexto = "Nequi";
        } else {
            metodoTexto = metodoPago; // Mantén el valor original si no es "c" o "n"
        }
        mensaje += ` - *${metodoTexto}*<br>`;
    }
    if (cobro) mensaje += ` - *$${cobro}*<br>`;
    

    // Mostrar el mensaje en el div correspondiente
    const sectionDual1 = document.querySelector(".section-dual-1");
    sectionDual1.innerHTML = mensaje; // Asignar el HTML con saltos de línea


    // Construir el mensaje para section-dual-2
    const mensaje2 = `Para efectuar el envío necesitamos los siguientes datos:<br><br> - Número de cédula<br> - Detalles de dirección (Casa, Conjunto, Edificio...)<br>`;

    // Mostrar el mensaje en section-dual-2
    const sectionDual2 = document.querySelector(".section-dual-2");
    sectionDual2.innerHTML = mensaje2;
    
    const fechaLlegada = document.querySelector("#input-fecha").value; // Asegúrate de que esta variable obtenga el input correcto para la fecha.

    if (metodoPago === "n") {
        // Rellenar section-dual-4
        const sectionDual4 = document.querySelector(".section-dual-4");
        sectionDual4.innerHTML = `
            Perfecto!<br>
            Indicaste que preferías el pago por Nequi, aquí tienes los datos para realizar el envío:
        `;

        // Rellenar section-dual-5
        const sectionDual5 = document.querySelector(".section-dual-5");
        sectionDual5.innerHTML = `
            Super!<br>
            Tu DermaBox está en camino y llegará aproximadamente el *${fechaLlegada}*. <br>
            Este es el link de tu cuenta en DermaBox <br>
            Aquí puedes revisar el estado de tu pedido, ver nuevamente cómo aplicar tu rutina, acceder al *Qué Hacer Hoy*, pedir productos que omitiste, ordenar una nueva DermaBox cuando se te acabe la actual y muchas más cosas.<br>
            Dicho esto, muchas gracias por confiar en nosotros. Estaremos atentos a cualquier pregunta que puedas tener.<br>
            Y no te olvides de seguir las precauciones recomendadas.<br>
            ¡Hasta Pronto!
        `;
    } else if (metodoPago === "c") {
        // Rellenar section-dual-5
        const sectionDual3 = document.querySelector(".section-dual-3");
        sectionDual3.innerHTML = `
            Super!<br>
            Tu DermaBox está en camino y llegará aproximadamente el *${fechaLlegada}*.<br>
            Recuerda tener el dinero preparado o dejarlo en casa si no estarás presente al momento de la entrega.<br>
            Este es el link de tu cuenta en DermaBox <br>
            Aquí puedes revisar nuevamente cómo aplicar tu rutina, acceder al *Qué Hacer Hoy*, pedir productos que omitiste, ordenar una nueva DermaBox cuando se te acabe la actual y muchas más cosas.<br>
            Dicho esto, muchas gracias por confiar en nosotros. Estaremos atentos a cualquier pregunta que puedas tener.<br>
            ¡Hasta Pronto!
        `;
    }





    const segundaFase = document.querySelector(".segunda-fase");
    segundaFase.innerHTML = ""; // Limpia el contenido existente antes de agregar la lista.

    // Inputs de los productos
    const productos = [
        { id: "input-limpiador", nombre: "Limpiador" },
        { id: "input-hidratante", nombre: "Hidratante" },
        { id: "input-bloqueador", nombre: "Bloqueador" },
        { id: "input-potenciador", nombre: "Potenciador" },
    ];

    // Crear una lista dinámica
    productos.forEach(producto => {
        const valor = document.querySelector(`#${producto.id}`).value.trim();

        if (valor) {
            // Crear un contenedor para cada item
            const itemContainer = document.createElement("div");
            itemContainer.className = "producto-item";
            itemContainer.style.display = "flex";
            itemContainer.style.alignItems = "center";
            itemContainer.style.marginBottom = "8px";

            // Crear la checkbox
            const checkbox = document.createElement("input");
            checkbox.type = "checkbox";
            checkbox.className = "producto-checkbox";
            checkbox.style.marginRight = "10px";

            // Crear el texto del producto
            const texto = document.createElement("span");
            texto.textContent = valor;

            // Agregar checkbox y texto al contenedor
            itemContainer.appendChild(checkbox);
            itemContainer.appendChild(texto);

            // Agregar el contenedor a la segunda-fase
            segundaFase.appendChild(itemContainer);
        }
    });
});



// Función para alternar el color del checkbox
function toggleCheckbox(element) {
    // Cambia el color del fondo según el estado actual
    if (element.style.backgroundColor === "rgb(0, 123, 255)") {
        element.style.backgroundColor = "white"; // Vuelve al color blanco
    } else {
        element.style.backgroundColor = "#007BFF"; // Cambia al azul
    }
}
