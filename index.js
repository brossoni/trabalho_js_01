const senhaV = document.getElementById( 'confirma_senha' );
const button = document.getElementById( 'cadastrar' );

function verificarSenhas(){
    if (document.dados.senha.value === document.dados.confirma_senha.value){
        --abrenovajanelacomdados
    }else{
        alert("A senhas devem ser iguais");
        document.dados.confirma_senha.focus();
    }
}

// function verificaCampos(){
//     if (document.dados.nome.value == ""){
//         alert("Preencha o campo [Nome]");
//         document.dados.nome.focus();
//     }else{
//         return false;
//     }
//     if (document.dados.endereco.value == "") {
//         alert("Prencha o campo [Endereço]");
//         document.dados.endereco.focus();
//     }else{
//         return false
//     }
//     if (document.dados.cidade.value == "") {
//         alert("Preencha o campo [Cidade]");
//         document.dados.cidade.focus();
//     }else{
//         return false;
//     }
//     if (document.dados.user.value == ""){
//         alert("Preencha o campo [Nome de Usuário]");
//         document.dados.user.focus();
//     }
//     if (document.dados.senha.value == "" || document.dados.confirma_senha.value == ""){
//         alert("Preencha os campos [Senha] e [Confirme a senha]")
//         document.dados.senha.focus()
//     }
// }

// function verificaDados(){
//     verificaCampos();
    
// }


function verificaCampos() {
    if ( document.dados.nome !== "" ){
        return false
    } else{
        alert("Preencha o campo [Nome]");
    }
}

senhaV.addEventListener( 'blur', () => {
    verificarSenhas();
  } );
  
button.addEventListener( 'click', () => {
    verificaCampos();
  } );
