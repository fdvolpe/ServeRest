import * as utils from "../../support/utils_api";

context("POST Login de usuario", () => {
  it("Criar usuário e realizar o Login", () => {    

      utils.cadastroUsuarioAPI();         
      utils.loginUsuarioAPI();      
      utils.deletarUsuarioAPI();
  })
})