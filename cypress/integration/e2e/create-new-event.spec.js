const { CreateEvent } = require("../../page-object/create-new-event.js");
const { Login } = require("../../page-object/login.js");

const login = new Login();
const createEvent = new CreateEvent();

before(() => {
    login.loginOnBackEnd();
    // login.navigateToBaseUrl();
    // login.selectLogin();
    // login.updateLoginForm(Cypress.env('email'), Cypress.env('password'));
    // cy.xpath('/html/body/div[2]/div[2]/div/div/div[2]/div[2]/form/div/div[5]/div/label/span[1]/span[1]/input').check();
    // cy.wait(1000);
    // login.submitLogin();
    // cy.wait(5000);
})

describe('Verify admin is able to create a new event with only mandatory fields', () => {
    it('should access the organization page and select Events tab', () => {
        cy.visit('/am.golf/organizations.amg.html');
        cy.fixture('organizations').then((organization) => {
            createEvent.selectOrganization(organization.assignedOrganizationName);
        });
        createEvent.selectorganizationTab('Events');
    })

    it('should select the Add Events button', () => {
        createEvent.selectAddEvent();
    })

    it('should fill in the Create Event form only the Event Name', () => {
        createEvent.updateCreateEventForm();
    })

    it('should select Save and confirm the Create pop-up', () => {
        createEvent.selectSaveEvent();
        createEvent.confirmCreateEventPopUp();
    })

    it('should verify that the save confirmation message appears', () => {
        createEvent.verifySaveEventConfirmationMessage();
        cy.wait(5000);
    })

    // it('Should fail the log in with incorect email and incorect password', () => {
    //     cy.fixture('userDetails').then((user) => {
    //         login.updateLoginForm(user.invalidEmail, user.invalidPassword);
    //     });
    //     login.submitLogin();
    //     login.verifyFailedLogin();
    // })

    // it('Should fail the log in with incorect email and corect password', () => {
    //     cy.fixture('userDetails').then((user) => {
    //         login.updateLoginForm(user.invalidEmail, user.password);
    //     });
    //     login.submitLogin();
    //     login.verifyFailedLogin();
    // })

    // it('Should fail the log in with corect email and incorect password', () => {
    //     cy.fixture('userDetails').then((user) => {
    //         login.updateLoginForm(user.email, user.invalidPassword);
    //     });
    //     login.submitLogin();
    //     login.verifyFailedLogin();
    // })
})

// describe('Verify login form elements visibility', () => {
//     it('Following elements should be displayed: Email, Password, Forgot passwrod?, Login - button, Keep me logged in on this device - checkbox, Register - link', () => {
//         login.verifyLoginFormElements();
//     })
// })

// describe('Verify login form elements validation', () => {
//     it('Should not be able to login with empty fields', () => {
//         login.submitLogin();
//         login.verifyFailedLogin();
//     })

//     it('Should be mandatory the email field', () => {
//         login.submitLogin();
//         login.verifyLoginFormRequiredField();
//     })
// })