class HomePage{
    clickOnTab(tabLink, tabName){
        cy.get(`[routerlink="${tabLink}"]`).contains(tabName).click()
    }
}
export const homePage = new HomePage();