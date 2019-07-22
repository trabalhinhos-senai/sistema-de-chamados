var idSelecionado;

window.onload = function() {

    var tabela = document.querySelector('#table');

    for (var i = 1; i < tabela.rows.length; i++) {
        tabela.rows[i].onclick = function() {
            idSelecionado = this.cells[0].innerHTML;

            // remove o background da linha selecionada
            if (typeof index !== "undefined") {
                tabela.rows[index].classList.toggle("selecionado");
            }
            console.log(typeof index);
            // pega o index da linha selecionada
            index = this.rowIndex;
            // add a class "selecionado" na linha
            this.classList.toggle("selecionado");
            console.log(typeof index);
        };
    }

}

function editarChamado() {
    alert(idSelecionado);

    if (idSelecionado == "2019-000001") {
        viewChamado();
    }
}

function viewChamado() {
    window.location.href = './operator-view-ticket.html'
}