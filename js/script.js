//Saludos de bienvenida//

alert('BIENVEDNIDX AL CAMBIO (presione F12 para abrir la consola y cerrar para visualizar nuestra pagina)');
let nombre = prompt("Ingrese su nombre:")
alert("Bienvenido " + nombre + "." + " Continua para realizar tu compra")

//Productos//

class Producto {
    constructor(nombre, precio, stock, categoria) {
        this.nombre = nombre,
            this.precio = precio,
            this.stock = stock,
            this.categoria = categoria
            this.precio = parseInt(Math.random() * 10)
        this.sumaTarjeta = function sumaTarjeta(precio) { //los metodos de las clases se usan como mostrarProducto! CORREGIR POR FAVOR
            return precio * 0.50
        }
        this.sumarStock = function (cantidad){ this.stock += cantidad} //los metodos de las clases se usan como mostrarProducto! CORREGIR POR FAVOR
    }
    mostrarProducto() { //donde usas este metodo? si lo usaste para practicar ESTA BIEN!
        return ('Del producto ' + this.nombre + ' tenemos ' + this.stock + ' y el precio es: ' + this.precio);
    }
}

const productoA = {
    nombre: "Exfoliante",
    precio: 1500,
    stock: 10,
    categoria: "Belleza"
}
console.log(productoA["nombre"])
console.log(productoA["precio"])
console.log(productoA["stock"]) 
console.log(productoA["categoria"]) 

const productoB = {
    nombre: "Shampoo",
    precio: 200,
    stock: 50,
    categoria: "Cabello"
}
console.log(productoB["nombre"])
console.log(productoB["precio"])
console.log(productoB["stock"]) 
console.log(productoB["categoria"]) 

    const productoC = {
        nombre: "Copita",
        precio: 3500,
        stock: 20,
        categoria: "Higiene"
    }
    console.log(productoC["nombre"])
    console.log(productoC["precio"])
    console.log(productoC["stock"]) 
    console.log(productoC["categoria"]) 

    const productoD = new Producto(('Jalea', 1150, 230, 'Higiene'))
    const productoE = new Producto(('Hisopos', 110, 140, 'Higiene'))
    const productoF = new Producto(('Crema', 900, 20, 'Belleza'))
    const productoG = new Producto(('Agua de rosas', 750, 50, 'Belleza'))
    const productoH = new Producto(('Acondicionador', 1050, 20, 'Cabello'))
    const productoI = new Producto(('Desenrredante', 750, 150, 'Cabello'))

    let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI]

    let nombresProductos = []
    function listado(){
        for(const producto of listaProductos){
            nombresProductos.push(producto.nombre)
        }
    }
    listado()

//Definir tarea a realizar 1//
let codigo = 0

function cod() {
    codigo = parseInt(prompt('Ingrese el numero del area que te interesa: 1.Higiene personal  2.Belleza facial 3.Cuidado del cabello 0.Salir'));
    switch (codigo) {
        case 1: //en una primera instancia de aprendizaje esta bien usar los condicionales y switch para esto: PERO ESTO NO ES CORRECTO YA QUE SI OBSERVAS TODAS LAS CONDICIONES SON IGUALES
            let nuevoCodigoA = 0 //pero ya aprendimos las funciones de orden superior: USARLAS! NOS SIMPLIFICAN LA VIDA!
            do {
                nuevoCodigoA = prompt('Ingrese la letra correspondiente: A.Copa menstual B.Jalea depilatoria C.Hisopos de bamboo');
                if ((nuevoCodigoA == "A") || (nuevoCodigoA == "a")) {
                    clasificacionProductoC; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoA == "B") || (nuevoCodigoA == "b")) {
                    clasificacionProductoD; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoA == "C") || (nuevoCodigoA == "c")) {
                    clasificacionProductoE; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                }
            } while ((nuevoCodigoA != "A") && (nuevoCodigoA != "a") && (nuevoCodigoA != "B") && (nuevoCodigoA != "b") && (nuevoCodigoA != "C") && (nuevoCodigoA != "c"))
            break;

        case 2:
            let nuevoCodigoB = 0
            do {
                nuevoCodigoB = prompt('Ingrese la letra correspondiente: A.Exfoliante natural de arcilla verde B.Crema de Pulpa  C.Agua de rosas');
                if ((nuevoCodigoB == "A") || (nuevoCodigoB == "a")) {
                    clasificacionProductoA; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoB == "B") || (nuevoCodigoB == "b")) {
                    clasificacionProductoF; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoB == "C") || (nuevoCodigoB == "c")) {
                    clasificacionProductoG; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                }
            } while ((nuevoCodigoB != "A") && (nuevoCodigoB != "a") && (nuevoCodigo != "B") && (nuevoCodigoB != "b") && (nuevoCodigoB != "C") && (nuevoCodigoB != "c"))
            break;

        case 3:
            let nuevoCodigoC = 0
            do {
                nuevoCodigoC = prompt('Ingrese la letra correspondiente: A.Shampoo solido B.Acondicionador solido C.Desenrredante natural');
                if ((nuevoCodigoC == "A") || (nuevoCodigoC == "a")) {
                    clasificacionProductoB; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoC == "B") || (nuevoCodigoC == "b")) {
                    clasificacionProductoH; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                } else if ((nuevoCodigoC == "C") || (nuevoCodigoC == "c")) {
                    clasificacionProductoI; //QUE ES ESTO? DONDE LO DEFINIS? QUE DEBERIA HACER?
                }
            } while ((nuevoCodigoC != "A") && (nuevoCodigoC != "a") && (nuevoCodigoC != "B") && (nuevoCodigoC != "b") && (nuevoCodigoC != "C") && (nuevoCodigoC != "c"))
            break;
        default:
            break;
    }
}

