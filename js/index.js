const senhas = document.getElementById( 'senha2' );


function verificarSenhas() {
    const senha1 = document.dados.senha1.value;
    const senha2 = document.dados.senha2.value;

    if ( senha1 === senha2 ) {
        return true;
    } else {
        alert( "As senhas devem ser iguais" );
        return false;
    }
}

function verificarCampos() {
    const nome = document.dados.nome.value;
    const endereco = document.dados.endereco.value;
    const cidade = document.dados.cidade.value;
    const estado = document.dados.estado.value;
    const usuario = document.dados.user.value;
    const senha1 = document.dados.senha1.value;
    const senha2 = document.dados.senha2.value;
    if ( nome !== "" && endereco !== "" && cidade !== "" && estado !== "" && senha1 !== "" && senha2 !== "" && usuario !== "" ) {
        return true;
    } else {
        alert( "Todos os campos devem ser preenchidos!" );
        return false;
    }
}

function validacao() {
    if ( verificarCampos() && verificarSenhas() ) {
        document.getElementById("form").submit()
    } else {
        return false;
    }
}

senhas.addEventListener( 'blur', () => {
    verificarSenhas();
  } );
  

