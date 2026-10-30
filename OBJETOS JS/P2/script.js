class Ordenador {
    constructor(marca, modelo, gbRam=4, gbDisco=512, pulgadas=17) {
        this.marca=marca;
        this.modelo=modelo;
        this.gbRam=gbRam;
        this.gbDisco=gbDisco;
        this.pulgadas=pulgadas;
    }

    toString() {
        return `MARCA: ${this.marca}, MODELO: ${this.modelo}, GBs DE RAM: ${this.gbRam}, GBs DISCO: ${this.gbDisco}, Pulgadas: ${this.pulgadas}`;
    }
}

class Portatil extends Ordenador {
    constructor(marca, modelo, autonomia=4) {
        super(marca, modelo, 4, 256, 12);
        this.autonomia=autonomia;
    }

    toString() {
        return super.toString() + `, AUTONOMIA: ${this.autonomia} horas`;
    }
}

//ENLAZAR HTML

let ordenador;
let portatil;

// Crear ordenador
document.getElementById("crearOrdenador").addEventListener("click", function() {
    let marca = document.getElementById("marca").value;
    let modelo = document.getElementById("modelo").value;
    let ram = document.getElementById("ram").value;
    let disco = document.getElementById("disco").value;
    let pulgadas = document.getElementById("pulgadas").value;

    if (marca === "" || modelo === "") {
        alert("La marca y el modelo son obligatorios");
    } else {
        ordenador = new Ordenador(marca, modelo, ram === "" ? 4 : Number(ram),
            disco === "" ? 512 : Number(disco),
            pulgadas === "" ? 17 : Number(pulgadas));
    }
});

// Crear portátil
document.getElementById("crearPortatil").addEventListener("click", function() {
    let marca = document.getElementById("marcaPortatil").value;
    let modelo = document.getElementById("modeloPortatil").value;
    let autonomia = document.getElementById("autonomia").value;

    if (marca === "" || modelo === "") {
        alert("La marca y el modelo son obligatorios");
    } else {
        portatil = new Portatil(marca, modelo, autonomia === "" ? 4 : Number(autonomia));
    }
});

// Mostrar ordenador
document.getElementById("mostrarOrdenador").addEventListener("click", function() {
    if (ordenador !== undefined) {
        document.getElementById("resultadoOrdenador").textContent = ordenador.toString();
    }
});

// Mostrar portátil
document.getElementById("mostrarPortatil").addEventListener("click", function() {
    if (portatil !== undefined) {
        document.getElementById("resultadoPortatil").textContent = portatil.toString();
    }
});