class Login {

    clickonLoginPage(){
        cy.get('#customer_menu_top').click()
        // cy.get('[title="Continue"]').click()
    }
    userLogin(loginName,password) {
        cy.get('#loginFrm_loginname').type(loginName)
        cy.get('#loginFrm_password').type(password)
        cy.get('[title="Login"]').click()
    }

    blankInfoClick(){
        cy.get('[title="Login"]').click()
    }

    validateForgotPasswordLink(){
        cy.get('[href="https://automationteststore.com/index.php?rt=account/forgotten/password"]').should('be.visible')
    }

    errorMessageforInvalidCreds(){
        cy.get('.alert.alert-error.alert-danger').should('include.text', 
        'Error: Incorrect login or password provided.')
    }
}

export default Login