var texto = document.getElementById("caja_lineas")
var boton = document.getElementById("button")
var d = document.getElementById("dibujito");
var lienzo = d.getContext("2d");
var colorLineas = "pink";
var lineas = 0;
var l = 0; 
var yi, xf; 

//Eventos 
boton.addEventListener("click", dibujoPorClick);

//Funciones 
function dibujoPorClick(){
    lineas = parseInt(texto.value)
    limpiarCanvas();
    for(l=0; l < lineas ; l++){
        yi  = d.width / lineas * l;
        xf =  d.width / lineas * (l + 1);
        dibujarLinea(colorLineas, 0, yi, xf, 300 )
        console.log(l)
    }
}

function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

function limpiarCanvas() {
    d.width = d.width
}
