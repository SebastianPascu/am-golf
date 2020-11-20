/// <reference types="cypress" />

const { Login } = require("../../page-object/login");
const { Players } = require("../../page-object/players");
const { Buttons } = require("../../support/selectors/buttons");
const { CheckBoxes } = require("../../support/selectors/check-boxes");
const { Fields } = require("../../support/selectors/fields");
const { Links } = require("../../support/selectors/links");

const amGolfLoginPage = new Login();
const playersPage = new Players();

beforeEach(() => {
    amGolfLoginPage.loginOnBackEnd();
    amGolfLoginPage.navigateToBaseUrl();
})

describe('Players tab accesability', () => {
    it('Verify Players page can be accessed by selecting Players tab', () => {
        amGolfLoginPage.loginOnBackEnd();
        amGolfLoginPage.navigateToBaseUrl();
        playersPage.selectPlayersTab();
    })

    it('Verify Players page can be accessed by selecting Players tab', () => {
        amGolfLoginPage.loginOnBackEnd();
        amGolfLoginPage.navigateToBaseUrl();
        playersPage.selectPlayersTab();
        expect(true).to.eq(false);
    })
})


afterEach(() => {
    cy.clearCookies();
})