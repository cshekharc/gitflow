const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'AutoTestReport',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    videoOnFailOnly: true
  },
  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      // implement node event listeners here
    },
    retries:{
      runMode: 1,
      openMode:1
    },
    env:{
      userName: "velocity11",
      password: "velocity11"
    },
    baseUrl: "https://automationteststore.com/",
    watchForFileChanges: false,
    defaultCommandTimeout: 10000,
    video: false,
    experimentalRunAllSpecs: true,
  },
});
