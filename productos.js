const precio = (precio,cantidadPicadas) =>{
    return precio * cantidadPicadas
}
const pedirCantidad = () =>{
    let cantidadPicadas = parseInt(prompt("ingrese cantidad de picadas"))
    alert("El precio seria"+" "+precio(2500, cantidadPicadas)+" "+"por"+" "+cantidadPicadas+" "+"picadas")
}
pedirCantidad()