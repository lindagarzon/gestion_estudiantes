document.addEventListener("DOMContentLoaded", function() {
    // Mensaje de bienvenida dinámico basado en la hora del día
    const welcomeMessage = document.getElementById('welcome-message');
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
        welcomeMessage.textContent = 'Buenos días';
    } else if (currentHour < 18) {
        welcomeMessage.textContent = 'Buenas tardes';
    } else {
        welcomeMessage.textContent = 'Buenas noches';
    }

    // Funcionalidad de búsqueda
    const searchInput = document.getElementById('search-input');
    const moduleList = document.getElementById('module-list');
    const modules = moduleList.getElementsByTagName('li');

    searchInput.addEventListener('keyup', function() {
        const filter = searchInput.value.toLowerCase();
        for (let i = 0; i < modules.length; i++) {
            const moduleText = modules[i].textContent || modules[i].innerText;
            if (moduleText.toLowerCase().indexOf(filter) > -1) {
                modules[i].style.display = "";
            } else {
                modules[i].style.display = "none";
            }
        }
    });

    // Alerta de bienvenida al cargar la página
    alert('Bienvenido a la Gestión Escolar');
});
