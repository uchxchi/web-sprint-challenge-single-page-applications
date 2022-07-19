describe('Pizza App', () => {
 
    beforeEach(() => {
       cy.visit('http://localhost:3001/pizza')
  })
    
   

  const textInput = () =>  cy.get('input[name="text"]')
  const submitBtn = () => cy.get('button[id="order-button"]')
  const checkbox = () => cy.get('[type="checkbox"]')

  describe('primary checks',() => {
    it('if the element exists', () => {
      textInput().should('exist')
      submitBtn().should('exist')


    })

  })

  describe('filling out inputs, checkboxes and submit btn', () => {
       
        it('can type inside the inputs', () => {
            textInput()
            .should('have.value', '')
            .type('I can type!')
            .should('have.value', 'I can type!')
        
})

        it('submits the form', () => {
          cy.contains('submit me!').should('not.exist')
          textInput().type('submit me!')
          submitBtn().click()
          cy.contains('submit me!').should('exist')
          

        })

        it('can select multiple toppings', () => {
          checkbox()
          .check()
        })
  })

  





})