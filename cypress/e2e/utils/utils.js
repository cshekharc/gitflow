class Utils {

    visit() {
        cy.visit('/');
    }
    generateRandomName() {
        return `${Math.random().toString(36).substring(7)}`;
    }

    // generateRandomPhone() {
    //     return `1${Math.floor(100000000000 + Math.random() * 100000000000)}`;
    // }

    waitForElement(selector, timeout = 10000) {
        cy.get(selector, { timeout }).should('be.visible');
    }
}

export const utils = new Utils();
