//Saludos de bienvenida//
alert('BIENVEDNIDX AL CAMBIO (presione F12 para abrir la consola y cerrar para visualizar nuestra pagina)');

/*function saludar() {
function saludar()
    console.log("Bienvenidos al cambio");
}
saludar()*/

function saludoDirecto() { //donde se ejecuta esta función?
    let nombreIngresado = prompt('Ingresa su nombre:)');
    alert("Bienvenidx " + nombreIngresado + "." + " Continua para realizar tu compra")
}


//Definir tarea a realizar//
let codigo = 0

function cod() {
    codigo = parseInt(prompt('Ingrese el numero del area que te interesa: 1.Higiene personal  2.Belleza facial 3.Cuidado del cabello 0.Salir'));
    switch (codigo) {
        case 1:
            clasificacionProductoA; //donde se define? que es?
            alert('En la consola te detallamos los productos nuevos disponibles. Presione 0 para salir de las instrucciones por favor'); //estas segura? donde llamas a ese console.log?
            break;
        case 2: //este caso está excelentemente planteado!
            let nuevoCodigo = 0
            do {
                nuevoCodigo = prompt('Ingrese la letra correspondiente: A.Exfoliante natural de arcilla verde B.Pulpa de carbon C.Agua de rosas');
                if ((nuevoCodigo == "A") || (nuevoCodigo == "a")) {
                    clasificacionProductoA; //donde se define? que es?
                } else if ((nuevoCodigo == "B") || (nuevoCodigo == "b")) {
                    clasificacionProductoB; //donde se define? que es?
                } else if ((nuevoCodigo == "C") || (nuevoCodigo == "c")) {
                    clasificacionProductoC; //donde se define? que es?
                }
            } while ((nuevoCodigo != "A") && (nuevoCodigo != "a") && (nuevoCodigo != "B") && (nuevoCodigo != "b") && (nuevoCodigo != "C") && (nuevoCodigo != "c"))
            alert('En la consola te detallamos los productos disponibles de este filtro. Presione 0 para salir de las instrucciones por favor'); //estas segura? donde llamas a ese console.log?
            break;
        case 3: //mismas correcciones case 2
            let nuevoCodigoB = 0
            do {
                nuevoCodigoB = prompt('Ingrese la letra correspondiente: A.Shampoo solido B.Acondicionador solido C.Desenrredante natural');
                if ((nuevoCodigoB == "A") || (nuevoCodigoB == "a")) {
                    clasificacionProductoA;
                } else if ((nuevoCodigoB == "B") || (nuevoCodigoB == "b")) {
                    clasificacionProductoB;
                } else if ((nuevoCodigoB == "C") || (nuevoCodigoB == "c")) {
                    clasificacionProductoC;
                }
            } while ((nuevoCodigoB != "A") && (nuevoCodigoB != "a") && (nuevoCodigoB != "B") && (nuevoCodigoB != "b") && (nuevoCodigoB != "C") && (nuevoCodigoB != "c"))
            alert('En la consola te detallamos los productos disponibles de este filtro. Presione 0 para salir de las instrucciones por favor');
            break;
        default:
            break;
    }
}

do {
    cod();
} while (codigo != 0);

//1.a Calcular costos totales de la compra realizada por el usuario//
class Producto {
    constructor(marca, color, estilo) {
        this.marca = marca,
            this.color = color,
            this.tipo = tipo,
            this.precio = parseInt(Math.random() * 10)
        this.sumaTarjeta = function sumaTarjeta(precio) {
            return precio * 0.50
        }
        this.sumaTarjeta = function sumaTarjeta(precio) {
            return precio * 0.50
        }
    }
    mostrarProducto() {
        return ('Del producto ' + this.tipo + ' tenemos de la marca ' + this.marca + ' en color ' + this.color + ' y el precio es: ' + this.precio);
    }
}

