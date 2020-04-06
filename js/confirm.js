function lerParams() {
    const params = new URLSearchParams(document.location.search.substring(1));
    const nome = params.get("nome"); 
    const endereco = params.get("endereco");
    const cidade = params.get("cidade");
    const estado = params.get("estado");
    const user = params.get("user");
    const senha = params.get("senha2");
    
    document.getElementById("c_nome").innerHTML = nome;
    document.getElementById("c_endereco").innerHTML = endereco;
    document.getElementById("c_cidade").innerHTML = cidade;
    document.getElementById("c_estado").innerHTML = estado;
    document.getElementById("c_user").innerHTML = user;
    document.getElementById("c_senha").innerHTML = senha;
    
}
   