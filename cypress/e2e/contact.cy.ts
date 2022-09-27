describe("Contact Page Testing Spanish", () => {
  beforeEach(() => {
    cy.visit("/es/contact")
  })

  it("Has h2 and text", () => {
    cy.get("h2").should(($h2) => {
      expect($h2).to.contain("Contáctame")
    })
  })

  it("Has p and text", () => {
    cy.get("p").should(($p) => {
      expect($p).to.contain(
        "Actualmente estoy en busqueda de nuevas oportunidades enriquecedoras para mi carrera, si tienes alguna propuesta o quieres contactarme, puedes hacerlo a través de cualquiera de las siguientes plataformas."
      )
    })
  })
})

describe("Contact Page Testing English", () => {
  beforeEach(() => {
    cy.visit("/en/contact")
  })

  it("Has h2 and text", () => {
    cy.get("h2").should(($h2) => {
      expect($h2).to.contain("Get In Touch")
    })
  })

  it("Has p and text", () => {
    cy.get("p").should(($p) => {
      expect($p).to.contain(
        "I'm currently looking for new opportunities to enrich my career, if you have any proposal or want to contact me, you can do it through any of the following platforms."
      )
    })
  })
})
