let nomeUsuario = document.getElementById('nome_usuario');
let sobrenomeUsuario = document.getElementById('sobrenome_usuario');
let cpfUsuario = document.getElementById('cpf_usuario');


let recebeCampos = () => {
    if (nomeUsuario.value == '' || sobrenomeUsuario.value == '' || cpfUsuario.value == '') {
        console.log('Favor preencher todos os campos!');
        return false;
    } 
}

function validaCpf(cpf){
    if(cpf.length == 11) {
        return true;
    }
    return false;
}

let clicouBotao = () => {
    recebeCampos();
    let cpfValido = cpfUsuario.value;
    cpfValido = cpfValido.toString();
    let cpfConfirmado = validaCpf(cpfValido);
    if (cpfConfirmado){
        console.log('CPF Válido!');
        console.log('Dados enviados com sucesso!')  
    } else {
        console.log('CPF Inválido');
    }
}