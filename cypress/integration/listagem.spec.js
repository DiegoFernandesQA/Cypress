/// <reference types="cypress" />

context("Listagem", () => {
  it("Listagem sem registro", () => {
    // controle da listagem via route Api
    //('GET', '**/api/1/databases/userdetails/collections/newtable?**' ).as('getNewtable')
    cy.server();
    cy.route({
      method: "get",
      url: "**/api/1/databases/userdetails/collections/newtable?**",
      status: 200,
      response: [], //para que retorne uma lista vazia
    }).as("getNewtable");

    cy.get("div[role=row]").should("have.length", 1); //verificar a quantidade de elemento

    cy.visit("WebTable.html");
  });

  it.only("Listagem com apenas um registro", () => {
    cy.server();
    cy.route({
      method: "get",
      url: "**/api/1/databases/userdetails/collections/newtable?**",
      status: 200,
      response: "fx:spec_table", //fx = fiture:arquivo OBS: não precisa da extensão
    }).as("getNewTable2");

    cy.visit("WebTable.html");

    // // asserção - interagindo com linhas e colunas

    cy.get("div[role=row] div[role=gridcell]")
      .eq(4)
      .find("div")
      .as("gridCellPhone");
    cy.get("@gridCellPhone").should("contain.text", "9790028300");
    // 1 .first()
    // 2
    // 3
    // 4 .eq() -> quarta posição
    // 5 .last()
  });
});
