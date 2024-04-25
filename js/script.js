// Ejecutar la función principal cuando el documento esté listo
$(document).on("ready", main); // Evento para saber cuándo el documento está listo

// Función principal que se ejecuta al inicio
function main() {
    // Asignar la función de ir a la sección del menú a los enlaces del menú
    $("#menu a").on("click", irA); // Asignar el evento de clic a los enlaces del menú
    
    // Asignar la función para ajustar el menú cuando se hace scroll
    $(window).scroll(scrollMenu); // Ejecutar scrollMenu cuando se desplaza la ventana
}

// Función para manejar el clic en el menú y navegar a una sección
function irA() {
    // Obtener la sección a la que se quiere ir
    var seccion = $(this).attr("href"); // Leer el atributo "href" del enlace
    
    // Animar el desplazamiento hasta la sección seleccionada
    $('body, html').animate({
        scrollTop: $(seccion).offset().top - 130 // Ajustar el desplazamiento
    }, 800); // Duración de la animación en milisegundos
    
    return false; // Prevenir el comportamiento predeterminado del enlace
}

// Función para ajustar el estilo del menú según la posición de desplazamiento
function scrollMenu() {
    // Definir las posiciones de las diferentes secciones
    var secciones = [
        $("#inicio").offset().top, // Offset de la sección "inicio"
        $("#servicios").offset().top, // Offset de la sección "servicios"
        $("#trabajo").offset().top, // Offset de la sección "trabajo"
        $("#faq").offset().top, // Offset de la sección "FAQ"
        $("#contacto").offset().top, // Offset de la sección "contacto"
        $("body").height() // Altura total del cuerpo del documento
    ];

    var scrollPosition = $(this).scrollTop(); // Obtener la posición actual de scroll

    // Condición para la primera sección
    if (scrollPosition > secciones[0] - 140 && scrollPosition < secciones[1] - 140) {
        $("#menu a").eq(2).removeClass("logo2"); // Quitar clase si está en la primera sección
    } else {
        $("#menu a").eq(2).addClass("logo2"); // Añadir clase si no está en la primera sección
    }

    // Condiciones para otras secciones, ajustando el estilo del menú según la posición
    aplicarSeleccionDeMenu(scrollPosition, secciones); // Función para aplicar selección de menú
}

// Función para aplicar la selección del menú
function aplicarSeleccionDeMenu(scrollPosition, secciones) {
    var umbral = 140; // Umbral para el desplazamiento

    // Ajustar el estilo según la posición de scroll y las secciones
    if (scrollPosition > secciones[1] - umbral && scrollPosition < secciones[2] - umbral) {
        $("#menu a").eq(0).addClass("seleccionado"); // Añadir clase de selección
    } else {
        $("#menu a").eq(0).removeClass("seleccionado"); // Quitar clase de selección
    }

    // Continuar con el ajuste de otros enlaces del menú
    ajustarMenuSeccion2(scrollPosition, secciones, umbral); // Siguiente parte del ajuste del menú
}

// Función para ajustar el estilo del menú para la segunda sección
function ajustarMenuSeccion2(scrollPosition, secciones, umbral) {
    if (scrollPosition > secciones[2] - umbral && scrollPosition < secciones[3] - umbral) {
        $("#menu a").eq(1).addClass("seleccionado"); // Añadir clase de selección
    } else {
        $("#menu a").eq(1).removeClass("seleccionado"); // Quitar clase de selección
    }

    // Ajustar otras secciones del menú
    ajustarMenuSeccion3(scrollPosition, secciones, umbral); // Función para ajustar el menú para la siguiente sección
}

// Función para ajustar el estilo del menú para la tercera sección
function ajustarMenuSeccion3(scrollPosition, secciones, umbral) {
    if (scrollPosition > secciones[3] - umbral && scrollPosition < secciones[4] - umbral) {
        $("#menu a").eq(4).addClass("seleccionado"); // Añadir clase de selección
    } else {
        $("#menu a").eq(4).removeClass("seleccionado"); // Quitar clase de selección
    }

    // Ajustar el estilo para la última sección
    ajustarMenuSeccion4(scrollPosition, secciones, umbral); // Ajuste para la última parte del menú
}

// Función para ajustar el estilo del menú para la última sección
function ajustarMenuSeccion4(scrollPosition, secciones, umbral) {
    if (scrollPosition > secciones[4] - umbral && scrollPosition < secciones[5] - umbral) {
        $("#menu a").eq(3).addClass("seleccionado"); // Añadir clase de selección
    } else {
        $("#menu a").eq(3).removeClass("seleccionado"); // Quitar clase de selección
    }
}
