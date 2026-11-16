function primeraTarea() {
    return new Promise((resolve) => {
        resolve(10);
    });
}

function segundaTarea(valor) {
    return new Promise((resolve) => {
        resolve(valor * 2);
    });
}

function terceraTarea(valor) {
    return new Promise((resolve) => {
        resolve(valor + 5);
    });
}

primeraTarea()
    .then(res1 => segundaTarea(res1))
    .then(res2 => terceraTarea(res2))
    .then(resultadoFinal => {
        console.log("Resultado final:", resultadoFinal);
    });
