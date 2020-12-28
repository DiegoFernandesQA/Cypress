/// <reference types="cypress" />

// run: npx cypress open
// Chance -> generator data faker "Chancejs.com"
// como importar:
const { should } = require('chai');
let Chance = require('chance');
let chance = new Chance();


context('Cadastro', () => {
    it('Cadastro de usuário no site', () => {

        //routes
        // POST 200 /api/1/databases/userdetails/collections/newtable?
        // POST 200 /api/1/databases/userdetails/collections/usertable?
        // GET 200 /api/1/databases/userdetails/collections/newtable?
        cy.server()
        cy.route('POST', '**/api/1/databases/userdetails/collections/newtable?**').as('postNewtable');
        cy.route('POST', '**/api/1/databases/userdetails/collections/usertable?**').as('postUsertable');
        cy.route('GET', '**/api/1/databases/userdetails/collections/newtable?**' ).as('getNewtable');

        
        cy.visit('/Register.html')
        
        //inputs
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

        //cy.pause();

        cy.get('button#submitbtn').click();

        cy.wait('@postNewtable').then((resNewtable) => {
            //console.log(resNewtable.status)
            //cy.log(resNewtable.status)
            // chai
            expect(resNewtable.status).to.eq(200) 
        })


        cy.wait('@postUsertable').then((resUsertable) => {
            expect(resUsertable.status).to.eq(200)
        })

        cy.wait('@getNewtable').then((resNewtabletwo) => {
            expect(resNewtabletwo.status).to.eq(200)
        })

        cy.url().should('contain', 'WebTable');

    });
});