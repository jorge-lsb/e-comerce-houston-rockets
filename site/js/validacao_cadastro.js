function validating_form() {
    var passoword = document.getElementById("ipt_senha_1").value;
    var passoword_confirm = document.getElementById("ipt_senha_2").value;

    var confirmed = passoword == passoword_confirm;

    if (!confirmed) {
        alert("A senhas não conferem!");
        document.getElementById("registration_form").action = "";
    } else {
        document.getElementById("registration_form").action = "../pages/loja.html";
    }
}