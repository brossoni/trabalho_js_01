function verificarSenhas(senha, confirma_senha){
    if document.dados.senha.value === document.dados.confirma_senha.value{
        --abrenovajanelacomdados
    }else{
        alert("A senhas devem ser iguais")
        document.dados.confirma_senha.focus();
    }
}

function verificaCampos(){
    if document.dados.nome.value ==""{
        alert("Preencha o campo [Nome]");
        document.dados.nome.value.focus();
    }else{
        return false;
    }
    if document.dados.endereco.value ==""{
        alert("Prencha o campo [Endereço]");
        document.dados.endereco.value.focus();
    }else{
        return false
    }
    if document.dados.cidade.value ==""{
        alert("Preencha o campo [Cidade]");
        document.dados.cidade.focus();
    }else{
        return false;
    }
    if document.dados.user.value == ""{
        alert("Preencha o campo [Nome de Usuário]");
        document.dados.user.focus();
    }
    if document.dados.senha.value =="" || document.dados.confirma_senha.value ==""{
        alert("Preencha os campos [Senha] e [Confirme a senha]")
        document.dados.senha.focus()
    }
}

    function verificaDados(){
    verificaCampos();
    verificarSenhas()
}
