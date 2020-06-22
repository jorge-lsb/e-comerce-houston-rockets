

let esconder = '<i onclick="ver_menos()" class="fas fa-angle-left"></i>';
let mostrar = '<i onclick="ver_mais()" class="fas fa-plus"></i>';

function ver_menos(){

    id_pro1.innerHTML = mostrar;
    card1.style.height = '35px';
}

function ver_mais(){

    id_pro1.innerHTML = esconder;
    card1.style.height = '190px';

}

let esconder2 = '<i onclick="ver_menos2()" class="fas fa-angle-left"></i>';
let mostrar2 = '<i onclick="ver_mais2()" class="fas fa-plus"></i>';

function ver_menos2(){

    id_pro2.innerHTML = mostrar2;
    card2.style.height = '35px';
}

function ver_mais2(){

    id_pro2.innerHTML = esconder2;
    card2.style.height = '190px';

}

let esconder3 = '<i onclick="ver_menos3()" class="fas fa-angle-left"></i>';
let mostrar3 = '<i onclick="ver_mais3()" class="fas fa-plus"></i>';

function ver_menos3(){

    id_pro3.innerHTML = mostrar3;
    card3.style.height = '35px';
}

function ver_mais3(){

    id_pro3.innerHTML = esconder3;
    card3.style.height = '190px';

}
