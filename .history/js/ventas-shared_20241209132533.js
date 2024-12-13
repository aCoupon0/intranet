document.getElementById("boton-enviar").addEventListener("click", () => {
    const nombre = document.getElementById("input-nombre").value.trim();
    const codigo = document.getElementById("input-codigo").value.trim();
    const limpiador = document.getElementById("input-limpiador").value.trim();
    const hidratante = document.getElementById("input-hidratante").value.trim();
    const bloqueador = document.getElementById("input-bloqueador").value.trim();
    const potenciador = document.getElementById("input-potenciador").value.trim();
    const ciudad = document.getElementById("input-ciudad").value.trim();
    const direccion = document.getElementById("input-direccion").value.trim();
    const cobro = document.getElementById("input.cobro").value.trim();

    // Construir el mensaje con saltos de línea en HTML
    let mensaje = `Hola *${nombre}*,<br><br>Gracias por tu compra en DermaBox. Tu pedido *#${codigo}* ha sido confirmado y está en preparación.<br><br>Por favor confirma los siguientes datos:<br><br>*Pedido*<br>`;

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
});



