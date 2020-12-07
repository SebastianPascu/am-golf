export const OrganizationTabs = {
    "admins": () => cy.get('[data-test-id=tabbutton-Admins]'),
    "about": () => cy.get('[data-test-id=tabbutton-About]'),
    "community": () => cy.get('[data-test-id=tabbutton-Community]'),
    "events": () => cy.get('[data-test-id=tabbutton-Events]'),
    "members": () => cy.get('[data-test-id=tabbutton-Members]'),
    "membership": () => cy.get('[data-test-id=tabbutton-Memberships]')
}