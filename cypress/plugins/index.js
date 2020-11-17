/// <reference types="cypress" />

const path = require('path');
const fs = require('fs-extra');

// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve(
    'cypress/config',
    `cypress.PROD.json`
  ); //${file}
  return fs.readJson(pathToConfigFile);
}


module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  const file = config.env.configFile;

  return getConfigurationByFile(file);
}
