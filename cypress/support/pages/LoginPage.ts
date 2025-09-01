export class LoginPage {
    protected path = "/"
    private usernameInput = '[data-test="username"]'
    private passwordInput = '[data-test="password"]'
    private loginButton = '#login-button'
    private errorMessage = '[data-test="error"]'
  
    public visit() {
      cy.visit(this.path)
    }
  
    /* MÉTODOS INTERNOS */
    private typeUsername(username: string) {
      cy.get(this.usernameInput).clear()
      if (username) {
        cy.get(this.usernameInput).type(username)
      }
    }
  
    private typePassword(password?: string) {
      cy.get(this.passwordInput).clear()
      if (password) {
        cy.get(this.passwordInput).type(password, { log: false })
      }
  }
  
    private clickLogin() {
      cy.get(this.loginButton).click()
    }
  
    /* MÉTODOS EXTERNOS */
    public login(username: string, password: string) {
      this.visit()
      this.typeUsername(username)
      this.typePassword(password)
      this.clickLogin()
    }
  
    public getErrorMessage() {
      return cy.get(this.errorMessage)
    }
  }
  