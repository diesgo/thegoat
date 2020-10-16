var tipoDeVenta =[
    {
        id_tipoDeVenta: 0,
        tipo_de_venta: "gr"
    },
    {
        id_tipoDeVenta: 1,
        tipo_de_venta: "Ud/s."
    }
]

var socios = [
    {
        id_socio: 0,
        numero_socio: 1,
        foto_socio: "img/s/0.png",
        nombre_socio: "Aitor",
        primer_apellido_socio: "Menta",
        segundo_apellido_socio: "Fuerte",
        fecha_de_nacimiento: "29/02/2002",
        dni: "123654789X",
        sexo: "hombre",
        credito: 100
    }
]
var categorias = [
    {
        id_categoria: 0,
        imagen_categoria: "0.jpg",
        nombre_categoria:"Flores",
        tipo_de_venta: "gr",
    },
    {
        id_categoria: 1,
        imagen_categoria: "1.jpg",
        nombre_categoria: "Extractos",
        tipo_de_venta: "gr",
    },
    {
        id_categoria: 2,
        imagen_categoria: "2.jpg",
        nombre_categoria: "Extacciones",
        tipo_de_venta: "Ud/s.",
    },
    {
        id_categoria: 3,
        imagen_categoria: "3.jpg",
        nombre_categoria: "Flores Empaquetadas",
        tipo_de_venta: "Ud/s.",
    },
    {
        id_categoria: 4,
        imagen_categoria: "4.jpg",
        nombre_categoria: "Bebidas",
        tipo_de_venta: "Ud/s.",
    },
    {
        id_categoria: 5,
        imagen_categoria: "5.jpg",
        nombre_categoria: "Snaks",
        tipo_de_venta: "Ud/s.",
    }
]


// Articulos 

var flores = [
    {
        id_articulo: 0,
        imagen_articulo: "img/p/flores/0.jpg",
        nombre_articulo: "Bubblegum",
        variedad: "Indica",
        cantidad: 2500,
        precio_coste: 4,
        precio_venta: 12
    },
    {
        id_articulo: 1,
        imagen_articulo: "img/p/flores/1.jpg",
        nombre_articulo: "Amnesia",
        variedad: "Sativa",
        cantidad: 1300,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_articulo: 2,
        imagen_articulo: "img/p/flores/2.jpg",
        nombre_articulo: "Gelatto",
        variedad: "Indica",
        cantidad: 500,
        precio_coste: 7,
        precio_venta: 21
    },
    {
        id_articulo: 3,
        imagen_articulo: "img/p/flores/3.jpg",
        nombre_articulo: "Cream Caramel",
        variedad: "Indica",
        cantidad: 1100,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_articulo: 4,
        imagen_articulo: "img/p/flores/4.jpg",
        nombre_articulo: "Lemonrella",
        variedad: "Sativa",
        cantidad: 800,
        precio_coste: 7,
        precio_venta: 21
    },
    {
        id_articulo: 5,
        imagen_articulo: "img/p/flores/5.jpg",
        nombre_articulo: "Zushi",
        variedad: "Indica",
        cantidad: 300,
        precio_coste: 30,
        precio_venta: 90
    },
    {
        id_articulo: 6,
        imagen_articulo: "img/p/flores/6.jpg",
        nombre_articulo: "Space jam",
        variedad: "Indica",
        cantidad: 150,
        precio_coste: 4,
        precio_venta: 12
    },
    {
        id_articulo: 7,
        imagen_articulo: "img/p/flores/7.jpg",
        nombre_articulo: "Z Money",
        variedad: "Hybrid",
        cantidad: 2300,
        precio_coste: 2,
        precio_venta: 6
    },
    {
        id_articulo: 8,
        imagen_articulo: "img/p/flores/8.jpg",
        nombre_articulo: "Green Poison",
        variedad: "Indica",
        cantidad: 3600,
        precio_coste: 5,
        precio_venta: 15
    },
    {
        id_articulo: 9,
        imagen_articulo: "img/p/flores/9.jpg",
        nombre_articulo: "Zkittle Pie #5",
        variedad: "Sativa",
        cantidad: 60,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_articulo: 10,
        imagen_articulo: "img/p/flores/10.jpg",
        nombre_articulo: "Critical bilbo",
        variedad: "Indica",
        cantidad: 6400,
        precio_coste: 20,
        precio_venta: 60
    }
]

