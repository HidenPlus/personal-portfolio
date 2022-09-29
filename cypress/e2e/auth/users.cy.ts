// TODO: Fix this test
describe("Users Testing Auth Page", () => {
  it("Should open modal on press create user button and close it", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get("input[name=email]").type("testing@cypress.com")
    cy.get("input[name=password]").type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(5000)
    cy.get("button").contains("Create").click()
    cy.get('div[role="dialog"]').should("be.visible")
    cy.get("#close-modal").click()
    cy.get('div[role="dialog"]').should("not.be.visible")
  })

  it("Should open modal edit on press edit row and close it", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get("input[name=email]").type("testing@cypress.com")
    cy.get("input[name=password]").type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(3000)
    cy.get("tr > td").contains("unactive@cypress.com").click()
    cy.get('div[role="dialog"]').should("be.visible")
    cy.get("#close-modal").click()
    cy.get('div[role="dialog"]').should("not.be.visible")
  })

  it("Should open modal edit on testingregister19815@hotmail.com edit name and check if update", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get("input[name=email]").type("testing@cypress.com")
    cy.get("input[name=password]").type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(3000)
    cy.get("tr > td").contains("testingregister19815@hotmail.com").click()
    const randomName = Math.random().toString(36).substring(7)
    cy.get("input[name=name]").clear().type(randomName)
    cy.get("#update-form-button").click()
    cy.wait(3000)
    cy.get("#cancel-form-button").click()
    cy.get("tr > td").contains(randomName).should("be.visible")
  })

  it("Should ACTIVATE the testingregister19815@hotmail.com user", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get("input[name=email]").type("testing@cypress.com")
    cy.get("input[name=password]").type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(3000)
    cy.get("input[switch-email='testingregister19815@hotmail.com']").click({ force: true })
    cy.reload()
    cy.get("input[switch-email='testingregister19815@hotmail.com']").should(
      "have.attr",
      "aria-checked",
      "true"
    )
  })

  it("Should DEACTIVATE the testingregister19815@hotmail.com user", () => {
    cy.on("uncaught:exception", (err) => {
      if (err.name.includes("RedirectError")) {
        return false
      }
      return true
    })
    cy.visit("/auth/login")
    cy.get("input[name=email]").type("testing@cypress.com")
    cy.get("input[name=password]").type("testingcypress")
    cy.get("#login-form-button").click()
    cy.wait(3000)
    cy.get("input[switch-email='testingregister19815@hotmail.com']").click({ force: true })
    cy.reload()
    cy.get("input[switch-email='testingregister19815@hotmail.com']").should(
      "have.attr",
      "aria-checked",
      "false"
    )
  })
})
