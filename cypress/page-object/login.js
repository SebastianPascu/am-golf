import { BackendActions } from "../integration/am-golf-backend/be-actions.js";
import { Buttons } from "../support/selectors/buttons.js"
import { CheckBoxes } from "../support/selectors/check-boxes.js";
import { Fields } from "../support/selectors/fields.js"
import { Links } from "../support/selectors/links.js";
import { Messages } from "../support/selectors/messages.js";
import { PageElements } from "../support/selectors/page-elements.js";
import { ElementVisibility } from "./shared/element-is-visible.js";
import { FieldValidator } from "./shared/field-is-empty.js";

const fieldValidator = new FieldValidator();
const elementVisibility = new ElementVisibility();
const backendAction = new BackendActions();

export class Login {
    constructor() {

    }

    navigateToBaseUrl() {
        cy.clearCookies();
        cy.visit('/');
    }

    selectLogin() {
        Buttons.login().click();
    }

    updateLoginForm(username, password) {
        Fields.loginEmail().type(username);
        Fields.loginPassword().type(password);

        fieldValidator.verifyFieldIsNotEmpty(Fields.loginEmail());
        fieldValidator.verifyFieldIsNotEmpty(Fields.loginPassword());
    }

    submitLogin() {
        Buttons.submitLogin().click({ force: true });
    }

    verifyFailedLogin() {
        Messages.loginError().should('be.visible');
        cy.fixture('appMessages').then((message) => {
            Messages.loginError().should('contain', message.loginErrorMessage);
        })
        backendAction.auth();
    }

    verifyLoginFormElements() {
        elementVisibility.verifyElementIsVisible(Fields.loginEmail());
        elementVisibility.verifyElementIsVisible(Fields.loginPassword());
        elementVisibility.verifyElementIsVisible(Links.forgotPassword());
        elementVisibility.verifyElementIsVisible(Buttons.submitLogin());
        elementVisibility.verifyElementIsVisible(CheckBoxes.keepMeLoggedInCheckBox());
        elementVisibility.verifyElementIsVisible(Links.register());
    }

    verifyLoginFormRequiredField() {
        Messages.emailMandatoryMessage().should('be.visible');
        cy.fixture('appMessages').then((mandatoryMessage) => {
            Messages.emailMandatoryMessage().should('contain', mandatoryMessage.emailMandatoryMessage);
        })
    }

    verifySuccessfullyLoggedIn() {
        PageElements.welcomeHeader1().should('contain', 'Hi').and('be.visible');
        cy.fixture('appMessages').then((message) => {
            PageElements.welcomeHeader2().should('contain', message.welcomeMessage).and('be.visible');
        })
    }

    loginOnBackEnd() {
        backendAction.auth();
    }
}