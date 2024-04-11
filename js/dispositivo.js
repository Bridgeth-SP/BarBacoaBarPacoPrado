
// Detectar si el dispositivo es móvil
var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Obtener el enlace de teléfono
var telLink = document.getElementById('tel-link');

// Si es un dispositivo móvil, cambiar el comportamiento del enlace
if (isMobile) {
    telLink.setAttribute('href', 'tel:+34690904462');
} else {
    // Si es un dispositivo de escritorio, eliminar el enlace
    telLink.removeAttribute('href');
    // Agregar un evento de clic para mostrar un mensaje de ayuda o realizar una acción alternativa
    telLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace
        alert('Por favor, llama al número: +34690904462');
        // Aquí puedes realizar cualquier acción alternativa que desees para los dispositivos de escritorio
    });
}