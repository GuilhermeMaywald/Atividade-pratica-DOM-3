
let clicouBotao = () => {
    let nomeUsuario = document.getElementById('nome_usuario');
    let sobrenomeUsuario = document.getElementById('sobrenome_usuario');
    let cpfUsuario = document.getElementById('cpf_usuario');

    if(nomeUsuario.value == '' || sobrenomeUsuario.value == '' || cpfUsuario.value == '') {
        alert('Favor preencher todos os campos!');
        return false;
    } else {
        document.getElementsByTagName('input');
        return true;
    }
}
