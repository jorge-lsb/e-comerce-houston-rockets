var olho_aberto1 = '<i onclick="esconder1()" class="fa fa-eye" aria-hidden="true"></i>';
var olho_fechado1 = '<i onclick="mostrar1()"  class="fa fa-eye-slash" aria-hidden="true"></i>';

var olho_aberto2 = '<i onclick="esconder2()" class="fa fa-eye" aria-hidden="true"></i>';
var olho_fechado2 = '<i onclick="mostrar2()"  class="fa fa-eye-slash" aria-hidden="true"></i>';

function mostrar1(){

    document.getElementById("ipt_senha_1").type = 'text';
    document.getElementById("show_password1").innerHTML = olho_aberto1;

}

function esconder1(){

    document.getElementById("ipt_senha_1").type = 'password';
    document.getElementById("show_password1").innerHTML = olho_fechado1;

}

function mostrar2(){

    document.getElementById("ipt_senha_2").type = 'text';
    document.getElementById("show_password2").innerHTML = olho_aberto2;

}

function esconder2(){

    document.getElementById("ipt_senha_2").type = 'password';
    document.getElementById("show_password2").innerHTML = olho_fechado2;

}