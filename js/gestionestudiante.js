document.addEventListener("DOMContentLoaded", function() {
    // Seleccionamos los elementos de la lista de opciones
    const crearEstudianteBtn = document.getElementById('crearEstudiante');
    const consultarEstudiantesBtn = document.getElementById('consultarEstudiantes');
    const editarEstudianteBtn = document.getElementById('editarEstudiante');
    const eliminarEstudianteBtn = document.getElementById('eliminarEstudiante');

    // Asignamos eventos a los botones de la lista de opciones
    crearEstudianteBtn.addEventListener('click', function(event) {
        event.preventDefault(); // Prevenimos el comportamiento predeterminado del enlace
        cargarContenido('crear_estudiante.html');
    });

    consultarEstudiantesBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cargarContenido('consultar_estudiantes.html');
    });

    editarEstudianteBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cargarContenido('editar_estudiante.html');
    });

    eliminarEstudianteBtn.addEventListener('click', function(event) {
        event.preventDefault();
        cargarContenido('eliminar_estudiante.html');
    });

    // Función para cargar el contenido de la opción seleccionada
    function cargarContenido(url) {
        fetch(url)
            .then(response => response.text())
            .then(data => {
                document.getElementById('contenedorPrincipal').innerHTML = data;
            })
            .catch(error => console.error('Error al cargar el contenido:', error));
    }
});
