'use strict';

import { BackendActions } from './be-actions.js';

describe('Players API - AM-GOLF', () => {

  const backendActions = new BackendActions();

  before(() => {
    backendActions.auth();
  });


  it('Fetch all players', () => {
    cy.request({
      method: 'GET',
      url: Cypress.env('playersEndpoint')
    }).then((res) => {
      expect(res.status).to.eq(200);
      expect(res.body).to.haveOwnProperty('total');
      expect(res.body.total).to.eq(2903);
      cy.log(res.body);
    });
  });

});
