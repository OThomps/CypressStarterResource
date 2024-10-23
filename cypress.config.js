const { defineConfig } = require("cypress");
const getCompareSnapshotsPlugin = require('cypress-visual-regression/dist/plugin');

const environments = {
  dev: {
    baseUrl: "https://www.saucedemo.com/",
  },
  qa: {
    baseUrl: "https://www.saucedemo.com/",
  },
  prod: {
    baseUrl: "https://www.saucedemo.com/"
  },
};

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      getCompareSnapshotsPlugin(on, config);
      
      // implement node event listeners here
      const environment = config.env.environment || 'qa'
      
      // Load environment-specific settings
      const environmentConfig = environments[environment]
      
      if (!environmentConfig) {
        throw new Error(`Unknown environment: ${environment}. Valid environments are: ${Object.keys(environments).join(', ')}`)
      }
      
      // Merge configs
      config.baseUrl = environmentConfig.baseUrl
      config.env = { ...config.env, ...environmentConfig }
      
      return config;
    },
    // Combine spec patterns if needed
    specPattern: [
      'cypress/e2e/**/*.cy.js',
      'cypress/e2e/**/*.visual.cy.js'
    ],
    baseUrl: 'https://www.saucedemo.com/',
    env: {
      type: 'actual',
    },
  },
  env: {
    environment: 'qa' // default environment
  }
});
