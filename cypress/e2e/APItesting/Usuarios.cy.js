context("GET usuarios", () => {
    it("Receber todos os usuários", () => {
      cy.request("GET", "https://serverest.dev/usuarios").then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body.usuarios).length.to.be.greaterThan(1)
      })
    })
  })
  
  context("POST usuarios", () => {
    it("Cadastrar usuário", () => {
      var user = "user"+Math.random().toString(36).substring(2, 6);
      cy.log(user)
      Cypress.env('user', user);
      cy.request("POST", "https://serverest.dev/usuarios",
        {
          nome: user,
          email: user+"@gmail.com",
          password: "teste",
          administrador: "true"
        }
      ).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq("Cadastro realizado com sucesso") })      
    })
  })