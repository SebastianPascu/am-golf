'use strict'

export const Buttons = {
    "login" : () => cy.get('header > div > a:nth-child(1)'),
    "register" : () => cy.get('header > div > a:nth-child(2)'),
    "submitLogin" : () => cy.get('[data-test-id=login]')
}