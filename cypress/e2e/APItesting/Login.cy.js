context("POST Login de usuario", () => {
  it("Criar usuário e realizar o Login", () => {    

      //criar usuário admin
      var user = "user"+Math.random().toString(36).substring(2, 6);
      var userEmail = user+"@gmail.com";
      var userPassword = "test"+Math.random().toString(36).substring(2, 6);
      cy.log(user)
      Cypress.env('user', user);
      Cypress.env('userEmail', userEmail);
      Cypress.env('userPassword', userPassword);
      cy.request("POST", "https://serverest.dev/usuarios",
        {
          nome: user,
          email: userEmail,
          password: userPassword,
          administrador: "true"
        }
      ).then((responseCreate) => {
        expect(responseCreate.status).to.eq(201)
         })          

      //logar usuário
      cy.request("POST", "https://serverest.dev/login",
        {
          email: Cypress.env('userEmail'),
          password: Cypress.env('userPassword')
        }
      ).then((responseLogin) => {
        expect(responseLogin.status).to.eq(200)
        expect(responseLogin.body.message).to.eq("Login realizado com sucesso")
        expect(responseLogin.body.authorization).to.not.be.null              
      })

      //deletar usuário
      cy.request("GET", "https://serverest.dev/usuarios?nome="+Cypress.env('user')).then((responseGet) => {
        expect(responseGet.status).to.eq(200)
        cy.request("DELETE", "https://serverest.dev/usuarios/"+responseGet.body.usuarios[0]._id).then((responseDelete) => {
          expect(responseDelete.status).to.eq(200)
          expect(responseDelete.body.message).to.eq("Registro excluído com sucesso")
        })
    }) 
  })
})