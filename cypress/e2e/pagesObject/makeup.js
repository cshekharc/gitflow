class Makeup {
    clickonMakeupTab() {
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
            .contains('Makeup')
            .click()
    }

    validateNumberofProducts() {
        cy.get('.fixed_wrapper .prdocutname').should('have.length', 6)
    }

    validateCategoryAvailable() {
        cy.get('.col-md-2.col-sm-2.col-xs-6.align_center').should('have.length', 6)
    }

}

export default Makeup