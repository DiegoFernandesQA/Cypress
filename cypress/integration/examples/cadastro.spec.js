/// <reference types="cypress" />

context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {
        cy.visit('/Register.html')
        
        //inputs
        cy.get('input[placeholder="First Name"]').type('Diego')
        cy.get('input[placeholder="Last Name"]').type('Fernandes')
        cy.get('textarea.ng-pristine').type('R. Bartolomeu não sou eu, nº7070, CEP: 00000-000 ')
        cy.get('input.ng-valid-email').type('diego.fernandes@terra.com')
        cy.get('input[type="tel"]').type('11979943256')
        
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

    });
});