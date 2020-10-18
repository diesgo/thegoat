let $tab1 = document.querySelector('#tab1');
let $tab2 = document.querySelector('#tab2');
let $tab3 = document.querySelector('#tab3');
let $tab4 = document.querySelector('#tab4');
let $tab5 = document.querySelector('#tab5');
let $tab6 = document.querySelector('#tab6');
let $tab7 = document.querySelector('#tab7');
let carrito = [];
let total = 0;
let $carrito = document.querySelector('#carrito');
let $total = document.querySelector('#total');
let $botonVaciar = document.querySelector('#boton-vaciar');

// Funciones
function renderItems() {
    for (let info of flores) {
        // Estructura
        var ficha_flores =   "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>"+
                                                "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>"+
                                                    "<div class='w3-container'>"+
                                                        "<h6 class='font-lemonada'>"+info['nombre_articulo']+"</h6>"+
                                                    "</div>"+
                                                    "<div class='w3-row w3-padding-4'>"+
                                                        "<div class='w3-col l6 m6 s6'>"+
                                                            "<img class='w3-image w3-round' src="+info['imagen_articulo']+" alt=''>"+
                                                        "</div>"+
                                                        "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>"+
                                                            "<p class='w3-xxlarge'>"+info['precio_venta']+"<span class='w3-small'> €/gr</span></p>"+
                                                            "<span class='w3-orange w3-text-dark-grey w3-round-xxlarge w3-padding-tiny'>"+info['variedad']+"</span>"+
                                                        "</div>"+
                                                    "</div>" +
                                                    "<div class='w3-row'>"+
                                                        "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>"+
                                                            "<input class='w3-input w3-border w3-round w3-xlarge' type='password' name='chipNumber' id='chipNumber' placeholder='&#9878;'>"+
                                                        "</div>"+
                    
                                                        "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>" +
                                                            "<input class='w3-input w3-border w3-round w3-xlarge' type='password' name='chipNumber' id='chipNumber' placeholder='&#8364;'>" +
                                                        "</div>" +
                    
                                                        "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>" +
                                                            "<input class='w3-input w3-border w3-round w3-xlarge' type='password' name='chipNumber' id='chipNumber' placeholder='&#127873;'>" +
                                                        "</div>" +
                                                    "</div>"+
                                                "</div>"+
                                            "</div>";
        $tab1.innerHTML+=ficha_flores;
    }

    for (let info of snacks) {
        // Estructura
        var ficha_snacks = "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
            "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>" +
            "<div class='w3-container'>" +
            "<h6 class='font-lemonada'>" + info['nombre_articulo'] + "</h6>" +
            "</div>" +
            "<div class='w3-row w3-padding-4'>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<img class='w3-image' src=" + info['imagen_articulo'] + " alt=''>" +
            "</div>" +
            "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>" +
            "<p class='w3-xxlarge'>" + info['precio_venta'] + "<span class='w3-small'> €/gr</span></p>" +
            "</div>" +
            "</div>" +
            "<div class='w3-container w3-padding-0'>" +
            "<button marcador='" + info['id_articulo'] + "' class='w3-button  w3-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Comprar</button>" +
            "</div>" +
            "</div></div>";
        $tab4.innerHTML += ficha_snacks;
    }

    for (let info of refrescos) {
        // Estructura
        var ficha_refrescos = "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
            "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>" +
            "<div class='w3-container' style='white-space: nowrap;'>" +
            "<h6 class='font-lemonada'>" + info['nombre_articulo'] + "</h6>" +
            "</div>" +
            "<div class='w3-row w3-padding-4'>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<img class='w3-image' src=" + info['imagen_articulo'] + " alt=''>" +
            "</div>" +
            "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>" +
            "<p class='w3-xxlarge'>" + info['precio_venta'] + "<span class='w3-small'> €/gr</span></p>" +
            "</div>" +
            "</div>" +
            "<div class='w3-container w3-padding-0'>" +
            "<button marcador='" + info['id_articulo'] + "' class='w3-button  w3-text-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Comprar</button>" +
            "</div>" +
            "</div></div>";
        $tab5.innerHTML += ficha_refrescos;
    }

    for (let info of hash) {
        // Estructura
        var ficha_hash = "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
            "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>" +
            "<div class='w3-container'>" +
            "<h6 class='font-lemonada'>" + info['nombre_articulo'] + "</h6>" +
            "</div>" +
            "<div class='w3-row w3-padding-4'>" +
            "<div class='w3-col l6 m6 s6'>" +
            "<img class='w3-image' src=" + info['imagen_articulo'] + " alt=''>" +
            "</div>" +
            "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>" +
            "<p class='w3-xxlarge'>" + info['precio_venta'] + "<span class='w3-small'> €/gr</span></p>" +
            "<span class='w3-orange w3-text-dark-grey w3-round-xxlarge w3-padding-tiny'>" + info['variedad'] + "</span>" +
            "</div>" +
            "</div>" +
            "<div class='w3-container w3-padding-0'>" +
            "<button marcador='" + info['id_articulo'] + "' class='w3-button w3-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Comprar</button>" +
            "</div>" +
            "</div></div>";
        $tab2.innerHTML += ficha_hash;
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
        let seleccionSnack = snacks.filter(function (itemBaseDatos) {
            return itemBaseDatos['id_articulo'] == item;
        });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('li');
        miNodo.classList.add('list-group-item', 'w3-right-align', 'mx-2');
        miNodo.textContent = `${numeroUnidadesItem} x ${seleccionSnack[0]['nombre_articulo']} - ${seleccionSnack[0]['precio_venta']}€`;
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
        let seleccionSnack = snacks.filter(function (itemBaseDatos) {
            return itemBaseDatos['id_articulo'] == item;
        });
        total = total + seleccionSnack[0]['precio_venta'];
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