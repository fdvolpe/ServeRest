describe('Pesquisar produto', () => {
    it('Pesquisa um produto e valida se ele foi encontrado', () => {
        var user = "User" + Math.random().toString(36).substring(2, 6);
        var email = user + "@gmail.com";
        var password = "testuser";       
        
        //criar usuário
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type(user)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(password)
        cy.get('[data-testid="cadastrar"]').click()
        
        //loga e pesquisa
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="senha"]').type(password)
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="pesquisar"]').type('Ifone 8')
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.contains('Ifone 8').should('be.visible')
    })
  })
  
  describe('Adicionar produto a lista', () => {
    it('Adiciona um produto a lista e valida detalhes do produto', () => {
      
        var user = "User" + Math.random().toString(36).substring(2, 6);
        var email = user + "@gmail.com";
        var password = "testuser";       
        
        //criar usuário
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type(user)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(password)
        cy.get('[data-testid="cadastrar"]').click()
        
        //loga e adiciona a lista
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="senha"]').type(password)
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="pesquisar"]').type('Ifone 8')
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.contains('Ifone 8').should('be.visible')
        cy.get('[data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').should('be.visible')    
        cy.contains('Ifone 8').should('be.visible')
        cy.contains('Preço ').should('be.visible')
        cy.get('[data-testid="shopping-cart-product-quantity"]').contains('Total: 1')
    })
  })
  
  describe('Limpar a lista', () => {
    it('Limpa a lista e valida se ela esta vazia', () => {
      
        var user = "User" + Math.random().toString(36).substring(2, 6);
        var email = user + "@gmail.com";
        var password = "testuser";       
    
        //criar usuário
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('[data-testid="nome"]').type(user)
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="password"]').type(password)
        cy.get('[data-testid="cadastrar"]').click()
       
        //loga, adiciona a lista e limpa
        cy.visit('https://front.serverest.dev/')
        cy.get('[data-testid="email"]').type(email)
        cy.get('[data-testid="senha"]').type(password)
        cy.get('[data-testid="entrar"]').click()
        cy.get('[data-testid="pesquisar"]').type('Ifone 8')
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.contains('Ifone 8').should('be.visible')
        cy.get('[data-testid="adicionarNaLista"]').click()
        cy.get('[data-testid="adicionar carrinho"]').should('be.visible')
        cy.contains('Ifone 8').should('be.visible')
        cy.get('[data-testid="limparLista"]').click()
        cy.get('[data-testid="shopping-cart-empty-message"]').contains('Seu carrinho está vazio')
    })
  })

  

  