let Producto = [productoA, productoB, productoC, productoD, productoE, productoF, //nombres de array en camelCase
    new Producto(('Kamikaze', 'Blanco', 'Crema')),
    new Producto(('Meraki', 'Azul', 'Cepillo')),
    new Producto(('Maggakup', 'Trasparente', 'Copita')),
    new Producto(('Kamikaze', 'Rosa', 'Arcilla')),
    new Producto(('Nodo', 'Blanco', 'Desodorante')),
    new Producto(('Ecopcion', 'Blanco', 'Bolsas')),
    new Producto(('Maggakup', 'Textura', 'Toallitas')),
    new Producto(('Kamikaze', 'Trasparente', 'Aceite')),
    new Producto(('Ecopcion', 'Gris', 'Sorbete')),
    new Producto(('Meraki', 'Marron', 'Estuche')),
    new Producto(('Nodo', 'Naranja', 'Bronceador')),
    new Producto(('Kalu', 'negro', 'Jalea')),
    new Producto(('Nodo', 'Verde', 'Pads'))
];

    /*let nombreProductoA = "Crema"
    let precioProductoA = 1500
    let stockProductoA = 10

    let nombreProductoB = "Shampoo"
    let precioProductoB = 2000
    let stockProductoB = 50 */

    //Lo mismo que arriba pero todo junto// 

    let productoA = { 
        nombre: "Crema",
        precio: 1500,
        stock: 10
    }

    let productoB = { 
        nombre: "Shampoo",
        precio: 2000,
        stock: 50
    }

    console.log(productoB.nombre)
    console.log(productoB.precio)
    console.log(productoB.stock)

    //Otra forma// 
    const productoC = {
        nombre: "Copita",
        precio: 3500,
        stock: 20
    }

    console.log(productoC["nombre"])
    console.log(productoC["precio"])
    console.log(productoC["stock"]) 

    //Otra forma//
    function Producto(nombre, precio, stock){
        this.nombre = nombre
        this.precio = precio
        this.stock = stock
        this.sumaTarjeta = function sumaTarjeta(precio) {
            return precio * 0.50
        }
        this.sumarStock = function (cantidad) {
            this.stock += cantidad
        }
    }

    const productoD = new Producto("Pad", 500, 150)
    const productoE = new Producto("Sorbete", 350, 500)
    const productoF = new Producto("Bolsa", 1000, 50)

    productoD.sumaTarjeta()
    productoE.sumaTarjeta()
    productoF.sumaTarjeta()

    productoD.sumarStock(cantidad1)
    
/*
    let cantidadCompras = prompt("Ingrese la cantidad de productos distintos que quiere comprar: \n- Shampoo\n- Crema")
    let precioTotal = 0;

    function sumaTarjeta(precio) {
        return precio * 0.50
    }

    for (let i = 0; i < cantidadCompras; i++) {

        let compra1 = prompt("Ingrese el nombre del producto que quiere comprer: \n- Shampoo\n- Crema")
        let cantidad1 = prompt("Ingrese la cantidad de unidades que quiera comprar")

        if (compra1 == "Shampoo") {
            calculoStock(cantidad1, productoB.stock, productoB.precio)
            if (productoB.stock >= cantidad1) {
                precioTotal += cantidad1 * productoB.precio
                alert("El precio total es de: $" + (cantidad1 * productoB.precio))
            } else {
                alert("No disponemos de esa cantidad en stock actualmente. Nuestro stock actual es de: " + productoB.stock + "unidades")
            }
        } else if (compra1 == "Crema") {
            calculoStock(cantidad1, productoA.stock, productoA.precio)
            if (productoA.stock >= cantidad1) {
                precioTotal += cantidad1 * productoA.precio
                alert("El precio total es de: $" + (cantidad1 * productoA.precio))
            } else {
                alert("No disponemos de esa cantidad en stock actualmente. Nuestro stock actual es de: " + productoA.stock + "unidades")
            }

        } else {
            alert("No tenemos ese producto")
        }
    }

    if (cantidadCompras > 1) {
        alert("Este es el precio total de tu compra:" + precioTotal)
    }

    function calculadora(primerNumero, segundoNumero, operacion) {
        switch (operacion) {
            case "+":
                return primerNumero + segundoNumero;
                break;
            case "*":
                return primerNumero * segundoNumero;
                break;
            default:
                return 0;
                break;
        }
    }
    */

    const productoL = new Producto ("Toalla", 100, 60) 
    const productoM = new Producto ("Aceite", 270, 20)
    
    let listaProductos = [productoA, productoB, productoC, productoL, productoM,]

    let listaProductos = []
    function listaProductos(){
        for(const producto of listaProductos){
            nombresProductos.push(producto.nombre)
        }
    }
    listaProductos()