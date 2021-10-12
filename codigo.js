var peso = prompt("Cual es tu peso?")
        var gravedadTierra = 9.8
        var gravedadMarte = 3.7
        var gravedadJupiter = 24.8
 
        document.write("\nTu peso en jupiter es <strong>" + parseFloat((peso * gravedadJupiter)/gravedadTierra).toFixed(2) + "Kg </strong>");
        document.write("\n & Tu peso en la Marte es <strong>" + parseFloat((peso* gravedadMarte)/gravedadTierra).toFixed(2) + "Kg </strong>");

