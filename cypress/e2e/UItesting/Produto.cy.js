describe('Pesquisar produto', () => {
    it('Pesquisa um produto e valida se ele foi encontrado', () => {
      cy.visit('https://front.serverest.dev/')
      cy.get('[data-testid="email"]').type('test.flavio@gmail.com')
      cy.get('[data-testid="senha"]').type('testflavio')
      cy.get('[data-testid="entrar"]').click()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas')
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.contains('Samsung 60 polegadas').should('be.visible')
    })
  })
  
  describe('Adicionar produto a lista', () => {
    it('Adiciona um produto a lista e valida detalhes do produto', () => {
      cy.visit('https://front.serverest.dev/')
      cy.get('[data-testid="email"]').type('test.flavio@gmail.com')
      cy.get('[data-testid="senha"]').type('testflavio')
      cy.get('[data-testid="entrar"]').click()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas')
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.contains('Samsung 60 polegadas').should('be.visible')
      cy.get('[data-testid="adicionarNaLista"]').click()
      cy.get('[data-testid="adicionar carrinho"]').should('be.visible')    
      cy.contains('Samsung 60 polegadas').should('be.visible')
      cy.contains('Preço R$5240').should('be.visible')
      cy.get('[data-testid="shopping-cart-product-quantity"]').contains('Total: 1')
    })
  })
  
  describe('Limpar a lista', () => {
    it('Limpa a lista e valida se ela esta vazia', () => {
      cy.visit('https://front.serverest.dev/')
      cy.get('[data-testid="email"]').type('test.flavio@gmail.com')
      cy.get('[data-testid="senha"]').type('testflavio')
      cy.get('[data-testid="entrar"]').click()
      cy.get('[data-testid="pesquisar"]').type('Samsung 60 polegadas')
      cy.get('[data-testid="botaoPesquisar"]').click()
      cy.contains('Samsung 60 polegadas').should('be.visible')
      cy.get('[data-testid="adicionarNaLista"]').click()
      cy.get('[data-testid="adicionar carrinho"]').should('be.visible')
      cy.contains('Samsung 60 polegadas').should('be.visible')
      cy.get('[data-testid="limparLista"]').click()
      cy.get('[data-testid="shopping-cart-empty-message"]').contains('Seu carrinho está vazio')
    })
  })

  

  