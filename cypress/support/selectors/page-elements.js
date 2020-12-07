export const PageElements = {
    "welcomeHeader1" : () => cy.get('main > div > div > h1'),
    "welcomeHeader2" : () => cy.get('main > div > div > h2'),
    "playerPageHeader": () => cy.get('main>div>div>div>div > h3'),
    "players": () => cy.get('[data-test-id=playersList]'),
    "infiniteScroll": () => cy.get('#main > main > div > div._1xAuF > div > div:nth-child(2) > div > div > div:nth-child(21)'),
    "organizationsList": () => cy.get('[data-test-id=eventsList]'),
    "createEventPage": () => cy.get('#main > div > div > div > div> h5'),
    "createEventPopUp": () => cy.get('h2 > span').contains('Create event')
}