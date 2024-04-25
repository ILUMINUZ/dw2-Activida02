// Ejecutar la función principal cuando el documento esté listo
$(document).on("ready", main); // Detectar el evento de "ready"

// Función principal que se ejecuta al inicio
function main() {
    // Configurar el evento de clic para todos los elementos con la clase "item"
    $(".item").on("click", abrirAcordeon); // Asignar la función de acordeón al hacer clic
}

// Función para abrir un acordeón
function abrirAcordeon() {
    // Cerrar todos los acordeones abiertos
    cerrarTodosLosAcordeones(); // Llama a la función para cerrar acordeones activos
    
    // Abrir el acordeón que fue clicado
    var $elementoClicado = $(this); // Almacenar el elemento clicado
    var $contenido = $elementoClicado.children().eq(1); // Obtener el contenido del acordeón
    $contenido.fadeIn(); // Mostrar el contenido con un efecto de desvanecimiento
    
    // Marcar el acordeón como activado
    $elementoClicado.addClass("acordeonActivado"); // Añadir la clase para indicar que está activo
}

// Función para cerrar todos los acordeones
function cerrarTodosLosAcordeones() {
    var $acordeonesActivos = $(".acordeonActivado"); // Obtener todos los acordeones activos
    
    // Iterar sobre todos los acordeones activos
    $acordeonesActivos.each(function() {
        var $acordeon = $(this); // Almacenar el acordeón actual
        var $contenido = $acordeon.children().eq(1); // Obtener el contenido
        $contenido.hide(); // Ocultar el contenido para cerrarlo
        
        // Eliminar la clase de acordeón activado
        $acordeon.removeClass("acordeonActivado"); // Quitar la clase para desactivar
    });
}
