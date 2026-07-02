describe('Login', () => {
  beforeEach(() => {
    // Arrange - Preparação para o teste
    cy.visit('http://localhost:4000/')
    cy.screenshot('apos-visitar-pagina')
  })

  it('Login com dados válidos deve permitir entrada no sistema', () => {
    // Act - Ações para executar o teste
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.valida.usuario)
      cy.get('#senha').click().type(credenciais.valida.senha)
    })
    cy.screenshot('apos-preencher-dados-validos')
    cy.contains('button', 'Entrar').click()
    cy.screenshot('apos-clicar-no-botao-entrar')


    // Assert - Asserções
    cy.contains('h4', 'Realizar Transferência').should('be.visible')
     //h4 é o elemento do título da página após login bem sucedido. Realizar Transfêrencia é o título.
     //procure um h4 que tenha um texto "realizar transferencia", quando encontrar, ele deve estar visível
  })

    it('Login com dados inválidos deve apresentar mensagem de erro', () => {
    // Act - Ações para executar o teste
    cy.fixture('credenciais').then(credenciais => {
      cy.get('#username').click().type(credenciais.invalida.usuario)
      cy.get('#senha').click().type(credenciais.invalida.senha)
    })
    cy.screenshot('apos-preencher-dados-invalidos')
    cy.get('#login-section > .btn').click()

    // Assert - Asserções
    cy.get('.toast').should('have.text', 'Erro no login. Tente novamente.')
  })
})