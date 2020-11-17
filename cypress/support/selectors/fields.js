'use strict'

export const Fields = {
    "loginEmail" : () => cy.get('[data-test-id=username]'),
    "loginPassword" : () => cy.get('[data-test-id=password]')
}