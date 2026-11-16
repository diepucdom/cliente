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
    let expiracion = "expires=" + fecha.toUTCString();
    document.cookie = nombre + "=" + valor + ";" + expiracion + ";path=/";
}

let contenedor = document.getElementById("contenedor");
let usuario = obtenerCookie("usuario");

if (usuario !== "") {
    contenedor.innerHTML = "<p>Bienvenido de nuevo, " + usuario + "</p>";
} else {
    contenedor.innerHTML = `
        <input type="text" id="nombreInput" placeholder="Introduce tu nombre">
        <button id="btnGuardar">Guardar</button>
    `;

    document.getElementById("btnGuardar").addEventListener("click", function() {
        let nombre = document.getElementById("nombreInput").value;
        if (nombre.trim() !== "") {
            guardarCookie("usuario", nombre, 7);
            location.reload();
        }
    });
}
