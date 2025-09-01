import { LoginPage } from "@/support/pages/LoginPage"
import { HeaderBarComponents } from "@/support/components/HeaderBarComponents"
import { SidebarComponents } from "@/support/components/SidebarComponents"
import { users } from "@/fixtures/users"

describe("Validar página de Login", () => {
  const loginPage = new LoginPage()

  it("Login com usuário válido", () => {
    const user = users.standard
    loginPage.login(user.username, user.password)
    cy.url().should("include", "/inventory.html")
  })

  it("Login com usuário bloqueado", () => {
    const user = users.lockedOut
    loginPage.login(user.username, user.password)
    loginPage.getErrorMessage().should("be.visible").and("have.text", "Epic sadface: Sorry, this user has been locked out.")
    cy.url().should("not.include", "/inventory.html")
  })

  it("Login com senha inválida", () => {
    const user = users.standard
    loginPage.login(user.username, "wrong_password")
    loginPage.getErrorMessage().should("be.visible").and("have.text", "Epic sadface: Username and password do not match any user in this service")
    cy.url().should("not.include", "/inventory.html")
  })

  it("Login sem preencher usuário", () => {
    const user = users.standard
    loginPage.login("", user.password)
    loginPage.getErrorMessage().should("be.visible").and("have.text", "Epic sadface: Username is required")
    cy.url().should("not.include", "/inventory.html")
  })

  it("Login sem preencher senha", () => {
    const user = users.standard
    loginPage.login(user.username, "")
    loginPage.getErrorMessage().should("be.visible").and("have.text", "Epic sadface: Password is required")
    cy.url().should("not.include", "/inventory.html")
  })

   it("Logout com sucesso", () => {
    const header = new HeaderBarComponents()
    const sidebar = new SidebarComponents()
    const user = users.standard

    loginPage.login(user.username, user.password)

    header.openMenu()
    sidebar.clickLogout()

    cy.url().should("include", "/index.html")
    cy.get("#login-button").should("be.visible")
  })
})
