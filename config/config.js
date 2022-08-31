const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  return config;
}

module.exports = defineConfig({
    screenshotOnRunFailure:	true,
    video:true,
    defaultCommandTimeout: 6000,
    execTimeout: 5000,
    taskTimeout: 5000,
    pageLoadTimeout: 30000,
    requestTimeout: 5000,
    responseTimeout: 30000,
    screenshotsFolder: 'cypress/screenshots',
    videosFolder: 'cypress/videos',

  e2e: {
    specPattern: "**/*.feature",
    supportFile: false,
    setupNodeEvents,
    devServer: {
      delay: 500,
      force404: false,
      ignore: (xhr) => {
          return true;
    },
  },
  },
});