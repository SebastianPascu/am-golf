export const Messages = {
    "loginError" : () => cy.get('[data-test-id=error]'),
    "emailMandatoryMessage" : () => cy.get('[data-test-id=username] :nth-child(3)'),
    "successfullySavedEventMessage": () => cy.get('#client-snackbar')
}