function toHome() {
    window.location.href = 'IT/index.html';
}

function verificarSenha() {
    var form = document.querySelector(".userForm");
    var senha = document.getElementById("inputPassword").value;
    var email = document.getElementById("inputEmail").value;

    if (senha != '123456' || email != 'igor@ponchielli.com') {
        alert("Senha ou E-mail incorretos!");
        senha = "";
        window.location.href = './index.html';
    } else {
        //document.querySelector('#imgPerfil').src = './images/Custom/perfil.png';
        form.action = 'IT/index.html';

    }
}