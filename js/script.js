//Calcular costos totales de la compra realizada por el usuario//

for(let i = 1 ; i <= 2 ; i ++){
    console.log(i)
    if(i == 2) {
        alert("Apurate, esta es nuestra ultima venta")
    }
    let nombreIngresado = prompt("Ingresa su nombre:")
    alert("Bienvenido " + nombreIngresado + "." + " Continua para realizar tu compra")
}

alert("Nose quedamos sin stock por hoy")

let nombreProductoA = "Crema"
let precioProductoA = 1500
let stockProductoA = 10

let nombreProductoB = "Shampoo"
let precioProductoB = 2000
let stockProductoB = 50


let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n- Shampoo\n- Crema")
let precioTotal = 0;

for(let i = 0; i < cantidadCompras; i++){

    let compra1 = prompt("Ingrese el nombre del producto que quiere comprer: \n- Shampoo\n- Crema")
    let cantidad1 = prompt("Ingrese la cantidad de unidades que quiera comprar")

    if (compra1 == "Shampoo") {
        if(stockProductoB >= cantidad1){
            precioTotal += cantidad1 * precioproductoB
            alert("El precio total es de: $" + (cantidad1 * precioproductoB))
        }
        else {
        alert("No disponemos de esa cantidad en stock actualmente. Nuestro stock actual es de: " + stockProductoB + "unidades")
        }
    } else if (compra1 == "Crema") {
        if(stockProductoA >= cantidad1){
            precioTotal += cantidad1 * precioProductoA
            alert("El precio total es de: $" + (cantidad1 * precioProductoA))
        }
        else {
            alert("No disponemos de esa cantidad en stock actualmente. Nuestro stock actual es de: " + stockProductoA + "unidades")
            }
        
    } 
    else {
        alert("No tenemos ese producto")
    }
}
if(cantidadCompras > 1){
    alert("Este es el precio total de tu compra:" + precioTotal)
}


