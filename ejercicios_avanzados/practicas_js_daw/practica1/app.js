function obtenerCookie(nombre) {
    let cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
        let c = cookies[i].trim();
        if (c.indexOf(nombre + "=") === 0) {
            return c.substring(nombre.length + 1);
        }
    }
    return "";
}

function guardarCookie(nombre, valor, dias) {
    let fecha = new Date();
    fecha.setTime(fecha.getTime() + (dias * 24 * 60 * 60 * 1000));
    document.cookie = nombre + "=" + valor + ";expires=" + fecha.toUTCString() + ";path=/";
}

function borrarCookie(nombre) {
    document.cookie = nombre + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/";
}

let visitas = obtenerCookie("visitas");
let texto = document.getElementById("mensajeVisitas");

if (visitas === "") {
    visitas = 1;
    guardarCookie("visitas", visitas, 30);
    texto.textContent = "Número de visitas: " + visitas;
} else {
    visitas = parseInt(visitas) + 1;
    if (visitas > 10) {
        borrarCookie("visitas");
        texto.textContent = "Has superado las 10 visitas. Contador reiniciado a 0 y cookie borrada.";
    } else {
        guardarCookie("visitas", visitas, 30);
        texto.textContent = "Número de visitas: " + visitas;
    }
}
