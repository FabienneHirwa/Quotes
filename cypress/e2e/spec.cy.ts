import cypressConfig from "cypress.config"


describe('Adding quote', ()=>{
  it('Should add quote and autor', ()=>{
    cy.visit('http://localhost:4200/')
    cy.get('#name')
    .type('work hard')
    cy.get('#author')
    .type('12345')
    cy.get('#complete')
    .type('2020-10-10')
    cy.get('.btn-success')
    .contains('Submit')
    .click()
  
  })
}

)