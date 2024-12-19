class DoctorPage {

    clickAddDoctor() {
        cy.get('.specialization-types .e-normal').click();
    }

    fillDoctorDetails({ name, phone, email, edu}) {
        cy.get('#Name .doctor-name').type(name);
        cy.get('#DoctorMobile').type(phone);
        cy.get('[name="Email"]').type(email);
        cy.get('[name="Education"]').type(edu);
    }

    saveDoctor() {
        cy.get('.button-container button.e-primary').click({force: true});
    }

    validateNameError(){
        cy.get('#Name-info').should('include.text', 'Enter valid name')
    }

    clickOnDoctor(){
        cy.get('.e-cards.specialist-item').last().click({force : true})
    }

    validateDoctorName(doctorName){
        cy.get('.basic-detail .name').should('include.text', doctorName)
    }
}

export const doctorPage = new DoctorPage();
