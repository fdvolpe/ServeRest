import * as utils from "../../support/utils_ui";

describe('Operações sobre um produto', () => {
    it('Pesquisa um produto e valida se ele foi encontrado', () => {
        utils.cadastroUsuario();
        utils.login();
        utils.pesquisarProduto();
    })
 
    it('Adiciona um produto a lista e valida detalhes do produto', () => {
        utils.cadastroUsuario();
        utils.login();
        utils.pesquisarProduto();        
        utils.adicionarLista();
    })

    it('Limpa a lista e valida se ela esta vazia', () => {
      
        utils.cadastroUsuario();
        utils.login();
        utils.pesquisarProduto();        
        utils.adicionarLista();
        utils.limparLista();
    })
  })

  

  