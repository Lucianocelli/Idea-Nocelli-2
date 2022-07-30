//ahora que estamos aprendiendo JS
//conviene tener un codigo todo comentado
//LINEA POR LINEA: con lo que hace cada linea
//de esa forma nos aseguramos que entendemos un poquito como funciona nuestro programa

//ESTE ARCHIVO ES TU CODIGO OPTIMIZADO: TE PIDO COMO TAREA QUE TE ENCARGUES DE COMENTAR TODO EN OTRO ARCHIVO

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
    }
}

const productoA = new Producto("Exfoliante natural de arcilla verde", 1500, 10, "Belleza")
const productoB = new Producto("Shampoo solido", 200, 50, "Cabello")
const productoC = new Producto("Copita menstrual", 3500, 20, "Higiene")
const productoD = new Producto('Jalea depilatoria', 1150, 230, 'Higiene')
const productoE = new Producto('Hisopos de bamboo', 110, 140, 'Higiene')
const productoF = new Producto('Crema de Pulpa', 900, 20, 'Belleza')
const productoG = new Producto('Agua de rosas', 750, 50, 'Belleza')
const productoH = new Producto('Acondicionador solido', 1050, 20, 'Cabello')
const productoI = new Producto('Desenrredante natural', 750, 150, 'Cabello')

let listaProductos = [productoA, productoB, productoC, productoD, productoE, productoF, productoG, productoH, productoI]

let listaHigiene = listaProductos.filter(cadaProducto => cadaProducto.categoria.toLowerCase()==='higiene')
let listaBelleza = listaProductos.filter(cadaProducto => cadaProducto.categoria.toLowerCase()==='belleza')
let listaCabello = listaProductos.filter(cadaProducto => cadaProducto.categoria.toLowerCase()==='cabello')

let nombresHigiene = listaHigiene.map(cadaProducto => cadaProducto.nombre)
let nombresBelleza = listaBelleza.map(cadaProducto => cadaProducto.nombre)
let nombresCabello = listaCabello.map(cadaProducto => cadaProducto.nombre)

//Definir tarea a realizar 1//
let codigo = 0
let total = 0

function cod() {    
    codigo = parseInt(prompt('Ingrese el numero del area que te interesa: 1.Higiene personal 2.Belleza facial 3.Cuidado del cabello 0.Salir'));
    switch (codigo) { //este switch es muy parecido al tuyo y sigue teniendo todas las condiciones "iguales"
        case 1:             //pero no tiene sentido indagar tanto, con la practica vas a ir adquiriendo mas talento
            pedido(nombresHigiene,listaHigiene)
            break;
        case 2:
            pedido(nombresBelleza,listaBelleza)
            break;
        case 3:
            pedido(nombresCabello,listaCabello)
            break;
        default:
            break;
    }
}

function pedido (nombres,lista) {
    let pedido = ""
    let pedidoEncontrado = {}
    do { //hago
        pedido = prompt('Ingrese el nombre del producto: \n ' + nombres.join ('\n '))
        console.log(pedido)
        pedidoEncontrado = lista.filter(cadaProducto => cadaProducto.nombre.toLowerCase() === pedido.toLowerCase()) //filtro todos los que coincidan
        console.log(pedidoEncontrado)
        //te dejo los consoles para que veas los resultados
        //pedidoEncontrado es un array y yo solo quiero el primer y unico elemento entonces:
        pedidoEncontrado = pedidoEncontrado[0]
        console.log(pedidoEncontrado)
    } while (!pedidoEncontrado) //mientras pedido no exista se repite la peticion
    //ahora que se que el producto existe pregunto cuantos quiere:
    let cantidad = 0
    do {
        cantidad = parseInt(prompt('Cuantas unidades?'))
    } while ((isNaN(cantidad)) || cantidad < 1 || cantidad > pedidoEncontrado.stock)
    //ahora que tengo que producto y cuantos hago las cuentas:
    let subTotal = cantidad*pedidoEncontrado.precio
    total += subTotal
    alert('Subtotal: $'+subTotal+'. Total: $'+total)
}

do {
    cod();
} while (isNaN(codigo) || codigo>0)