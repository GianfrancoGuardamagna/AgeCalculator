document.addEventListener("DOMContentLoaded", function () {

const calcularEdadBtn = document.getElementById("calcularEdad");
const resultadoElement = document.getElementById("resultado");

calcularEdadBtn.addEventListener("click", function () {
    const diaNacimiento = parseInt(document.getElementById("diaNacimiento").value);
    const mesNacimiento = parseInt(document.getElementById("mesNacimiento").value);
    const añoNacimiento = parseInt(document.getElementById("añoNacimiento").value);

    const fechaNacimiento = new Date(añoNacimiento, mesNacimiento - 1, diaNacimiento);
    const fechaActual = new Date();

    const añoActual = fechaActual.getFullYear();
    const mesActual = fechaActual.getMonth() + 1;
    const diaActual = fechaActual.getDate();

    let añoResultado = añoActual - añoNacimiento;
    let mesResultado = mesActual - mesNacimiento;
    let diaResultado = diaActual - diaNacimiento;

    if (mesNacimiento > mesActual || (mesNacimiento === mesActual && diaNacimiento > diaActual)) {
        añoResultado--;
        mesResultado += 12;
    }

    while (diaResultado < 0) {
        mesResultado--;
        if (mesResultado === 0) {
            mesResultado = 12;
            añoResultado--;
        }
        const diasEnMes = new Date(añoActual, mesResultado, 0).getDate();
        diaResultado += diasEnMes;
    }

    const resultado = "You are " + añoResultado + " years old, " + mesResultado + " months, and " + diaResultado + " days.";
    resultadoElement.textContent = resultado;
});
});
const diaNacimientoInput = document.getElementById("diaNacimiento");
const mesNacimientoInput = document.getElementById("mesNacimiento");
const añoNacimientoInput = document.getElementById("añoNacimiento");

diaNacimientoInput.addEventListener("input", function() {
    // Eliminar caracteres no numéricos
    this.value = this.value.replace(/[^0-9]/g, '');
});

mesNacimientoInput.addEventListener("input", function() {
    // Eliminar caracteres no numéricos
    this.value = this.value.replace(/[^0-9]/g, '');
});

añoNacimientoInput.addEventListener("input", function() {
    // Eliminar caracteres no numéricos
    this.value = this.value.replace(/[^0-9]/g, '');
});

