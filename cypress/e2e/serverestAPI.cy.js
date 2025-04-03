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
        Cypress.env('token', responseLogin.body.authorization);      
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

context("GET consultar produto específico", () => {
  it("Consultar produto pelo nome", () => {
    
    //consultar todos os produtos
    cy.request("GET", "https://serverest.dev/produtos").then((responseGetAll) => {
      expect(responseGetAll.status).to.eq(200)        
      expect(responseGetAll.body.produtos[0].nome).to.not.be.null
      expect(responseGetAll.body.produtos[0].descricao).to.not.be.null
      expect(responseGetAll.body.produtos[0].preco).to.not.be.null
      expect(responseGetAll.body.produtos[0].quantidade).to.not.be.null
      expect(responseGetAll.body.produtos[0]._id).to.not.be.null

    //características do produto
    var nomeProduto = responseGetAll.body.produtos[0].nome;
    var descicaoProduto = responseGetAll.body.produtos[0].descricao;
    var precoProduto = responseGetAll.body.produtos[0].preco; 
    var quantidadeProduto = responseGetAll.body.produtos[0].quantidade;
    
    //consultar pelo nome
    cy.request("GET", "https://serverest.dev/produtos?nome="+nomeProduto).then((responseGet) => {
      expect(responseGet.status).to.eq(200)        
      expect(responseGet.body.produtos[0].nome).to.eq(nomeProduto)
      expect(responseGet.body.produtos[0].descricao).to.eq(descicaoProduto)
      expect(responseGet.body.produtos[0].preco).to.eq(precoProduto)
      expect(responseGet.body.produtos[0].quantidade).to.eq(quantidadeProduto)
      expect(responseGet.body.produtos[0]._id).to.not.be.null
    })
    })  
  })
})

context("POST criar produto e consultar pelo id", () => {
  it("Criar produto e consultar pelo id", () => {
    
    //características do produto
    var nomeProduto = "Dell Pro 16 Plus " + Math.random().toString(36).substring(2, 6);
    var descicaoProduto = "laptop";
    var precoProduto = 10000;
    var quantidadeProduto = 150;

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
      Cypress.env('token', responseLogin.body.authorization); 
      
      //criar produto
      cy.request({
        method: "POST",
        url: "https://serverest.dev/produtos",
        headers: {
          "Authorization": Cypress.env('token')
        },
        body: {
          "nome": nomeProduto,        
          "preco": precoProduto,
          "descricao": descicaoProduto,
          "quantidade": quantidadeProduto
        }}
      ).then((response) => {
        expect(response.status).to.eq(201)
        expect(response.body.message).to.eq("Cadastro realizado com sucesso")
        expect(response.body._id).to.not.be.null
        Cypress.env('idProduto', response.body._id);

      //consultar produto criado pelo id
      cy.request("GET", "https://serverest.dev/produtos/"+response.body._id).then((responseGet) => {
        expect(responseGet.status).to.eq(200)
        expect(responseGet.body.nome).to.eq(nomeProduto)
        expect(responseGet.body.descricao).to.eq(descicaoProduto)
        expect(responseGet.body.preco).to.eq(precoProduto)
        expect(responseGet.body.quantidade).to.eq(quantidadeProduto)
        expect(responseGet.body._id).to.not.be.null
      })
    })
    })
  })
})