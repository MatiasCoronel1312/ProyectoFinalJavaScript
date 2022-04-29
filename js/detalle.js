//Detalle del prestamo, cantidad e importe de las cuotas en una tabla

const cargoArrayDePrestamos = () => {

    let lista = "";
    
    let aviso ="";
    
    if (localStorage.getItem("datosDelCliente") != null) {
        datos = JSON.parse(localStorage.getItem("datosDelCliente"))

        for (dato of datos) {
            lista += `<tr>
                        <td class="align-left">$${dato.prestamoNeto}</th>
                        <td class="align-right">${dato.cuotas}</th>
                        <td class="align-right">$${dato.ImporteCuotas}</th>
                    </tr>`;
            aviso += '<h2>' + dato.nombre + " " + dato.apellido + ' , este es el prestamo que te podemos ofrecer</h2>';
        }
        tablaListado.innerHTML = lista;
        avisos.innerHTML = aviso;
    }
}

cargoArrayDePrestamos()