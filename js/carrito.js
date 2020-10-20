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
        //Contenedor principal
        let catFlores = document.createElement('div');
        catFlores.classList.add('producto', 'w3-col', 'm3', 'w3-margin-bottom', 'w3-padding');
         //Margenes
        let catFlores2 = document.createElement('div');
        catFlores2.classList.add('w3-container', 'w3-border', 'w3-round', 'w3-padding-frame-tiny');
         //Nombre del artículo
        let miNodoTitle = document.createElement('div');
        miNodoTitle.classList.add('w3-container');
        let catFlores3 = document.createElement('h2');
        catFlores3.classList.add('font-oswald', 'w3-text-theme');
        catFlores3.textContent = info['nombre_articulo'];
        miNodoTitle.appendChild(catFlores3);
        //Imagen y precio
        let miNodoImagePrice = document.createElement('div'); 
        miNodoImagePrice.classList.add('w3-row');
        //Contenedor de imagen
        let catFlores4 = document.createElement('div');
        catFlores4.classList.add('w3-col', 'l6', 'm6', 's6', 'w3-padding-frame-tiny');
        let catFlores5 = document.createElement('img');
        catFlores5.setAttribute('src', info['imagen_articulo']);
        catFlores5.classList.add('w3-image');
        catFlores4.appendChild(catFlores5);
        //Contenedor precio
        let catFlores6 = document.createElement('div');
        catFlores6.classList.add('w3-col', 'l6', 'm6', 's6', 'w3-padding-frame-tiny');
        let catFlores7 = document.createElement('p');
        catFlores7.classList.add('w3-xxlarge');
        catFlores7.textContent = info['precio_venta'];
        let catFlores8 = document.createElement('span');
        catFlores8.classList.add('w3-small');
        catFlores8.textContent = " €/gr";
        catFlores7.appendChild(catFlores8);
        //Variedad
        let catFlores9 = document.createElement('span');
        catFlores9.classList.add('w3-orange', 'w3-text-dark-grey', 'w3-round-xxlarge', 'w3-padding-tiny');
        catFlores9.textContent = info['variedad'];
        catFlores6.appendChild(catFlores7);
        catFlores6.appendChild(catFlores9);
        //Contenedor casillas selección € Gr regalo
        let catFlores10 = document.createElement('div');
        catFlores10.classList.add('w3-row');
        let catFlores11 = document.createElement('div');
        catFlores11.classList.add('w3-col', 'l4', 'm4', 's4', 'w3-padding-frame-tiny');
        let catFlores12 = document.createElement('input');
        catFlores12.classList.add('w3-input', 'w3-border', 'w3-round', 'w3-xlarge');
        catFlores12.setAttribute('placeholder', '€');
        catFlores12.setAttribute("type", "text");
        catFlores11.appendChild(catFlores12);
        let catFlores13 = document.createElement('div');
        catFlores13.classList.add('w3-col', 'l4', 'm4', 's4', 'w3-padding-frame-tiny');
        let catFlores14 = document.createElement('input');
        catFlores14.classList.add('w3-input', 'w3-border', 'w3-round', 'w3-xlarge');
        catFlores14.setAttribute('placeholder', 'gr.');
        catFlores13.appendChild(catFlores14);
        let catFlores15 = document.createElement('div');
        catFlores15.classList.add('w3-col', 'l4', 'm4', 's4', 'w3-padding-frame-tiny');
        let catFlores16 = document.createElement('input');
        catFlores16.classList.add('w3-input', 'w3-border', 'w3-round', 'w3-xlarge');
        catFlores16.setAttribute('placeholder', 'gift')
        catFlores15.appendChild(catFlores16);
        catFlores10.appendChild(catFlores11);
        catFlores10.appendChild(catFlores13);
        catFlores10.appendChild(catFlores15);
        // Botón Dispensar
        let catFlores17 = document.createElement('div');
        catFlores17.classList.add('w3-container', 'w3-padding-0');
        let catFlores18 = document.createElement('button');
        catFlores18.classList.add('w3-button', 'w3-theme-gradient-dark', 'w3-block');
        catFlores18.addEventListener('click', anyadirCarrito);
        catFlores18.setAttribute('marcador', info['id_articulo']);
        catFlores18.textContent = 'Dispensar';
        catFlores17.appendChild(catFlores18);
        miNodoImagePrice.appendChild(catFlores4);
        miNodoImagePrice.appendChild(catFlores6);
        miNodoImagePrice.appendChild(catFlores10);
        miNodoImagePrice.appendChild(catFlores17)
        catFlores2.appendChild(miNodoTitle);
        catFlores2.appendChild(miNodoImagePrice);
        catFlores.appendChild(catFlores2);
        $tab1.appendChild(catFlores);

    }
    // for (let info of snacks) {
    //     // Estructura
    //     var ficha_snacks = "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
    //         "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>" +
    //         "<div class='w3-container'>" +
    //         "<h2 class='font-oswald'>" + info['nombre_articulo'] + "</h2>" +
    //         "</div>" +
    //         "<div class='w3-row w3-padding-4'>" +
    //         "<div class='w3-col l6 m6 s6'>" +
    //         "<img class='w3-image' src=" + info['imagen_articulo'] + " alt=''>" +
    //         "</div>" +
    //         "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>" +
    //         "<p class='w3-xxlarge'>" + info['precio_venta'] + "<span class='w3-small'> €/gr</span></p>" +
    //         "</div>" +
    //         "</div>" +
    //         "<div class='w3-container w3-padding-0'>" +
    //         "<button marcador='"+ info['id_articulo']+"' class='w3-button  w3-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Comprar</button>" +
    //         "</div>" +
    //         "</div></div>";
    //     $tab4.innerHTML += ficha_snacks;
    // }
    // for (let info of refrescos) {
    //     // Estructura
    //     var ficha_refrescos = "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
    //         "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>" +
    //         "<div class='w3-container' style='white-space: nowrap;'>" +
    //         "<h2 class='font-oswald'>" + info['nombre_articulo'] + "</h2>" +
    //         "</div>" +
    //         "<div class='w3-row w3-padding-4'>" +
    //         "<div class='w3-col l6 m6 s6'>" +
    //         "<img class='w3-image' src=" + info['imagen_articulo'] + " alt=''>" +
    //         "</div>" +
    //         "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>" +
    //         "<p class='w3-xxlarge'>" + info['precio_venta'] + "<span class='w3-small'> €/gr</span></p>" +
    //         "</div>" +
    //         "</div>" +
    //         "<div class='w3-container w3-padding-0'>" +
    //         "<button marcador='"+ info['id_articulo']+"' class='w3-button w3-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Comprar</button>" +
    //         "</div>" +
    //         "</div></div>";
    //     $tab5.innerHTML += ficha_refrescos;
    // }
    // for (let info of hash) {
    //     // Estructura
    //     //Contenedor principal
    //     let fichaHash = "<div class='producto w3-col l3 m3 s3 w3-margin-bottom w3-padding'>"+
    //                                         "<div class='w3-container w3-border w3-round w3-padding-frame-tiny'>"+
    //                                             "<div class='w3-container'>"+
    //                                                 "<h2 class='font-oswald w3-text-theme'>"+info['nombre_articulo']+"</h2>"+
    //                                             "</div>"+
    //                                             "<div class='w3-row'>"+
    //                                                 "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>"+
    //                                                     "<img src='" + info['imagen_articulo']+"' class='w3-image' />"+
    //                                                 "</div>"+
    //                                                 "<div class='w3-col l6 m6 s6 w3-padding-frame-tiny'>"+
    //                                                     "<p class='w3-xxlarge'>"+ info['precio_venta']+"<span class='w3-small'> €/gr</span></p>"+
    //                                                     "<span class='w3-orange w3-text-dark-grey w3-round-xxlarge w3-padding-tiny'>" + info['variedad']+"</span>"+
    //                                                 "</div>"+
    //                                             "</div>"+
    //                                             "<div class='w3-row'>"+
    //                                                 "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>"+
    //                                                     "<input class='w3-input w3-border w3-round w3-xlarge' placeholder='€' />"+
    //                                                 "</div>"+
    //                                                 "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>" +
    //                                                     "<input class='w3-input w3-border w3-round w3-xlarge' placeholder='gr' />" +
    //                                                 "</div>" +
    //                                                 "<div class='w3-col l4 m4 s4 w3-padding-frame-tiny'>" +
    //                                                     "<input class='w3-input w3-border w3-round w3-xlarge' placeholder='gift' />" +
    //                                                 "</div>" +
    //                                             "</div>"+
    //                                             "<div class='w3-container w3-padding-0'>"+
    //                                                 "<button class='w3-button w3-theme-gradient-dark w3-block' onclick='anyadirCarrito()'>Dispensar</button>"+
    //                                             "</div>"+
    //                                         "</div>"+
    //                                     "</div>";
    //     $tab2.innerHTML+=fichaHash;
    // }
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
        let selectionFlor = flores.filter(function (itemBaseDatos) {
            return itemBaseDatos['id_articulo'] == item;
        });
        // let selectionSnack = snacks.filter(function (itemBaseDatos) {
        //     return itemBaseDatos['id_articulo'] == item;
        // });
        // let selectionHash = hash.filter(function (itemBaseDatos) {
        //     return itemBaseDatos['id_articulo'] == item;
        // });
        // let selectionFresh = refrescos.filter(function (itemBaseDatos) {
        //     return itemBaseDatos['id_articulo'] == item;
        // });
        // Cuenta el número de veces que se repite el producto
        let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
            return itemId === item ? total += 1 : total;
        }, 0);
        // Creamos el nodo del item del carrito
        let miNodo = document.createElement('tr');
        let miNodo2 = document.createElement('td');
        miNodo2.textContent = `${numeroUnidadesItem} x`
        let miNodo3 = document.createElement("td");
        miNodo3.textContent = `${selectionFlor[0]['nombre_articulo']} -`
        let miNodo4 = document.createElement('td');
        miNodo4.textContent =`${selectionFlor[0]['precio_venta']}€`;
        miNodo.appendChild(miNodo2);
        miNodo.appendChild(miNodo3);
        miNodo.appendChild(miNodo4);
        // miNodo.textContent = `${numeroUnidadesItem} x ${selectionSnack[0]['nombre_articulo']} - ${selectionSnack[0]['precio_venta']}€`;
        // miNodo.textContent = `${numeroUnidadesItem} x ${selectionFresh[0]['nombre_articulo']} - ${selectionFresh[0]['precio_venta']}€`;
        // miNodo.textContent = `${numeroUnidadesItem} x ${selectionHash[0]['nombre_articulo']} - ${selectionHash[0]['precio_venta']}€`;
        // Boton de borrar
        let miBoton = document.createElement('button');
        miBoton.classList.add('w3-text-red');
        let miBoton2=document.createElement('i');
        miBoton2.classList.add('fas', 'fa-trash-alt');
        miBoton.appendChild(miBoton2);
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
        let selectionFlor= flores.filter(function (itemBaseDatos) {
            return itemBaseDatos['id_articulo'] == item;
        });
        total = total + selectionFlor[0]['precio_articulo'];
    }
    let totalDosDecimales = total.toFixed(2);
    // Renderizamos el precio en el HTML
    $total.textContent = totalDosDecimales;
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