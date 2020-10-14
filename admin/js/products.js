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

var flores = [

    {
        id_flor: 0,
        imagen_flor: "0.jpg",
        nombre_flor: "Bubblegum",
        variedad: "Indica",
        cantidad: 2500,
        precio_coste: 4,
        precio_venta: 12
    },
    {
        id_flor: 1,
        imagen_flor: "1.jpg",
        nombre_flor: "Amnesia",
        variedad: "Sativa",
        cantidad: 1300,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_flor: 2,
        imagen_flor: "2.jpg",
        nombre_flor: "Gelatto",
        variedad: "Indica",
        cantidad: 500,
        precio_coste: 7,
        precio_venta: 21
    },
    {
        id_flor: 3,
        imagen_flor: "3.jpg",
        nombre_flor: "Cream Caramel",
        variedad: "Indica",
        cantidad: 1100,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_flor: 4,
        imagen_flor: "4.jpg",
        nombre_flor: "Lemonrella",
        variedad: "Sativa",
        cantidad: 800,
        precio_coste: 7,
        precio_venta: 21
    },
    {
        id_flor: 5,
        imagen_flor: "5.jpg",
        nombre_flor: "Zushi",
        variedad: "Indica",
        cantidad: 300,
        precio_coste: 30,
        precio_venta: 90
    },
    {
        id_flor: 6,
        imagen_flor: "6.jpg",
        nombre_flor: "Space jam",
        variedad: "Indica",
        cantidad: 150,
        precio_coste: 4,
        precio_venta: 12
    },
    {
        id_flor: 7,
        imagen_flor: "7.jpg",
        nombre_flor: "Z Monkey",
        variedad: "Hybrid",
        cantidad: 2300,
        precio_coste: 2,
        precio_venta: 6
    },
    {
        id_flor: 8,
        imagen_flor: "8.jpg",
        nombre_flor: "Green Poison",
        variedad: "Indica",
        cantidad: 3600,
        precio_coste: 5,
        precio_venta: 15
    },
    {
        id_flor: 9,
        imagen_flor: "9.jpg",
        nombre_flor: "Zkittle Pie #5",
        variedad: "Sativa",
        cantidad: 60,
        precio_coste: 3,
        precio_venta: 9
    },
    {
        id_flor: 10,
        imagen_flor: "10.jpg",
        nombre_flor: "Critical bilbo",
        variedad: "Indica",
        cantidad: 6400,
        precio_coste: 20,
        precio_venta: 60
    }
]

var products=catalogo.length;
console.log(catalogo);

function productGrid(){
    var tabla=document.getElementById('grid');
    for (let i = 0; i < products; i++) {
        var rejilla =   "<tr>"+
                                    "<td style='width: 10%'>"+
                                        "<label class='checkbox'>"+catalogo[i].id +
                                            "<input type='checkbox'>"+
                                            "<span class='check w3-text-theme w3-round'></span>"+
                                        "</label>"+
                                    "</td>"+
                                    "<td style='width: 10%'>"+
                                        "<img class='w3-image' src='../img/p/"+catalogo[i].image+".jpg' style='width: 40px'>"+
                                    "</td>"+
                                    "<td style='width: 20%' class='w3-left-align'>"+catalogo[i].name +"</td>"+
                                    "<td style='width: 10%' class='w3-left-align'>"+catalogo[i].category+"</td>"+
                                    "<td style='width: 10%'>"+catalogo[i].quantity+" gr</td>"+
                                    "<td style='width: 10%'>"+catalogo[i].cost+" €/gr</td>"+
                                    "<td style='width: 10%'>"+catalogo[i].price+" €/gr</td>"+
                                    "<td style='width: 10%'>"+
                                        "<label class='switch'>"+
                                            "<input type='checkbox' checked>"+
                                            "<span class='slider round'></span>"+
                                        "</label></td>"+
                                    "<td style='width:10%'>"+
                                        "<div class='w3-bar'>"+
                                            "<a class='w3-bar-item w3-button w3-hover-text-theme' href='' style='width: 50%'><i class='w3-xlarge fas fa-pencil-alt'></i></a>"+
                                            "<a class='w3-bar-item w3-button w3-hover-text-theme' href='' style='width: 50%'><i class='w3-xlarge fas fa-trash-alt - alt'></i></a>"+
                                        "</div>"+
                                    "</td>"+
                                "</tr>";
        tabla.innerHTML+=rejilla;
    }
}