export class ProductPage {
  protected path = "/inventory.html"

  private list = ".inventory_list"
  private card = ".inventory_item"
  private name = ".inventory_item_name"
  private price = ".inventory_item_price"
  private image = "img.inventory_item_img"
  private addBtn = "button.btn_primary.btn_inventory"
  private removeBtn = "button.btn_secondary.btn_inventory"
  private sortSelect = ".product_sort_container"
  private cartBadgeSel = ".shopping_cart_badge"

  public visit() {
    cy.visit(this.path)
  }

  public cards() {
    return cy.get(this.card)
  }

  public cardByName(productName: string) {
    return cy.contains(this.name, productName).parents(this.card)
  }

  public getName($el: JQuery<HTMLElement>) {
    return $el.find(this.name).text().trim()
  }

  public getPrice($el: JQuery<HTMLElement>) {
    return $el.find(this.price).text().trim()
  }

  public getImageFilename($el: JQuery<HTMLElement>) {
    const src = $el.find(this.image).attr('src')
    return src?.split('/').pop()
  }

  public addToCartByName(productName: string) {
    this.cardByName(productName).find(this.addBtn).click()
  }

  public removeFromCartByName(productName: string) {
    this.cardByName(productName).find(this.removeBtn).click()
  }

  public openDetailsByName(productName: string) {
    cy.contains(this.name, productName).click()
  }

  public sortBy(value: "az" | "za" | "lohi" | "hilo") {
    cy.get(this.sortSelect).select(value)
  }

  public cartBadge() {
    return cy.get(this.cartBadgeSel)
  }
}
