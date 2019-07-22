//GLOBAL
//IDTicket - Tipo - Nivel - Categoria - Operador - Status - DataAlvo - TempoGasto - DataRegistro - DataFechamento - Titulo - Mensagem
var ticketData = ["2019-000001", "Solicitação", "Normal", "Hardware", "Igor Ponchielli", "Em Progresso", "14/01/2019 13:37:02", "00:30", "10/01/2019 09:22:13", "", "Reserva de notebook", "Bom dia, Gostaria de fazer a reserva de um notebook"]
//Nome - Telefone - Empresa - Cidade - Departamento - Email
var userData = ["Maria Oliveira", "+55 (47) 3388-9911", "Ponchielli LTDA", "Pomerode", "RH", "maria.oliveira@ponchielli.com"]

var operator = ["Igor Ponchielli", "+55 (47) 3388-9995", "igor@ponchielli.com"]

function logoff() {
    if (confirm('Você tem certeza que deseja sair?')) {
        window.location.href = '../index.html'
    } else {
        // Do nothing!
    }
    
}


function toIndex() {
    window.location.href = './view-tickets.html'
}

function backToHome() {
    window.location.href = './index.html' //'../home.html'
}

function formChamado() {
    window.location.href = './open-ticket.html'
}

function formUser() {
    window.location.href = './new-user.html'
}

function formItem() {
    window.location.href = './new-item.html'
}

function inventory() {
    window.location.href = './inventory.html'
}

function winstore() {
    window.location.href = 'https://www.microsoft.com/pt-br/store/apps/windows'
}

function documentation() {
    window.location.href = './doc.html'
}

function viewTicket() {
    window.location.href = './view-tickets.html'
}

function userControl() {
    window.location.href = './users-control.html'
}




function addAction() {
    var textoAcao = document.getElementById("texto-acao").value;

    if (!textoAcao) {
        alert("Insira uma mensagem no campo para enviar.");
        return;
    }


    document.getElementById("acao").innerHTML += '<div class="col-md-6">' +
        '<div>' +
        '<img class=" center img-circle img-32px pull-left" id="imgPerfil">' +
        '</div>' +
        '<div class="font-weight-bold">' +
        '<p id=""><small>' + operator[0] + '</small></p>' +
        '</div>' +
        '<div>' +
        '<p id="data-registro-ticket"><small>' + getDataNow() + '</small></p>' +
        '</div>' +
        '</div>' +
        '<div align="end" class="col-md-6">' +
        '<div class="font-weight-bold pull-left">' +
        '<p><small>Telefone:</small></p>' +
        '</div>' +
        '<div>' +
        '<p><small>' + operator[1] + '</small></p>' +
        '</div>' +
        '<div class="font-weight-bold pull-left">' +
        '<p><small>E-mail:</small></p>' +
        '</div>' +
        '<div>' +
        '<p><small>' + operator[2] + '</small></p>' +
        '</div>' +
        '</div>' +
        '<div class="">' +
        '<textarea disabled class="form-control textarea-mg-bottom textarea-fixed" rows="8" type="text">' + textoAcao + '</textarea>' +
        '</div>';

}

function addActionOperator() {
    var textoAcao = document.getElementById("texto-acao").value;

    if (!textoAcao) {
        alert("Insira uma mensagem no campo para enviar.");
        return;
    }

    document.getElementById("acao").innerHTML += '<div class="col-md-6">' +
        '<div>' +
        '<img class=" center img-circle img-32px pull-left" id="imgPerfil">' +
        '</div>' +
        '<div class="font-weight-bold">' +
        '<p id=""><small>' + userData[0] + '</small></p>' +
        '</div>' +
        '<div>' +
        '<p id="data-registro-ticket"><small>' + getDataNow() + '</small></p>' +
        '</div>' +
        '</div>' +
        '<div align="end" class="col-md-6">' +
        '<div class="font-weight-bold pull-left">' +
        '<p><small>Telefone:</small></p>' +
        '</div>' +
        '<div>' +
        '<p><small>' + userData[1] + '</small></p>' +
        '</div>' +
        '<div class="font-weight-bold pull-left">' +
        '<p><small>E-mail:</small></p>' +
        '</div>' +
        '<div>' +
        '<p><small>' + userData[5] + '</small></p>' +
        '</div>' +
        '</div>' +
        '<div class="">' +
        '<textarea disabled class="form-control textarea-mg-bottom textarea-fixed" rows="8" type="text">' + textoAcao + '</textarea>' +
        '</div>';

}

function getDataNow() {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hour = today.getHours();
    var min = today.getMinutes();
    var sec = today.getSeconds();

    if (hour < 10) hour = '0' + hour;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;


    today = dd + '/' + mm + '/' + yyyy + ' - ' + hour + ':' + min + ':' + sec;
    return today;
}

function addTempo() {
    var total = document.querySelector("#tempo-gasto-ticket-edit").value;
    var tempo = document.querySelector("#mais-tempo-gasto").value;
    var textSoma = total + " + " + tempo;
    var soma = eval(textSoma);
    document.querySelector("#mais-tempo-gasto").value = soma;
}

window.onload = function () {

    //NA DIREITA
    document.getElementById("nome-usuario").textContent = userData[0];
    document.getElementById("telefone-usuario").textContent = userData[1];
    document.getElementById("empresa-usuario").textContent = userData[2];
    document.getElementById("cidade-usuario").textContent = userData[3];
    document.getElementById("setor-usuario").textContent = userData[4];

    //NA ESQUERDA
    document.getElementById("nome-usuario1").textContent = userData[0];
    document.getElementById("telefone-usuario1").textContent = userData[1];
    document.getElementById("email-usuario1").textContent = userData[5];
    document.getElementById("data-registro-ticket1").textContent = ticketData[8];

    document.getElementById("num-ticket").textContent = ticketData[0];
    document.getElementById("tipo-ticket").textContent = ticketData[1];
    document.getElementById("nivel-ticket").textContent = ticketData[2];
    document.getElementById("operador-ticket").textContent = ticketData[4];
    document.getElementById("status-ticket").textContent = ticketData[5];
    document.getElementById("data-alvo-ticket").textContent = ticketData[6];
    document.getElementById("tempo-gasto-ticket").textContent = ticketData[7];
    document.getElementById("data-registro-ticket").textContent = ticketData[8];
    document.getElementById("data-fechamento-ticket").textContent = ticketData[9];
    //document.getElementById("mensagem-ticket").textContent = ticketData[11];

}