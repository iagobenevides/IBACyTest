export class CartPage {
    protected path = "/cart.html"
  
    private item = ".cart_item"
    private name = ".inventory_item_name"
    private price = ".inventory_item_price"
    private quantity = ".cart_quantity"
    private removeBtn = "button.cart_button"
    private continueShoppingBtn = "a:contains('Continue Shopping')"
    private checkoutBtn = "a:contains('CHECKOUT')"
  
    visit() {
      cy.visit(this.path)
    }
  
    items() {
      return cy.get(this.item)
    }
  
    itemByName(productName: string) {
      return cy.contains(this.item, productName)
    }
  
    removeByName(productName: string) {
      this.itemByName(productName).find(this.removeBtn).click()
    }
  
    getName($el: JQuery<HTMLElement>): string {
      return $el.find(this.name).text().trim()
    }
  
    getPrice($el: JQuery<HTMLElement>): string {
      return $el.find(this.price).text().trim()
    }
  
    getQuantity($el: JQuery<HTMLElement>): string {
      return $el.find(this.quantity).text().trim()
    }
  
    continueShopping() {
      cy.get(this.continueShoppingBtn).click()
    }
  
    checkout() {
      cy.get(this.checkoutBtn).click()
    }
  }
  