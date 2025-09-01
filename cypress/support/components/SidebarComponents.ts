export class SidebarComponents {
  private allItemsLink = "#inventory_sidebar_link"
  private aboutLink = "#about_sidebar_link"
  private logoutLink = "#logout_sidebar_link"
  private resetAppLink = "#reset_sidebar_link"
  private closeButton = "button:contains('Close Menu')"

  public clickAllItems() {
    cy.get(this.allItemsLink).should("be.visible").click()
  }

  public clickAbout() {
    cy.get(this.aboutLink).should("be.visible").click()
  }

  public clickLogout() {
    cy.get(this.logoutLink).should("be.visible").click()
  }

  public clickResetAppState() {
    cy.get(this.resetAppLink).should("be.visible").click()
  }

  public closeMenu() {
    cy.get(this.closeButton).parent().should("be.visible").click()
  }
}
