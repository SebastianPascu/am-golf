'use strict'

export const Buttons = {
    "login" : () => cy.get('header > div > a:nth-child(1)'),
    "register" : () => cy.get('header > div > a:nth-child(2)'),
    "submitLogin" : () => cy.get('[data-test-id=login]'),
    "addEvent": () => cy.contains('Add Event'),
    "saveEvent": () => cy.get('button > span').contains('Save'),
    "createEvent": () => cy.xpath('//button[2]/span[1]')
}