// OBTENER TODOS LOS PRODUCTOS
export async function obtenerProductos() {
    try {
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "GET"
        });

        const data = await response.json();
        console.log(`Los datos son:`);
        data.map((producto) => {
            console.log(producto)
        })

    } catch(error){
        console.log(error)
    }
}
// obtenerProductos();

// OBTENER UN SOLO PRODUCTO
export async function obtenerProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "GET"
        });

        const data = await response.json();
        console.log(`La información del producto es:`, data);

    } catch(error) {
        console.log(error);
    }
}
// obtenerProducto("products/15");

// AGREGAR UN PRODUCTO
export async function agregarProducto(producto) {
    try {
        const response = await fetch("https://fakestoreapi.com/products",{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        console.log("Producto agregado:", data);

    } catch(error){
        console.log(error)
    }
}

// agregarProducto({
// // "id": 21,
// "title": "Producto de Prueba Agregado",
// "price": 0.1,
// // "description": "Descripción del producto",
// "category": "Tests",
// // "image": "http://example.com"
// });

// ELIMINAR UN PRODUCTO
export async function eliminarProducto(id) {
    try {
        const response = await fetch(`https://fakestoreapi.com/${id}`, {
            method: "DELETE"
        });

        const data = await response.json();
        console.log("Producto eliminado:", data);

    } catch (error) {
        console.log(error);
    }
}
// eliminarProducto("products/2");

// ACTUALIZAR UN PRODUCTO
export async function actualizarProducto(producto) {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${producto.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(producto)
        });

        const data = await response.json();
        console.log(data);

    } catch (error) {
        console.log(error);
    }
}

// actualizarProducto({
// "id": 5,
// "title": "Producto de Prueba Actualizado",
// "price": 0.1,
// "description": "Descripción del producto",
// "category": "Tests",
// "image": "http://example.com"
// });