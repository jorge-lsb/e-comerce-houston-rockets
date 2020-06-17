function validating_form() {
    // VALIDADANDO E-MAIL

    var email_validating = document.getElementById("email").value;
    var validated_email_successfully = (email_validating.indexOf('@') > -1 && email_validating.indexOf('.') && email_validating.length >= 7);

    if (!validated_email_successfully) {
        console.log('SEU E-MAIL NÃO É VALIDO');
        alert('SEU EMAIL NÃO É VALIDO');
        document.getElementById("registration_form").action = "";
    }
    
    // VALIDADANDO SENHA

    var passoword = document.getElementById("ipt_senha_1").value;
    var passoword_confirm = document.getElementById("ipt_senha_2").value;
    var confirmed = passoword == passoword_confirm;

    if (!confirmed) {
        alert("A senhas não conferem!");
        document.getElementById("registration_form").action = "";
    }

    if(validated_email_successfully && confirmed){
        document.getElementById("registration_form").action = "./loja.html";
    }

}

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

var olho_aberto1a = '<i onclick="esconder1a()" class="fa fa-eye" aria-hidden="true"></i>';
var olho_fechado1a = '<i onclick="mostrar1a()"  class="fa fa-eye-slash" aria-hidden="true"></i>';

function mostrar1a(){

    document.getElementById("ipt_senha_1").type = 'text';
    document.getElementById("show_password1").innerHTML = olho_aberto1a;

}

function esconder1a(){

    document.getElementById("ipt_senha_1").type = 'password';
    document.getElementById("show_password1").innerHTML = olho_fechado1a;

}

// function texting() {

//     var mask_cpf = document.getElementById("cpf");

//     if (mask_cpf.value.length == 3 || mask_cpf.value.length == 7) {
//         mask_cpf.value += '.';
//     } else if (mask_cpf.value.length == 11) {
//         mask_cpf.value += '-';
//     }
// }

function textingprefix() {

    var input_sufix = document.getElementById("id_prefix");



    if (input_sufix.value.length == 5) {

        document.getElementById("id_sufix").focus();

    }
}


function textingprefixreverse() {

    var reverse_input = document.getElementById("id_sufix");

    if (reverse_input.value == '') {

        document.getElementById("id_prefix").focus();
    }
}
