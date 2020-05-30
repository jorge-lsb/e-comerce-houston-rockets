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
