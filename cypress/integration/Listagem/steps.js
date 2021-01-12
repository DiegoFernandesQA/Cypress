/// <reference types="cypress" />


Given(/^que o site não possui registros$/, () => {
    cy.server()
    cy.route({
        method: 'get',
        url: '**/api/1/databases/userdetails/collections/newtable?**',
        status: 200,
        response: [] //para que retorne uma lista vazia
    }).as('getNewtable');
    cy.get('div[role=row]').should('have.length', 1); //verificar a quantidade de elemento
    cy.visit('WebTable.html');
	
});

When(/^acessar a listagem$/, () => {
	
});

Then(/^deve visualizar a listagem vazia$/, () => {
	
});



Given(/^que o site possui registros$/, () => {
	
});

Then(/^deve visualizar a listagem$/, () => {
	
});
