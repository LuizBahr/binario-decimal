function valida(event) {
    event.preventDefault();
    var campo = document.getElementById('input-binario').value;

    var regex = /^[01]{1,8}$/;
  
    if (regex.test(campo)) {
        var decimal = parseInt(campo, 2);

        resultado.innerText = "Decimal: " + decimal;
    } else {
        resultado.innerText = "Campo inválido";
    }

}