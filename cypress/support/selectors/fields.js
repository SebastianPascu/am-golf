'use strict'

export const Fields = {
    "loginEmail" : () => cy.get('[data-test-id=username]'),
    "loginPassword" : () => cy.get('[data-test-id=password]'),
    "eventName": () => cy.get('[data-test-id=eventNameField]'),
    "eventType": () => cy.get('[data-test-id=eventTypeField]'),
}