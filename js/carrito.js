window.onload = function () {  
    let $items1 = document.querySelector('#items1');
    let $items4 = document.querySelector('#items4');
    let carrito = [];
    let total = 0;
    let $carrito = document.querySelector('#carrito');
    let $total = document.querySelector('#total');
    let $botonVaciar = document.querySelector('#boton-vaciar');
    
    // Funciones
    
    function renderItems() {
        for (let info of  flores) {
            // Ficha de producto
            
            let fichaArticulo = document.createElement('div');            
            fichaArticulo.classList.add('producto', 'w3-col', 'm3', 'l3', 's12', 'w3-margin-bottom', 'w3-padding');
            
            // Contenedor
            
            let contPrin = document.createElement('div');
            contPrin.classList.add('w3-container', 'w3-border', 'w3-round', 'marcoEstrecho');
            
            // Contenedor del título
            
            let contTitulo = document.createElement("div");
            contTitulo.classList.add('w3-container');
            
            let nombreArticulo = document.createElement('h6');
            nombreArticulo.classList.add('font-lemonada');
            
            let nombreArticuloDestacado = document.createElement('b');
            nombreArticuloDestacado.textContent = info['nombre_articulo'];
            
            nombreArticulo.appendChild(nombreArticuloDestacado);
            contTitulo.appendChild(nombreArticulo);
            
            // Imagen
            
            let contImagen = document.createElement('div');
            contImagen.classList.add('w3-half', 'w3-padding-4');
            
            let imagenArticulo = document.createElement('img');
            imagenArticulo.classList.add('w3-image');
            imagenArticulo.setAttribute('src', info['imagen_articulo']);
            
            contImagen.appendChild(imagenArticulo)

            // Precio
            
            let contPrecio = document.createElement('div');
            contPrecio.classList.add('w3-half', 'marcoEstrecho');
            
            let precioArticulo = document.createElement('p');
            precioArticulo.classList.add('w3-xlarge');
            
            let precioDestacado = document.createElement('b');
            precioDestacado.textContent = info['precio_venta'];
            
            let unidadVenta = document.createElement('span');
            unidadVenta.classList.add('w3-small');
            unidadVenta.textContent = ' €/gr.';
            
            // Variedad
            
            let variedad = document.createElement('span');
            variedad.classList.add('w3-orange', 'w3-text-dark-grey', 'w3-round-xxlarge', 'w3-padding-tiny');
            
            let variedadDestacada = document.createElement('b');
            variedadDestacada.textContent = info['variedad'];
            
            variedad.appendChild(variedadDestacada);
            precioArticulo.appendChild(precioDestacado);
            precioArticulo.appendChild(unidadVenta);
            contPrecio.appendChild(variedad);
            contPrecio.appendChild(precioArticulo);
            
            // Boton
            
            let contBoton = document.createElement('div');
            contBoton.classList.add('w3-container', 'w3-padding-0');
            
            let boton = document.createElement('button');
            boton.classList.add('w3-button', 'w3-theme', 'w3-block');
            boton.textContent = 'Comprar';
            boton.setAttribute('marcador', info['id_articulo']);
            boton.addEventListener('click', anyadirCarrito);
            contBoton.appendChild(boton);
            
            // Insertamos
            
            contPrin.appendChild(contTitulo);
            contPrin.appendChild(contImagen);
            contPrin.appendChild(contPrecio);
            contPrin.appendChild(variedad);
            contPrin.appendChild(contBoton);
            fichaArticulo.appendChild(contPrin);
            $items1.appendChild(fichaArticulo);
        }
    }

    function renderItems4() {
        for (let info of snacks) {
            // Ficha de producto            
            let fichaArticulo = document.createElement('div');
            fichaArticulo.classList.add('producto', 'w3-col', 'm3', 'l3', 's12', 'w3-margin-bottom', 'w3-padding');
            // Contenedor    
            let contPrin = document.createElement('div');
            contPrin.classList.add('w3-container', 'w3-border', 'w3-round', 'marcoEstrecho');
            // Contenedor del título    
            let contTitulo = document.createElement("div");
            contTitulo.classList.add('w3-container');
            let nombreArticulo = document.createElement('h6');
            nombreArticulo.classList.add('font-lemonada');
            let nombreArticuloDestacado = document.createElement('b');
            nombreArticuloDestacado.textContent = info['nombre_articulo'];
            nombreArticulo.appendChild(nombreArticuloDestacado);
            contTitulo.appendChild(nombreArticulo);
            // Imagen    
            let contImagen = document.createElement('div');
            contImagen.classList.add('w3-half', 'w3-padding-4');
            let imagenArticulo = document.createElement('img');
            imagenArticulo.classList.add('w3-image');
            imagenArticulo.setAttribute('src', info['imagen_articulo']);
            contImagen.appendChild(imagenArticulo)
            // Precio    
            let contPrecio = document.createElement('div');
            contPrecio.classList.add('w3-half', 'marcoEstrecho');
            let precioArticulo = document.createElement('p');
            precioArticulo.classList.add('w3-xlarge');
            let precioDestacado = document.createElement('b');
            precioDestacado.textContent = info['precio_venta'];
            let unidadVenta = document.createElement('span');
            unidadVenta.classList.add('w3-small');
            unidadVenta.textContent = ' €/gr.';
            // Variedad
            let variedad = document.createElement('span');
            variedad.classList.add('w3-orange', 'w3-text-dark-grey', 'w3-round-xxlarge', 'w3-padding-tiny');
            let variedadDestacada = document.createElement('b');
            variedadDestacada.textContent = info['variedad'];
            variedad.appendChild(variedadDestacada);
            precioArticulo.appendChild(precioDestacado);
            precioArticulo.appendChild(unidadVenta);
            contPrecio.appendChild(variedad);
            contPrecio.appendChild(precioArticulo);
            // Boton
            let contBoton = document.createElement('div');
            contBoton.classList.add('w3-container', 'w3-padding-0');
            let boton = document.createElement('button');
            boton.classList.add('w3-button', 'w3-theme', 'w3-block');
            boton.textContent = 'Comprar';
            boton.setAttribute('marcador', info['id_articulo']);
            boton.addEventListener('click', anyadirCarrito);
            contBoton.appendChild(boton);
            // Insertamos
            contPrin.appendChild(contTitulo);
            contPrin.appendChild(contImagen);
            contPrin.appendChild(contPrecio);
            contPrin.appendChild(variedad);
            contPrin.appendChild(contBoton);
            fichaArticulo.appendChild(contPrin);
            $items4.appendChild(fichaArticulo);
        }
    }

    function anyadirCarrito() {
        
        // Anyadimos el Nodo a nuestro carrito
        
        carrito.push(this.getAttribute('marcador'))
        
        // Calculo el total
        
        calcularTotal();
        
        // Renderizamos el carrito
        
        renderizarCarrito();
        renderizarCarrito4();
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
                return itemBaseDatos['id_articulo'] == item;
            });
            
            // Cuenta el número de veces que se repite el producto
            
            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);
            
            // Creamos el nodo del item del carrito
            
            let fichaArticulo = document.createElement('tr');
            fichaArticulo.classList.add('w3-white');
            
            let fichaArticulo2 = document.createElement('td');
            fichaArticulo2.textContent = `${numeroUnidadesItem} gr`;
            
            let fichaArticulo3 = document.createElement('td');
            fichaArticulo3.textContent = `${miItem[0]['nombre_articulo']}`;

            let fichaArticulo4 = document.createElement('td');
            fichaArticulo4.textContent = ` - ${miItem[0]['precio_venta']}€/gr`;
            
            fichaArticulo.appendChild(fichaArticulo2);
            fichaArticulo.appendChild(fichaArticulo3);
            fichaArticulo.appendChild(fichaArticulo4);
            
            // Boton de borrar
            
            let miBoton = document.createElement('button');
            miBoton.classList.add('w3-button', 'w3-white', 'w3-badge', 'w3-padding-tiny', 'font-haetten-schweiler');
            
            let miBotonTexto = document.createElement('b');
            miBotonTexto.classList.add('w3-badge', 'w3-red');
            miBotonTexto.textContent = 'X';
            
            miBoton.appendChild(miBotonTexto);
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);
            
            // Mezclamos nodos

            fichaArticulo.appendChild(miBoton);
            $carrito.appendChild(fichaArticulo);
        })
    }
    
    function renderizarCarrito4() {

        // Vaciamos todo el html

        $carrito.textContent = '';

        // Quitamos los duplicados

        let carritoSinDuplicados = [...new Set(carrito)];

        // Generamos los Nodos a partir de carrito

        carritoSinDuplicados.forEach(function (item, indice) {

            // Obtenemos el item que necesitamos de la variable base de datos

            let miItem = snacks.filter(function (itemBaseDatos) {
                return itemBaseDatos['id_articulo'] == item;
            });

            // Cuenta el número de veces que se repite el producto

            let numeroUnidadesItem = carrito.reduce(function (total, itemId) {
                return itemId === item ? total += 1 : total;
            }, 0);

            // Creamos el nodo del item del carrito

            let fichaArticulo = document.createElement('tr');
            fichaArticulo.classList.add('w3-white');

            let fichaArticulo2 = document.createElement('td');
            fichaArticulo2.textContent = `${numeroUnidadesItem} gr`;

            let fichaArticulo3 = document.createElement('td');
            fichaArticulo3.textContent = `${miItem[0]['nombre_articulo']}`;

            let fichaArticulo4 = document.createElement('td');
            fichaArticulo4.textContent = `${miItem[0]['precio_venta']}€/gr`;

            fichaArticulo.appendChild(fichaArticulo2);
            fichaArticulo.appendChild(fichaArticulo3);
            fichaArticulo.appendChild(fichaArticulo4);

            // Boton de borrar

            let miBoton = document.createElement('button');
            miBoton.classList.add('w3-button', 'w3-white', 'w3-badge', 'w3-padding-tiny', 'font-haetten-schweiler');

            let miBotonTexto = document.createElement('b');
            miBotonTexto.classList.add('w3-badge', 'w3-red');
            miBotonTexto.textContent = 'X';

            miBoton.appendChild(miBotonTexto);
            miBoton.style.marginLeft = '1rem';
            miBoton.setAttribute('item', item);
            miBoton.addEventListener('click', borrarItemCarrito);

            // Mezclamos nodos

            fichaArticulo.appendChild(miBoton);
            $carrito.appendChild(fichaArticulo);
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
        renderizarCarrito4();

        // Calculamos de nuevo el precio
        
        calcularTotal();
        calcularTotal4();
    }
    
    function calcularTotal() {
        
        // Limpiamos precio anterior
        
        total = 0;
        
        // Recorremos el array del carrito
        
        for (let item of carrito) {
            
            // De cada elemento obtenemos su precio
            
            let miItem = flores.filter(function (itemBaseDatos) {
                return itemBaseDatos['id_articulo'] == item;
            });
            total = total + miItem[0]['precio_venta'];
        }
        
        // Formateamos el total para que solo tenga dos decimales
        
        let totalDosDecimales = total.toFixed(2);
        
        // Renderizamos el precio en el HTML
        
        $total.textContent = totalDosDecimales;
    }
    function calcularTotal4() {

        // Limpiamos precio anterior

        total = 0;

        // Recorremos el array del carrito

        for (let item of carrito) {

            // De cada elemento obtenemos su precio

            let miItem = snacks.filter(function (itemBaseDatos) {
                return itemBaseDatos['id_articulo'] == item;
            });
            total = total + miItem[0]['precio_venta'];
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
    renderItems4();
}
