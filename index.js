const botaoAmarelo = document.getElementById('botao-enviar');

const formulario = document.getElementById('formulario-assinatura');
botaoAmarelo.addEventListener( 'click', () => {
        // console.log('O botão foi clicado.');

        const campoEmail = document.getElementById('campo-email');
        // console.log(campoEmail.value);

        const conteudoCampoEmail = campoEmail.value;
        if( conteudoCampoEmail.indexOf('@') >= 1 ) {
            // E-mail ok.
            formulario.submit();
        } else {
            // E-mail não ok.
            alert('Confira o teu e-mail.');
        }
    } 
);
