import * as utils from "../../support/utils_api";

context("Operações de usuário", () => {
    it("Receber todos os usuários", () => {
        utils.pesquisarTodosUsuariosAPI();
    })

    it("Cadastrar usuário comum", () => {
        utils.cadastroUsuarioAPI();     
    })

    it("Cadastrar usuário admin", () => {
        utils.cadastroUsuarioAdminAPI();     
      })

    it("Deletar usuário", () => {
        utils.deletarUsuarioAPI();     
      })
  })