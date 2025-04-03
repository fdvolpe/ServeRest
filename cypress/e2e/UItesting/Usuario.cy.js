import * as utils from "../../support/utils_ui";

describe('Novo cadastro de usuario e login', () => {

  it('Realizar cadastro e validar mensagem de sucesso', () => {
    utils.cadastroUsuario();
  })

  it('Efetuar login e validar acesso', () => {
    utils.login();
  })
})

