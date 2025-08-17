document.addEventListener("DOMContentLoaded", function () {
    const boton = document.getElementById("verificarBtn");

    boton.addEventListener("click", function () {
        const edad = parseInt(document.getElementById("edadInput").value);
        const resultado = document.getElementById("resultado");

        if (isNaN(edad)) {
            resultado.textContent = "Por favor, ingresa un número válido.";
            return;
        }

        if (edad >= 18) {
            resultado.textContent = "Puedes ingresar";
        } else {
            resultado.textContent = "Acceso denegado";
        }
    });
});