const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on("file:preprocessor", browserify.default(config));

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
};

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 1920,
  viewportHeight: 1080,
  screenshotOnRunFailure:	true,
  video:true,
  screenshotsFolder: 'cypress/screenshots',
  videosFolder: 'cypress/videos',

  e2e: {
    baseUrl: 'https://telnyx.com/',
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


