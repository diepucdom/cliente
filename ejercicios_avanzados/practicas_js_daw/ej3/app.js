function simulaProceso(exito) {
    return new Promise((resolve, reject) => {
        if (exito) {
            resolve("Proceso exitoso");
        } else {
            reject("Hubo un error");
        }
    });
}

simulaProceso(true)
    .then(mensaje => console.log("Then (true):", mensaje))
    .catch(error => console.error("Catch (true):", error));

simulaProceso(false)
    .then(mensaje => console.log("Then (false):", mensaje))
    .catch(error => console.error("Catch (false):", error));

async function ejecutarPruebas() {
    try {
        let res1 = await simulaProceso(true);
        console.log("Async/Await (true):", res1);
    } catch (error) {
        console.error("Async/Await error (true):", error);
    }

    try {
        let res2 = await simulaProceso(false);
        console.log("Async/Await (false):", res2);
    } catch (error) {
        console.error("Async/Await error (false):", error);
    }
}

ejecutarPruebas();
