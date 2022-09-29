describe("Check register process", () => {
  it("Register with valid credentials", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/signup")
    const random = Math.floor(Math.random() * 100000)
    cy.get('input[type="email"').type(`testingregister${random}@hotmail.com`)
    cy.get('input[type="password"').type("testingregister")
    cy.get("#register-form-button").click()
    cy.wait(3000)
    cy.url().should("include", "http://localhost:3000/")
  })
})
