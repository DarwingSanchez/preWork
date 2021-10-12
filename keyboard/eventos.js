var codigos = {
    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39
};
document.addEventListener("keyup", dibujarTeclado);

var cuadrito = document.getElementById("areaDibujo");
var papel = cuadrito.getContext("2d");
var x = 150;
var y = 150;


function dibujarLinea(color, xinicial, yinicial,xfinal, yfinal, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath();
}

dibujarLinea("blue", 149, 149, 151, 151, papel)
function dibujarTeclado(evento){
    

    var colorcito = "blue";
    var movimiento = 20


    switch(evento.keyCode){
        case codigos.UP:
            if(y == 10){
                alert("No puedes pasar el limite de margen");
                break;
            }else{
                dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
                y = y - movimiento
                console.log("UP");
                break;
            }
        break;
        case codigos.DOWN:
            if(y == 290){
                alert("No puedes pasar el limite de margen");
                break;
            }
            dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
            y = y + movimiento
            console.log("DOWN");
        break;
        case codigos.LEFT:
            if(x == 10){
                alert("No puedes pasar el limite de margen");
                break;
            }
            dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
            x = x - movimiento
            console.log("LEFT");
        break;
        case codigos.RIGHT: 
            if(x == 290){
                alert("No puedes pasar el limite de margen");
                break;
            }
            dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
            x = x + movimiento
            console.log("RIGHT");
        break
        default: console.log("Oprimiste " + evento.key + " Deben ser flechas")
        break;
    }
}
