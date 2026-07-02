describe('Login', () => {
  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Arrange - Preparação para o teste
    cy.visit('http://localhost:4000/')

    // Act - Ações para executar o teste
    cy.get('#username').click().type('julio.lima')
    cy.get('#senha').click().type('123456')
    cy.get('#login-section > .btn').click()

    // Assert - Asserções
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
     //h4 é o elemento do título da página após login bem sucedido. Realizar Transfêrencia é o título.
     //procure um h4 que tenha um texto "realizar transferencia", quando encontrar, ele deve estar visível
  })
})