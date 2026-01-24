let usuario = {
    nome: 'Aryadne',
    excluir: function(){
        console.log('O usuário, ' + this.nome + ' foi excluido!')
    }
}

usuario.excluir()