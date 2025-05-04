$(document).ready(function () {
    $('form').on('submit', function (event) {
        event.preventDefault();
        const $mensagemSucesso = $('#mensagem-sucesso');

        setTimeout(function() {
            $mensagemSucesso.removeClass('d-none');
            setTimeout(function() {
                $mensagemSucesso.addClass('d-none');
            }, 3000);
        }, 1500);
    });    
});