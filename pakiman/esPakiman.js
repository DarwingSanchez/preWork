class pakiman {
    constructor(nombre, vida, ataque){
        this.imagen = new Image();
        this.name = nombre;
        this.vida = vida;
        this.ataque = ataque; 

        this.imagen.src = imagenes[this.name]
    }
    hablar(){
        alert(this.name);
    }
    mostrar(){
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.name + "</strong><br />");
        document.write("Vida: " + this.vida + "<br />");
        document.write("Ataque: " + this.ataque + "<br />");
    }
    masPoderosos(){
         if(this.ataque > 70){
            this.mostrar()
         }
    }

}