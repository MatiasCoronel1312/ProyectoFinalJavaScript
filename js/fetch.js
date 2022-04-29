//Aca mandamos los datos a la APi de placeholder, simulando el envio del pedido de prestamo a una entidad bancaria o financiera
botonEnviarDatos.addEventListener("click", () => {

    datos = JSON.parse(localStorage.getItem("datosDelCliente"))

    for (datosCliente of datos) {

        nombre = datosCliente.nombre
        apellido = datosCliente.apellido
        email = datosCliente.email
        prestamoNeto = datosCliente.prestamoNeto
        cuotas = datosCliente.cuotas

    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(datosCliente),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((data) => console.log(data))


    peticionEnviada.innerHTML = '<h3>En breve recibiras un email del banco</h3>'

})