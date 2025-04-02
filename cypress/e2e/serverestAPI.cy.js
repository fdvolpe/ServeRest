context("POST Login de usuario", () => {
  it("Login de usuario", () => {
    cy.request("POST", "https://serverest.dev/login",
      {
        email: "test.flavio@gmail.com",
        password: "testflavio"
      }
    ).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.message).to.eq("Login realizado com sucesso")
      expect(response.body.authorization).to.not.be.null
    })
    })
})

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

context("DELETE usuarios", () => {
  it("Deletar usuário", () => {
    cy.request("GET", "https://serverest.dev/usuarios?nome="+Cypress.env('user')).then((responseGet) => {
      expect(responseGet.status).to.eq(200)
      cy.request("DELETE", "https://serverest.dev/usuarios/"+responseGet.body.usuarios[0]._id).then((responseDelete) => {
        expect(responseDelete.status).to.eq(200)
        expect(responseDelete.body.message).to.eq("Registro excluído com sucesso")
      })
    }) 
  })    
})

context("GET consultar produto específico", () => {
  it("Consultar produto pelo nome", () => {
    var nomeProduto = "Logitech BR Vertical";
    var descicaoProduto = "Mouse";
    var precoProduto = 470;
    var quantidadeProduto = 381;
    //consultar pelo nome
    cy.request("GET", "https://serverest.dev/produtos?nome="+nomeProduto).then((responseGet) => {
      expect(responseGet.status).to.eq(200)  
      expect(responseGet.body.quantidade).to.eq(1)
      expect(responseGet.body.produtos[0].nome).to.eq(nomeProduto)
      expect(responseGet.body.produtos[0].descricao).to.eq(descicaoProduto)
      expect(responseGet.body.produtos[0].preco).to.eq(precoProduto)
      expect(responseGet.body.produtos[0].quantidade).to.eq(quantidadeProduto)
      expect(responseGet.body.produtos[0]._id).to.not.be.null
    })
  })
})