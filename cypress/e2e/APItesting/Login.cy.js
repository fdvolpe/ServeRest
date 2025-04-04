import * as utils from "../../support/utils_api";

context("Login de usuario pela API", () => {
  it("Criar usuário e realizar o Login", () => {    

      utils.cadastroUsuarioAPI();         
      utils.loginUsuarioAPI();      
      utils.deletarUsuarioAPI();
  })
})