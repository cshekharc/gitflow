class Books{
    clickonBooksTab() {
        cy.get('[href*="https://automationteststore.com/index.php?rt=product/category"]')
            .contains('Books')
            .click()
    }

    validateOutofStockBooks(){
        cy.get('.pricetag.jumbotron .nostock').should('have.class', 'nostock')
    }

    selectBookInstock(booksinstock){
        cy.get('.fixed_wrapper .prdocutname').each((ele) => {
            let productName = ele.text()
            if (productName === booksinstock) {
                cy.wrap(ele).click()
            }
        })
    }
}

export default Books