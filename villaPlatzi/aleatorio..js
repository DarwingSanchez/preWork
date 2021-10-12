var m = document.getElementById("mapa")
var ctx =  m.getContext("2d")
var codigos = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};

var xCerdo = 0;
var yCerdo = 0;

document.addEventListener("keydown", moverCerdito);

var fondo = {
     URL: "tile.png",
     CARGAOK: false 
};
var vaca = {
    URL : "vaca.png",
    CARGAOK : false 
};
var cerdo = {
    URL :"cerdo.png",
    CARGAOK : false 
};
var pollo = {
    URL : "pollo.png",
    CARGAOK : false 
};


fondo.imagen = new Image(); 
fondo.imagen.src = fondo.URL;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image(); 
vaca.imagen.src = vaca.URL;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image(); 
cerdo.imagen.src = cerdo.URL;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image(); 
pollo.imagen.src = pollo.URL;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo(){
    fondo.CARGAOK = true;
    imagenPosicion();
}
function cargarVaca(){
    vaca.CARGAOK = true;
    imagenPosicion();
}
function cargarCerdo(){
    cerdo.CARGAOK = true;
    imagenPosicion();
}
function cargarPollo(){
    pollo.CARGAOK = true;
    imagenPosicion();
}

function imagenPosicion(){
    if(fondo.CARGAOK){
        ctx.drawImage(fondo.imagen, 0 , 0);
    }
    if(vaca.CARGAOK){
        var cantidad = aleatorio(0, 10)
        for(var i=0 ; i < cantidad ; i++){
            var x = aleatorio(0, 420)
            var y = aleatorio(0, 420)
            ctx.drawImage(vaca.imagen, x , y);
        }  
    }
    if(cerdo.CARGAOK){
        ctx.drawImage(cerdo.imagen, xCerdo , yCerdo);
    }
    if(pollo.CARGAOK){
        var cantidad = aleatorio(0, 15)
        for(var i=0 ; i < cantidad ; i++){
            var x = aleatorio(0, 420)
            var y = aleatorio(0, 420)
            ctx.drawImage(pollo.imagen, x , y);
        }
    }
}

function aleatorio(min, max){
    var resultado; 
    resultado = Math.floor(Math.random() * (max - min + 1)) + min; 
    return resultado; 
}


//Switch para mover el cerdio 
function moverCerdito(evento){

    var movimiento = 10;

    switch(evento.keyCode){
        case codigos.UP:        
            ctx.drawImage(cerdo.imagen, xCerdo , yCerdo - movimiento);
            yCerdo = yCerdo - movimiento
            if(xCerdo == 240 && yCerdo == 430){ // Nos valida cuando gana 
                alert("Ganaste! Recarga para jugar de nuevo")
                break;
            }
        break;
        case codigos.DOWN:
            ctx.drawImage(cerdo.imagen, xCerdo , yCerdo + movimiento);
            yCerdo = yCerdo + movimiento
            if(xCerdo == 420 && yCerdo == 430){ // Nos valida cuando gana 
                alert("Ganaste! Recarga para jugar de nuevo")
                break;
            }
        break;
        case codigos.LEFT:
            ctx.drawImage(cerdo.imagen, xCerdo - movimiento, yCerdo);
            xCerdo = xCerdo - movimiento
            if(xCerdo == 420 && yCerdo == 430){ // Nos valida cuando gana 
                alert("Ganaste! Recarga para jugar de nuevo")
                break;
            }
        break;
        case codigos.RIGHT:  
            ctx.drawImage(cerdo.imagen, xCerdo + movimiento, yCerdo);
            xCerdo = xCerdo + movimiento
            if(xCerdo == 420 && yCerdo == 430){ // Nos valida cuando gana 
                alert("Ganaste! Recarga para jugar de nuevo")
                break;
            }
        default: console.log("Oprimiste " + evento.key + " Deben ser flechas")
        break;
    }
}

