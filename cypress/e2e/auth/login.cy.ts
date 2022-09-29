describe("Check login process", () => {
  it("Login with valid credentials", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get('input[type="email"').type("testing@cypress.com")
    cy.get('input[type="password"').type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(3000)
    cy.url().should("eq", "http://localhost:3000/auth/admin/users")
  })

  it("Login with invalid credentials", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get('input[type="email"').type("testingnon@cypress.com")
    cy.get('input[type="password"').type("testingcypressnonexist")
    cy.get("#login-form-button").click()
    cy.wait(5000)
    cy.url().should("includes", "http://localhost:3000/auth/login")
    cy.get("div[role=alertdialog]").should("be.visible")
  })

  it("Login with inactive user", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get('input[type="email"').type("unactive@cypress.com")
    cy.get('input[type="password"').type("unactivecypress")
    cy.get("#login-form-button").click()
    cy.wait(5000)
    cy.url().should("includes", "http://localhost:3000/auth/login")
    cy.get("div[role=alertdialog] > div").should(($el) => {
      expect($el.text()).to.be.oneOf([
        "Sorry, this user is inactiveOk",
        "Lo siento, este usuario está inactivoOk",
      ])
    })
  })
})
