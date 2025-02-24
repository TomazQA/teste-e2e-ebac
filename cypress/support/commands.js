Cypress.Commands.add('login', (usuario, senha) => {
    cy.get('#username').type(usuario)
    cy.get('#password').type(senha, { log: false })
    cy.get('.woocommerce-form > .button').click()
});

/*Cypress.Commands.add('nome', (nome, sobrenome) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
})*/

Cypress.Commands.add('infos', (nome, sobrenome, pais, endereço, cidade, estado, cep, email) => {
    cy.get('#billing_first_name').clear().type(nome)
    cy.get('#billing_last_name').clear().type(sobrenome)
    cy.get('#select2-billing_country-container').click()
    cy.get('#select2-billing_country-container').type(pais)
    cy.get('.select2-results__option').click()
    cy.get('#billing_address_1').clear().type(endereço)
    cy.get('#billing_city').clear().type(cidade)
    cy.get('#select2-billing_state-container').click()
    cy.get('#select2-billing_state-container').type(estado)
    cy.get('.select2-results__option').click()
    cy.get('#billing_postcode').clear().type(cep)
    cy.get('#billing_email').clear().type(email)
})
