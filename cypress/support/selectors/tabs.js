export const Tabs = {
    "players": () => cy.get('[data-test-id=menu-Players] > a').first(),
    "clubsAndOrganizations": () => cy.contains('Clubs and Organizations')
}