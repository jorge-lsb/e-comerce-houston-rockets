
let cards1 = {
    imagem: `../img/loja-img/regata-nike-13.jpg`,
    description: `Regata Nike James Harden`,
    price: `R$ 499,99`
}

// let cards2 = {
//     imagem: `../img/loja-img/regata-nike--branca-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards3 = {
//     imagem: `../img/loja-img/camisa-preta-houston.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }


// for (let contador = 0; contador < 9; contador++) {
//     let aleatorio = parseInt(Math.random() * 3) + 1;
//     let cartas = `cards${aleatorio}`
//     gerador.innerHTML += `<div class="card_products" id="mudanca">
//     <img src="${cartas.imagem}" id="img_card">
//     <p class="desc_product" id="p_desc_product">${cards1.description}</p>
//     <p class="price_product" id="p_price">${cards1.price}</p>
//     </div>`;
// }

for (let contador = 0; contador < 9; contador++) {
    let aleatorio = parseInt(Math.random() * 3) + 1;
    let cartas = `cards${aleatorio}`
    gerador.innerHTML += `<div class="card_products" id="mudanca">
    <img src="${cards1.imagem}" id="img_card">
    <p class="desc_product" id="p_desc_product">${cards1.description}</p>
    <p class="price_product" id="p_price">${cards1.price}</p>
    </div>`;
}