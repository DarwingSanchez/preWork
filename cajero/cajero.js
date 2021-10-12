var monto = 0 // El monto que el usuario nos da
var totalCaja = 0 //  Te dije el total en caja que tenemos
var division = 0 // Variable para saber la cantidad de billetes de una denominación que tenemos que darle al cliente. 
var division2 = false // se utiliza cuando exite la cantidad de dinero pero excede la cantidad de bille de una denominación
var contador = 0 // cuanta las iteraciones que hizo el cajero

class billete {
    constructor(valor, cantidad){
        this.valor = valor; 
        this.cantidad = cantidad
    }
    mostrar(){
        console.log("De " + this.valor + " tenemos " + this.cantidad)
    }
    totalCaja(total){
        total = this.cantidad * this.valor
        return total
    }
}

var cajaBilletes = [];
cajaBilletes.push(cien = new billete(100, 50));
cajaBilletes.push(cincuenta = new billete(50, 50));
cajaBilletes.push(veinte = new billete(20 , 50));
cajaBilletes.push(diez = new billete(10, 50 ));

var cajaTotal = [];

for(var b in cajaBilletes){
    totalCaja = totalCaja + (cajaBilletes[b].totalCaja())
}
console.log(totalCaja)

//Boton dispara la funcion de retirar al ser oprimido
var extraer = document.getElementById("button")
extraer.addEventListener("click", retirar)

//display usado para mostrar los resultados de la funcion retirar InnerHTML 
var display = document.getElementById("resultado")


function retirar(){
    
    var t = document.getElementById("dinero");
    //asigna el valor de la caja a la variable 
    monto = parseInt(t.value);

    if(monto < totalCaja){
        if(monto > 0){
            if(monto % 10 == 0 ){
                for(var b in cajaBilletes){
                    
                    if(monto / cajaBilletes[b].valor > 1){
                        if(division2 == true){
                            division--
                        }else if(division2 == false){
                            division = Math.floor(monto / cajaBilletes[b].valor);
                            division2 = true;
                        }
                        if(division <= cajaBilletes[b].cantidad ){
                            cajaTotal.push("De " + cajaBilletes[b].valor + " son " + division);
                            monto = monto - (cajaBilletes[b].valor * division);
                            cajaBilletes[b].cantidad = cajaBilletes[b].cantidad - division;
                            division2 = false;
                            contador++
                                                        
                        }else{
                            retirar();
                        }
                    }else if(monto / cajaBilletes[b].valor == 1 && cajaBilletes[b].cantidad >= 1){
                        division = monto / cajaBilletes[b].valor;
                        monto = monto - (cajaBilletes[b].valor * division);
                        cajaTotal.push("De " + cajaBilletes[b].valor + " son " + division);
                        cajaBilletes[b].cantidad = cajaBilletes[b].cantidad - division;
                        break;
                    }
                } 
            }else{
                
                display.innerHTML = "<br />La cantidad debe ser multiplo de 10";
            }
        }else if(monto <= 0){
            
            display.innerHTML = "<br />La cantidad debe ser mayor a 0";
        }
    }else{
        
        display.innerHTML = "<br />Cajero no tiene esa capacidad en el momento";
    }
    
    if(monto == 0){
        
        for(var b in cajaTotal){
            
            display.innerHTML +=  "<br />" + cajaTotal[b];
            
        }
        
    }
    if(contador >= 4){
        if(cajaTotal.length == 0){
           
            display.innerHTML =  "<br />Cajero no tiene sufientes billetes";
        }
        if(monto != 0){
            
            display.innerHTML =  "<br />No pudimos darte esa cantidad";
        }
    }
}




