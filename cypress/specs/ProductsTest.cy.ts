import { LoginPage } from "@/support/pages/LoginPage"
import { users } from "@/fixtures/users"
import { ProductPage } from "@/support/pages/ProductPage"
import { products, byName } from "@/fixtures/products"
import { HeaderBarComponents } from "@/support/components/HeaderBarComponents"
import { SidebarComponents } from "@/support/components/SidebarComponents"

describe("Validar tela de Produtos", () => {
  const login = new LoginPage()
  const page = new ProductPage()
  const header = new HeaderBarComponents()
  const sidebar = new SidebarComponents()

  beforeEach(() => {
    const user = users.standard
    login.login(user.username, user.password)
  })

 it("Renderizar todos os produtos com nome, preço e imagem corretos", () => {
  page.cards().should('have.length', products.length)

  page.cards().each(($el) => {
    const name = page.getName($el)
    const price = page.getPrice($el)
    const img = page.getImageFilename($el)

    const expected = byName[name]

    expect(expected, `Produto "${name}" não encontrado nos dados`).to.not.be.undefined
    expect(price).to.eq(`$${expected.price.toFixed(2)}`)
    expect(img).to.eq(expected.imageFile)
  })
})


  it("Adicionar item ao carrinho", () => {
    page.addToCartByName(byName["Sauce Labs Backpack"].name)
    page.cartBadge().should("have.text", "1")
  })

  it("Remover item do carrinho", () => {
    page.addToCartByName(byName["Sauce Labs Bike Light"].name)
    page.cartBadge().should("have.text", "1")
    page.removeFromCartByName(byName["Sauce Labs Bike Light"].name)
    page.cartBadge().should("not.exist")
  })

  it("Adicionar múltiplos itens e validar contador", () => {
    page.addToCartByName(byName["Sauce Labs Backpack"].name)
    page.addToCartByName(byName["Sauce Labs Bolt T-Shirt"].name)
    page.addToCartByName(byName["Sauce Labs Fleece Jacket"].name)
    page.cartBadge().should("have.text", "3")
  })

  it("Ir para o carrinho pelo ícone do header", () => {
    page.addToCartByName(byName["Sauce Labs Onesie"].name)
    header.openCart()
    cy.url().should("include", "/cart.html")
    cy.contains(".cart_item", "Sauce Labs Onesie").should("be.visible")
  })

  it("Ordenação por nome (A → Z)", () => {
    page.sortBy("az")
    page.cards()
      .find(".inventory_item_name")
      .then($els => [...$els].map(e => e.textContent?.trim() || ""))
      .should(names => {
        const sorted = [...names].sort((a, b) => a.localeCompare(b))
        expect(names).to.deep.equal(sorted)
      })
  })

  it("Ordenação por preço (Low → High)", () => {
    page.sortBy("lohi")
    page.cards()
      .find(".inventory_item_price")
      .then($els => [...$els].map(e => Number(e.textContent?.replace("$", ""))))
      .should(prices => {
        const sorted = [...prices].sort((a, b) => a - b)
        expect(prices).to.deep.equal(sorted)
      })
  })

  it("Reset App State limpa o carrinho", () => {
    page.addToCartByName(byName["Sauce Labs Bolt T-Shirt"].name)
    header.openMenu()
    sidebar.clickResetAppState()
    page.cartBadge().should("not.exist")
  })

  it("Abrir detalhes do produto pelo nome", () => {
    page.openDetailsByName(byName["Sauce Labs Backpack"].name)
    cy.url().should("include", "/inventory-item.html")
    cy.contains(".inventory_details_name", "Sauce Labs Backpack").should("be.visible")
  })
})
