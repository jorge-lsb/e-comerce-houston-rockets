
let caminho;

function procurar() {

    let buscador = barra_de_pesquisa.value;

    let camisa_lj = buscador == 'Camisas' || buscador == 'Camisetas' || buscador == 'camisetas' || buscador == 'camisas' || buscador == 'camisa' || buscador == 'Camisa';
    let regata_lj = buscador == 'Regata' || buscador == 'regata' || buscador == 'regatas' || buscador == 'Regatas' || buscador == 'Regata';
    let bones_lj = buscador == 'Bones' || buscador == 'Boné' || buscador == 'bone' || buscador == 'boné' || buscador == 'bones' || buscador == 'Bonés' || buscador == 'bonés';
    let tenis_lj = buscador == 'tenis' || buscador == 'Tenis' || buscador == 'Calçados' || buscador == 'calsados' || buscador == 'Calsados' || buscador == 'tênis' || buscador == 'Tênis';
    let bermuda_lj = buscador == 'bermudas' || buscador == 'Bermudas' || buscador == 'bermuda' || buscador == 'Bermudas' || buscador == 'Shorts' || buscador == 'shorts' || buscador == 'short' || buscador == 'Short';
    // let erro_lj = buscador == 'Camisas' || buscador == 'Camisetas' || buscador == 'camisetas' || buscador == 'camisas' || buscador == 'camisa' || buscador == 'Camisa';
    let blusa_lj = buscador == 'Blusas' || buscador == 'blusas' || buscador == 'Blusa' || buscador == 'blusa' || buscador == 'moletons' || buscador == 'Moletons' || buscador == 'Moletom' || buscador == 'moletom';

    if (camisa_lj) {

        caminho = 'loja_camisas.html'

    } else if (regata_lj) {

        caminho = 'loja_regatas.html'

    } else if (bones_lj) {

        caminho = 'loja_bones.html'

    } else if (tenis_lj) {

        caminho = 'loja_tenis.html'

    } else if (bermuda_lj) {

        caminho = 'loja_bermuda.html'

    } else if (blusa_lj) {

        caminho = 'loja_blusas.html'

    } else {

        caminho = 'loja_false.html'

    }


    buscar.href = caminho;
    
    id_resultado.value = buscador;
}


// let cards1 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards2 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards3 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards4 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards5 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards6 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards7 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards8 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards9 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards10 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards11 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }

// let cards12 = {
//     imagem: `../img/loja-img/regata-nike-13.jpg`,
//     description: `Regata Nike James Harden`,
//     price: `R$ 499,99`
// }


// for (let contador = 1; contador <= 12; contador++) {
//     let cartas = `cards${contador}`
//     gerador.innerHTML +=
//         `   <div class="card_products" id="mudanca">

//         <img src="${cards2.imagem}" id="img_card">

//         <p class="desc_product" id="p_desc_product">${cards1.description}</p>

//         <p class="price_product" id="p_price">${cards1.price}</p>

//     </div>  `;
// }

// // teste
// let carta1 = {
//     ropa1 : 'Bermuda Moletom Adidas 365 Masculina',
//     descricao1 : carta1.ropa1,
//     preco1 : 'R$ 120,00'
// }
// let ropa1 = 'Bermuda Moletom Adidas 365 Masculina';
// let descricao1 = ropa1;
// let preco1 = 'R$ 120,00'

// for (let contador = 1; contador <= 3; contador++) {
//     imagem1.src = `../img/loja-img/${ropa1}.jpg`;
//     desc1.innerHTML = descricao1;
//     price1.innerHTML = preco1;
// }