var snacks = [
    {
        id_articulo: 11,
        imagen_articulo: "img/p/snack/0.jpg",
        nombre_articulo: "Snickers",
        variedad: "",
        cantidad: 24,
        precio_coste: 0.40,
        precio_venta: 1
    },
    {
        id_articulo: 12,
        imagen_articulo: "img/p/snack/1.jpg",
        nombre_articulo: "Crunch",
        variedad: "",
        cantidad: 15,
        precio_coste: 0.36,
        precio_venta: 1
    },
    {
        id_articulo: 12,
        imagen_articulo: "img/p/snack/2.jpg",
        nombre_articulo: "Twix",
        variedad: "",
        cantidad: 10,
        precio_coste: 0.48,
        precio_venta: 1
    },
    {
        id_articulo: 14,
        imagen_articulo: "img/p/snack/3.jpg",
        nombre_articulo: "Chips Ahoy!",
        variedad: "",
        cantidad: 18,
        precio_coste: 0.68,
        precio_venta: 1
    },
    {
        id_articulo: 15,
        imagen_articulo: "img/p/snack/4.jpg",
        nombre_articulo: "KitKat",
        variedad: "",
        cantidad: 5,
        precio_coste: 0.32,
        precio_venta: 1
    },
    {
        id_articulo: 16,
        imagen_articulo: "img/p/snack/5.jpg",
        nombre_articulo: "Reese's",
        variedad: "",
        cantidad: 48,
        precio_coste: 1.15,
        precio_venta: 2.5
    },
    {
        id_articulo: 17,
        imagen_articulo: "img/p/snack/6.jpg",
        nombre_articulo: "Hersheys white",
        variedad: "",
        cantidad: 48,
        precio_coste: 0.78,
        precio_venta: 2
    },
    {
        id_articulo: 18,
        imagen_articulo: "img/p/snack/7.jpg",
        nombre_articulo: "Hershey's",
        variedad: "",
        cantidad: 48,
        precio_coste: 0.78,
        precio_venta: 2
    },
    {
        id_articulo: 19,
        imagen_articulo: "img/p/snack/8.jpg",
        nombre_articulo: "Nerds",
        variedad: "",
        cantidad: 36,
        precio_coste: 0.90,
        precio_venta: 2
    },
    {
        id_articulo: 20,
        imagen_articulo: "img/p/snack/9.jpg",
        nombre_articulo: "Haribo",
        variedad: "",
        cantidad: 36,
        precio_coste: 0.56,
        precio_venta: 1
    },
    {
        id_articulo: 21,
        imagen_articulo: "img/p/snack/10.jpg",
        nombre_articulo: "Pringles",
        variedad: "",
        cantidad: 60,
        precio_coste: 0.36,
        precio_venta: 1
    },
    {
        id_articulo: 22,
        imagen_articulo: "img/p/snack/11.jpg",
        nombre_articulo: "Patatas fritas",
        variedad: "",
        cantidad: 24,
        precio_coste: 0.24,
        precio_venta: 1
    },
    {
        id_articulo: 23,
        imagen_articulo: "img/p/snack/12.jpg",
        nombre_articulo: "Bounty",
        variedad: "",
        cantidad: 23,
        precio_coste: 0.56,
        precio_venta: 1
    },
    {
        id_articulo: 24,
        imagen_articulo: "img/p/snack/13.jpg",
        nombre_articulo: "Skittles",
        variedad: "",
        cantidad: 48,
        precio_coste: 0.38,
        precio_venta: 1
    },
    {
        id_articulo: 25,
        imagen_articulo: "img/p/snack/14.jpg",
        nombre_articulo: "m&m",
        variedad: "",
        cantidad: 48,
        precio_coste: 0.48,
        precio_venta: 1
    },
    {
        id_articulo: 26,
        imagen_articulo: "img/p/snack/15.jpg",
        nombre_articulo: "m&m",
        variedad: "",
        cantidad: 48,
        precio_coste: 0.48,
        precio_venta: 1
    }
]