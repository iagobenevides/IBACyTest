import { LoginPage } from "@/support/pages/LoginPage"
import { ProductPage } from "@/support/pages/ProductPage"
import { HeaderBarComponents } from "@/support/components/HeaderBarComponents"
import { CartPage } from "@/support/pages/CartPage"
import { CheckoutStepOnePage } from "@/support/pages/CheckoutStepOnePage"
import { CheckoutStepTwoPage } from "@/support/pages/CheckoutStepTwoPage"
import { CheckoutCompletePage } from "@/support/pages/CheckoutCompletePage"
import { users } from "@/fixtures/users"
import { products } from "@/fixtures/products"
import { faker } from "@faker-js/faker"

describe("Fluxo de Compras", () => {
  const login = new LoginPage()
  const product = new ProductPage()
  const header = new HeaderBarComponents()
  const cart = new CartPage()
  const step1 = new CheckoutStepOnePage()
  const step2 = new CheckoutStepTwoPage()
  const complete = new CheckoutCompletePage()

  beforeEach(() => {
    login.login(users.standard.username, users.standard.password)
  })

  it("Realizar fluxo de compras completo", () => {
    const item = Cypress._.sample(products)!
    product.addToCartByName(item.name)
    header.openCart()
    cart.checkout()

    step1.fillFirstName(faker.person.firstName())
    step1.fillLastName(faker.person.lastName())
    step1.fillPostalCode(faker.location.zipCode())
    step1.continue()

    step2.finish()

    complete.getContainer().should("be.visible")
    complete.getHeader().should("contain.text", "THANK YOU FOR YOUR ORDER")
    complete.getMessage().should("contain.text", "Your order has been dispatched")
    complete.getImage().should("be.visible")
  })


  it("Tentar prosseguir sem preencher nenhum campo", () => {
    const item = Cypress._.sample(products)!
    product.addToCartByName(item.name)
    header.openCart()
    cart.checkout()

    step1.continue()
    step1.getError().should("contain.text", "First Name is required")
  })

  it("Tentar prosseguir preenchendo apenas o nome", () => {
    const item = Cypress._.sample(products)!
    product.addToCartByName(item.name)
    header.openCart()
    cart.checkout()

    step1.fillFirstName(faker.person.firstName())
    step1.continue()

    step1.getError().should("contain.text", "Last Name is required")
  })

  it("Tentar prosseguir sem preencher código postal", () => {
    const item = Cypress._.sample(products)!
    product.addToCartByName(item.name)
    header.openCart()
    cart.checkout()

    step1.fillFirstName(faker.person.firstName())
    step1.fillLastName(faker.person.lastName())
    step1.continue()

    step1.getError().should("contain.text", "Postal Code is required")
  })
})
