
class SimuladorPrestamo {


    constructor(sueldo, sueldoDebitar, cuotas) {

        this.sueldo = parseFloat(sueldo);

        this.sueldoDebitar = parseFloat(sueldoDebitar);

        this.cuotas = parseInt(cuotas);

        
    }

    cotizarPrestamo = () => {

        const prestamoNeto = (this.sueldo * this.sueldoDebitar) * this.cuotas;
        return (prestamoNeto);       
    
    }

}








