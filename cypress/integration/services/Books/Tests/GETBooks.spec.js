// verbo/metodo - endpoint . motivo (request) . extensão(js)
/// <reference types="Cypress" />

import * as GETBooks from '../requests/GETBooks.request'

describe('GET Books', () => {
  it('Listar todos os livros', () => {
    GETBooks.allBooks().should((response) => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.not.null
      cy.log(response.status)
      cy.log(response.statusText)
    })
  }); 
});