function texting() {

    var mask_cpf = document.getElementById("cpf");

    if (mask_cpf.value.length == 3 || mask_cpf.value.length == 7) {
        mask_cpf.value += '.';
    } else if (mask_cpf.value.length == 11) {
        mask_cpf.value += '-';
    }
}