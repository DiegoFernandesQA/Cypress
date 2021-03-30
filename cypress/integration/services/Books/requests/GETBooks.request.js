// verbo/metodo - endpoint . motivo (request) . extensão(js)

/// <reference types="Cypress" />

function requestBooks() {
  // cy.rquest - client http
  return cy.request({
    method: 'GET',
    url: 'Books',
    failOnStatusCode: false,
  })
}

export { allBooks }