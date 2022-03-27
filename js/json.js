const guardoDatosJSON = () => {
    datosCliente = {
        nombre: nombre.trim(),
        apellido: apellido.trim(),
        prestamoNeto: parseFloat(prestamoNeto),
        cuotas: parseInt(cuotas),
        ImporteCuotas: parseFloat(ImporteCuotas)
    }
    datos.push(datosCliente)
    localStorage.setItem("datosDelCliente", JSON.stringify(datos));
    console.info("Se almaceno correctamente json");
}


const reset = document.getElementById("reset");
reset.addEventListener("click", () => {

    const resp = confirm("¿Realmente desea eliminar los datos almacenados?")
    if (resp) {
        localStorage.clear()
        console.log("se han eliminado todos los datos.")
    }

})