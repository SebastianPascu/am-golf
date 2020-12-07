/// <reference types="cypress" />

const { Login } = require("../../page-object/login");

const login = new Login();

beforeEach(() => {
    cy.viewport(1920, 1080)
    login.navigateToBaseUrl();
    login.selectLogin();
})

describe('Verify login flows', () => {
    it('Should successfully log in with correct login email and password', () => {
        login.updateLoginForm(Cypress.env('email'), Cypress.env('password'));
        cy.screenshot();
        login.submitLogin();
        cy.wait(5000);
        login.verifySuccessfullyLoggedIn();
    })

    it('Should fail the log in with incorect email and incorect password', () => {
        cy.fixture('userDetails').then((user) => {
            login.updateLoginForm(user.invalidEmail, user.invalidPassword);
        });
        login.submitLogin();
        login.verifyFailedLogin();
    })

    it('Should fail the log in with incorect email and corect password', () => {
        cy.fixture('userDetails').then((user) => {
            login.updateLoginForm(user.invalidEmail, user.password);
        });
        login.submitLogin();
        login.verifyFailedLogin();
    })

    it('Should fail the log in with corect email and incorect password', () => {
        cy.fixture('userDetails').then((user) => {
            login.updateLoginForm(user.email, user.invalidPassword);
        });
        login.submitLogin();
        login.verifyFailedLogin();
    })
})

describe('Verify login form elements visibility', () => {
    it('Following elements should be displayed: Email, Password, Forgot passwrod?, Login - button, Keep me logged in on this device - checkbox, Register - link', () => {
        login.verifyLoginFormElements();
    })
})

describe('Verify login form elements validation', () => {
    it('Should not be able to login with empty fields', () => {
        login.submitLogin();
        login.verifyFailedLogin();
    })

    it('Should be mandatory the email field', () => {
        login.submitLogin();
        login.verifyLoginFormRequiredField();
    })
})