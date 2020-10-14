function drinks() {
    // Variables
    let baseDeDatos = [
        {
            id: 1,
            nombre: 'Coca-cola',
            precio: 1,
            imagen: 'img/p/f01.jpg'
        },
        {
            id: 2,
            nombre: 'Fanta naranja',
            precio: 1,
            imagen: 'img/p/f02.jpg'
        },
        {
            id: 3,
            nombre: 'Calabacin',
            precio: 2.1,
            imagen: 'https://source.unsplash.com/random/500x500/?zucchini&sig=3'
        },
        {
            id: 4,
            nombre: 'Fresas',
            precio: 0.6,
            imagen: 'https://source.unsplash.com/random/500x500/?burrs&sig=4'
        }

    ]
    let $items = document.querySelector('#items');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');

    // Funciones
    function renderItems() {
        for (let info of baseDeDatos) {
            let miNodo =
                "<div class='producto w3-col m3 w3-margin-bottom w3-padding'>" +
                "<div class='w3-container w3-border w3-round' style='padding: 4px;'>" +
                "<div class='w3-container'>" +
                "<h4><b>" + info['nombre'] + "</b></h4>" +
                "</div>" +
                "<div class='w3-half' style='padding: 4px 0px'>" +
                "<img class='w3-image' src='" + info['imagen'] + "' alt=''>" +
                "</div>" +
                "<div class='w3-half' style='padding: 4px'>" +
                "<p><span class='w3-xxlarge'><b>" + info['precio'] + "</b></span> €/gr</p>" +
                "<span class='w3-orange w3-text-dark-grey w3-round-xxlarge' style='padding: 2px 10px'><b>Indica</b></span><br>" +
                "</div>" +
                "<div>" +
                "<p class='Comprar w3-button w3-block w3-theme w3-hover-theme'>Compar</p>" +
                "</div>" +
                "</div>" +
                "</div>";
            // Estructura
            // let miNodo = document.createElement('div');
            // miNodo.classList.add('w3-col m3 w3-margin-bottom w3-padding');
            // Ficha
            // let miNodoCard = document.createElement('div');
            // miNodoCard.classList.add('w3-container w3-border w3-round');
            // miNodoCard.style.padding="4px";
            // let miNodoCardBody = document.createElement('div');
            // miNodoCardBody.classList.add('w3-container');
            // Titulo
            // let miNodoTitle = document.createElement('h4');
            // miNodoTitle.textContent = info['nombre'];
            // Imagen
            // let miNodoImagen = document.createElement('img');
            // miNodoImagen.classList.add('w3-image');
            // miNodoImagen.setAttribute('src', info['imagen']);
            // Precio
            // let miNodoPrecio = document.createElement('p');
            // let miNodoPrecioDestacado = document.createElement('span');
            // miNodoPrecioDestacado.classList.add('w3-xxlarge');
            // miNodoPrecioDestacado.textContent = info['precio'];
            // miNodoPrecio.appendChild(miNodoPrecioDestacado);
            // miNodoPrecio.textContent += ' €/gr';
            // Boton 
            // let miNodoBoton = document.createElement('w3-button');
            // miNodoBoton.classList.add('w3-button', 'w3-theme');
            // miNodoBoton.textContent = '+';
            // miNodoBoton.setAttribute('marcador', info['id']);
            // miNodoBoton.addEventListener('click', anyadirCarrito);
            // Insertamos
            // miNodoCardBody.appendChild(miNodoTitle);
            // miNodoCard.appendChild(miNodoCardBody);
            // miNodoCard.appendChild(miNodoPrecio);
            // miNodoCard.appendChild(miNodoBoton);
            // miNodo.appendChild(miNodoCard);
            $items.appendChild(miNodo);
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
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            // Cuenta el número de veces que se repite el producto
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            // Creamos el nodo del item del carrito
            let miNodo = document.createElement('li');
            miNodo.classList.add('w3-right-align');
            miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0]['nombre']} - ${miItem[0]['precio']}€`;
            // Boton de borrar
            let miBoton = document.createElement('w3-button');
            miBoton.classList.add('w3-text-red');
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
        console.log()
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
            let miItem = baseDeDatos.filter(function (itemBaseDatos) {
                return itemBaseDatos['id'] == item;
            });
            total = total + miItem[0]['precio'];
        }
        // Formateamos el total para que solo tenga dos decimales
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
} 