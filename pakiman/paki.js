var imagenes  = [];
imagenes["Tocinator"] = "cerdo.png";
imagenes["VacaZaurio"] = "vaca.png";
imagenes["POlliTor"] = "pollo.png";
imagenes["superVaca"] = "vaca.png"

var misPakimanes = []; 
misPakimanes.push(tocinator = new pakiman("Tocinator" , 100, 71));
misPakimanes.push(polliTor = new pakiman("POlliTor", 60, 69));
misPakimanes.push(vacaZaurio = new pakiman("VacaZaurio", 80, 50));
misPakimanes.push(vacaZaurio = new pakiman("superVaca", 80, 75));

for(var i in misPakimanes){
    misPakimanes[i].mostrar();
}

