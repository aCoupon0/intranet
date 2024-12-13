document.getElementById("boton-enviar").addEventListener("click", () => {
    const nombre = document.getElementById("input-nombre").value.trim();
    const codigo = document.getElementById("input-codigo").value.trim();
    const limpiador = document.getElementById("input-limpiador").value.trim();
    const hidratante = document.getElementById("input-hidratante").value.trim();
    const bloqueador = document.getElementById("input-bloqueador").value.trim();
    const potenciador = document.getElementById("input-potenciador").value.trim();
    const ciudad = document.getElementById("input-ciudad").value.trim();
    const direccion = document.getElementById("input-direccion").value.trim();

    // Construir el mensaje
    let mensaje = `Hola ${nombre},\n\nGracias por tu compra en DermaBox. Tu pedido #${codigo} ha sido confirmado y está en preparación.\n\nPor favor confirma los siguientes datos:\n\n*Pedido*\n`;

    if (limpiador) mensaje += ` - ${limpiador}\n`;
    if (hidratante) mensaje += ` - ${hidratante}\n`;
    if (bloqueador) mensaje += ` - ${bloqueador}\n`;
    if (potenciador) mensaje += ` - ${potenciador}\n`;

    mensaje += `\n*Información del Cliente*\n`;
    if (nombre) mensaje += ` - ${nombre}\n`;
    if (ciudad) mensaje += ` - ${ciudad}\n`;
    if (direccion) mensaje += ` - ${direccion}\n`;

    // Mostrar el mensaje en el div correspondiente
    const sectionDual1 = document.querySelector(".section-dual-1");
    sectionDual1.textContent = mensaje; // Asignar el texto con saltos de línea
});


