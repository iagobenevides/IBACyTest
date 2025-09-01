export class CheckoutCompletePage {
    private container = "#checkout_complete_container"
    private header = ".complete-header"
    private message = ".complete-text"
    private image = ".pony_express"
  
    getContainer() {
      return cy.get(this.container)
    }
  
    getHeader() {
      return cy.get(this.header)
    }
  
    getMessage() {
      return cy.get(this.message)
    }
  
    getImage() {
      return cy.get(this.image)
    }
  }
  