class Prestamo {
    constructor(nombre, apellido, prestamoNeto, cuotas) {
        this.nombre = nombre.toUpperCase();
        this.apellido = apellido.toUpperCase();
        this.prestamoNeto = parseFloat(prestamoNeto);
        this.cuotas = parseInt(cuotas);
    }

    InteresBanco() {
     //segun cantidad de cuotas el interes aumenta   
        if (this.cuotas <= 3) {
           interes = 1.5;
        } else if ((this.cuotas > 3) && (this.cuotas <= 6)){
            interes = 2;
        } else if ((this.cuotas > 6) && (this.cuotas <= 9)){
            interes = 2.5;
        } else{
            interes = 3;
        }
        this.totalAPagar = this.prestamoNeto * interes;
    }
}

// array con lista de clientes

const prestamos = [];
prestamos.push(new Prestamo("matias", "coronel","300000",12));
prestamos.push(new Prestamo("martin", "perez","25000",6));
prestamos.push(new Prestamo("marcos", "lozada","120000",12));
prestamos.push(new Prestamo("alicia", "rivero","75000",9));
prestamos.push(new Prestamo("laura", "gomez","9000",3));
prestamos.push(new Prestamo(nombre, apellido,prestamoNeto,cuotas)); //el ultimo es el que se crea con los datos ingresados


for (const prestamo of prestamos){
    prestamo.InteresBanco();
}
    
for (let cliente=0;cliente<prestamos.length;cliente++){
    console.log(prestamos[cliente]); //paso por consola la lista entera de clientes
    
}
   

    
