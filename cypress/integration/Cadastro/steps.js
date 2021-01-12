/// <reference types="cypress" />

let Chance = require('chance');
let chance = new Chance();

When(/^informar meus dados$/, () => {
    cy.get('input[placeholder="First Name"]').type(chance.first())
    cy.get('input[placeholder="Last Name"]').type(chance.last())
    cy.get('textarea.ng-pristine').type(chance.address())
    cy.get('input.ng-valid-email').type(chance.email())
    cy.get('input[type="tel"]').type(chance.phone({formatted: false}))
    
    // checks
    cy.get('input[value="Male"]').check();
    cy.get('input#checkbox1').check();
    cy.get('input[type=checkbox]').check('Movies');
    cy.get('input[type=checkbox]').check('Hockey');
    
    //selects
    // cy.get('a.ui-corner-all').select('Arabic');
    cy.get('select#Skills').select('APIs');
    cy.get('select#countries').select('Argentina');
    cy.get('select#country').select('Australia', {force: true});
    cy.get('select#yearbox').select('1994');
    cy.get('select[ng-model="monthbox"]').select('May');
    cy.get('select#daybox').select('27');
    cy.get('input#firstpassword').type('Arima@777');
    cy.get('input#secondpassword').type('Arima@777');
    
    // file Upload
    cy.get('input#imagesrc').attachFile('ps5s.jpg');

	
});

When(/^salvar$/, () => {
	cy.get('button#submitbtn').click();
});

Then(/^devo ser cadastrado com sucesso$/, () => {
	cy.wait('@postUsertable').then((resUsertable) => {
        expect(resUsertable.status).to.eq(200)
    })

    cy.wait('@getNewtable').then((resNewtabletwo) => {
        expect(resNewtabletwo.status).to.eq(200)
    })

    cy.url().should('contain', 'WebTable');
});
