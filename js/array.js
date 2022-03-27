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
        } else if ((this.cuotas > 3) && (this.cuotas <= 6)) {
            interes = 2;
        } else if ((this.cuotas > 6) && (this.cuotas <= 9)) {
            interes = 2.5;
        } else {
            interes = 3;
        }
        this.totalAPagar = this.prestamoNeto * interes;
       
    }
}

let inputNombre = document.getElementById("nombre")

inputNombre.onkeyup = (event) => {
    nombre = event.target.value;
    console.clear();
    console.log(nombre);

}

let inputApellido = document.getElementById("apellido")

inputApellido.onkeyup = (event) => {
    apellido = event.target.value;
    console.clear();
    console.log(apellido);
}
let inputSueldo = document.getElementById("sueldo")

inputSueldo.onkeyup = (event) => {
    sueldo = event.target.value;
    console.clear();
    console.log(parseFloat(sueldo));
    return sueldo;
}

let inputCuotas = document.getElementById("select")
inputCuotas.onchange = (event) => {
    cuotas = event.target.value;
    console.log(parseInt(cuotas));

}

//debugger
boton.addEventListener("click", () => {
    console.log("Click");
    saludo.innerHTML = '<h2>Hola ' + nombre + " " + apellido + ' , Bienvenido!</h2>';
})

const botonSimular = document.getElementById("botonSimular");
botonSimular.addEventListener("click", () => {
    console.log("ClickB");
    // localStorage.setItem("datosDelCliente", JSON.stringify(Prestamo));
    //     console.info("Se almaceno correctamente");
    
   
    const prestamo1 = new SimuladorPrestamo(sueldo, sueldoDebitar, cuotas);

    prestamo1.cotizarPrestamo();

    prestamoNeto = prestamo1.cotizarPrestamo();
    const prestamos = [];
    // prestamos.push(new Prestamo("matias", "coronel", "300000", 12));
    // prestamos.push(new Prestamo("martin", "perez", "25000", 6));
    // prestamos.push(new Prestamo("marcos", "lozada", "120000", 12));
    // prestamos.push(new Prestamo("alicia", "rivero", "75000", 9));
    // prestamos.push(new Prestamo("laura", "gomez", "9000", 3));
    prestamos.push(new Prestamo(nombre, apellido, prestamoNeto, cuotas)); //el ultimo es el que se crea con los datos ingresados


    for (const prestamo of prestamos) {
        prestamo.InteresBanco();
        
    }

     for (let cliente = 0; cliente < prestamos.length; cliente++) {
       console.log(prestamos[cliente]); //paso por consola la lista de clientes 
    
      
    }
    console.log(prestamos[0].totalAPagar)
    // const clientes = prestamos.map((el) => el.nombre);
    // console.log(clientes); //y una lista por nombre de clientes

    TotalPrestamo.innerHTML = '<h3>Monto total del prestamo permitido: $' + prestamoNeto + '</h3>';
    const buttonDetalle = document.querySelector("#buttonDetalle")
    buttonDetalle.innerHTML=  '<button id="botonDetalle"><a href="./assets/pages/Detalles.html">Detalle</a></button>';
     ImporteCuotas= prestamos[0].totalAPagar/cuotas;
      console.log(ImporteCuotas)
    // guardoDatos();
     guardoDatosJSON();
     
})
    


// const guardoDatos = () => {
    

//     localStorage.setItem("Nombre",nombre);
//     localStorage.setItem("Apellido",apellido);
//     localStorage.setItem("PrestamoNeto",prestamoNeto);
//     localStorage.setItem("Cuotas",cuotas);
//     localStorage.setItem("ImporteCuotas",ImporteCuotas);
//     console.info("Se almaceno correctamente");
    
// }






