function abrirTransferencia() {
    const modal = document.getElementById("modal-transferencia");

    modal.style.display = "block";
    document.body.style.overflow = "hidden";

    limpiarMensajes();
}

function abrirPresencial() {
    const modal = document.getElementById("modal-presencial");

    modal.style.display = "block";
    document.body.style.overflow = "hidden";
}

function cerrarTransferencia() {
    const modal = document.getElementById("modal-transferencia");

    modal.style.display = "none";
    document.body.style.overflow = "auto";

    limpiarMensajes();
}

function cerrarPresencial() {
    const modal = document.getElementById("modal-presencial");

    modal.style.display = "none";
    document.body.style.overflow = "auto";
}

        async function copiarAlias(idInput, idMensaje) {
            const input = document.getElementById(idInput);
            const mensaje = document.getElementById(idMensaje);
            const texto = input.value;

            limpiarMensajes();

            try {
                await navigator.clipboard.writeText(texto);

                mensaje.textContent =
                    "✓ Alias copiado: " + texto;
            } catch (error) {
                input.removeAttribute("readonly");
                input.select();
                input.setSelectionRange(
                    0,
                    input.value.length
                );

                document.execCommand("copy");

                input.setAttribute("readonly", true);

                mensaje.textContent =
                    "✓ Alias copiado: " + texto;
            }
        }

        function limpiarMensajes() {
            const mensajes = document.querySelectorAll(
                ".mensaje-copiado"
            );

            mensajes.forEach(function (mensaje) {
                mensaje.textContent = "";
            });
        }

window.addEventListener("click", function (evento) {

    const modalTransferencia = document.getElementById("modal-transferencia");
    const modalPresencial = document.getElementById("modal-presencial");

    if (evento.target === modalTransferencia) {
    cerrarTransferencia();
    }

    if (evento.target === modalPresencial) {
    cerrarPresencial();
    }

});

        window.addEventListener("keydown", function (evento) {

    if (evento.key === "Escape") {

        cerrarTransferencia();
        cerrarPresencial();

    }

});