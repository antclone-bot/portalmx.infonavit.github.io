function validarRFC() {
    const rfcCorrecto = 'CCO081111MX5'; // Define el RFC correcto aquí
    const rfcInput = document.getElementById('rfc').value;
    
    if (rfcInput === rfcCorrecto) {
        // Si el RFC es correcto, redirige a otra página
        window.location.href = 'pagina1.html';
        return false; // Prevenir el envío del formulario
    } else {
        alert('No existe información, verifica los datos ingresados y vuelve a intentar. En caso de duda, consulta la [guía de validación de constancia].');
        return false; // Prevenir el envío del formulario
    }
}