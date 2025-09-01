export class HeaderBarComponents {
  private burgerButton = "button:contains('Open Menu')"
  private cartLink = "#shopping_cart_container .shopping_cart_link"

  public openMenu() {
    // o botão possui opacidade 0, por isso é necessário usar parent()
    cy.get(this.burgerButton).parent().should("be.visible").click()
      
  }

  public openCart() {
    cy.get(this.cartLink).should("be.visible").click()
  }
}
