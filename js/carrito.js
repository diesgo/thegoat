let $items = document.querySelector('#items');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderItems() {
    for (let info of snacks) {
        // Estructura
        var miNodo ="<div class='producto w3-col m3 w3-margin-bottom w3-padding'><div class='w3-container w3-border w3-round marcoEstrecho'><div class='w3-container'><h6 class='font-lemonada'>"+info['nombre_articulo'];+"</h6></div><div class='w3-row w3-padding-4'><img class='w3-image' src="+info['imagen_articulo']+" alt=''></div><div class='w3-half marcoEstrecho'><p class='w3-xxlarge'>"+info['precio_venta']+"<span class='w3-small'> €/gr</span></p><span class='w3-orange w3-text-dark-grey w3-round-xxlarge w3-padding-tiny'>"+info['variedad']+"</span></div><div class='w3-container w3-padding-0'><button marcador='"+info['id_articulo']+"' class='w3-button botonTeclado w3-block' onclick='anyadirCarrito()'>Comprar</button></div></div></div>";
        $items.innerHTML=miNodo;
    }
}
function anyadirCarrito() {
    // Anyadimos el Nodo a nuestro carrito
    carrito.push(this.getAttribute('marcador'))
    // Calculo el total
    calcularTotal();
    // Renderizamos el carrito 
    renderizarCarrito();

}

function renderizarCarrito() {
    // Vaciamos todo el html
    $carrito.textContent = '';
    // Quitamos los duplicados
    let carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los Nodos a partir de carrito
    carritoSinDuplicados.forEach(function (item, indice) {
        // Obtenemos el item que necesitamos de la variable base de datos
        let miItem = flores.filter(function (itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'w3-right-align', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('w3-button', 'w3-red', 'mx-5');
        miBoton.textContent = 'X';
        miBoton.style.marginLeft = '1rem';
        miBoton.setAttribute('item', item);
        miBoton.addEventListener('click', borrarItemCarrito);
        // Mezclamos nodos
        miNodo.appendChild(miBoton);
        $carrito.appendChild(miNodo);
    })
}

function borrarItemCarrito() {
    // Obtenemos el producto ID que hay en el boton pulsado
    let id = this.getAttribute('item');
    // Borramos todos los productos
    carrito = carrito.filter(function (carritoId) {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Calculamos de nuevo el precio
    calcularTotal();
}

function calcularTotal() {
    // Limpiamos precio anterior
    total = 0;
    // Recorremos el array del carrito
    for (let item of carrito) {
        // De cada elemento obtenemos su precio
        let miItem = flores.filter(function (itemBaseDatos) {
            return itemBaseDatos['id'] == item;
        });
        total = total + miItem[0]['precio'];
    }
    // Renderizamos el precio en el HTML
    $total.textContent = total.toFixed(2);
}

function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Renderizamos los cambios
    renderizarCarrito();
    calcularTotal();
}

// Eventos
$botonVaciar.addEventListener('click', vaciarCarrito);

// Inicio
renderItems();