export class CheckoutStepOnePage {
    private firstName = '[data-test="firstName"]'
    private lastName = '[data-test="lastName"]'
    private postalCode = '[data-test="postalCode"]'
    private continueBtn = 'input[type="submit"][value="CONTINUE"]'
    private errorMessage = "[data-test='error']"
  
    public fillForm(first: string, last: string, zip: string) {
      cy.get(this.firstName).clear().type(first)
      cy.get(this.lastName).clear().type(last)
      cy.get(this.postalCode).clear().type(zip)
    }
  
    public fillFirstName(value: string) {
      cy.get(this.firstName).clear().type(value)
    }
  
    public fillLastName(value: string) {
      cy.get(this.lastName).clear().type(value)
    }
  
    public fillPostalCode(value: string) {
      cy.get(this.postalCode).clear().type(value)
    }
  
    public continue() {
      cy.get(this.continueBtn).click()
    }
  
    public getError() {
      return cy.get(this.errorMessage)
    }
  }
  