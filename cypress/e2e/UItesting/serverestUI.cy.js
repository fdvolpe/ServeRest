describe('Novo cadastro de usuario', () => {
  it('passes', () => {
    var user = Math.random().toString(36).substring(2, 6);
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type('User' + user)
    cy.get('[data-testid="email"]').type('test.user' + user + '@gmail.com')
    cy.get('[data-testid="password"]').type('testuser')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="botaoPesquisar"]')
        .should('be.visible')
  })
})

describe('Login de usuario', () => {
  it('passes', () => {
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="email"]').type('test.flavio@gmail.com')
    cy.get('[data-testid="senha"]').type('testflavio')
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="botaoPesquisar"]')
        .should('be.visible')
  })
})

describe('Pesquisar produto', () => {
  it('passes', () => {
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
  it('passes', () => {
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
  it('passes', () => {
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