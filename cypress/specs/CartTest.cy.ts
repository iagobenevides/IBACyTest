import { LoginPage } from "@/support/pages/LoginPage"
import { users } from "@/fixtures/users"
import { products } from "@/fixtures/products"
import { ProductPage } from "@/support/pages/ProductPage"
import { HeaderBarComponents } from "@/support/components/HeaderBarComponents"
import { CartPage } from "@/support/pages/CartPage"

describe("Validar tela do Carrinho", () => {
  const login = new LoginPage()
  const page = new ProductPage()
  const header = new HeaderBarComponents()
  const cart = new CartPage()

  beforeEach(() => {
    const user = users.standard
    login.login(user.username, user.password)
  })

  it("Renderizar item adicionado corretamente no carrinho", () => {
    const product = Cypress._.sample(products)!
    page.addToCartByName(product.name)
    header.openCart()
    cart.items().should("have.length", 1)

    cart.items().each(($el) => {
      expect(cart.getName($el)).to.eq(product.name)
      expect(cart.getPrice($el)).to.eq(`${product.price.toFixed(2)}`)
      expect(cart.getQuantity($el)).to.eq("1")
    })
  })

  it("Remover item diretamente pelo carrinho", () => {
    const product = Cypress._.sample(products)!
    page.addToCartByName(product.name)
    header.openCart()

    cart.removeByName(product.name)
    cart.items().should("have.length", 0)
  })

  it("Voltar para a loja ao clicar em 'Continue Shopping'", () => {
    const product = Cypress._.sample(products)!
    page.addToCartByName(product.name)
    header.openCart()
    cart.continueShopping()
    cy.url().should("include", "/inventory.html")
  })

  it("Prosseguir para checkout", () => {
    const product = Cypress._.sample(products)!
    page.addToCartByName(product.name)
    header.openCart()
    cart.checkout()
    cy.url().should("include", "/checkout-step-one.html")
  })
})
