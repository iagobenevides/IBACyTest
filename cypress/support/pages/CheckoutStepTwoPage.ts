export class CheckoutStepTwoPage {
    private itemContainer = ".cart_item"
    private itemName = ".inventory_item_name"
    private itemPrice = ".inventory_item_price"
    private itemQty = ".summary_quantity"
    private finishBtn = ".btn_action.cart_button"
  
    public items() {
      return cy.get(this.itemContainer)
    }
  
    public getName($el: JQuery<HTMLElement>): string {
      return $el.find(this.itemName).text().trim()
    }
  
    public getPrice($el: JQuery<HTMLElement>): string {
      return $el.find(this.itemPrice).text().trim()
    }
  
    public getQuantity($el: JQuery<HTMLElement>): string {
      return $el.find(this.itemQty).text().trim()
    }
  
    public finish() {
      cy.get(this.finishBtn).click()
    }
  }
  