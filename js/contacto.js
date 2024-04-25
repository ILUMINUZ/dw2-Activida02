// Cuando el documento esté listo
$(document).on("ready", main);

function main() {
    // Manejar el envío del formulario
    $("#formContacto").on("submit", function(event) {
        event.preventDefault(); // Prevenir el envío predeterminado

        if (validarFormulario()) {
            // Si el formulario es válido, guardar datos y redirigir a la página de confirmación
            guardarDatos();
            window.location.href = "confirmacion.html"; // Redirigir a la página de confirmación
        }
    });

    // Validación del formulario antes del envío
    $("#bEnviar").on("click", function(e) {
        if (!validarFormulario()) {
            e.preventDefault(); // Si hay campos vacíos, evitar el envío
        }
    });
}

// Validar el formulario para campos vacíos
function validarFormulario() {
    var nombre = $("#tfNombre").val();
    var correo = $("#tfCorreo").val();
    var asunto = $("#tfAsunto").val();
    var mensaje = $("#tfMensaje").val();

    var error = false;

    if (nombre === "") {
        $("#tfNombre").addClass("campo-vacio");
        error = true;
    } else {
        $("#tfNombre").removeClass("campo-vacio");
    }

    if (correo === "") {
        $("#tfCorreo").addClass("campo-vacio");
        error = true;
    } else {
        $("#tfCorreo").removeClass("campo-vacio");
    }

    if (asunto === "") {
        $("#tfAsunto").addClass("campo-vacio");
        error = true;
    } else {
        $("#tfAsunto").removeClass("campo-vacio");
    }

    if (mensaje === "") {
        $("#tfMensaje").addClass("campo-vacio");
        error = true;
    } else {
        $("#tfMensaje").removeClass("campo-vacio");
    }

    if (error) {
        $("#errores").fadeIn(); // Mostrar mensaje de error
        return false; // El formulario no es válido
    } else {
        $("#errores").fadeOut(); // Ocultar mensaje de error
        return true; // El formulario es válido
    }
}

// Guardar datos del formulario en Local Storage
function guardarDatos() {
    var nombre = $("#tfNombre").val();
    var correo = $("#tfCorreo").val();
    var asunto = $("#tfAsunto").val();
    var mensaje = $("#tfMensaje").val();

    var formularioDatos = {
        nombre: nombre,
        correo: correo,
        asunto: asunto,
        mensaje: mensaje
    };

    var datosAnteriores = JSON.parse(localStorage.getItem("formularioDatos")) || [];
    datosAnteriores.push(formularioDatos);

    localStorage.setItem("formularioDatos", JSON.stringify(datosAnteriores));
}
