function validating_form() {
    // VALIDADANDO SENHA

    var passoword = document.getElementById("ipt_senha_1").value;
    var passoword_confirm = document.getElementById("ipt_senha_2").value;
    var confirmed = passoword == passoword_confirm;

    if (!confirmed) {
        alert("A senhas não conferem!");
        document.getElementById("registration_form").action = "";
    } else {
        document.getElementById("registration_form").action = "../pages/loja.html";
    }

    // VALIDADANDO E-MAIL

    var email_validating = document.getElementById("email").value;
    var validated_email_successfully = (email_validating.indexOf('@') > -1 && email_validating.indexOf('.') && email_validating.length > 2);

    if (!validated_email_successfully) {
        console.log('SEU E-MAIL NÃO É VALIDO');
        alert('SEU EMAIL NÃO É VALIDO');
        document.getElementById("registration_form").action = "";
    }
}