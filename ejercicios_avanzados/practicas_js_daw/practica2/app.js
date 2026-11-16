function temporizador(ms) {
    return new Promise((resolve, reject) => {
        let cumplido = false;

        let temp1 = setTimeout(() => {
            cumplido = true;
            clearTimeout(temp2);
            resolve("Tiempo concluido");
        }, ms);

        let temp2 = setTimeout(() => {
            if (!cumplido) {
                clearTimeout(temp1);
                reject("El tiempo no va bien");
            }
        }, ms * 2);
    });
}

let pResultado = document.getElementById("resultado");

temporizador(5000)
    .then(mensaje => {
        pResultado.textContent = mensaje;
    })
    .catch(error => {
        pResultado.textContent = error;
    });
