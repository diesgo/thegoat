var id_0 = [{ image: "0", name: "Bubblegum", category: "Flowers", quantity: "2500", cost: "4", price: "12" }];
var id_1 = [{ image: "1", name: "Amnesia", category: "Flowers", quantity: "1300", cost: "3", price: "9" }];
var id_2 = [{ image: "2", name: "Gelatto", category: "Flowers", quantity: "500", cost: "7", price: "31" }];
var id_3 = [{ image: "3", name: "Cream Caramel", category: "Extractions", quantity: "1100", cost: "3", price: "9" }];
var id_4 = [{ image: "4", name: "Lemonrella", category: "Estractions", quantity: "800", cost: "7", price: "21" }];
var id_5 = [{ image: "5", name: "Zushi", category: "Cali Flowers", quantity: "300", cost: "30", price: "90" }];
var id_6 = [{ image: "6", name: "Coca cola", category: "Fresh", quantity: "150", cost: "0.45", price: "1" }];
var id_7 = [{ image: "7", name: "Water", category: "Drinks", quantity: "200", cost: "0.15", price: "1" }];
var id_8 = [{ image: "8", name: "Crunch", category: "Snack", quantity: "36", cost: "0.45", price: "1" }];
var id_9 = [{ image: "9", name: "Ligther", category: "Parafernalia", quantity: "60", cost: "0.70", price: "1" }];
var id_10 = [{ image: "10", name: "Sweets", category: "Snack", quantity: "64", cost: "0.20", price: "1" }];

var productos = [id_0, id_1, id_2, id_3, id_4, id_5, id_6, id_7, id_8, id_9, id_10];

var catalogo = [
{id: "0", image: "0", name: "Bubblegum", category: "Flowers", quantity: "2500", cost: "4", price: "12"},
{id: "1", image: "1", name: "Amnesia", category: "Flowers", quantity: "1300", cost: "3", price: "9"},
{id: "2", image: "2", name: "Gelatto", category: "Flowers", quantity: "500", cost: "7", price: "31"},
{id: "3", image: "3", name: "Cream Caramel", category: "Extractions", quantity: "1100", cost: "3", price: "9"},
{id: "4", image: "4", name: "Lemonrella", category: "Estractions", quantity: "800", cost: "7", price: "21"},
{id: "5", image: "5", name: "Zushi", category: "Cali Flowers", quantity: "300", cost: "30", price: "90"},
{id: "6", image: "6", name: "Coca cola", category: "Fresh", quantity: "150", cost: "0.45", price: "1"},
{id: "7", image: "7", name: "Water", category: "Drinks", quantity: "200", cost: "0.15", price: "1"},
{id: "8", image: "8", name: "Crunch", category: "Snack", quantity: "36", cost: "0.45", price: "1"},
{id: "9", image: "9", name: "Ligther", category: "Parafernalia", quantity: "60", cost: "0.70", price: "1"},
{id: "10", image: "10", name: "Sweets", category: "Snack", quantity: "64", cost: "0.20", price: "1"}];

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