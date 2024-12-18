import Login from "./pageObject/login";

const login = new Login()

describe('login tests',()=>{
    it('login validations',()=>{
        //1. visit the login page
        cy.visitApp()
        //2. landing on login page
        login.clickonLoginPage()
        // validating the forgot password link
        login.validateForgotPasswordLink()
        // entering input to login field
        login.userLogin('Velocity19augbatch', 'Velocity19')
        // validating the home page
        cy.get('.top.menu_account .menu_text').eq(0).should('include.text', 'Welcome back')
    })

    it('invalid creds',()=>{
        //1. visit the login page
        cy.visitApp()
        //2. landing on login page
        login.clickonLoginPage()
        // validating the forgot password link
        login.validateForgotPasswordLink()
        
        login.blankInfoClick()

        login.errorMessageforInvalidCreds()
    })
})
