export const PageElements = {
    "welcomeHeader1" : () => cy.get('main > div > div > h1'),
    "welcomeHeader2" : () => cy.get('main > div > div > h2'),
    "playerPageHeader": () => cy.get('main>div>div>div>div > h3'),
    "players": () => cy.get('[data-test-id=playersList]'),
    "infiniteScroll": () => cy.get('#main > main > div > div._1xAuF > div > div:nth-child(2) > div > div > div:nth-child(21)'),
    "drafPlayer": () => cy.get('#main > main > div > div._1xAuF > div > div:nth-child(2) > div > div > div:nth-child(7) > div > div._2eY6L._3_uEl._1cu_I.col-md-4.col-sm-4.col-xs-7 > div > a')
}