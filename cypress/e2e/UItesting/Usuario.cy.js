describe('Novo cadastro de usuario', () => {
  it('Realizar cadastro', () => {
    var user = "User" + Math.random().toString(36).substring(2, 6);
    var email = user + "@gmail.com";
    var password = "testuser";
    Cypress.env('user', user);
    Cypress.env('email', email);
    Cypress.env('password', password);
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="cadastrar"]').click()
    cy.get('[data-testid="nome"]').type(Cypress.env('user'))
    cy.get('[data-testid="email"]').type(Cypress.env('email'))
    cy.get('[data-testid="password"]').type(Cypress.env('password'))
    cy.get('[data-testid="cadastrar"]').click()
  })
})

describe('Login de usuario', () => {
  it('efetuar login', () => {
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="email"]').type(Cypress.env('email'))
    cy.get('[data-testid="senha"]').type(Cypress.env('password'))
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="botaoPesquisar"]')
        .should('be.visible')
  })
})

