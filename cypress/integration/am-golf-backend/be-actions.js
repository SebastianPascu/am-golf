let cook2 = [];

export class BackendActions {
    constructor() {
        this.username = Cypress.env('email');
        this.password = Cypress.env('password');


    }

    auth() {
        cy.request({
            method: 'POST',
            url: Cypress.env('authEndpoint'),
            body: {
                username: this.username,
                password: this.password
            }
        }).then((res) => {
            expect(res.status).to.eq(200);
            cook2 = res.headers['set-cookie'][0];
            const cookieKey = cook2.split('=')[0];
            const cookieValue = cook2.split('=')[1];
            const newCValue = cookieValue.split(';')[0];
            cy.setCookie(cookieKey, newCValue, {
                domain: 'dev.am.golf',
                httpOnly: true,
                path: '/',
                secure: false
            });
        })

    }
}