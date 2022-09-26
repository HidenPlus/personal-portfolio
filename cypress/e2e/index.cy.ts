describe("Home Page Testing Spanish", () => {
  beforeEach(() => {
    cy.visit("/es")
  })

  it("Has h1 and text", () => {
    cy.get("h1").should(($h1) => {
      expect($h1).to.contain("Hola, mi nombre es")
    })
  })

  it("Has h2 and text", () => {
    cy.get("h2").should(($h2) => {
      expect($h2).to.contain("Yojhan Atuesta")
    })
  })

  it("Has h3 and text", () => {
    cy.get("h3").should(($h3) => {
      expect($h3).to.contain("Construyo ideas, a través del código")
    })
  })

  it("Has description(p) and text", () => {
    cy.get("p").should(($p) => {
      expect($p).to.contain("Soy un desarrollador de software dedicado al entendimiento de")
    })
  })
})
