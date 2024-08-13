alert("Bienvenido a W control de inventarios, desde esta app podrás gestionar toda tu colección de productos.");

const stockProductos = [];

// Función para crear productos 
function Producto(categoria, nombre, precio) {
    this.categoria = categoria;
    this.nombre = nombre;
    this.precio = precio;
    stockProductos.push(this);
    
}

// Función para eliminar un producto
function eliminarProducto() {
    if (stockProductos.length === 0) {
        alert("No hay productos en el stock para eliminar.");
        return;
    }
    alert("Observa el número de índice al que corresponde el producto que deseas eliminar.");
    observarStock();
    const indice = parseInt(prompt("Ingrese el valor del índice que desea eliminar según el listado visto con anterioridad.")) -1;
    if (indice >= 0 && indice < stockProductos.length) {
        stockProductos.splice(indice, 1);
        alert("Producto eliminado con éxito.");
    } else {
        alert("El valor ingresado no es valido.");
    }
}

// Función para revisar el inventario de productos
function observarStock() {
    if (stockProductos.length === 0) {
        alert("No hay productos en el stock.");
        return;
    }
    let mensaje = "Productos en el stock de inventarios:\n\n";
    stockProductos.forEach((producto, indice) => {
        mensaje += `${indice + 1}. Categoría: ${producto.categoria}, Nombre: ${producto.nombre}, Precio: ${producto.precio}\n`;
    });
    alert(mensaje);
}

// Función para agregar un producto
function agregarProducto() {
    const categoria = prompt("Ingresa la categoría del producto:");
    const nombre = prompt("Ingresa el nombre del producto:");
    const precio = parseFloat(prompt("Ingresa el precio del producto:"));

    if (!isNaN(precio) && precio > 0) {
        new Producto(categoria, nombre, precio);
        alert("Producto agregado con éxito.");
    } else {
        alert("El valor digitado en el campo precio no es valido.");
    }
}

// Función para interacción con la aplicación
function gestionarProductos() {
    let datos = true;

    while (datos) {
        const accion = prompt("¿Qué deseas hacer?\n\n1. Mostrar productos\n2. Agregar producto\n3. Eliminar producto\n4. Salir");

        switch (accion) {
            case "1":
                observarStock();
                break;
            case "2":
                agregarProducto();
                break;
            case "3":
                eliminarProducto();
                observarStock();
                break;
            case "4":
                datos = false;
                alert("Gracias por usar la app W control de inventarios.");
                break;
            default:
                alert("Opción no válida. Por favor selecciona una opción que se encuentre en la lista.");
                break;
        }
    }
}

gestionarProductos();















