describe('Verify login flows', () => {
    it('Should successfully log in with correct login email and password', () => {
        amGolfLoginPage.updateLoginForm(Cypress.env('email'), Cypress.env('password'));
        cy.screenshot();
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifySuccessfullyLoggedIn();
    })

    it('Should fail the log in with incorect email and incorect password', () => {
        cy.fixture('userDetails').then((user) => {
            amGolfLoginPage.updateLoginForm(user.invalidEmail, user.invalidPassword);
        });
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifyFailedLogin();
    })

    it('Should fail the log in with incorect email and corect password', () => {
        cy.fixture('userDetails').then((user) => {
            amGolfLoginPage.updateLoginForm(user.invalidEmail, user.password);
        });
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifyFailedLogin();
    })

    it('Should fail the log in with corect email and incorect password', () => {
        cy.fixture('userDetails').then((user) => {
            amGolfLoginPage.updateLoginForm(user.email, user.invalidPassword);
        });
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifyFailedLogin();
    })
})

describe('Verify login form elements visibility', () => {
    it('Following elements should be displayed: Email, Password, Forgot passwrod?, Login - button, Keep me logged in on this device - checkbox, Register - link', () => {
        amGolfLoginPage.verifyLoginFormElements();
    })
})

describe('Verify login form elements validation', () => {
    it('Should not be able to login with empty fields', () => {
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifyFailedLogin();
    })

    it('Should be mandatory the email field', () => {
        amGolfLoginPage.submitLogin();
        amGolfLoginPage.verifyLoginFormRequiredField();
    })
})