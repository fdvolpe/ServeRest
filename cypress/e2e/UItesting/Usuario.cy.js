import { cadastroUsuario, login } from "../../support/utils";

describe('Novo cadastro de usuario e login', () => {

  it('Realizar cadastro', () => {
    cadastroUsuario();
  })

  it('efetuar login', () => {
    login();
  })
})

