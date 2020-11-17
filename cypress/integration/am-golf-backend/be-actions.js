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
            cy.setCookie(cookieKey, cookieValue, {
                domain: 'dev.am.golf',
                httpOnly: true,
                path: '/',
                secure: false
            });
            // cy.log(cy.getCookie('_s_t_'));
            cy.getCookies().should('have.length', 1);
        })

    }

    // verifyIsLoggedIn() {
    //     debugger;
    //     const auth = this.auth();
    //     cy.log(auth);
    //     cy.request({
    //         method: 'HEAD',
    //         url: Cypress.env('homePageEndpoint'),
    //         headers: {
    //             'Cookie': auth
    //         }
    //     }).then((res) => {
    //         debugger;
    //         expect(res.status).to.eq(200);
    //     })
    // }
}