// Tiempo de la pantalla de carga
// Aquí vamos a agregar la lógica para mostrar el login después de que termine la carga
window.onload = function() {
    setTimeout(() => {
        // Ocultamos la pantalla de carga con un desvanecimiento
        document.getElementById('loading-screen').style.opacity = '0';
        
        // Esperamos a que la animación termine para ocultarla completamente
        setTimeout(() => {
            document.getElementById('loading-screen').style.display = 'none';
            // Mostramos el login con un desvanecimiento suave
            document.getElementById('login-screen').style.display = 'block';
            document.getElementById('login-screen').classList.add('show');
        }, 1000); // El tiempo debe coincidir con la duración de la transición
    }, 3000); // Simula el tiempo de carga de la pantalla (ajústalo según sea necesario)
};
