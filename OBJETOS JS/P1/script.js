
function Rectangulo(height, width){
    if(height<=0){
        height=1;
    }
    
    if(width<=0){
        width=1;
    }
    
    this.height=height;
    this.width=width;

    this.cambiarDimensiones= function(height, width){
        if(height<=0){
            height=1;
        }
        
        if(width<=0){
            width=1;
        }
        
        this.height=height;
        this.width=width;
    }

    this.calcularArea= function(){
        return this.height*this.width;
    }

    this.copyOf= function(){
        return new Rectangulo(this.height, this.width);
    }

    this.compareTo = function(other){
        if(other.calcularArea()>this.calcularArea()){
            return "Menor";
        }else if(other.calcularArea()<this.calcularArea()){
            return "Mayor";
        }else{
            return "Igual";
        }
    }
}

//ENLACE CON EL HTML-----------------------------------------

let Rectangulo1;
let Rectangulo2;
let Rectangulo3;

//CREAR RECTANGULOS
let btnCrearRectangulos=document.getElementById("crear");

function functionCrearRectangulos(){
    let height1=parseInt(document.getElementById("height1").value);
    let width1=parseInt(document.getElementById("width1").value);
    let height2=parseInt(document.getElementById("height2").value);
    let width2=parseInt(document.getElementById("width2").value);

    Rectangulo1=new Rectangulo(height1, width1);
    Rectangulo2=new Rectangulo(height2, width2);

    document.getElementById("areas").textContent="Rectángulos creados correctamente";
}
btnCrearRectangulos.addEventListener("click", functionCrearRectangulos);

//CAMBIAR DIMENSIONES
let btnCambiarDimensiones=document.getElementById("cambiar");

function functionCambiarDimensiones(){
    let heightCambio=parseInt(document.getElementById("nuevoHeight").value);
    let widthCambio=parseInt(document.getElementById("nuevoWidth").value);

    if (document.getElementById("rectanguloCambiar").value==1){
        Rectangulo1.cambiarDimensiones(heightCambio, widthCambio);
    }else{
        Rectangulo2.cambiarDimensiones(heightCambio, widthCambio);
    }
}
btnCambiarDimensiones.addEventListener("click", functionCambiarDimensiones);

//CALCULAR AREA
let btnCalcularArea=document.getElementById("calcular");

function functionCalcularArea(){
    document.getElementById("areas").textContent="Area Rectangulo 1: "+Rectangulo1.calcularArea()+" - Area Rectangulo 2: "+Rectangulo2.calcularArea();
}
btnCalcularArea.addEventListener("click", functionCalcularArea);

//COPIAR RECTANGULO
let btnCopiarRectangulo=document.getElementById("copiar");

btnCopiarRectangulo.addEventListener("click", function(){
    if (document.getElementById("rectanguloCopiar").value==1){
        Rectangulo3=Rectangulo1.copyOf();
    }else{
        Rectangulo3=Rectangulo2.copyOf();
    }

    document.getElementById("areas").textContent="Copia creada. Área: "+Rectangulo3.calcularArea();
});

//COMPARAR RECTANGULOS
let btnCompararRectangulos=document.getElementById("comparar");

btnCompararRectangulos.addEventListener("click", function(){
    if (Rectangulo1.compareTo(Rectangulo2)=="Mayor"){
        document.getElementById("comparacion").textContent="Area1>Area2";
    }else if (Rectangulo1.compareTo(Rectangulo2)=="Menor"){
        document.getElementById("comparacion").textContent="Area1<Area2";
    }else{
        document.getElementById("comparacion").textContent="Area1==Area2";
    }
});