do {
    cod();
} while (codigo != 0);

//Calcular//
let cantidadCompras = 0;

function inputHandler(e){
    cantidadCompras = e.target.value

    compra()
}

let input = document.getElementById("cantidadCompra")

//input.addEventListener("input", inputHandler) //ESTO DA ERROR
//TODO LO QUE NO TE FUNCIONE Y DE ERROR: COMENTALO Y LO SUMO ME PREGUNTAS COMO RESOLVERLO

let precioTotal = 0;

function calculoPrecio(cantidad, precio){
    precioTotal += cantidad * precio
}

function calculoStock(cantidad, producto){
    if(producto.stock >= cantidad){
        calculoPrecio(cantidad, producto.precio)
        alert("El precio total es de: $" + (cantidad * producto.precio))
    }
    else{
        alert(`No disponemos de esa cantidad en stock. Nuestro stock actual es de: ${producto.stock} unidades`)
    }
}

//Definir tarea a realizar 2//
/*y si uso este metodo? en lugar del anterior con los 3 casos
function compra(){

    for(let i = 0; i < cantidadCompras; i++){

        let compra1 = prompt("Ingrese el nombre del producto que quiere comprar: \n" + nombresProductos.join("\n ")).toLowerCase()
        let cantidad1 = prompt("Ingrese la cantidad del producto que quiere comprar:")

        if(compra1 == productoA.nombre.toLowerCase()){
            calculoStock(cantidad1, productoA)
        }
        else if(compra1 == "Silla"){
            calculoStock(cantidad1, productoB)
        }
        else if(compra1 == "Lampara"){
            calculoStock(cantidad1, productoC)
        }
        else if(compra1 == "Lapices"){
            calculoStock(cantidad1, productoD)
        }
        else{
            alert("No tenemos ese producto")
        }
    }

    switch(true){
        case precioTotal < 2000 || precioTotal > 1000:
            precioTotal = precioTotal * 0.95
            alert("Recibiste un descuento del 5% por tu compra")
            break;
        case precioTotal < 5000:
            precioTotal = precioTotal * 0.90
            alert("Recibiste un descuento del 10% por tu compra")
            break;
        case precioTotal < 10000:
            precioTotal = precioTotal * 0.80
            alert("Recibiste un descuento del 20% por tu compra")
            break;
        case precioTotal > 10000:
            alert("Recibiste un descuento del 40% por tu compra")
            precioTotal = precioTotal * 0.60
            break;
        default:
            console.log(precioTotal)
            alert("No ingresaste un precio en numeros");
            break;
    }

    let precioToTalConImpuestos = sumaIva(precioTotal)

    alert("Este es el precio total final con impuestos de tu compra: " + precioToTalConImpuestos) 

} */


