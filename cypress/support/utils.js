export function cadastroUsuario() {
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
    cy.contains('Cadastro realizado com sucesso').should('be.visible')
  }

export function login() {
    cy.visit('https://front.serverest.dev/')
    cy.get('[data-testid="email"]').type(Cypress.env('email'))
    cy.get('[data-testid="senha"]').type(Cypress.env('password'))
    cy.get('[data-testid="entrar"]').click()
    cy.get('[data-testid="botaoPesquisar"]')
        .should('be.visible')
  }

  export function pesquisarProduto() {
    cy.get('[data-testid="pesquisar"]').type('Ifone 8')
        cy.get('[data-testid="botaoPesquisar"]').click()
        cy.contains('Ifone 8').should('be.visible')
  }