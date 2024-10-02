// Lista de productos en formato JSON
const productos = [
    {
        nombre: "Açaí Clásico",
        descripcion: "Helado clásico de açaí con un toque refrescante.",
        precio: "5.00",
        imagen: "assets/img/aca2.jpg"
    },
    {
        nombre: "Açaí con Fresas",
        descripcion: "Açaí cremoso acompañado de fresas frescas.",
        precio: "6.00",
        imagen: "assets/img/aca3.jpeg"
    },
    {
        nombre: "Açaí con Granola",
        descripcion: "El clásico açaí acompañado de granola crujiente.",
        precio: "5.50",
        imagen: "assets/img/aca4.png"
    },
    {
        nombre: "Açaí Tropical",
        descripcion: "Açaí mezclado con frutas tropicales como mango y piña.",
        precio: "6.50",
        imagen: "assets/img/Acai 1.jpg"
    }
];

// Función para cargar los productos dinámicamente en el catálogo
function cargarProductos() {
    const container = document.getElementById('productos-container');

    productos.forEach(producto => {
        const productoHTML = `
            <div class="product-item-title d-flex">
                <div class="bg-faded p-5 d-flex ms-auto rounded">
                    <h2 class="section-heading mb-0">
                        <span class="section-heading-upper">${producto.nombre}</span>
                        <span class="section-heading-lower">$${producto.precio}</span>
                    </h2>
                </div>
            </div>
            <img class="product-item-img mx-auto d-flex rounded img-fluid mb-3 mb-lg-0" src="${producto.imagen}" alt="${producto.nombre}">
            <div class="product-item-description d-flex me-auto">
                <div class="bg-faded p-5 rounded">
                    <p class="mb-0">${producto.descripcion}</p>
                </div>
            </div>
            <hr>`;
        container.innerHTML += productoHTML;
    });
}

// Cargar productos al cargar la página
window.onload = cargarProductos;
