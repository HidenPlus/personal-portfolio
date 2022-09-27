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
    cy.get('div[role="button"').click()
    cy.wait(3000)
    cy.url().should("eq", "http://localhost:3000/auth")
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
    cy.get('div[role="button"').click()
    cy.wait(5000)
    cy.url().should("includes", "http://localhost:3000/auth/login")
    cy.get("div[role=alertdialog]").should("be.visible")
  })
})
