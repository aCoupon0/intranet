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

    // Construir el mensaje con saltos de línea en HTML
    let mensaje = `Hola *${nombre}*.<br><br>Gracias por tu compra en DermaBox. Tu pedido *#${codigo}* ha sido confirmado y está en preparación.<br><br>Por favor confirma los siguientes datos:<br><br>*Pedido*<br>`;

    if (limpiador) mensaje += ` - *${limpiador}*<br>`;
    if (hidratante) mensaje += ` - *${hidratante}*<br>`;
    if (bloqueador) mensaje += ` - *${bloqueador}*<br>`;
    if (potenciador) mensaje += ` - *${potenciador}*<br>`;
    if (cobro) mensaje += ` - *${cobro}*<br>`;

    mensaje += `<br>*Información del Cliente*<br>`;
    if (nombre) mensaje += ` - *${nombre}*<br>`;
    if (ciudad) mensaje += ` - *${ciudad}*<br>`;
    if (direccion) mensaje += ` - *${direccion}*<br>`;
    

    // Mostrar el mensaje en el div correspondiente
    const sectionDual1 = document.querySelector(".section-dual-1");
    sectionDual1.innerHTML = mensaje; // Asignar el HTML con saltos de línea


    // Construir el mensaje para section-dual-2
    const mensaje2 = `Para hacer el envío necesitamos los siguientes datos:<br><br> - Número de cédula<br> - Detalles de dirección (Casa, Conjunto, Edificio...)<br>`;

    // Mostrar el mensaje en section-dual-2
    const sectionDual2 = document.querySelector(".section-dual-2");
    sectionDual2.innerHTML = mensaje2;



    const metodoPago = document.querySelector("#input-metodo").value;
    const fechaLlegada = document.querySelector("#input-fecha").value; // Asegúrate de que esta variable obtenga el input correcto para la fecha.
    const linkSeguimiento = "https://tu-link-de-seguimiento.com"; // Proporciona aquí el link de seguimiento.

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
            Tu DermaBox está en camino y llegará aproximadamente el *${fechaLlegada}*. Aquí está el 
            <a href="${linkSeguimiento}" target="_blank">*Link de Seguimiento*</a>.<br>
            Aquí puedes revisar nuevamente cómo aplicar tu rutina, acceder al *Qué Hacer Hoy* y muchas más cosas.<br>
            Dicho esto, muchas gracias por confiar en nosotros. Estaremos atentos a cualquier pregunta que puedas tener.<br>
            Y no te olvides de seguir las precauciones recomendadas.<br>
            ¡Hasta Pronto!
        `;
    } else if (metodoPago === "c") {
        // Rellenar section-dual-5
        const sectionDual5 = document.querySelector(".section-dual-5");
        sectionDual5.innerHTML = `
            Super!<br>
            Tu DermaBox está en camino y llegará aproximadamente el *${fechaLlegada}*.<br>
            Recuerda tener el dinero preparado o dejarlo en casa si no estarás presente al momento de la entrega.<br>
            Aquí está el <a href="${linkSeguimiento}" target="_blank">Link de Seguimiento</a>, aquí puedes revisar nuevamente la rutina, acceder al *Qué Hacer Hoy* y muchas más cosas.<br>
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



